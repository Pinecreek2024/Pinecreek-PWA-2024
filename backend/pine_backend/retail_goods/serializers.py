# retail_goods/serializers.py
from rest_framework import serializers
from .models import RetailGood

class RetailGoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = RetailGood
        fields = '__all__'  # Serialize all fields
