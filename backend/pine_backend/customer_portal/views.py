from rest_framework import viewsets
from .models import CustomerAccount
from .serializers import CustomerAccountSerializer

class CustomerAccountViewSet(viewsets.ModelViewSet):
    queryset = CustomerAccount.objects.all()
    serializer_class = CustomerAccountSerializer