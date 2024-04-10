from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FoodItemViewSet, OrderViewSet

router = DefaultRouter()
router.register(r'menu_items', FoodItemViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('menu/', include(router.urls)),  # Adjusted to match Axios baseUrl
]