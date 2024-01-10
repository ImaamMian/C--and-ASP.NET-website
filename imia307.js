function openPage(pageName, elmnt) {
    
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
   // tablinks[i].className = tablinks[i].className.replace(" active", "");
   tablinks[i].style.backgroundColor = "";
   tablinks[i].style.color = "";
  }
  document.getElementById(pageName).style.display = "block";
  //document.getElementById(pageName).currentTarget.className += " active";
  elmnt.style.backgroundColor = "white";
  elmnt.style.color = "black";
  }
document.getElementById("Home").style.display = "block"
//document.cookie = "SameSite=None"


//if i change the username and password to "bob" it works so just find a way to enter login details on website
form.addEventListener('submit',(e) =>{
  e.preventDefault()
})

formRegister.addEventListener('submit',(e) =>{
  e.preventDefault()
})

formcomment.addEventListener('submit',(e) =>{
  e.preventDefault()
})

const loginpass = (res) =>{
  let htmlString = res;

  const paragraph = document.getElementById("status")
  paragraph.innerHTML = htmlString
  if(res=="200"){
    let loginString = document.getElementById("username").value;
    const loginparagraph = document.getElementById("loginText")
    loginparagraph.innerHTML = "logged in as "+ loginString
    document.getElementById("loginText2").innerHTML = "logged in as "+ loginString
    document.getElementById("loginText3").innerHTML = "logged in as "+ loginString
    document.getElementById("loginText4").innerHTML = "logged in as "+ loginString
    document.getElementById("loginText5").innerHTML = "logged in as "+ loginString
    document.getElementById("loginText6").innerHTML = "logged in as "+ loginString

    document.getElementById('defaultOpen').style.width = "20%"
    document.getElementById('shop').style.width = "20%"
    document.getElementById('register').style.width = "20%"
    document.getElementById('chess').style.width = "20%"
    document.getElementById('guest').style.width = "20%"
    //the 2 lines below change to homepag and then remove the user login page
    document.getElementById("Home").style.display = "block";
    document.getElementById("defaultOpen").style.backgroundColor = "white";
    document.getElementById("UserLogin").style.display = "none";


    document.getElementById("loginText").style.visibility = "visible";
    document.getElementById("loginText2").style.visibility = "visible";
    document.getElementById("loginText3").style.visibility = "visible";
    document.getElementById("loginText4").style.visibility = "visible";
    document.getElementById("loginText5").style.visibility = "visible";
    document.getElementById("loginText6").style.visibility = "visible";

    document.getElementById("logOut").style.visibility = "visible";
    document.getElementById("logOut2").style.visibility = "visible";
    document.getElementById("logOut3").style.visibility = "visible";
    document.getElementById("logOut4").style.visibility = "visible";
    document.getElementById("logOut5").style.visibility = "visible";
    document.getElementById("logOut6").style.visibility = "visible";
    
    //document.getElementById('Login').style.visibility = 'hidden';

    //document.getElementById('Login').style.display="none"
    document.getElementById('Login').style.display="none"
  }
}

const version = () => {
  let headers = new Headers();
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  var value;
  

  headers.set('Authorization', 'Basic ' + btoa(username + ":" + password)); 
  //headers.set('Authorization', 'Basic ' + btoa("bob" + ":" + "bob"));
  //document.getElementById("username").value = ""
  //document.getElementById("password").value= ""

  const res = fetch("https://cws.auckland.ac.nz/gas/api/VersionA",
  {
    //mode: 'cors',
    method: "GET",
    headers: headers,
  })
.then((response) => response.status)
.then((data) => loginpass(data))

/*
document.getElementById('defaultOpen').style.width = "20%"
document.getElementById('shop').style.width = "20%"
document.getElementById('register').style.width = "20%"
document.getElementById('chess').style.width = "20%"
document.getElementById('guest').style.width = "20%"
//the 2 lines below change to homepag and then remove the user login page
document.getElementById("Home").style.display = "block";
document.getElementById("UserLogin").style.display = "none";


document.getElementById("loginText").style.visibility = "visible";
document.getElementById("logOut").style.visibility = "visible";
//document.getElementById('Login').style.visibility = 'hidden';

//document.getElementById('Login').style.display="none"
document.getElementById('Login').style.display="none"*/
}

