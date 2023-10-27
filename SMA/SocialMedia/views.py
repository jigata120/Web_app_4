from django.shortcuts import render


# Create your views here.
def Index(request):
    context = {

    }
    return render(request, 'User_views/Index.html', context)
