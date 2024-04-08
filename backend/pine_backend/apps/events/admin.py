# events/admin.py
from django.contrib import admin
from .models import Event, EventBooking

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'start_time', 'end_time', 'max_participants')
    list_filter = ('date', 'start_time', 'end_time')
    search_fields = ('name', 'description')

@admin.register(EventBooking)
class EventBookingAdmin(admin.ModelAdmin):
    list_display = ('event', 'user', 'booking_date', 'participants', 'total_cost')
    list_filter = ('booking_date', 'event')
    search_fields = ('event__name', 'user__username')
