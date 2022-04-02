
    document.querySelector("#greendiv").addEventListener("click",funcity)

    function funcity(){
        window.location.href="picupcity.html"
    }


    // document.querySelector("#sidebar").addEventListener("click", funside)
//     // function funside(){
//     //    document.getElementById("sideleft").style.width="350px"; 
//     // //    sideleft.stopPropagation()  
//     // }
//     document.getElementById("backgrnd").stopPropagation(sideleft)

//    document.querySelector("#navbar").addEventListener("click",funvv)

//    function funvv(){
//     document.getElementById("sideleft").style.width="0px"; 
//    }

var modal = document.getElementById("myModal");
    

    var btn = document.getElementById("myBtn");
    

    var span = document.getElementsByClassName("close")[0];
    

    btn.onclick = function() {
      modal.style.display = "block";
    }
    

    span.onclick = function() {
      modal.style.display = "none";
    }
    
 
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    document.querySelector("#rightnav").addEventListener("click" , myfunbecome)

    function myfunbecome () {
      window.location.href ="login.html"
    }