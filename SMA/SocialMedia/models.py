from django.db import models
#from taggit.managers import TaggableManager
from django.contrib.auth.models import User
# Create your models here.

class Comment(models.Model):
    text = models.TextField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    #post = models.ForeignKey(Post, on_delete=models.CASCADE)


class Post(models.Model):
    text = models.TextField(max_length=100)
    image = models.ImageField(upload_to='images/')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
   #tags = TaggableManager()
    likes_count = models.IntegerField(default=0,blank=True)
    likes = models.ManyToManyField(User, blank=True, related_name='likes')
    saves = models.ManyToManyField(User, blank=True, related_name='saves')
    comments = models.ManyToManyField(Comment, blank=True)

class Quotes(models.Model):
    text = models.TextField(max_length=500)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    #tags = TaggableManager()
    likes_count = models.IntegerField(default=0)
    likes = models.ManyToManyField(User, blank=True, related_name='users_liked')
    saves = models.ManyToManyField(User, blank=True, related_name='users_commented')
    comments = models.ManyToManyField(Comment, blank=True)
