from rest_framework import serializers
from .models import MenuItem

class MenuItemSerializer(serializers.ModelSerializer):
    """
    Serializer for MenuItem model.
    """

    class Meta:
        model = MenuItem
        fields = '__all__'  # Serializes all fields of MenuItem model

# You can add more serializers here for additional models or complex operations
