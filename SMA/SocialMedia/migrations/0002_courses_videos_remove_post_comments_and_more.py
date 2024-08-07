# Generated by Django 5.0.2 on 2024-07-12 20:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SocialMedia', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Courses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Videos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video_id', models.CharField(max_length=10)),
                ('video_title', models.CharField(max_length=150)),
            ],
        ),
        migrations.RemoveField(
            model_name='post',
            name='comments',
        ),
        migrations.RemoveField(
            model_name='quotes',
            name='comments',
        ),
        migrations.RemoveField(
            model_name='post',
            name='likes',
        ),
        migrations.RemoveField(
            model_name='post',
            name='saves',
        ),
        migrations.RemoveField(
            model_name='post',
            name='user',
        ),
        migrations.RemoveField(
            model_name='quotes',
            name='likes',
        ),
        migrations.RemoveField(
            model_name='quotes',
            name='saves',
        ),
        migrations.RemoveField(
            model_name='quotes',
            name='user',
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=20)),
                ('pins_on_videos', models.JSONField()),
                ('enrolled_courses', models.ManyToManyField(blank=True, null=True, related_name='e_courses', to='SocialMedia.courses')),
                ('owned_courses', models.ManyToManyField(blank=True, null=True, related_name='o_courses', to='SocialMedia.courses')),
                ('watched_videos', models.ManyToManyField(blank=True, null=True, related_name='w_videos', to='SocialMedia.videos')),
            ],
        ),
        migrations.AddField(
            model_name='courses',
            name='members',
            field=models.ManyToManyField(blank=True, null=True, related_name='c_members', to='SocialMedia.users'),
        ),
        migrations.AddField(
            model_name='courses',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='SocialMedia.users'),
        ),
        migrations.AddField(
            model_name='courses',
            name='videos',
            field=models.ManyToManyField(blank=True, null=True, related_name='c_videos', to='SocialMedia.videos'),
        ),
        migrations.DeleteModel(
            name='Comment',
        ),
        migrations.DeleteModel(
            name='Post',
        ),
        migrations.DeleteModel(
            name='Quotes',
        ),
    ]
