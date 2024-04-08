# reservations/urls.py
from django.urls import path
from .views import ReservationListView, ReservationDetailView

urlpatterns = [
    path('reservations/', ReservationListView.as_view(), name='reservation-list'),
    path('reservations/<int:pk>/', ReservationDetailView.as_view(), name='reservation-detail'),
    # Include additional URL patterns for more reservation-related views if necessary
]
