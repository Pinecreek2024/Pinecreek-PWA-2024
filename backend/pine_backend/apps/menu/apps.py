# apps/menu/apps.py
from django.apps import AppConfig

class MenuConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.menu'

    def ready(self):
        # Place application-specific startup code here.
        pass
