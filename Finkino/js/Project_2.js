
// Load AJAX content into web page when body loads
function loadXMLDoc() {
// Create AJAX object
  var xmlhttp = new XMLHttpRequest();
  //Specify data / fetch URL
  xmlhttp.open("GET", "https://www.finnkino.fi/xml/TheatreAreas/", true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	  // Save data to variable
      var xmlDoc = xmlhttp.responseXML;
      //Fetch and store wanted data to variable from XML file
      var theatreID = xmlDoc.getElementsByTagName("ID");
      var theatreArea = xmlDoc.getElementsByTagName("Name");
      //Loop to get all the theatre ID's and names
      for(var i = 0; i < theatreID.length; i++) {
      //Get data from XML files
        var theatreIDs = theatreID[i].innerHTML;
        var theatreName = theatreArea[i].innerHTML;
      //Insert the data as option into selectbox
        document.getElementById("TheatreArea").innerHTML += '<option value="'+ theatreIDs + '">' + theatreName + '</option>';
      }
    }
  }
}




//Get movies and movie info when user selects certain theatre from selectbox
function getTheatreSchedule() {

  //Get theatreID from selectbox
  var id = document.getElementById("TheatreArea").value;

  var xmlhttp = new XMLHttpRequest();
  //Specify data / fetch URL
  xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=" + id, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status==200) {
      // Save data to variable
      var xmlDoc = xmlhttp.responseXML;

      //Fetch and store wanted data to variable from XML file
      var genre = xmlDoc.getElementsByTagName("Genres");
      var title = xmlDoc.getElementsByTagName("Title");
      var minutes = xmlDoc.getElementsByTagName("LengthInMinutes");
      var theatre = xmlDoc.getElementsByTagName("Theatre");
      var image = xmlDoc.getElementsByTagName("EventMediumImagePortrait")
      var showStart = xmlDoc.getElementsByTagName("dttmShowStart")

      //Create variable named "table"
      var table = `<table>
      <tr>
        <th>MOVIE POSTER</th>
        <th>MOVIE INFO</th>
      </tr>`;

      //Loop through the table
      for(var i = 0; i < title.length;i++) {

      //Insert data into the desired rows and columns // Testing how to set column and image size
        table += "<tr><td style='width:260px'><img style='width:70%' src =" + image[i].innerHTML +"></td>"+ "<td>"
        + "TITLE: " + title[i].innerHTML + "<br>"
        + "LOCATION: " + theatre[i].innerHTML + "<br>"
        + "GENRES: " + genre[i].innerHTML + "<br>"
        + "LENGTH: " + minutes[i].innerHTML + " min" + "<br>"
        + "TIME: " + showStart[i].innerHTML +  "</td></tr>";
      }
      console.log(id);
      //End table
      table += "</table>";
      }
      //Insert all the data to the table

      document.getElementById("tableData").innerHTML = table;
    }
  }
