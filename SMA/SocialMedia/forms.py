
from django.forms import ModelForm
from .models import *

class CreateCommentForm(ModelForm):
    class Meta:
        model = Comment
        fields = ['text']
class CreatePostForm(ModelForm):
    class Meta:
        model = Post
        fields = ['text', 'image']