const logout = () => {

  /*var tablinks;
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
   // tablinks[i].className = tablinks[i].className.replace(" active", "");
   tablinks[i].style.backgroundColor = "";
  }*/
  document.getElementById("Login").style.backgroundColor = "";
  document.getElementById("username").value = ""
  document.getElementById("password").value = ""
  document.getElementById("status").innerHTML = ""
  document.getElementById('defaultOpen').style.width = "16.66%"
  document.getElementById('shop').style.width = "16.66%"
  document.getElementById('register').style.width = "16.66%"
  document.getElementById('chess').style.width = "16.66%"
  document.getElementById('guest').style.width = "16.66%"
  document.getElementById('Login').style.display="initial"
  document.getElementById('Login').style.width = "16.66%"
  document.getElementById("loginText").style.visibility = "hidden";
  document.getElementById("loginText2").style.visibility = "hidden";
  document.getElementById("loginText3").style.visibility = "hidden";
  document.getElementById("loginText4").style.visibility = "hidden";
  document.getElementById("loginText5").style.visibility = "hidden";
  document.getElementById("loginText6").style.visibility = "hidden";

  document.getElementById("logOut").style.visibility = "hidden";
  document.getElementById("logOut2").style.visibility = "hidden";
  document.getElementById("logOut3").style.visibility = "hidden";
  document.getElementById("logOut4").style.visibility = "hidden";
  document.getElementById("logOut5").style.visibility = "hidden";
  document.getElementById("logOut6").style.visibility = "hidden";
}
async function register() {
  var UserName = document.getElementById("usernameregister").value
  var Password = document.getElementById("passwordregister").value
  var Address = document.getElementById("addressregister").value

  await fetch("https://cws.auckland.ac.nz/gas/api/Register",{
    //mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      username:UserName,
      password:Password,
      address: Address
    }),
    headers:{
      "Content-Type":"application/json; charset=UTF-8"
    }
  })
  .then((response) => response.text())
  .then((data) => alert(data));
  document.getElementById("usernameregister").value = ""
  document.getElementById("passwordregister").value = ""
  document.getElementById("addressregister").value = ""
}

const comment = () => {
  var comment = document.getElementById("guestcomment").value
  var commentname = document.getElementById("usernamecomment").value
  

  fetch("https://cws.auckland.ac.nz/gas/api/Comment",{
    //mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      comment:comment,
      name:commentname
    }),
    headers:{
      "Content-Type":"application/json; charset=UTF-8"
    }
  })
  .then((response) => response.text())
  .then((data) => document.getElementById("iframe").src ="https://cws.auckland.ac.nz/gas/api/Comments");
  var comment = document.getElementById("guestcomment").value = ""
  var commentname = document.getElementById("usernamecomment").value = ""
}

const getItems = () => {
  const fetchpromise = fetch("https://cws.auckland.ac.nz/gas/api/AllItems",
  {
    //mode: 'cors',
    headers: {
      "Accept":"application/json",
    },
  });
  const streampromise = fetchpromise.then((response) => response.json());
  streampromise.then((data) => showDetails(data));
}

const showDetails = (items) =>{
  //let htmlString = "<tr class = 'table'><td>Order Pic</td><td>Item description</td></tr>";
  let htmlString = "";

  const showItem = (item) =>{
    htmlString += `<tr><td><img src="https://cws.auckland.ac.nz/gas/api/ItemPhoto/${item.id}" width =200></td><td> ${item.name}<br><br> ${item.description}<br><br>Price: $${item.price}<br><br> <button class = "buybtn" id = "${item.id}" onclick ="buyItem(${item.id})">Buy Item</button><br><br></td></tr>`;
  }
  items.forEach(showItem)
  htmlString +="<br><br><br><br>"

  const ourTable = document.getElementById("store")
  ourTable.innerHTML = htmlString
}
getItems();

