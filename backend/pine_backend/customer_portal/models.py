from django.db import models
from django.contrib.auth.models import User

class CustomerAccount(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15, blank=True, default='0000000000')
    name = models.CharField(max_length=200, default='Default Name')
    email = models.EmailField(default='newdefault@example.com')
    
    def __str__(self):
        return self.user.username