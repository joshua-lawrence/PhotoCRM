from django.http import JsonResponse

def returnPollData(request):
    count = request.GET.get("count", "")

    return JsonResponse({"Results": count})