const buyItem = (itemID) =>{
  let headers = new Headers();
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

  const fetchpromise = fetch(`https://cws.auckland.ac.nz/gas/api/PurchaseItem/${itemID}`,
  {
    //mode: 'cors',
    headers: {
      "Accept":"application/json",
      'Authorization': 'Basic ' + btoa(username + ":" + password),
    },
  });
  const streampromise = fetchpromise.then((response) => response.json()).catch(e =>{document.getElementById("popuptext").innerHTML ="Purchase failed please try logging in"});
  streampromise.then((data) => document.getElementById("popuptext").innerHTML = "Thank you "+ JSON.parse(data).userName+ " for buying product " + JSON.parse(data).productID
  ).catch(e =>{console.log(e)});

  var span = document.getElementsByClassName("close")[0];
  document.getElementById("popupdiv").style.display = "block";
  span.onclick = function() {
    document.getElementById("popupdiv").style.display = "none";
  }
  //const streampromise = fetchpromise.then((response) => response.json());
  //streampromise.then((data) => checkBuy(data));
}
/*
const checkBuy = (res) =>{
  if(res.status == "200"){
    alert("Thank you "+ res.json().userName+ " for buying product " + res.json().productID)
  }
  else{
    alert("Purchase failed please try logging in")
    alert(res)
  }
}*/

const searchBar = document.getElementById("searchBar")
searchBar.addEventListener('keyup', (e) => {
  console.log(e.target.value)
  if(e.target.value!=""){
  getSearchItems(e.target.value)
  }
  else{
    getItems();
  }
})


const getSearchItems = (term) => {
  const fetchpromise = fetch("https://cws.auckland.ac.nz/gas/api/Items/"+term,
  {
    //mode: 'cors',
    headers: {
      "Accept":"application/json",
    },
  });
  const streampromise = fetchpromise.then((response) => response.json());
  streampromise.then((data) => showSearchDetails(data));
}

const showSearchDetails = (items) =>{
  //let htmlString = "<tr class = 'table'><td>Order Pic</td><td>Item description</td></tr>";
  let htmlString = "";

  const showSearchItem = (item) =>{
    htmlString += `<tr><td><img src="https://cws.auckland.ac.nz/gas/api/ItemPhoto/${item.id}" width =200></td><td> ${item.name}<br><br> ${item.description}<br><br>Price: $${item.price}<br><br> <button class = "buybtn" id = "${item.id}" onclick ="buyItem(${item.id})">Buy Item</button><br><br></td></tr>`;
  }
  items.forEach(showSearchItem)
  htmlString +="<br><br><br><br>"

  const ourTable = document.getElementById("store")
  ourTable.innerHTML = htmlString
}

const footerUpdate = (res) => {
  let htmlString = res;

  const footer = document.getElementById("versionfooter")
  footer.innerHTML = "Version " + htmlString
}

const getversion = () => {
  fetch("https://cws.auckland.ac.nz/gas/api/Version")
  .then((response) => response.text())
  .then((data) => footerUpdate(data));

}

getversion()

let piecemoved;
const dragstartfunction = (ev) =>{
  ev.dataTransfer.setData("text/plain",ev.target.id);
  document.getElementById("piecemovename").innerHTML = ev.target.id
  piecemoved = ev.target.id;
}

const dragoverfunction = (ev) =>{
  ev.preventDefault();
}
let celltarget;
let binstring = "";
const dropfunction = (ev) =>{
  if(ev.dataTransfer !== null){
    const data = ev.dataTransfer.getData("text/plain")
    //alert(document.getElementById(ev.target.id).tagName == 'IMG')
    if(document.getElementById(ev.target.id).tagName != 'IMG'){
      if(document.getElementById(ev.target.id).childElementCount==0){
        ev.target.appendChild(document.getElementById(data))
        celltarget = ev.target.id
        document.getElementById("cellmovedtoname").innerHTML = ev.target.id
        binstring += piecemoved + " moved to " + celltarget + "; "
      }
    }
  }
}

