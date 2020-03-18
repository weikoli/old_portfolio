var portfoliobtn = document.querySelector("#portfoliobtn");
var aboutbtn = document.querySelector('#aboutbtn');
var portfolio = document.querySelector('.portfolio');
var about = document.querySelector('.about');
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var type1 = document.querySelector('.type1');
var type2 = document.querySelectorAll('.type2');
var type3 = document.querySelector('.type3');
var project1 =document.querySelector('#project1')
var project2 =document.querySelector('#project2')
var project3 =document.querySelector('#project3')
var pos = document.querySelector('.pos');
var state1 = { name : "portfolio"};
var state2 = { name : "about"};
var state3 = { name : "one"};
var state4 = { name : "two"};
var state5 = { name : "three"};
var state6 = { name : "type1"};
var state7 = { name : "type2"};
var state8 = { name : "type3"};
// var currentState = history.state;
// console.log(currentState);
history.replaceState(state1,null,'');

// window.history.pushState(state1,"portfolio","/portfolio");

window.addEventListener("popstate",function(e){
    
    var state = e.state.name;
    if (state === "portfolio"){
        _portfolio();
    }
    else if (state === "about"){
        _about();
    }
    else if (state === "one"){
        _one();
    }
    else if (state === "two"){
        _two();
    }
    else if (state === "three"){
        _three();
    }
    else if (state === "type1"){
        _type1();
    }
    else if (state === "type2"){
        _type2();
    }
    else if (state === "type3"){
        _type3();
    }
    
})


portfoliobtn.addEventListener('click',_portfolio)
function _portfolio(){
    window.history.pushState(state1,"portfolio","");
    if (aboutbtn.className === "selected"){
        aboutbtn.classList.remove('selected');
        about.classList.remove('mode');
    }else{
        if (project1.className === "mode"){
            project1.classList.remove('mode');
        }else if(project2.className === "mode"){
            project2.classList.remove('mode');
        }else{
            project3.classList.remove('mode');
        }
    }
    portfolio.classList.add('mode');
    portfoliobtn.classList.add("selected");
    pos.classList.add('run');
}

aboutbtn.addEventListener("click",_about)
function _about(){
    window.history.pushState(state2,"aboutme","");
    if (portfoliobtn.className === "selected"){
        portfoliobtn.classList.remove("selected");
        portfolio.classList.remove('mode');
        pos.classList.remove('run');
    }else{
        if (project1.className === "mode"){
            project1.classList.remove('mode');
        }else if(project2.className === "mode"){
            project2.classList.remove('mode');
        }else{
            project3.classList.remove('mode');
        }
    }
    about.classList.add('mode');
    aboutbtn.classList.add("selected");
    
}

one.addEventListener('click',_one)
function _one(){
    window.history.pushState(state3,"project1","");
    if (portfoliobtn.className === "selected"){
        portfolio.classList.remove('mode');
        portfoliobtn.classList.remove('selected');
        pos.classList.remove('run');
    }else if(aboutbtn.className === "selected"){
        about.classList.remove('mode');
        aboutbtn.classList.remove('selected');
    }else{
        if(project2.className === "mode"){
            project2.classList.remove('mode');
        }else{
            project3.classList.remove('mode');
        }
    }
    project1.classList.add('mode');
    window.document.documentElement.scrollTop = 0;
}
two.addEventListener('click',_two)
function _two(){
    window.history.pushState(state4,"project2","");
    if (portfoliobtn.className === "selected"){
        portfolio.classList.remove('mode');
        portfoliobtn.classList.remove('selected');
        pos.classList.remove('run');
    }else if(aboutbtn.className === "selected"){
        about.classList.remove('mode');
        aboutbtn.classList.remove('selected');
    }else{
        if(project1.className === "mode"){
            project1.classList.remove('mode');
        }else{
            project3.classList.remove('mode');
        }
    }
    project2.classList.add('mode');
    window.document.documentElement.scrollTop = 0;
}

three.addEventListener('click',_three)
function _three(){
    window.history.pushState(state5,"project3","");
    if (portfoliobtn.className === "selected"){
        portfolio.classList.remove('mode');
        portfoliobtn.classList.remove('selected');
        pos.classList.remove('run');
    }else if(aboutbtn.className === "selected"){
        about.classList.remove('mode');
        aboutbtn.classList.remove('selected');
    }else{
        if(project1.className === "mode"){
            project1.classList.remove('mode');
        }else{
            project2.classList.remove('mode');
        }
    }
    project3.classList.add('mode');
    window.document.documentElement.scrollTop = 0;
}

type1.addEventListener('click',_type1)
function _type1(){
    window.history.pushState(state6,"project1","");
    if (project2.className ==="mode"){
        project2.classList.remove('mode');
    }else{
        project3.classList.remove('mode');
    }
    project1.classList.add('mode');
    window.document.documentElement.scrollTop = 0;
}

for (let i = 0; i < type2.length; i++) {
    type2[i].addEventListener("click", _type2);
}
function _type2(){
    window.history.pushState(state7,"project2","");
        if (project1.className === "mode"){
            project1.classList.remove('mode');
        }else{
            project3.classList.remove('mode');
        }
        project2.classList.add('mode');
        window.document.documentElement.scrollTop = 0;
}

type3.addEventListener('click',_type3)
function _type3(){
    window.history.pushState(state8,"project3","");
    if (project1.className ==="mode"){
        project1.classList.remove('mode');
    }else{
        project2.classList.remove('mode');
    }
    project3.classList.add('mode');
    window.document.documentElement.scrollTop = 0;
}

$("#gotop").click(function(){
    jQuery("html,body").animate({
        scrollTop:0
    },700);
});
$(window).scroll(function() {
    // $('#gotop').fadeIn("fast");
    if ( $(this).scrollTop() > 600){
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
});



  
  
    
    
    
       
  
  
