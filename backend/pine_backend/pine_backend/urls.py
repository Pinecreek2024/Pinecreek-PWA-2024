from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # URL configuration for the menu_ordering app
    path('api/menu_ordering/', include('menu_ordering.urls')),
    # URL configuration for the table_reservations app
    path('api/table_reservations/', include('table_reservations.urls')),
    # URL configuration for the event_quotations app
    path('api/event_quotations/', include('event_quotations.urls')),
    # URL configuration for the customer_portal app
    path('api/customer_portal/', include('customer_portal.urls')),
    # Include other app URLs here as needed
]
