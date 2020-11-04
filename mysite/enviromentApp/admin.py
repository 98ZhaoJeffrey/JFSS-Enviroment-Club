from django.contrib import admin
from .models import promo, resource, email
from django.http import HttpResponse
import csv

# Register your models here.
class PromoAdmin(admin.ModelAdmin):
    list_display = ('title','date', 'description','link','photo')
    search_fields = ['title']

class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title','date', 'description', 'photo')
    search_fields =['title']


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