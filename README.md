# GLS_PROJECT
This project is divided into 2 parts separately. frontend as separate engine and backend as separate web server. React is used as frontend whereas Django is used as backend.

Frontend:
1. It is used to render html content on client
2. Fetch JSON data from backend
3. Change the value of html according to the content of json received from backend

Backend:
It receives request and after processing is done, it sends back JSON response to the frontend

How to do setup:
1. Clone the project on your system
2. To start the frontend:

Expecting that you have node.js installed in your system. (If not, download it)
I am using
 [E:\Anand\GLS_PROJECT\frontend>node --version
v10.15.3]
-> cd to GLS_PROJECT\frontend
-> then run 'npm start'
->E:\Anand\GLS_PROJECT\frontend>npm --version
6.4.1

3. To start the backend:
You would need python interpreter with django package loaded from pip
 -> cd to GLS_PROJECT\myproject
-> Then run 'python manage.py runserver 127.0.0.1:8000'

I have used virtualenv to develop the project. So, that we can separate our environment for the project
Python versions used: 
(venv) E:\Anand\GLS_PROJECT\myproject>python --version
Python 3.7.2

(venv) E:\Anand\GLS_PROJECT\myproject>python -m django --version
2.2.1

#Please NOTE: I am not pushing virtualenv and node_modules in github due to it's bigger size
