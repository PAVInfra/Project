# Generated by Django 5.0.6 on 2024-07-10 06:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("media", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="WhyWeStandApart",
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
                ("name", models.CharField(max_length=100)),
                ("description", models.TextField()),
                (
                    "image",
                    models.ManyToManyField(
                        blank=True,
                        related_name="WhyWeStandApart_image",
                        to="media.image",
                    ),
                ),
            ],
        ),
    ]
