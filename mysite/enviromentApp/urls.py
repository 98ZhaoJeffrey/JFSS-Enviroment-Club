from django.urls import path, include
from rest_framework import routers

from . import views

"""
router = routers.DefaultRouter()
router.register(r'promo', views.promoViewSet)
router.register(r'resource', views.resourceViewSet)
router.register(r'email', views.emailViewSet)
"""

urlpatterns = [
    path('', views.index, name='index'),
    path('api/', views.apiOverview, name='apiOverview'),
    path('api/promo-list', views.promoList, name='promotionsList'),
    path('api/resource-list', views.resourceList, name='resourcesList'),
    path('api/add-email', views.addEmail, name='addEmail'),

    path('resources', views.resources, name='resources'),
    path('contacts', views.contacts, name='contacts'),
    path('newsletter', views.newsletter, name='newsletter'),
    path('news', views.news, name='news'),
    path('promos', views.promotions, name='promos'),

]