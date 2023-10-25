from django.contrib import admin
from django.urls import path, include
from Users.views import *

urlpatterns = [
    path('login/', login_page, name='login_page'),
    path('register/', register_page, name='register_page'),
    path('logout/', logout_page, name='logout_page'),



]
