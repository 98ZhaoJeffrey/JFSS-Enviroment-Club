# Generated by Django 3.1.2 on 2020-12-25 22:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enviromentApp', '0033_auto_20201225_2152'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resource',
            name='photo',
            field=models.ImageField(default='static/logo.svg', upload_to=''),
        ),
    ]
