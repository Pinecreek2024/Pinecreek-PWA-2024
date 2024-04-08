# events/apps.py
from django.apps import AppConfig

class EventsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.events'

    def ready(self):
        # Here you can add application-specific initialization code
        pass
