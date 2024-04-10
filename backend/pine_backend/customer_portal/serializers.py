from rest_framework import serializers
from .models import CustomerAccount

class CustomerAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerAccount
        fields = ['id', 'user', 'phone_number', 'name', 'email']  # Include additional fields