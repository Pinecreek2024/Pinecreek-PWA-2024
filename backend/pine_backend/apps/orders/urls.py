# orders/urls.py
from django.urls import path
from .views import OrderListView, OrderCreateView, OrderDetailView, OrderItemListView, OrderItemDetailView

urlpatterns = [
    path('orders/', OrderListView.as_view(), name='order-list'),
    path('orders/create/', OrderCreateView.as_view(), name='order-create'),
    path('orders/<int:pk>/', OrderDetailView.as_view(), name='order-detail'),
    path('order-items/', OrderItemListView.as_view(), name='orderitem-list'),
    path('order-items/<int:pk>/', OrderItemDetailView.as_view(), name='orderitem-detail'),
    # Add more URL patterns for other order-related views as needed
]
