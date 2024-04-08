# orders/serializers.py
from rest_framework import serializers
from .models import Order, OrderItem
from apps.menu.models import MenuItem  # Adjust this path based on your project structure

class OrderItemSerializer(serializers.ModelSerializer):
    menu_item = serializers.PrimaryKeyRelatedField(queryset=MenuItem.objects.all())

    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'menu_item', 'quantity', 'total_price']
        read_only_fields = ['total_price']

class OrderSerializer(serializers.ModelSerializer):
    orderitems = OrderItemSerializer(many=True, required=False)

    class Meta:
        model = Order
        fields = ['id', 'customer', 'created_at', 'updated_at', 'status', 'total_price', 'orderitems']
        read_only_fields = ['created_at', 'updated_at', 'total_price']

    def create(self, validated_data):
        order_items_data = validated_data.pop('orderitems', [])
        order = Order.objects.create(**validated_data)
        for item_data in order_items_data:
            OrderItem.objects.create(order=order, **item_data)
        order.calculate_total_price()
        return order

    def update(self, instance, validated_data):
        order_items_data = validated_data.pop('orderitems', [])
        order_items = (instance.orderitems).all()
        order_items = list(order_items)
        instance.update(**validated_data)

        for item_data in order_items_data:
            item = order_items.pop(0)
            item.menu_item = item_data.get('menu_item', item.menu_item)
            item.quantity = item_data.get('quantity', item.quantity)
            item.save()
        return instance
