import React from 'react'


function download(fileUrl, fileName) {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
  }
  

function Resume() {
    return (
        <a href="../assets/David_Baron_resume.pdf" download="David_Baron_resume.pdf"><button class="btn btn-primary"><i class="fa fa-download"></i> Download</button></a>
    )
}
export default Resume