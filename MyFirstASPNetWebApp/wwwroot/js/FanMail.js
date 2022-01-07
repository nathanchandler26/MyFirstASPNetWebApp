////document.getElementById("btnSend").addEventListener("click", function () {
////    alert("From: " + document.getElementById("txtFrom").value + 
////        ", Subject: " + document.getElementById("txtSubject").value +
////        ", Message: " + document.getElementById("txtMessage").value);
////})


$("#btnSend").click(function () {
    alert("From: " + $("#txtFrom").val() +
        ", Subject: " + $("#txtSubject").val() +
        ", Message: " + $("#txtMessage").val());

    $("#picGanderson").fadeOut("slow");
    // This is another thing that jquery does. It does a lot with images. This makes the image fade out when you click send.
})

// these two codes are essentially the same thing. The bottom one is more compact and is the jquery way to do it.