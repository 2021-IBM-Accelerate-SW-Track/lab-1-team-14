//Creating a close button for each item list
const myNodelist = document.getElementById("LI");
let i;
for(i = 0; i < myNodelist.clientHeight; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span)
}

//Click button to hide it
let close = document.getElementById("close")
let i;
for(i = 0; i <close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}
    //Check symbol
    let list = document.querySelector('ul');
    list.addEventListener('click', function(ev){
        if(ev.target.tagName === 'LI'){
            ev.target.classList.toggle('checked');
        }
    }, false)

    //Create new list item with button
    function newElement(){
        let li = document.createElement("li");
        let inputValue = document.getElementById("myInput").value;
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
        if(inputValue ==='')
        {
            alert("Cannot be empty")
        }
        else{
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for(i = 0; i <close.length; i++){
            close[i].onclick = function(){
                let div = this.parentElement;
                div.style.display = "none";
            }
        }

    }

