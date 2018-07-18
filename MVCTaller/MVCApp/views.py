from django.shortcuts import render
from django.http import HttpResponse
from .models import Usuarios, Servicios

# Create your views here.

def index(request):
    servicios=Servicios.objects.all();
    usuarios=Usuarios.objects.all();
    return HttpResponse(servicios,usuarios)

def admin(request):
    return HttpResponse("Hello, world. You're at the polls index.")