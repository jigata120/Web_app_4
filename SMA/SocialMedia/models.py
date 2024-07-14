
from django.core.validators import MaxLengthValidator, MinLengthValidator
from django.db import models
from django.utils import timezone

from .managers import SearchManager
from .validators import validate_password


class Videos(models.Model):
    video_id = models.CharField(
        validators=[
            MaxLengthValidator(10,message="Video ID must be equal or less than 10 simbols"),
            MinLengthValidator(4, message="Video ID must be equal or greater than 4 simbols")
        ],db_index=True)
    video_title = models.CharField(max_length=150,db_index=True)

    def __str__(self):
        return self.video_title


class Courses(models.Model):
    class StatusChoices(models.TextChoices):
        priced = 'Priced', 'Priced'
        free = 'Free', 'Free'

    course_title = models.CharField(max_length=150, blank=True,db_index=True)
    owner = models.ForeignKey('Users', on_delete=models.CASCADE)
    videos = models.ManyToManyField('Videos', related_name='c_videos', blank=True)
    members = models.ManyToManyField('Users', related_name='c_members', blank=True)
    status = models.CharField(choices=StatusChoices, default=StatusChoices.priced)
    start = models.DateTimeField(default=timezone.now)

    objects = SearchManager()
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
    username = models.CharField(max_length=50,db_index=True)
    email = models.EmailField()
    password = models.CharField(max_length=20,validators=[validate_password])
    watched_videos = models.ManyToManyField('Videos', related_name="w_videos", blank=True)
    pins_on_videos = models.JSONField()
    enrolled_courses = models.ManyToManyField('Courses', related_name="e_courses", blank=True)
    owned_courses = models.ManyToManyField('Courses', related_name="o_courses", blank=True)

    objects = SearchManager()

    def __str__(self):
        return self.username
