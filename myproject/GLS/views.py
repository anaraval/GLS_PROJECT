from django.shortcuts import render
from django.http import HttpResponse
import json
import os
from django.http import JsonResponse

# Create your views here.
def home(request):
    file_path1 = os.path.dirname(__file__) + '\\guide.json'
    config = json.loads(open(file_path1).read())
    return JsonResponse(config)
