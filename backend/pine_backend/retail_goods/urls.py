# retail_goods/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RetailGoodViewSet

router = DefaultRouter()
router.register(r'retail-goods', RetailGoodViewSet)

urlpatterns = [
    path('', include(router.urls)),
]