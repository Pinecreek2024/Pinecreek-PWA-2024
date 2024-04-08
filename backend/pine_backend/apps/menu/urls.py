# menu/urls.py
from django.urls import path
from .views import MenuItemListView, MenuItemDetailView

urlpatterns = [
    path('items/', MenuItemListView.as_view(), name='menuitem-list'),
    path('item/<int:pk>/', MenuItemDetailView.as_view(), name='menuitem-detail'),
    # Add other URL patterns for your menu app here
]
