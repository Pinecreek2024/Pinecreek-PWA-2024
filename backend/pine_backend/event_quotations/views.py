from rest_framework import viewsets
from .models import Event, EventQuotation
from .serializers import EventSerializer, EventQuotationSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventQuotationViewSet(viewsets.ModelViewSet):
    queryset = EventQuotation.objects.all()
    serializer_class = EventQuotationSerializer