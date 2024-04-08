# events/urls.py
from django.urls import path
from .views import EventListView, EventDetailView, EventBookingCreateView, EventBookingDetailView

urlpatterns = [
    path('all/', EventListView.as_view(), name='event-list'),
    path('detail/<int:pk>/', EventDetailView.as_view(), name='event-detail'),
    path('booking/create/', EventBookingCreateView.as_view(), name='event-booking-create'),
    path('booking/detail/<int:pk>/', EventBookingDetailView.as_view(), name='event-booking-detail'),
    # Add more URL patterns here as needed
]
