# apps/events/models.py
from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _

class Event(models.Model):
    name = models.CharField(_("name"), max_length=255)
    description = models.TextField(_("description"))
    date = models.DateField(_("date"))
    start_time = models.TimeField(_("start time"))
    end_time = models.TimeField(_("end time"))
    max_participants = models.PositiveIntegerField(_("maximum participants"))
    price_per_person = models.DecimalField(_("price per person"), max_digits=10, decimal_places=2)
    image = models.ImageField(_("image"), upload_to='events/images/', blank=True, null=True)

    class Meta:
        verbose_name = _("Event")
        verbose_name_plural = _("Events")

    def __str__(self):
        return self.name

class EventBooking(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='bookings')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='event_bookings')
    booking_date = models.DateTimeField(_("booking date"), auto_now_add=True)
    participants = models.PositiveIntegerField(_("participants"))
    total_cost = models.DecimalField(_("total cost"), max_digits=10, decimal_places=2, blank=True)

    def save(self, *args, **kwargs):
        self.total_cost = self.participants * self.event.price_per_person
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = _("Event Booking")
        verbose_name_plural = _("Event Bookings")

    def __str__(self):
        return f"{self.event.name} booking by {self.user.username}"
