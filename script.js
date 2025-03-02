//for button one
let completeBtn1 = document.getElementById("btn-complete")
let btn1 = completeBtn1.addEventListener('click',function(){
    alert("Board uploaded Successfully")
    let taskP=document.getElementById('task-assigned').innerText
    let convertedTaskP = parseInt(taskP)
    convertedTaskP = convertedTaskP-1;
    document.getElementById('task-assigned').innerText=convertedTaskP;
    if(convertedTaskP===0){
        alert("congrats!!! You have completed all the current task")
    }
    let checkBoxP = document.getElementById('check-box').innerText
    let convertedCheckBox = parseInt(checkBoxP);
    convertedCheckBox = convertedCheckBox+1;
    document.getElementById('check-box').innerText=convertedCheckBox
    let activityCheck = document.getElementById('activity-check1')
    activityCheck.style.display='block'
    let time = document.getElementById('current-time1')
    let d = new Date();

    time.innerHTML = d.toLocaleTimeString()
    let workMode = document.getElementById('work-mode1')
    workMode.innerText="Fix Mobile Button Issue"
   
    completeBtn1.setAttribute('disabled',true)



})

    
//for button two
let completeBtn2 = document.getElementById("btn-complete-two")
completeBtn2.addEventListener('click',function(){
    alert("Board uploaded Successfully")
    let taskP=document.getElementById('task-assigned').innerText
    let convertedTaskP = parseInt(taskP)
    convertedTaskP = convertedTaskP-1;
    document.getElementById('task-assigned').innerText=convertedTaskP;
    if(convertedTaskP===0){
        alert("congrats!!! You have completed all the current task")
    }
    let checkBoxP = document.getElementById('check-box').innerText
    let convertedCheckBox = parseInt(checkBoxP);
    convertedCheckBox = convertedCheckBox+1;
    document.getElementById('check-box').innerText=convertedCheckBox
    let activityCheck = document.getElementById('activity-check2')
    activityCheck.style.display='block'
    let time = document.getElementById('current-time2')
    let d = new Date();

    time.innerHTML = d.toLocaleTimeString()

    let workMode = document.getElementById('work-mode2')
    workMode.innerText="Add Dark Mode"
    completeBtn2.setAttribute('disabled',true)


})
//for button three
let completeBtn3 = document.getElementById("btn-complete-three")
completeBtn3.addEventListener('click',function(){
    alert("Board uploaded Successfully")
    let taskP=document.getElementById('task-assigned').innerText
    let convertedTaskP = parseInt(taskP)
    convertedTaskP = convertedTaskP-1;
    document.getElementById('task-assigned').innerText=convertedTaskP;
    if(convertedTaskP===0){
        alert("congrats!!! You have completed all the current task")
    }
    let checkBoxP = document.getElementById('check-box').innerText
    let convertedCheckBox = parseInt(checkBoxP);
    convertedCheckBox = convertedCheckBox+1;
    document.getElementById('check-box').innerText=convertedCheckBox
    let activityCheck = document.getElementById('activity-check3')
    activityCheck.style.display='block'
    let time = document.getElementById('current-time3')
    let d = new Date();

    time.innerHTML = d.toLocaleTimeString()

     let workMode = document.getElementById('work-mode3')
    workMode.innerText="Optimize Home page "
  
    completeBtn3.setAttribute('disabled',true)


})
//for button fourth
let completeBtn4 = document.getElementById("btn-complete-fourth")
completeBtn4.addEventListener('click',function(){
    alert("Board uploaded Successfully")
    let taskP=document.getElementById('task-assigned').innerText
    let convertedTaskP = parseInt(taskP)
    convertedTaskP = convertedTaskP-1;
    document.getElementById('task-assigned').innerText=convertedTaskP;
    if(convertedTaskP===0){
        alert("congrats!!! You have completed all the current task")
    }
    let checkBoxP = document.getElementById('check-box').innerText
    let convertedCheckBox = parseInt(checkBoxP);
    convertedCheckBox = convertedCheckBox+1;
    document.getElementById('check-box').innerText=convertedCheckBox
    let activityCheck = document.getElementById('activity-check4')
    activityCheck.style.display='block'
    let time = document.getElementById('current-time4')
    let d = new Date();

    time.innerHTML = d.toLocaleTimeString()

    let workMode = document.getElementById('work-mode4')
    workMode.innerText="Add new emoji 🤲 "
   
    completeBtn4.setAttribute('disabled',true)


})
//for button five
let completeBtn5 = document.getElementById("btn-complete-five")
completeBtn5.addEventListener('click',function(){
    alert("Board uploaded Successfully")
    let taskP=document.getElementById('task-assigned').innerText
    let convertedTaskP = parseInt(taskP)
    convertedTaskP = convertedTaskP-1;
    document.getElementById('task-assigned').innerText=convertedTaskP;
    if(convertedTaskP===0){
        alert("congrats!!! You have completed all the current task")
    }
    let checkBoxP = document.getElementById('check-box').innerText
    let convertedCheckBox = parseInt(checkBoxP);
    convertedCheckBox = convertedCheckBox+1;
    document.getElementById('check-box').innerText=convertedCheckBox
    let activityCheck = document.getElementById('activity-check5')
    activityCheck.style.display='block'
    let time = document.getElementById('current-time5')
    let d = new Date();

    time.innerHTML = d.toLocaleTimeString()

    let workMode = document.getElementById('work-mode5')
    workMode.innerText="Integrate OpenAI API  "
 
    completeBtn5.setAttribute('disabled',true)
   


})
//for button six
let completeBtn6 = document.getElementById("btn-complete-six")
completeBtn6.addEventListener('click',function(){
    alert("Board uploaded Successfully")
    let taskP=document.getElementById('task-assigned').innerText
    let convertedTaskP = parseInt(taskP)
    convertedTaskP = convertedTaskP-1;
    document.getElementById('task-assigned').innerText=convertedTaskP;
    if(convertedTaskP===0){
        alert("congrats!!! You have completed all the current task")
    }
    let checkBoxP = document.getElementById('check-box').innerText
    let convertedCheckBox = parseInt(checkBoxP);
    convertedCheckBox = convertedCheckBox+1;
    document.getElementById('check-box').innerText=convertedCheckBox
    let activityCheck = document.getElementById('activity-check6')
    activityCheck.style.display='block'
    //time
    let time = document.getElementById('current-time6')
    let d = new Date();
     time.innerHTML = d.toLocaleTimeString()
     let workMode = document.getElementById('work-mode6')
    workMode.innerText="Improve Job searching "
 
    completeBtn6.setAttribute('disabled',true)
 


})


//clear history
let clearHistory = document.getElementById("clear-history")
clearHistory.addEventListener('click',function(){
    document.getElementById('activity-check1').style.display='none'
    document.getElementById('activity-check2').style.display='none'
    document.getElementById('activity-check3').style.display='none'
    document.getElementById('activity-check4').style.display='none'
    document.getElementById('activity-check5').style.display='none'
    document.getElementById('activity-check6').style.display='none'
})
//discover new something
let discoverBlog = document.getElementById('discover-blog')
discoverBlog.addEventListener('click',function(){
    window.location.href="./blog.html"
})

/**
 * challenge part
 */
let themeBtn = document.getElementById('theme-btn')
let colors = ['red','pink','violet','indigo','seagreen','peru',,'aqua']
let i=0;
themeBtn.addEventListener('click',function(){
    
        document.body.style.backgroundColor=colors[i]
        i=(i+1)%colors.length
    
})
let d = document.getElementById('time-date').innerHTML=new Date().toLocaleDateString()




