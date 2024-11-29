from django.db import models

# Create your models here.
class Product(models.Model):
    product_name = models.CharField( max_length=50)
    product_description =  models.TextField(max_length=100)
    price = models.IntegerField()

    def __str__(self):
        return self.product_name
