
    document.querySelector("#greendiv").addEventListener("click",funcity)

    function funcity(){
        window.location.href="Pickupcity.html"
    }


    document.querySelector("#sidebar").addEventListener("click", funside)
    function funside(){
       document.getElementById("sideleft").style.width="350px"; 
    //    sideleft.stopPropagation()  
    }
    document.getElementById("backgrnd").stopPropagation(sideleft)

   document.querySelector("#navbar").addEventListener("click",funvv)

   function funvv(){
    document.getElementById("sideleft").style.width="0px"; 
   }
