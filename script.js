let fileInput = document.getElementById("fileInput");
let btnDownload = document.getElementById("download"); 

btnDownload.addEventListener("click",(e)=> {
    e.preventDefault(); 
    fetchFile(fileInput.value); 
}); 
function fetchFile(fileUrl){
    fetch(fileUrl)
    .then(result => result.blob())
    .then(result => {
        let url = URL.createObjectURL(result); 
        let aTag = document.createElement("a"); 
        aTag.href = url ; 
        aTag.download = "image.jpg"; 
        aTag.click();
    })
};
