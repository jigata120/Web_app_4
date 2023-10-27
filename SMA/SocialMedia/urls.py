from SocialMedia.views import Index
from django.urls import path

urlpatterns = [
     path('', Index, name='home'),
 ]