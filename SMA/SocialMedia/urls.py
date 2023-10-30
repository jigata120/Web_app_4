from .views import *
from django.urls import path


urlpatterns = [
     path('',your_view, name='home_page'),
    path('add_friends', AddFriendsView.as_view(), name='add_friends_page'),
    path('profile', ProfileView.as_view(), name='profile_page'),

]