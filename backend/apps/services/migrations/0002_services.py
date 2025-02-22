# Generated by Django 5.0.6 on 2024-07-10 05:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("apps_services", "0001_initial"),
        ("media", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Services",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=250)),
                ("shortDescription", models.TextField()),
                ("description", models.TextField()),
                (
                    "image",
                    models.ManyToManyField(
                        blank=True, related_name="services", to="media.image"
                    ),
                ),
            ],
        ),
    ]
