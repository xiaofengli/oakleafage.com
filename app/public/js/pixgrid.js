function basename(path) {
   return path.split('/').reverse()[0];
}

function showModalImage() {
	var i=0;
	while(document.getElementById(i)!=null) {
  
		var modal = document.getElementById('Modal'+i);
 
		if (!modal) {
			break;
		}
 
	  // Get the image and insert it inside the modal - use its "alt" text as a caption
	  var img = document.getElementById(i);
	  var modalImg = document.getElementById("img"+i);
	  var captionText = document.getElementById("caption"+i);
	  img.onclick = function() {
	      modal.style.display = "block";
	      
	      //TODO what if a file name contains more than one .?
	      var fileName= basename(this.src).split('.');
	      var fileBaseName = fileName[0];
	      var fileExtension = fileName[1];
	      console.log(fileName);
	     
	      // Here there is a bug, the path is not ok
	      var temp="../images/schools/"+fileBaseName+"_big." + fileExtension; 
	      modalImg.src = temp;
	    
	      captionText.innerHTML = this.alt;
	  }
	  
	  // Get the <span> element that closes the modal
	  var span = document.getElementsByClassName("close")[i];
	  
	  // When the user clicks on <span> (x), close the modal
	  span.onclick = function() { 
	      modal.style.display = "none";
	  }
  
	  i=i+1;
	}
}

showModalImage(); 
