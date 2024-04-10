# special_offers/serializers.py
from rest_framework import serializers
from .models import SpecialOffer

class SpecialOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecialOffer
        fields = '__all__'  # Serialize all fields
