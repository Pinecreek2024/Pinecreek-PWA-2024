# menu/admin.py
from django.contrib import admin
from .models import MenuItem

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'is_available')
    list_filter = ('is_available',)
    search_fields = ('name', 'description')
    fields = ('name', 'description', 'price', 'is_available', 'image')
    # Customize this class as needed for your MenuItem model