//let binstring = "";
const removePiece = (ev) =>{
  if(ev.dataTransfer !== null){
    const data = ev.dataTransfer.getData("text/plain")
    binstring += piecemoved + " moved to bin; "
    document.getElementById("cellmovedtoname").innerHTML = ev.target.id
    document.getElementById(data).remove();
  }
}
let myMoveRes;
async function myMove(){
  var gameId = document.getElementById("gameID").innerHTML 
  let chesspiece = document.getElementById("piecemovename").innerHTML;
  let cellmoved = document.getElementById("cellmovedtoname").innerHTML;

  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  /*
  if(binstring == ""){
    var movevalue = "moved " + piecemoved + " to " + celltarget
  }
  if(binstring != ""){
    var movevalue = binstring + ";moved " + piecemoved + " to " + celltarget
  }*/
  if(piecemoved!== undefined && celltarget!==undefined){
    await fetch("https://cws.auckland.ac.nz/gas/api/MyMove",{
      //mode: 'cors',
      method: 'POST',
      body: JSON.stringify({
        gameId:gameId,
        move:binstring, 
      }),
      headers:{
        "Content-Type":"application/json; charset=UTF-8",
        'Authorization': 'Basic ' + btoa(username + ":" + password),
      }
    })
    .then((response) => response.text())
    //.then((data) => alert(data))
    .then((data) => myMoveRes = data)
    /*
    if(binstring == ""){
      document.getElementById("pairmsg").innerHTML = "Your move: moved " + piecemoved + " to " + celltarget
    }
    if(binstring != ""){
      document.getElementById("pairmsg").innerHTML =  "Your move: " + binstring + ";moved " + piecemoved + " to " + celltarget
    }*/
    if(myMoveRes == "no such game id"){
      document.getElementById("pairme").innerHTML  = "Pair Me";
      quitGame()
    }
    else{
      document.getElementById("pairme").innerHTML  = "Get Their Move"
      document.getElementById("pairmsg").innerHTML = binstring
      piecemoved = undefined
      celltarget = undefined
      binstring = ""
    }
  }
  else{
    document.getElementById("pairmsg").innerHTML = "please make a valid move"
  }
  
  //document.getElementById("theirmove").style.visibility = "visible";
  //document.getElementById("makemove").style.visibility = "hidden";
}
let theirmovedata;
async function theirMove(){
  var gameId = document.getElementById("gameID").innerHTML 
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  const res = await fetch("https://cws.auckland.ac.nz/gas/api/TheirMove?gameId="+gameId,
  {
    method: "GET",
    headers:{
      'Authorization': 'Basic ' + btoa(username + ":" + password),
    }
  })
  .then((response) => response.text())
  //.then((data) => document.getElementById("pairmsg").innerHTML = "Their move: " + data)
  .then((data) => theirmovedata = data)
  if(theirmovedata == "(no such gameId)"){
    document.getElementById("pairme").innerHTML  = "Pair Me";
    quitGame()
  }
  else if(theirmovedata !== "" ){
    document.getElementById("pairme").innerHTML  = "Send My Move";
    document.getElementById("pairmsg").innerHTML = "Their move: " + theirmovedata
  }
  else{
    document.getElementById("pairmsg").innerHTML = "Opponent has not moved yet click again to see if they have moved"
  }
  //document.getElementById("makemove").style.visibility = "visible";
  //document.getElementById("theirmove").style.visibility = "hidden";
}


