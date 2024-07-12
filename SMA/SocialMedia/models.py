from django.db import models

# Create your models here.
class Videos(models.Model):
    video_id = models.CharField(max_length=10)
    video_title = models.CharField(max_length=150)


    def __str__(self):
        return self.video_title

class Users(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=20)
    watched_videos = models.ManyToManyField( to='Videos',related_name="w_videos",blank=True,null=True)
    pins_on_videos = models.JSONField()
    enrolled_courses = models.ManyToManyField('Courses',related_name="e_courses",blank=True,null=True)
    owned_courses = models.ManyToManyField('Courses',related_name="o_courses",blank=True,null=True)

    def __str__(self):
        return self.username

class Courses(models.Model):
    owner = models.ForeignKey(Users,on_delete=models.CASCADE)
    videos = models.ManyToManyField(Videos,related_name='c_videos',blank=True,null=True)
    members = models.ManyToManyField(Users,related_name='c_members',blank=True,null=True)


