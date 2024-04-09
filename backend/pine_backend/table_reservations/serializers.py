from rest_framework import serializers
from .models import Reservation

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ['id', 'customer_name', 'phone_number', 'email', 'reservation_date', 
                  'reservation_time', 'number_of_guests', 'special_requests']  # Include any additional fields
