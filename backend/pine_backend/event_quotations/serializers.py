from rest_framework import serializers
from .models import Event, EventQuotation

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class EventQuotationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventQuotation
        fields = '__all__'