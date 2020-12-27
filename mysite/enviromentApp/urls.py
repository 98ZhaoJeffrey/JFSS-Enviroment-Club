from django.urls import path
from django.conf.urls import url
from . import views
from django.conf.urls.static import static
from django.conf import settings
from django.views.static import serve

urlpatterns = [
    path('promo-list/', views.promoList, name='promotionsList'),
    path('resource-list/', views.resourceList, name='resourcesList'),
    path('add-email/', views.addEmail, name='addEmail'),
    path('unsubscribe-email/<str:hash>', views.unsubEmail, name='unsubEmail'),
    url(r'^static/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT,})
]
