# Generated by Django 3.1.2 on 2020-11-17 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enviromentApp', '0020_auto_20201117_1300'),
    ]

    operations = [
        migrations.AlterField(
            model_name='email',
            name='hashCode',
            field=models.CharField(default=12, editable=False, max_length=32),
        ),
    ]
