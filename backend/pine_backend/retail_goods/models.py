# retail_goods/models.py
from django.db import models

class RetailGood(models.Model):
    # Assuming a retail good has a title, description, and image_url
    title = models.CharField(max_length=200)
    description = models.TextField()
    image_url = models.URLField()
