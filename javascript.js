const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

buttons.forEach( function (button){
    console.log(button);
    button.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "black";
        }
        else if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
        }
        else{
            body.style.backgroundColor = e.target.id;
            body.style.color = "black";
        }
    })
})

