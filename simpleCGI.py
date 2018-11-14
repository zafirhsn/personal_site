#!/usr/bin/python

import cgi
import cgitb
cgitb.enable()

print ("Content-Type: text/html")
print

print ("<TITLE>CGI script output</TITLE>")
print ("<H1> This is my first CGI script </H1>")
print ("Hello World!")

form = cgi.FieldStorage()
form.getvalue("name")
print (form.getvalue("name"))
