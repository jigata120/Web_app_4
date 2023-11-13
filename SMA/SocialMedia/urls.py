from .views import *
from django.urls import path


urlpatterns = [
     path('',HomeView.as_view(), name='home_page'),
    path('add_friends', AddFriendsView.as_view(), name='add_friends_page'),
    path('profile', ProfileView.as_view(), name='profile_page'),
    path('post/<int:pk>/', Post_detail_view, name='post_detail_page'),
    path('create/post/', Create_post_view, name='create_post_page'),
]