# inside films/views.pyfrom django.shortcuts import render 
from django.http import HttpResponse 
def home(request): 
    # remove these print statements later 
    print('\n\nRequest object:', request) 
    print('Request object type:', type(request), '\n\n') 
     
    html_tags = ''' 
    <h1>This is the Home Page</h1> 
    <h3>Thanks for visiting us</h3> 
    <p>MVT means:</p> 
    <ul> 
      <li>Model</li> 
      <li>View</li> 
      <li>Template</li> 
    </ul>''' 
     
    response = HttpResponse(html_tags)    
    print('Response object:', response) 
    print('Response object type:', type(response)) 
    print('\n\nUser-agent info :', end='') 
    print(request.META['HTTP_USER_AGENT'], '\n\n') 
    
    return response 

# films/views.py(...)
def main(request): 
    message = '<h1>This is the films MAIN page.</h1>' 
    return HttpResponse(message)
    
def user_info(request): 
    message = '<h1>This is the films USER_INFO page.</h1>' 
    return HttpResponse(message) 
