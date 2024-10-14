from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def home(request):
    start_time = datetime.strptime("2024-07-06 16:00:00", "%Y-%m-%d %H:%M:%S")
    differ_time = datetime.now() - start_time
    context = {"days": differ_time.days, "hour": int(differ_time.seconds/3600),
               "minute": int((differ_time.seconds % 3600)/60), "second": int(differ_time.seconds % 60)}
    return render(request, "home.html", context)
