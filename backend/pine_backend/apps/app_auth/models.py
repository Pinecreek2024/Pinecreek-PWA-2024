# app_auth/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

class CustomUser(AbstractUser):
    """
    Custom User model that extends the default Django User model.
    """
    bio = models.TextField(_("Bio"), blank=True, null=True)
    profile_pic = models.ImageField(_("Profile Picture"), upload_to='profile_pics/', blank=True, null=True)
    # Add any additional fields you need for your custom user here

    def __str__(self):
        return self.username

# You can add more models related to user authentication here if needed
