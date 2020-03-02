var isMobile = false; //initiate as false
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
{
  isMobile=true;
}else{
    parent.document.location.replace("test-detect-mobile.html");
}
// -----------------Phát hiện thiết bị---------------------------