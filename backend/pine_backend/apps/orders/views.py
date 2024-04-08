# orders/views.py
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Order, OrderItem
from .serializers import OrderSerializer, OrderItemSerializer

class OrderListView(generics.ListAPIView):
    """
    API view to retrieve a list of orders.
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderCreateView(generics.CreateAPIView):
    """
    API view to create a new order.
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    API view to retrieve, update, or delete a specific order.
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderItemListView(generics.ListCreateAPIView):
    """
    API view to list and create order items.
    """
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class OrderItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    API view to retrieve, update, or delete a specific order item.
    """
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
