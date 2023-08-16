document.getElementById("accept-rules").addEventListener("click",(e)=>{
    console.log("ایولا")
})
document.getElementById("reject-rules").addEventListener("click",(e)=>{
    console.log("واقعا که")
})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
/* popoverTriggerList.forEach(item => {
    new bootstrap.Popover(item)
})  */ 
const mapResult = [...popoverTriggerList].map(item => new bootstrap.Popover(item))  
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
