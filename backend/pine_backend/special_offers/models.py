# special_offers/models.py
from django.db import models

class SpecialOffer(models.Model):
    # Assuming a special offer has a title, description, and price
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
