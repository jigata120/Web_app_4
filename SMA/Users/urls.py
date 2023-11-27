from django.contrib import admin
from django.urls import path, include
from Users.views import *
from .views import RegisterView
from .views import LoginView
from .views import LogoutView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login_page'),
    path('register/', RegisterView.as_view(), name='register_page'),
    path('logout/', LogoutView.as_view(), name='logout_page'),

]
