# reservations/serializers.py
from rest_framework import serializers
from .models import Reservation
from django.contrib.auth import get_user_model

User = get_user_model()

class ReservationSerializer(serializers.ModelSerializer):
    """
    Serializer for the Reservation model.
    """
    # Example of a custom field - here we're just displaying the user's username
    user_username = serializers.SerializerMethodField()

    class Meta:
        model = Reservation
        fields = ['id', 'user', 'user_username', 'reservation_time', 'number_of_guests', 'special_requests', 'created_at', 'updated_at', 'status']
        read_only_fields = ['created_at', 'updated_at', 'user_username']

    def get_user_username(self, obj):
        return obj.user.username

    def create(self, validated_data):
        # Custom creation logic if needed
        return Reservation.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # Custom update logic if needed
        instance.reservation_time = validated_data.get('reservation_time', instance.reservation_time)
        instance.number_of_guests = validated_data.get('number_of_guests', instance.number_of_guests)
        instance.special_requests = validated_data.get('special_requests', instance.special_requests)
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance
