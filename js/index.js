
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

    document.querySelector("#loginn").addEventListener("click" , myfunbecome)

    function myfunbecome () {
      window.location.href ="login.html"
    }


    document.querySelector("#HOST").addEventListener("click" , myfunhost)

    function myfunhost () {
      window.location.href ="navbar.html"
    }


    document.querySelector("#ZMSS").addEventListener("click" , myfunhos)

    function myfunhos () {
      window.location.href ="ZMS.html"
    }

    var city=localStorage.getItem("CityName")

    if(city.length>=1){
      var div1=document.querySelector("#greendiv")
      div1.textContent=city
      div1.style.color="black"
      div1.style.fontSize="18px"
      div1.style.paddingLeft="70px"

      var div2=document.querySelector("#calender")
      div2.setAttribute("id","calender")
      div2.style.width="467px"
      div2.style.height="50px"
    }


    var cityvalue = localStorage.getItem("cityValue") 
    document.querySelector("#lactionpick").innerText = cityvalue
    document.querySelector("#lactionpick").style.color = "green"

