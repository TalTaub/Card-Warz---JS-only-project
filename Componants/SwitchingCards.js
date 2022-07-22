/* this function make the first card disapear and the second one apear instead by id.  */
function switchingCards(id1,id2){
    let i=1;
    var inter = setInterval(()=>{
        if (i>0){
            i-=0.25; 
            document.getElementById(id1).style.opacity=i;
            document.getElementById(id2).style.opacity=1-i;
        }
        else{
            clearInterval(inter);
        }
    },0);
}