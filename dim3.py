#!/usr/bin/env python
# ========= HASHBANG LINE ABOVE IS MAGIC! =========
# ========= (Must be first line of file.) =========

# ======= BACK END OF AN HTML/PYTHON FORM PROCESSING TEAM ========
# Receives data from HTML front end, processes, generates new HTML.
##Zafir Hasan
##pd5
##HW#32
##2013-May-18

import cgi
import cgitb
cgitb.enable()  #comment out once full functionality achieved

presets = "<body bgcolor='000000'><center><br><br><br><br><br><br>"
ftc = "<font size='10'><span style='color:FF0000'>"

# ~~~~~~~~~~~~~~~ support functions ~~~~~~~~~~~~~~~
def FStoD():
    '''
    Converts return val of FieldStorage() into a standard dictionary
    '''
    d = {}
    formData = cgi.FieldStorage()
    for k in formData.keys():
        d[k] = formData[k].value
    return d

def volume():
	fd = FStoD()
	values = fd.values()
	try:
		return ftc + "The volume of your imaginary prism is " + str(float(values[0])*float(values[1])*float(values[2]))
	except:
		return ftc + "Your values(s) are not numbers"

def area():
	fd = FStoD()
	values = fd.values()
	try:
		return ftc + "The area of your imaginary rectangle is " + str(float(values[0])*float(values[1]))
	except:
		return ftc + "Your value(s) are not numbers"

def output():
	fd = FStoD()
	dimensions = ['height','length','width']
	for w in fd.keys():
		if w in dimensions:
			dimensions.remove(w)
	if len(dimensions) == 0:
		return volume()
	elif len(dimensions) == 1:
		return area()
	elif len(dimensions) == 2:
		return ftc + "One of your arguements is missing or not a dimension"
	else:
		return ftc + "You didn't give any arguements"
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


# ========= CONTENT-TYPE LINE REQUIRED. ===========
# ======= Must be beginning of HTML string ======== 
htmlStr = "Content-Type: text/html\n\n" #NOTE there are 2 '\n's !!! 
htmlStr += presets + "<head><title>Area and Volume Finder!</title></head>"


# ~~~~~~~~~~~~~ HTML-generating code ~~~~~~~~~~~~~~
# <<< INSERT YOUR HTML HERE >>>
# for example,
htmlStr += str(output())
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


# == Wrap up HTML string and send it to browser ===
print htmlStr
