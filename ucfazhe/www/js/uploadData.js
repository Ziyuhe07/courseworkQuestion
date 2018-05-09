// give variables to which information are useful to this app, name could be question ID to check who
 //set the question, a question with four answers are give. Also in Database, there are 7 columns as the 
 //same value the function constrained
function startDataUpload() {
	alert ("start data upload");
	var name = document.getElementById("name").value;
	var question = document.getElementById("question").value;
	var answera = document.getElementById("answera").value;
	var answerb = document.getElementById("answerb").value;
	var answerc = document.getElementById("answerc").value;
	var answerd = document.getElementById("answerd").value;
	alert(name + " "+ question + " "+answera);

	var postString = "name="+name +"&question="+question+"&answera="+answera+"&answerb="+answerb+"&answerc="+answerc+"&answerd="+answerd;



// get geometry values from question app, this coordinates will be converted into geoJSON file
 //so in the table of DB, it is adjusted rather than num 
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;
	
	
	


// Use radio to allow user chose the right answer
  //Also, other types could be used, such as check box, text box. I use the radio box to simplyfy the correct answer
   //However, it is not realised in the report.

//It should be carefully processed the order of answer, which impact the change div function in Quiz app
		if (document.getElementById("answera").checked) { // the first answer
			postString=postString+"&ranswer=answera";
 		}
		if (document.getElementById("answerb").checked) { // the second answer
 		 	postString=postString+"&ranswer=answerb";
		}
		if (document.getElementById("answerc").checked) { // the third answer
 		 	postString=postString+"&ranswer=answerc";
		}
		if (document.getElementById("answerd").checked) { // the forth answer
 		 	postString=postString+"&ranswer=answerd";
		}
	//processData outside the if loops, cause it process all above postString data
	processData(postString);
	
}

//This function allow client to transmit data to administrator's DataBase
	//The node.js server bridge client and server
var client;
function processData(postString) {
	client = new XMLHttpRequest();
	client.open('POST','http://developer.cege.ucl.ac.uk:30271/uploadData',true);
	client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	client.onreadystatechange = dataUploaded;
	client.send(postString);
	}
// Wait for the response from the data server, and process the response once it is received
	//Data upload function is tell whether the data is to database successefully or not
function dataUploaded() {
// this function listens out for the server to say that the data is ready
	if (client.readyState == 4) {
// change the DIV to show the response
		document.getElementById("dataUploadResult").innerHTML = client.responseText;
	}
}

