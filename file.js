<html>


var zip = require('jszip');
zip.file("Hello.txt", "Hello World\n");
var img = zip.folder("images");
img.file("background.jpeg", imgData, {base64: true});
img.file("avengers.gif", imgData, {base64: true});
zip.generateAsync({type:"blob"})
.then(function(content) {
    // see FileSaver.js
    saveAs(content, "example.zip");
});


</html>
