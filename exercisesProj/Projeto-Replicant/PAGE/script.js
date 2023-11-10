document.querySelector("#radio1").checked = true;
AtivarBackground()

document.querySelectorAll("input[id^=rad]").forEach((e) => e.addEventListener("click", AtivarBackground))

function AtivarBackground(){
    var a = document.querySelectorAll("input[name='rad']")

    for(let i of a){
        if(i.checked){
            document.querySelector(`label[for=${i.id}]`).style.backgroundColor = 'red';
        }
        else{
            document.querySelector(`label[for=${i.id}]`).style.backgroundColor = 'transparent';
        }
    }
}
