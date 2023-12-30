

    store=[]
function signUp()
{
   
    oneUser ={
        uName: document.getElementById("Name").value,
        uEmail:document.getElementById("email").value ,
        uPass:  document.getElementById("pass").value,
        
    }
    if ( oneUser.uEmail == "" && oneUser.uName == "" && oneUser.uPass == "")
    {
        document.getElementById("warning").innerHTML="All inputs inavlid"
    }
    else
    {
    store.push(oneUser)
    localStorage.setItem("signUpData",JSON.stringify(store))
    }

    clear()

}


function clear()
{
    document.getElementById("Name").value=null
    
    document.getElementById("email").value=null
    
    document.getElementById("pass").value=null
}
