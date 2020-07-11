// Create specifications for a gear object
// Go quest by quest and add a new record, or append to an existing one

var quest = "Into the Mists"

var names = ["Legendary Mantle of Fury", "Mantle of Fury", "Legendary Warsword Shield", "Warsword Shield", "Legendary Blurfingered Gloves", "Blurfingered Gloves", "Legendary Vistani Fighter's Sash", "Vistani Fighter's Sash", "Legendary Silverthread Cloak", "Silverthread Cloak"];

var types = ["Cloak", "Cloak", "Small shield", "Small shield", "Gloves", "Gloves", "Belt", "Belt", "Cloak", "Cloak"]

var mls = [29, 10, 29, 10, 29, 10, 29, 10, 29];

var quests = ["Into the Mists, end chest", "Into the Mists, end chest", "Into the Mists, end chest", "Into the Mists, end chest", "Into the Mists, end chest", "Into the Mists, end chest", "Into the Mists, end chest", "Into the Mists, end chest", "Into the Mists, end chest", "Into the Mists, end chest"];
var locations = Object.assign([],quests);
for (i = 0; i < quests.length; i++){
  ii = quests[i].indexOf(",");
  locations[i] = quests[i].substring(ii+1,quests[i].length).trim()
  quests[i] = quests[i].substring(0,ii).trim()
}


const gearObj = function(name, type, enhancements, ml, quests, locations){
	return {"name": }
	
	return ...
}