
console.log("this is for console only");

// image slider to show big img

function myFunction(imgs) {
        var expandImg = document.getElementById("expandedImg");
        var imgText = document.getElementById("imgtext");
        expandImg.src = imgs.src;
        imgText.innerHTML = imgs.alt;
        expandImg.parentElement.style.display = "block";
      }

console.log("this is after myFunction()");


console.log("this is for myFunct()");

// This will be executed when the document is ready


// Current date - http://stackoverflow.com/a/4929629/412329
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
dd='0'+dd
} 

if(mm<10) {
mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;


function saveFormAsTextFile()
// Based on https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
{
var textToSave =
  '---\n'+
  'Name: ' + document.getElementById('title').value 
      + '\n' + // =title
  'location: ' + document.getElementById('location').value
      + '\n' + // =location
  'date: ' + today 
      + '\n' + // =date - automatically puts today's date =todo: fix bug allowing going over 60 seconds, i.e. 61 seconds
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  '---\n' + '\n' + 
  'FeedBAck: ' + document.getElementById('content').value // =content;

var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
var fileNameToSaveAs = document.getElementById("title").value;

var downloadLink = document.createElement("a");
downloadLink.download = fileNameToSaveAs;
downloadLink.innerHTML = "Download File";
downloadLink.href = textToSaveAsURL;
downloadLink.onclick = destroyClickedElement;
downloadLink.style.display = "none";
document.body.appendChild(downloadLink);

downloadLink.click();
}

function destroyClickedElement(event)
{
document.body.removeChild(event.target);
}