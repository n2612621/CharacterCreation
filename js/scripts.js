//TODO: 
//  Getting ahead of myself... need to input levels first


//empty data structure to hold ability tome information
var abilityTomes = {}
for (i = 0; i < abilityList.length; i++){
  abilityTomes[abilityList[i]] = 0
}

//TODO: 
//  When an abilty tome field changes update the structure


//Ability tomes are applied as a character levels up
const getAbiltyTomeEffect = function(tomeLevel, level){
	if(level >= 22){
		return(Math.min(tomeLevel,8))
	} else if(level >=19){
		return(Math.min(tomeLevel,7))
	} else if(level >=15){
		return(Math.min(tomeLevel,6))
	} else if(level >=11){
		return(Math.min(tomeLevel,5))
	} else if(level >=7){
		return(Math.min(tomeLevel,4))
	} else if(level >=3){
		return(Math.min(tomeLevel,3))
	} else {
		return(Math.min(tomeLevel,2))
	} 
}


const getSkillPoints = function(level, progression){
	var classMod = 2;
	if(["Barbarian", "Artificer", "Alchemist", "Druid", "Monk"].includes(progression)){
		classMod = 4;
	} else if(["Bard", "Ranger"].includes(progression)){
		classMod = 6;
	} else if(progression == "Rogue"){
		classMod = 8;
	}
	
	var skillPoints = classMod
	return( level == 1 ? skillPoints*4, skillPoints )
}


