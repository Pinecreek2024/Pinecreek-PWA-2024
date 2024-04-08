# orders/admin.py
from django.contrib import admin
from .models import Order, OrderItem

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer', 'created_at', 'status', 'total_price')
    list_filter = ('status', 'created_at')
    search_fields = ('customer__username', 'customer__email', 'id')
    readonly_fields = ('created_at', 'updated_at', 'total_price')

@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'menu_item', 'quantity', 'total_price')
    list_filter = ('order__status', 'menu_item')
    search_fields = ('order__id', 'menu_item__name')
    readonly_fields = ('total_price',)
