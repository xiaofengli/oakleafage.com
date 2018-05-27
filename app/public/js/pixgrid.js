
console.log(window.location.pathname);
//https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript
for(i=0;i<23;i++){

    var modal = document.getElementById('Modal'+i);
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    
    var img = document.getElementById(i);
    var modalImg = document.getElementById("img"+i);
    var captionText = document.getElementById("caption"+i);
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[i];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
  }