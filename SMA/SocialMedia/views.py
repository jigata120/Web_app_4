from django.shortcuts import render,redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import *
from django.views import generic as views
from django.contrib.auth.models import User
from .forms import *


# Create your views here.
class AddFriendsView( views.ListView):#LoginRequiredMixin,
    template_name = 'User_views/main2.html'
    model = User
    context_object_name = 'Users'
    # paginate_by = 8


class ProfileView( views.TemplateView):#LoginRequiredMixin,
    template_name = 'User_views/user_profile.html'


class MainView(views.ListView):#LoginRequiredMixin,
    template_name = 'User_views/main.html'
    model = Post
    context_object_name = 'Posts'
# class HomeView(views.ListView):#LoginRequiredMixin,
#     template_name = 'User_views/index.html'
#     model = Post
#     context_object_name = 'Posts'
    # paginate_by =8

    # def get_ordering(self):
    #    """Return the field or fields to use for ordering the queryset."""
    #    return self.ordering


def Post_detail_view(request, pk):
    post = Post.objects.get(pk=pk)
    form = CreateCommentForm()
    if request.method == "POST":
        form = CreateCommentForm(request.POST)
        if form.is_valid():
            comment_text = form.cleaned_data['text']
            comment = form.save(commit=False)
            comment.user = request.user
            comment.save()
            post.comments.add(comment)
            post.save()

    return render(request, 'User_views/post_detail.html', {'post': post, 'form': form})


def Create_post_view(request):
    form = CreatePostForm()
    if request.method == 'POST':
        form = CreatePostForm(request.POST,request.FILES)
        if form.is_valid():
            post = form.save(commit=False)

            post.user = request.user
            post.save()
            return redirect('home_page')
        return redirect('register_page')
    return render(request, 'User_views/create_post.html', {"form": form})


''''

page_obj
paginator
is_paginated
object_list


def get_posts(request):
    posts = Post.objects.all()
    posts_data = []
    for post in posts:
        post_data = {
            'Posts': post,
            'likes': post.likes.all(),
            'saves': post.saves.all(),
            'comments': post.comments.all()
        }
        posts_data.append(post_data)

    context = {
        'posts_data': posts_data
    }
    return context


def your_view(request):
    context = get_posts(request)
    return render(request, 'User_views/index.html', context)

 '''
