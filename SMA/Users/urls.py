from django.contrib import admin
from django.urls import path, include
from Users.views import *

urlpatterns = [
    path('login/', login, name='login_page'),
    path('register/', register, name='register_page'),

]
