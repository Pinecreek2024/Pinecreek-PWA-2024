# reviews/models.py
from django.db import models

class Review(models.Model):
    # Assuming a review has a title, content, and author
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.CharField(max_length=100)
