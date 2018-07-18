import datetime

from django.db import models
from django.utils import timezone

# Create your models here.

class Servicios(models.Model):
    nombreServicio = models.CharField(max_lenght=100)
    ingresoServicio = models.DateTimeField('fecha ingreso')
    def _str_(self):
        return self.nombreServicio

class Usuarios(models.Model):
    nombre = models.CharField(max_lenght=100)
    servicio = models.ForeignKey(Servicios,on_delete = models.CASCADE)
    def _str_(self):
        return self.nombre