const pairMe = () =>{
  let headers = new Headers();
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  //headers.set('Authorization', 'Basic ' + btoa(username + ":" + password)); 
  headers.set('Authorization', 'Basic ' + btoa(username + ":" + password)); 
  const res = fetch("https://cws.auckland.ac.nz/gas/api/PairMe",
  {
    method: "GET",
    headers:{
      "Content-Type":"application/json; charset=UTF-8",
      'Authorization': 'Basic ' + btoa(username + ":" + password),
    }
  })
.then((response) => response.json())
//.then((data) => alert(data.state))
//.then((data) => alert(JSON.stringify(data)))
.then((data) => pairMeMessage(data)).catch(e =>{alert("error please try logging in and try again")});
}

const pairMeMessage = (res) =>{
  //alert(res.state)
  //JSON.stringify(res.state)
  const gameidparagraph = document.getElementById("gameID")
  gameidparagraph.innerHTML = res.gameId
  let gameIDvariable = res.gameId
  const paragraph = document.getElementById("pairmsg")
  console.log(res.state)

  if(res.state!=="progress"){
    paragraph.innerHTML = "Waiting for another player to join click button again to check if a user has been paired"
  }
  if(res.state =="progress"){
    if(res.player1 == document.getElementById("username").value){
      paragraph.innerHTML = res.player1 + " you have been paired with " + res.player2 + ". Your pieces are white" 
      //document.getElementById("pairme").style.visibility = "hidden";
      //document.getElementById("makemove").style.visibility = "visible";
      //document.getElementById("pairme").innerHTML  = "Send My Move";
      if(res.lastMovePlayer1 == "" && res.lastMovePlayer2 == ""){
        document.getElementById("pairme").innerHTML  = "Send My Move";
      }
      if(res.lastMovePlayer1!="" && res.lastMovePlayer2 == ""){
        document.getElementById("pairme").innerHTML  = "Get Their Move";
      }
      if(res.lastMovePlayer1 == "" && res.lastMovePlayer2 != ""){
        document.getElementById("pairme").innerHTML  = "Send My Move";
      }
    }
    if(res.player2 == document.getElementById("username").value){
      paragraph.innerHTML = res.player2 + " you have been paired with " + res.player1 + ". Your pieces are black" 
      //document.getElementById("pairme").style.visibility = "hidden";
      //document.getElementById("theirmove").style.visibility = "visible";
      //document.getElementById("pairme").innerHTML  = "Get Their Move";
      if(res.lastMovePlayer1 == "" && res.lastMovePlayer2 == ""){
        document.getElementById("pairme").innerHTML  = "Get Their Move";
      }
      if(res.lastMovePlayer1!="" && res.lastMovePlayer2 == ""){
        document.getElementById("pairme").innerHTML  = "Send My Move";
      }
      if(res.lastMovePlayer1 == "" && res.lastMovePlayer2 != ""){
        document.getElementById("pairme").innerHTML  = "Get Their Move";
      }
    }
    
  }
}

const quitGame = () =>{
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  var gameId = document.getElementById("gameID").innerHTML 
  //document.getElementById("pairme").style.visibility = "visible";
  //document.getElementById("makemove").style.visibility = "hidden";
  //document.getElementById("theirmove").style.visibility = "hidden";
  document.getElementById("pairme").innerHTML  = "Pair Me";
  const res = fetch("https://cws.auckland.ac.nz/gas/api/QuitGame?gameId="+gameId,
  {
    method: "GET",
    headers:{
      'Authorization': 'Basic ' + btoa(username + ":" + password),
    }
  })
.then((response) => response.text())
//.then((data) => alert(data.state))
//.then((data) => alert(JSON.stringify(data)))
.then((data) => document.getElementById("pairmsg").innerHTML = data).catch(e =>{alert("error please try logging in and try again")});
//document.getElementById("gameID").value = "GAME OVER"
}

const selectFunction = () =>{
  if(document.getElementById("pairme").innerHTML == "Pair Me"){
    pairMe()
  }

  if(document.getElementById("pairme").innerHTML == "Send My Move"){
    myMove()
  }
  if(document.getElementById("pairme").innerHTML == "Get Their Move"){
    theirMove()
  }
}


  