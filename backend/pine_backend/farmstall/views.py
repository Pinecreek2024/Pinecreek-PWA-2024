# farmstall/views.py
from rest_framework import viewsets
from .models import FarmstallItem
from .serializers import FarmstallItemSerializer

class FarmstallItemViewSet(viewsets.ModelViewSet):
    queryset = FarmstallItem.objects.all()
    serializer_class = FarmstallItemSerializer
