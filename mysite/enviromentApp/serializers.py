from rest_framework import serializers
from .models import promo, email, resource
from rest_framework.validators import UniqueValidator

#promo serializer
class PromoSerializer(serializers.ModelSerializer):
    class Meta:
        model = promo
        fields = '__all__'
        read_only_fields = ['title', 'date', 'description', 'link', 'photo']
        

class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = resource
        fields = '__all__'
        read_only_fields = ['title', 'date', 'description', 'photo']

class EmailSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(validators=[
        UniqueValidator(
            queryset=email.objects.all(),
            message='Such email address already exists'
        )]
    )
    class Meta:
        model = email
        fields = '__all__'
