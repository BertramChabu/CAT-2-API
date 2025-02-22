from django.urls import path

from .views import getProduct, createProduct , home


urlpatterns = [
    path('product/', getProduct),
    path('product/create/',createProduct),
    path('', home ),

]

