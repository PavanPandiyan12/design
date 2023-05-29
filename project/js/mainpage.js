 const inputVal = document.getElementsByClassName('inputVal')[0];


var arrayOfTask = [];

var taskList={
 task: " ",
 time: 0
}

   

function showItem() {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        arrayOfTask = []

    } else {
        arrayOfTask = localItems;
    }

    let html = '';
    let itemShow = document.querySelector('.todoLists');
    arrayOfTask.forEach((data, index) => {
        var seconds =data.time%60;
        var secondsInMintutes=(data.time-seconds)/60
         var minutes= secondsInMintutes%60
        html += `
    <div class="todoList wow fadeInUp">
    <div class="todotext">
    <p class="pText wow fadeInUp">${data.task}</p>
    </div>
    <div class="buttons">
    <button onclick="AddRemainder(${data.time},${index});" class="btn1 wow fadeInUp" >Add Reminder</button>
    <button onclick="start(${data.time},${index})" class="start wow fadeInUp" >Start</button>
    <p class="timer wow fadeInUp">${minutes}:${seconds}</p>
    <button class="deleteTask wow fadeInUp" onClick="deleteItem(${index})">x</button>
    </div>
    
    </div>
    </div>
    `
    })
    itemShow.innerHTML = html;
 }
showItem()



function addTask(){

    if (inputVal.value.trim() != 0) {
        taskList.task = inputVal.value;  
        taskList.time = 0;
        arrayOfTask.push({...taskList})
        console.log(arrayOfTask)
        localStorage.setItem('localItem', JSON.stringify(arrayOfTask));
    }
   inputVal.value=''
    showItem()
}

function AddRemainder(data,index){     
    var person = prompt("Please enter your name",data);
    arrayOfTask[index].time=person 
    localStorage.setItem('localItem', JSON.stringify(arrayOfTask));  
    showItem()
}

function deleteItem(index) {
    arrayOfTask.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(arrayOfTask));
    showItem()
}

function start(data,index){
    let interval= setInterval(function timer(){
        if (data==0 && data<=0) {
            clearInterval(interval)   
            alert("your remainder")
         
        }

        else{

            data-=1;
           
            arrayOfTask[index].time=data
        }


        localStorage.setItem('localItem', JSON.stringify(arrayOfTask));  
        showItem()
    },1000)

}






























// function AddRemainder() 
    // var counter = 0;
    // var min = 0
    // let timerFunction  = setInterval(function(){
    //     counter++;
    //     if(counter >= 0){
    //         id=document.getElementById("timer");
    //         id.innerHTML= counter
    //     }
    //     // if(counter === 0){
    //     //     clearInterval(timerFunction)
    //     //     id.innerHTML=""
    //     // }
    // },1000); 

//     var counter = 5;
//     let timerFunction = setInterval(function () {
//         counter--;
//         if (counter >= 0) {
//             id = document.getElementById("timer");
//             id.innerHTML = counter;
//         }
//         if (counter === -1) {
//             clearInterval(timerFunction)
//             id.innerHTML = ""
//             alert("hi")
//         }
//     }, 1000);
//     function btn1() {
//         clearInterval(timer);
//     }
// }


