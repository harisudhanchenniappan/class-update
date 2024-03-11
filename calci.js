
 function backspace() {
    let a=document.getElementById("result").value
    let b=a.slice(0,-1)
    document.getElementById("result").value=b
}


 function dis(val) { 
    document.getElementById("result").value += val 
} 

/*function myFunction(event) { 

        document.getElementById("result").value += event.key; 
} */




function solve() { 
    let x = document.getElementById("result").value 
    
    let y = eval(x) 
    document.getElementById("result").value = y 
    
} 


function clr() { 
    document.getElementById("result").value = "" 
} 