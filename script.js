const bu = document.querySelector("#fea");
const com = document.querySelector("#com");
const featuresSub = document.querySelector(".features-sub");
const companySub = document.querySelector(".company-sub");
const dropDown = document.querySelector("#drop-down");
const dropDown2 = document.querySelector("#drop-down2");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu-close");
const navLinks = document.querySelector(".nav-links");
// console.log(featuresSub.style.width)
// console.log(dropDown);

// console.log(window.innerWidth);
let windowWidth = window.innerWidth;
window.addEventListener("resize",function(){
    windowWidth = window.innerWidth;    
});
console.log(windowWidth);
// console.log(window.innerWidth);

if(windowWidth <= 400){
    function forFeatures(){
        let counter = 0;
        bu.addEventListener("click", function(){
            if(counter === 0){
                featuresSub.style.width = "100%";
                featuresSub.style.height = "100%";
                console.log(featuresSub.style.width)
                counter = counter +1;
                dropDown.src = "images/icon-arrow-down.svg"
            }
            else{
                featuresSub.style.width = "0";
                featuresSub.style.height = "0";
                counter = counter -1;
                dropDown.src = "images/icon-arrow-up.svg"
            }
        });
    }
    forFeatures();
    
    function forCompany(){
        let counter = 0;
        com.addEventListener("click", function(){
            if(counter === 0){
                companySub.style.width = "100%";
                companySub.style.height = "100%";
                // console.log(companySub.style.width)
                counter = counter +1;
                dropDown2.src = "images/icon-arrow-down.svg"
            }
            else{
                companySub.style.width = "0";
                companySub.style.height = "0";
                counter = counter -1;
                dropDown2.src = "images/icon-arrow-up.svg"
            }
        });
    }
    forCompany();
}
if(windowWidth >= 401){
    function forFeatures(){
        let counter = 0;
        bu.addEventListener("click", function(){
            console.log(featuresSub)
            if(counter === 0){
                // featuresSub.style.disp = "100%";
                featuresSub.style.display = "flex";
                // console.log(featuresSub.style.width)
                counter = counter +1;
                dropDown.src = "images/icon-arrow-down.svg"
            }
            else{
                // featuresSub.style.width = "0";
                // featuresSub.style.height = "0";
                featuresSub.style.display = "none";
                counter = counter -1;
                dropDown.src = "images/icon-arrow-up.svg"
            }
        });
    }
    forFeatures();

    function forCompany(){
        let counter = 0;
        com.addEventListener("click", function(){
            if(counter === 0){
                // companySub.style.width = "100%";
                // companySub.style.height = "100%";
                // console.log(companySub.style.width)
                companySub.style.display = "flex";
                counter = counter +1;
                dropDown2.src = "images/icon-arrow-down.svg"
            }
            else{
                // companySub.style.width = "0";
                // companySub.style.height = "0";
                companySub.style.display = "none";
                counter = counter -1;
                dropDown2.src = "images/icon-arrow-up.svg"
            }
        });
    }
    forCompany();
}
menu.addEventListener("click", function(){
    navLinks.style.right = "0%";
    document.body.style.overflow = "hidden";
});
menuClose.addEventListener("click", function(){
    navLinks.style.right = "-80%";
    document.body.style.overflow = "auto";

});