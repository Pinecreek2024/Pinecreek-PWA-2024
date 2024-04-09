from django.db import models

class Reservation(models.Model):
    customer_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    reservation_date = models.DateField()
    reservation_time = models.TimeField()
    number_of_guests = models.PositiveIntegerField()
    special_requests = models.TextField(blank=True, null=True)
    # Add any additional fields as necessary

    def __str__(self):
        return f"{self.customer_name} - {self.reservation_date}"
