# retail_goods/views.py
from rest_framework import viewsets
from .models import RetailGood
from .serializers import RetailGoodSerializer

class RetailGoodViewSet(viewsets.ModelViewSet):
    queryset = RetailGood.objects.all()
    serializer_class = RetailGoodSerializer
