let notificationButton = document.querySelector(".btn");

function showNotification(){
    
    if(notificationButton)
    {
        onClickMessage()
    }
   
}
let fireNotification =  () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted" && notificationButton) {
            showNotification();
        }
    })
}
let onLoad = ()=>{
    // fireNotification()
    new Notification("welcome Guys")
}
let onClickMessage = () =>{
    // fireNotification()
    new Notification("You clicked me" , {
        body:"am i working fine?"
    })
}
window.addEventListener("load" , onLoad())
// when the page is loaded
// window.addEventListener("load", fireNotification())


// when you click on the button 


notificationButton.addEventListener("click" ,  fireNotification) 