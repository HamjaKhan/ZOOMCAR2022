var div1 = document.createElement("div");
div1.setAttribute("id", "conttainer")
// div1.textContent = "I am div"
var div2 = document.createElement("div");
div2.setAttribute("id", "box")

var par1 = document.createElement("p")
par1.textContent = "Select your country/city";

// var div3 = document.createElement("div")
// div3.setAttribute("id", "tag")
// var span1 = document.createElement("span")
// var i1 = document.createElement("i");
// i1.setAttribute("class", "fa-solid fa-location-dot")
// span1.append(i1)
// div3.append(span1)
var input1 = document.createElement("input");
input1.setAttribute("list", "country1")
input1.setAttribute("id", "country")
input1.setAttribute("placeholder", "Select Country")
var datalist1 = document.createElement("datalist");
datalist1.setAttribute("id", "country1")
var option1 = document.createElement("option")
option1.setAttribute("value", "India")
var option2 = document.createElement("option")
option2.setAttribute("value", "Indonesia")
var option3 = document.createElement("option")
option3.setAttribute("value", "Vietnam")
var option4 = document.createElement("option")
option4.setAttribute("value", "Egypt")
var option5 = document.createElement("option")
option5.setAttribute("value", "Philippines")
datalist1.append(option1, option2, option3, option4, option5)
input1.append(datalist1)

input1.addEventListener("change", handleCountry)
function handleCountry() {
    var a = input1.value
    
    console.log(a,);
    switch (a) {
        case "India":
            // a ==;
            console.log("this is me");
            var datalist2 = document.createElement("datalist");
            datalist2.setAttribute("id", "city1")
            var option1 = document.createElement("option")
            option1.setAttribute("value", "Banglore")
            var option2 = document.createElement("option")
            option2.setAttribute("value", "Pune")
            var option3 = document.createElement("option")
            option3.setAttribute("value", "Kolkata")
            var option4 = document.createElement("option")
            option4.setAttribute("value", "Hyedrabad")
            var option5 = document.createElement("option")
            option5.setAttribute("value", "Chennai")
            var option6 = document.createElement("option")
            option6.setAttribute("value", "Goa")
            var option7 = document.createElement("option")
            option7.setAttribute("value", "Delhi")
            var option8 = document.createElement("option")
            option8.setAttribute("value", "Vijaywada")
            var option9 = document.createElement("option")
            option9.setAttribute("value", "Vizag")
            var option10 = document.createElement("option")
            option10.setAttribute("value", "Manglore")
            datalist2.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10)
            input2.append(datalist2)
            // alert("allu")
            break;
        case "Egypt":
            var datalist2 = document.createElement("datalist");
            datalist2.setAttribute("id", "city1")
            var option1 = document.createElement("option")
            option1.setAttribute("value", "Ciaro")
            datalist2.append(option1)
            input2.append(datalist2)
            break;

        case "Indonesia":
            var datalist2 = document.createElement("datalist");
            datalist2.setAttribute("id", "city1")
            var option1 = document.createElement("option")
            option1.setAttribute("value", "Jakarta")
            datalist2.append(option1)
            input2.append(datalist2)
            break;

        case "Philippines":
            var datalist2 = document.createElement("datalist");
            datalist2.setAttribute("id", "city1")
            var option1 = document.createElement("option")
            option1.setAttribute("value", "Metro Malina")
            datalist2.append(option1)
            input2.append(datalist2)
            break;

        case "Vietnam":
            var datalist2 = document.createElement("datalist");
            datalist2.setAttribute("id", "city1")
            var option1 = document.createElement("option")
            option1.setAttribute("value", "Ho Chi Minh")
            datalist2.append(option1)
            input2.append(datalist2)
            break;
        
    }
    // 
}

var input2 = document.createElement("input");
input2.setAttribute("list", "city1")
input2.setAttribute("id", "country")
input2.setAttribute("placeholder", "Select City")
// window.location.reload();

input2.addEventListener("change", handleCity)
function handleCity(){
    var b =input2.value;
    console.log(b);
    localStorage.setItem("cityValue",b);
}

    var cityvalue = localStorage.getItem("cityValue") 


div2.append(input1, input2)
var par2 = document.createElement("p")
par2.textContent = "Select Language";

var input3 = document.createElement("input");
input3.setAttribute("list", "lang1")
input3.setAttribute("id", "lang")
input3.setAttribute("placeholder", "Select Language")
var datalist3 = document.createElement("datalist");
datalist3.setAttribute("id", "lang1")
var option1 = document.createElement("option")
option1.setAttribute("value", "English")
datalist3.append(option1)
input3.append(datalist3)

var br1 = document.createElement("br")
var btn1 = document.createElement("button")
btn1.textContent = "CONFIRM"
btn1.addEventListener("click",myconfirm);
function myconfirm(){
    window.location.href="index.html"
}

div1.append(par1, div2, par2, input3, br1, btn1)
document.querySelector("#backImage").append(div1)
