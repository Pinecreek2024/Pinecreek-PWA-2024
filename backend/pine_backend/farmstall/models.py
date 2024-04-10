# farmstall/models.py
from django.db import models

class FarmstallItem(models.Model):
    # Assuming a farmstall item has a name, description, and price
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
