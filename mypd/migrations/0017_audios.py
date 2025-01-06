# Generated by Django 4.2.3 on 2024-04-30 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mypd', '0016_remove_teams_testimony'),
    ]

    operations = [
        migrations.CreateModel(
            name='Audios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('description', models.CharField(max_length=100, null=True)),
                ('audio', models.FileField(blank=True, null=True, upload_to='')),
            ],
        ),
    ]
