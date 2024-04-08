from django.db import models
from django.utils.translation import gettext_lazy as _

class MenuItem(models.Model):
    """
    Model representing an item on the restaurant's menu.
    """
    name = models.CharField(_("name"), max_length=255)
    description = models.TextField(_("description"))
    price = models.DecimalField(_("price"), max_digits=6, decimal_places=2)
    is_available = models.BooleanField(_("available"), default=True)
    image = models.ImageField(_("image"), upload_to='menu_items/', blank=True, null=True)
    # You can add more fields here, such as categories, ingredients, etc.

    class Meta:
        verbose_name = _("Menu Item")
        verbose_name_plural = _("Menu Items")

    def __str__(self):
        return self.name
