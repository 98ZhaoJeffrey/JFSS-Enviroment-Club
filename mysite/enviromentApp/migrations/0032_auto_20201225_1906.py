# Generated by Django 3.1.2 on 2020-12-25 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enviromentApp', '0031_auto_20201224_1545'),
    ]

    operations = [
        migrations.AlterField(
            model_name='promo',
            name='photo',
            field=models.ImageField(default='frontend/build/img/logo.svg', upload_to='frontend/build/img/promotions'),
        ),
        migrations.AlterField(
            model_name='resource',
            name='photo',
            field=models.ImageField(default='frontend/build/img/logo.svg', upload_to='frontend/build/img/resources'),
        ),
    ]
