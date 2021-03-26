burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')




burger.addEventListner('click' , ()=>{
    navbar.classList.toggle('v-class-resp');
    navList.classList.toggle('h-nav-resp');  
    
})

var typed = new typed(".typing",{strings:["Content Creater" , "Artist", "Blogger" ,"Youtuber" , "at times Engineer"]
,typeSpeed :100, backSpeed:60, loop:true});

 