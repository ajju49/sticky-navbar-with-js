const nav = document.querySelector('.nav')
window.addEventListener('scroll',abc)

function abc() {
    // console.log(window.scrollY, nav.offsetHeight);
     // here our nav offset height is 67 (which is height of nav)
    //comment out this to check how we set scroll effect
    //here by window scrollY we see how page is moving
    //by nav.offset height we chk nav bar
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
    
    // we put condition that if windows scroll height 
    //is greater than navbar's off set height +150
    //(i.e.67+150 =217)thn active class get added

}