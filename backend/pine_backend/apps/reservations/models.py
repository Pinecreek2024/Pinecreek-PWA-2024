# reservations/models.py
from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _

class Reservation(models.Model):
    """
    Model representing a table reservation at the restaurant.
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='reservations')
    reservation_time = models.DateTimeField(_("reservation time"))
    number_of_guests = models.PositiveIntegerField(_("number of guests"))
    special_requests = models.TextField(_("special requests"), blank=True)
    created_at = models.DateTimeField(_("created at"), auto_now_add=True)
    updated_at = models.DateTimeField(_("updated at"), auto_now=True)
    status = models.CharField(_("status"), max_length=20, choices=[
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled')
    ], default='pending')

    class Meta:
        verbose_name = _("Reservation")
        verbose_name_plural = _("Reservations")

    def __str__(self):
        return f"Reservation for {self.user} on {self.reservation_time}"

# You can add additional models related to reservations here if needed
