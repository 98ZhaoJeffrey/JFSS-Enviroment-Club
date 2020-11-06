from django.contrib import admin
from .models import promo, resource, email
from django.http import HttpResponse
import csv
import os

# Register your models here.

def removeData(data):
    try:
        if str(data.photo) != 'static/img/logo.png':
            os.remove(str(data.photo))
    finally:
        return(data.delete())

class PromoAdmin(admin.ModelAdmin):
    list_display = ('title','date', 'description','link','photo')
    search_fields = ['title']
    actions = ['delete_selected']

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            removeData(obj)


class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title','date', 'description', 'photo')
    search_fields =['title']
    actions = ['delete_selected']

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            removeData(obj)


def getEmails(self, request, queryset):
    response = HttpResponse(content_type='text/csv')

    writer = csv.writer(response)
    writer.writerow(['Email', 'Date Signed Up'])

    for address in queryset:
        writer.writerow([address.email, address.date])
    response['Content-Disposition'] = 'attachment; filename="email.csv"'
    return response

class EmailAdmin(admin.ModelAdmin):
    search_fields =['email']
    actions=[getEmails]

admin.site.register(resource, ResourceAdmin)
admin.site.register(promo, PromoAdmin)
admin.site.register(email, EmailAdmin)