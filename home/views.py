from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def home(request):
    def format_number(number):
        """
        格式转换
        :param number:
        :return:
        """
        number = str(int(number))
        if int(number) < 10:
            number = "0" + number
        return number
    start_time = datetime.strptime("2024-07-06 16:00:00", "%Y-%m-%d %H:%M:%S")
    differ_time = datetime.now() - start_time
    context = {"days": differ_time.days, "hour": format_number(differ_time.seconds/3600),
               "minute": format_number((differ_time.seconds % 3600)/60), "second": format_number(differ_time.seconds % 60)}
    return render(request, "home.html", context)


def well_come(request):
    return render(request, "well_come.html")