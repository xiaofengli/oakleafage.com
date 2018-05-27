
var i=0;
while(document.getElementById(i)!=null){
  
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
  /*
  if(document.getElementById('Modal'+(i+1))==null){
    break;
  }
  */
  i=i+1;
}
