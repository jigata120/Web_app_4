from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views import generic as views
from django.contrib.auth.models import User

# Create your views here.
@login_required(login_url = 'login_page')
class HomeView(views.ListView):
    template_name = 'User_views/index.html'
    model = User
    context_object_name = 'Users'
    paginate_by = 3

''''
page_obj
paginator
is_paginated
object_list

def Index(request):
    context = {

    }
    return render(request, 'User_views/Index.html', context)
'''