from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    max_guests = models.PositiveIntegerField()
    # Add additional fields as needed

    def __str__(self):
        return self.name
