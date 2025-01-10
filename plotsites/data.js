// This code is top secret frfr

//This code it for getting the data


// This code is for showing the data.
// This piece of code was before prompt
const unused1 = '{"id":9066, "name":"Wallrunning", "owner":"__Fiery", "node":"1", "tags":"Parkour, Roleplay, Miscellaneous"}'
// Right now I havent hooked up the website to Firebase, so prompt() is the way to go right now.
const jsontoparse = '{"id":9066, "name":"Wallrunning", "owner":"__Fiery", "node":1, "tags":"Parkour, Roleplay, Miscellaneous"}'
// Parse the JSON, parse it NOW.
const obj = JSON.parse('{"id":9066, "name":"Wallrunning", "owner":"__Fiery", "node":"1", "tags":"Parkour, Roleplay, Miscellaneous", "icon":"Reinforced_Deepslate"}'); // DF needs this. I dont wanna use templates
// Do the tab appearance
const favicon = document.getElementById("favicon")
favicon.href = "https://minecraft.wiki/images/Invicon_" + obj.icon + ".png";
document.getElementById("plotnametabtitle").innerHTML = obj.name + " - Plotinum"
// Add the text elements
document.getElementById("plotnamebig").innerHTML = obj.name + " (" + obj.id + ")";
document.getElementById("plotname").innerHTML =  "Plot Name: "+ obj.name;
document.getElementById("owner").innerHTML = "Owner: "+ obj.owner;
document.getElementById("node").innerHTML = "Node: "+ obj.node;
document.getElementById("tags").innerHTML = "Tags: "+ obj.tags
const image = document.getElementById("icon");
image.src = "https://minecraft.wiki/images/Invicon_" + obj.icon + ".png";

// I did not make this. Check out the person who made this in credits.txt
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }