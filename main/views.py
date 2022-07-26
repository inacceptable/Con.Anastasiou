from django.shortcuts import render

def home(request):
	context = {} 
	return render(request, 'html/home.html', context)