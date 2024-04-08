# pine_backend/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Admin interface
    path('admin/', admin.site.urls),

    # Include URL patterns from each app
    path('auth/', include('apps.app_auth.urls')),  # URLs for the auth app
    path('menu/', include('apps.menu.urls')),      # URLs for the menu app
    path('reservations/', include('apps.reservations.urls')),  # URLs for reservations
    path('orders/', include('apps.orders.urls')),  # URLs for orders
    path('events/', include('apps.events.urls')),  # URLs for events
    
    # Include URLs for other apps here as needed
]

# Serving media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
