let view=document.getElementById("screen")

const display = (number) => {
    view.value += number ;
}

const calculate = () =>{
    view.value = eval(view.value);
}

let nothing = () =>{
    view.value='';
}
