from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import FoodItem, Order
from .serializers import FoodItemSerializer, OrderSerializer

class FoodItemViewSet(viewsets.ModelViewSet):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer

    def update(self, request, pk=None, *args, **kwargs):
        try:
            instance = FoodItem.objects.get(pk=pk)
        except FoodItem.DoesNotExist:
            return Response({'error': 'Not Found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def destroy(self, request, pk=None, *args, **kwargs):
        try:
            instance = FoodItem.objects.get(pk=pk)
            self.perform_destroy(instance)
        except FoodItem.DoesNotExist:
            return Response({'error': 'Not Found'}, status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_204_NO_CONTENT)

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer