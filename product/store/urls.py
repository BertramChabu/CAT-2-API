from django.urls import path

from .views import getProduct, createProduct


urlpatterns = [
    path('product/', getProduct),
    path('product/create/',createProduct),

]

