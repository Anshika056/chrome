document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        let Myname = document.querySelector("#name").value;
        chrome.tabs.query({active:true},(tabs)=>{
            chrome.tabs.sendMessage(tabs[0].id,Myname);
           
    })
})

})
