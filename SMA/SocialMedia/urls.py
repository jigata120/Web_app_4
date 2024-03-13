from .views import *
from django.urls import path


urlpatterns = [
    path('main', MainView.as_view(), name='main_page'),
    path('add_friends', AddFriendsView.as_view(), name='add_friends_page'),
    path('courses', CoursesView.as_view(), name='courses_page'),
    path('details', DetailsView.as_view(), name='details_page'),
    path('profile', ProfileView.as_view(), name='profile_page'),
    path('post/<int:pk>/', Post_detail_view, name='post_detail_page'),
    path('create/post/', Create_post_view, name='create_post_page'),
]
