from django.db import models
from django.utils import timezone


class Videos(models.Model):
    video_id = models.CharField(max_length=10)
    video_title = models.CharField(max_length=150)

    def __str__(self):
        return self.video_title


class Courses(models.Model):
    class StatusChoices(models.TextChoices):
        priced = 'Priced', 'Priced'
        free = 'Free', 'Free'

    course_title = models.CharField(max_length=150, blank=True)
    owner = models.ForeignKey('Users', on_delete=models.CASCADE)
    videos = models.ManyToManyField('Videos', related_name='c_videos', blank=True)
    members = models.ManyToManyField('Users', related_name='c_members', blank=True)
    status = models.CharField(choices=StatusChoices, default=StatusChoices.priced)
    start = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.course_title

    def clean(self):
        print('cleaned>>>')


class CourseChar(Courses):
    class Meta:
        proxy = True


    def is_starter(self):
        return timezone.now()> self.start



class Users(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=20)
    watched_videos = models.ManyToManyField('Videos', related_name="w_videos", blank=True)
    pins_on_videos = models.JSONField()
    enrolled_courses = models.ManyToManyField('Courses', related_name="e_courses", blank=True)
    owned_courses = models.ManyToManyField('Courses', related_name="o_courses", blank=True)

    def __str__(self):
        return self.username
