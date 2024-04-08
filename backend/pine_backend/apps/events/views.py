# events/views.py
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Event, EventBooking
from .serializers import EventSerializer, EventBookingSerializer

class EventListView(generics.ListAPIView):
    """
    API view to retrieve a list of events.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventDetailView(generics.RetrieveAPIView):
    """
    API view to retrieve a specific event.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventBookingCreateView(generics.CreateAPIView):
    """
    API view to create a new event booking.
    """
    queryset = EventBooking.objects.all()
    serializer_class = EventBookingSerializer

    def perform_create(self, serializer):
        # You can add additional logic here before saving the booking
        serializer.save()

class EventBookingDetailView(generics.RetrieveAPIView):
    """
    API view to retrieve a specific event booking.
    """
    queryset = EventBooking.objects.all()
    serializer_class = EventBookingSerializer
