from rest_framework import generics
from .models import MenuItem
from .serializers import MenuItemSerializer

class MenuItemListView(generics.ListAPIView):
    """
    API view to retrieve a list of menu items.
    """
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

class MenuItemDetailView(generics.RetrieveAPIView):
    """
    API view to retrieve a specific menu item by ID.
    """
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

# You can add additional views here if needed, such as creating, updating, or deleting menu items.
