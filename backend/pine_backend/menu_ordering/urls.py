from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FoodItemViewSet

router = DefaultRouter()
router.register(r'', FoodItemViewSet)

urlpatterns = [
    path('menu/', include(router.urls)),  # Adjusted to match Axios baseUrl
]
