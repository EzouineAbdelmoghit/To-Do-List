var input = document.getElementById("input")
var addBtn=document.getElementById("add-btn")
var taskBox=document.querySelector(".Task-box")
var tab=[]
input.value=""
addBtn.addEventListener("click",()=>{
    var ok=tab.map((e)=>{
        return(e==input.value)?true:false
    })
    if(input.value!="" && !ok[ok.length-1]){
        console.log(!ok[ok.length-1])
        var timer=new Date()
        
        var div=document.createElement("div")
        var text=document.createElement("p")
        var btn=document.createElement("button")
        var time=document.createElement("p")
        var checkBox=document.createElement("input")
        function add(){
            div.classList.add("task")
            text.classList.add("text")
            time.classList.add("text2")
            checkBox.setAttribute("type","checkbox")
            text.innerHTML=input.value
            time.innerHTML=`${timer.toLocaleDateString()} ${timer.toLocaleTimeString()}`
            div.appendChild(text)
            div.appendChild(time)
            btn.innerHTML="delete"
            console.log()
            btn.addEventListener("click",function(e){
                console.log(e.target.parentElement.firstChild);
                taskBox.removeChild(e.target.parentNode)
            })
            checkBox.addEventListener("click",function(e){
                if(checkBox.checked)
                e.target.parentElement.firstChild.style.textDecoration="line-through"
                else
                e.target.parentElement.firstChild.style.textDecoration= "none"
            })
            div.appendChild(btn)
            div.appendChild(checkBox)
            taskBox.appendChild(div)
        }
        add()
        tab.push(input.value)
        input.value=""
    }
    }
)


