from django.db import models

# class CoursesManager(models.Manager):
#     def all_started(self):
#         return self.filter(is_started = True)


class SearchManager(models.Manager):


    def all_O(self):
        return super().get_queryset().select_related('owner').prefetch_related('videos', 'members')
    def search_name(self,name):
        return self.filter(username__icontains=name )

    def search_title(self, title):
        return self.filter(course_title__icontains=title)