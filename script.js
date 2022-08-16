function validate()
{
 var password=document.getElementById("password").value
 var email=document.getElementById("email").value

 var email_error
 if(email=="sankey901@solutions.com" && password=="mindset") 
 (
     window.open("./welcome.html",'_blank')  
 ) 
 else if(email=="sankey901@solutions.com"&& password != "mindset" )
 (
  document.getElementById("pass_error").style.display="block"
 )
 else if(email !="sankey901@solutions.com"&& password == "mindset" )
 (
     document.getElementById("email_error").style.display="block"
 )
 else
 (
    document.getElementById("pass_error").style.display="block",
    document.getElementById("email_error").style.display="block"
 )     
}
