from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, EventQuotationViewSet

router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'quotations', EventQuotationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]