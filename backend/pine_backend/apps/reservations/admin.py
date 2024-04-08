# reservations/admin.py
from django.contrib import admin
from .models import Reservation

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ('user', 'reservation_time', 'number_of_guests', 'status', 'created_at')
    list_filter = ('status', 'reservation_time')
    search_fields = ('user__username', 'user__email', 'status')
    readonly_fields = ('created_at', 'updated_at')

    def get_queryset(self, request):
        # Custom queryset handling, if necessary
        return super().get_queryset(request)
