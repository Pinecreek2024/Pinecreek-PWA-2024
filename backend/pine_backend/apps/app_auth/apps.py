# apps/app_auth/apps.py
from django.apps import AppConfig

class AppAuthConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.app_auth'

    def ready(self):
        # Put any application-specific startup code here.
        pass
