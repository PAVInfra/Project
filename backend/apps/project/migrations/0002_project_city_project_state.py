# Generated by Django 5.0.6 on 2024-07-10 05:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("project", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="project",
            name="city",
            field=models.CharField(default=0, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="project",
            name="state",
            field=models.CharField(default=0, max_length=255),
            preserve_default=False,
        ),
    ]
