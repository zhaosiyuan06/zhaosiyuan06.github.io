$(function(){
    var zuopin=$('.zuopin1');
    var shows=$('.shows');
    for(var i=0;i<zuopin.length;i++){
        zuopin[i].index=i;
        zuopin[i].onmouseover=function(){
            for(var j=0;j<shows.length;j++){
                shows[j].style.display='none';
                zuopin[j].style.color="yellow";
                zuopin[j].style.fontSize="20px";

            }
            shows[this.index].style.display='block'
            zuopin[this.index].style.color="blue";
            zuopin[this.index].style.fontSize="25px";


        }
    }


})