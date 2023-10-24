from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserForm
from django.contrib import messages

# Create your views here.

def login(request):
    return render(request, 'User_views/Login.html',)


def register(request):
    form = CreateUserForm()
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            name = form.cleaned_data['username']
            result = f'registered user - {name}'

            messages.success(request,result)
            return redirect('login_page')

    content = {'form': form}
    return render(request, 'User_views/Register.html', content)
