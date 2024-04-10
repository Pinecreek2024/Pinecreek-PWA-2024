# special_offers/views.py
from rest_framework import viewsets
from .models import SpecialOffer
from .serializers import SpecialOfferSerializer

class SpecialOfferViewSet(viewsets.ModelViewSet):
    queryset = SpecialOffer.objects.all()
    serializer_class = SpecialOfferSerializer
