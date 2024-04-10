# events/models.py
from django.db import models

class Event(models.Model):
    # Assuming an event has a title, description, and date
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
