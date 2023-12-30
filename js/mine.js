


var store = []
var oneUser;



function signin()
{
   
    oneUser ={
        
        uEmail:document.getElementById("email").value ,
        uPass:  document.getElementById("pass").value,
        
    }
    if ( oneUser.uEmail == "" && oneUser.uPass == "")
    {
        document.getElementById("warning").innerHTML="All inputs inavlid"
    }
    else
    {
    store.push(oneUser)
    localStorage.setItem("loginData",JSON.stringify(store))
    }

    clear()

}


function clear()
{
   
    
    document.getElementById("email").value=null
    
    document.getElementById("pass").value=null
}



