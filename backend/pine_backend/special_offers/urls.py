# special_offers/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SpecialOfferViewSet

router = DefaultRouter()
router.register(r'special-offers', SpecialOfferViewSet)

urlpatterns = [
    path('', include(router.urls)),
]