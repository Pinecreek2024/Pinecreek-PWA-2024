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
    # URL configuration for the products app
    path('api/products/', include('products.urls')),
    # URL configuration for the orders app
    path('api/orders/', include('orders.urls')),
    # URL configuration for the farmstall app
    path('api/farmstall/', include('farmstall.urls')),
    # URL configuration for the events app
    path('api/events/', include('events.urls')),
    # URL configuration for the menu app
    path('api/menu/', include('menu.urls')),
    # URL configuration for the retail_goods app
    path('api/retail-goods/', include('retail_goods.urls')),
    # URL configuration for the special_offers app
    path('api/special-offers/', include('special_offers.urls')),
    # URL configuration for the reviews app
    path('api/reviews/', include('reviews.urls')),
    # Include other app URLs here as needed
]