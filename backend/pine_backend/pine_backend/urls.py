from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('apps.app_auth.urls')),
    path('menu/', include('apps.menu.urls')),
    path('reservations/', include('apps.reservations.urls')),
    path('orders/', include('apps.orders.urls')),
    path('events/', include('apps.events.urls')),
    path('users/', include('apps.users.urls')),  # Adding the users app URLs
    # Add any additional app URLs here
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
