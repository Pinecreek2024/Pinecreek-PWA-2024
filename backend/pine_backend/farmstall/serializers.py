# farmstall/serializers.py
from rest_framework import serializers
from .models import FarmstallItem

class FarmstallItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmstallItem
        fields = '__all__'  # Serialize all fields
