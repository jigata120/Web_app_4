from django.shortcuts import render, redirect
# from django.http import HttpResponse
# from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.views.generic import CreateView
from django.urls import reverse_lazy
from django.views.generic import FormView
from django.contrib.auth.forms import AuthenticationForm
from django.views import View


# Create your views here.

class LoginView(FormView):
    template_name = 'User_views/Login.html'
    form_class = AuthenticationForm
    success_url = reverse_lazy('home_page')

    def form_valid(self, form):
        login(self.request, form.get_user())
        messages.success(self.request, 'You have successfully logged in.')
        return super().form_valid(form)


class RegisterView(CreateView):
    template_name = 'User_views/Register.html'
    form_class = CreateUserForm
    success_url = reverse_lazy('home_page')

    def form_valid(self, form):
        username = form.cleaned_data['username']
        messages.success(self.request, f'Registered user - {username}')
        return super().form_valid(form)


class LogoutView(View):

    def get(self, request):
        logout(self.request)
        return redirect('login_page')


''''
def login_page(request):
    if request.user.is_authenticated:
        ...
        # return redirect('home')
    else:
        if request.method == 'POST':
            password = request.POST.get('password')
            username = request.POST.get('username')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, 'you logged')
                return redirect('home')
            else:
                messages.error(request, 'Wrong pass or name ')

        return render(request, 'User_views/Login.html', )


def register_page(request):
    form = CreateUserForm()
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            name = form.cleaned_data['username']
            result = f'registered user - {name}'

            messages.success(request, result)
            return redirect('login_page')
        else:
            messages.success(request, form.errors)

    content = {'form': form}
    return render(request, 'User_views/Register.html', content)


def logout_page(request):
    logout(request)
    return redirect('login_page')
'''
