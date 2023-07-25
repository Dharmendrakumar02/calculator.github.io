let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
function del(){
    input.value=input.value.length - 1;
}

let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
            string="";

        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            input.value=input.value.slice(0,-1);
            string="";
        }
        else{
            string+=e.target.innerHTML;
            input.value = string;
        }
    })
})
