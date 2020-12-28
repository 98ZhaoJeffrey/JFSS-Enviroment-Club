
from django.urls import path
from . import views


urlpatterns = [
    path('promo-list/', views.promoList, name='promotionsList'),
    path('resource-list/', views.resourceList, name='resourcesList'),
    path('add-email/', views.addEmail, name='addEmail'),
    path('unsubscribe-email/<str:hash>', views.unsubEmail, name='unsubEmail'),
]


