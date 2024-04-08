# reservations/views.py
from rest_framework import generics
from .models import Reservation
from .serializers import ReservationSerializer

class ReservationListView(generics.ListCreateAPIView):
    """
    API view to list and create reservations.
    """
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

class ReservationDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    API view to retrieve, update, or delete a reservation.
    """
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

# You can add more views here as needed, like views for handling specific queries or custom actions
