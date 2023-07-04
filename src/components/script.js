function myFunction() {
    console.log('start');
    var x = document.getElementById("myTopnav");
    if(x!=null){
    if (x.className === "topnav") {
        console.log('medium');
        x.className += " responsive";
    } else {
        console.log('medium2');
        x.className = "topnav";
    }
    }
    console.log('end'); 
}
export default myFunction;