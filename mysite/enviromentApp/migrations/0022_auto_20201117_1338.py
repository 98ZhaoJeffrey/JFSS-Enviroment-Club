# Generated by Django 3.1.2 on 2020-11-17 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enviromentApp', '0021_auto_20201117_1303'),
    ]

    operations = [
        migrations.AlterField(
            model_name='email',
            name='hashCode',
            field=models.CharField(blank=True, editable=False, max_length=32),
        ),
    ]