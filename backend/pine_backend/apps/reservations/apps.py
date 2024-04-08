# reservations/apps.py
from django.apps import AppConfig

class ReservationsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.reservations'

    def ready(self):
        # This method can be used to perform application-specific initialization
        pass
