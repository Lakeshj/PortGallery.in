

function buildData(){
  var feedData = "Name: "+$("#feedname").val()+
      "\r\nLast Name: "+$("#txtara").val();

  return feedData;
}

// This will be executed when the document is ready


$(function(){
  // This will act when the submit BUTTON is clicked

  $("#feedform").submit(function(event){
    event.preventDefault();
    var feedData = buildData();
    window.location.href="data:application/octet-stream;base64,"+Base64.encode(feedData);
  });

  // This will act when the submit LINK is clicked

  $("#feedbtn").click(function(event){
    var feedData = buildData();
    $(this).attr('download','feedback.txt')
      .attr('href',"data:application/octet-stream;base64,"+Base64.encode(feedData));
  });
});


