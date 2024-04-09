from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomerAccountViewSet

router = DefaultRouter()
router.register(r'accounts', CustomerAccountViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
