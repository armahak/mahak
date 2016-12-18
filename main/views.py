from django.shortcuts import render
from django.http import HttpResponse


def base(request):
	return render(request,"main/index.html",{})


def about_us(request):
	return render(request,"main/about_us.html",{})
