# Generated by Django 3.1.2 on 2020-11-30 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enviromentApp', '0022_auto_20201117_1338'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resource',
            name='photo',
            field=models.ImageField(default='../frontend/static/img/logo.png', upload_to='../frontend/static/img/resource'),
        ),
    ]
