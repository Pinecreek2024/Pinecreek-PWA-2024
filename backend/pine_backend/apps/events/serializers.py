# events/serializers.py
from rest_framework import serializers
from .models import Event, EventBooking
from django.contrib.auth import get_user_model

User = get_user_model()

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class EventBookingSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        slug_field='username', 
        queryset=User.objects.all()
    )

    class Meta:
        model = EventBooking
        fields = '__all__'

    def validate(self, data):
        """
        Add custom validation logic here, if necessary.
        """
        # Example: Validate if the event can accept more participants
        if data['event'].max_participants < data['participants']:
            raise serializers.ValidationError("This event cannot accommodate the requested number of participants.")
        return data
