var dwarves=["Doc", "Dopey", "Bashful", "Grumpy"];

function dwarfRollCall(dwarves) 
{
  for(var i=0; i<dwarves.length; i++)
  {
    
    var dwarf= [];
    dwarf[i] = "${i} . ${dwarves[i]}"
  }
  return dwarf
}




function summonCaptainPlanet(planeteerCall)
{
  var newplaneteefCall = [];
  for(var i=0; i<planeteerCall.length; i++)
  {
    newplaneteefCall[i]=planeteerCall[i].toUpperCase()
    
    
  
    
  }
  return newplaneteefCall.join('!');
}


function longPlaneteerCalls(shortwords) 
{
  for(var i=0; i<shortwords.length; i++)
  {
    var num = shortwords[i];
  }
  if(num.length > 4);
}


function findTheCheese (foods) 
{
  var cheesearray = ["camon bear", "Chatter", "Guoder"];
  for(var i =0; i<foods.length; i++)
  {
    if(cheesearray.includes(food[i]))
    {
      return foods[i];
    
  }
  
  
  }
}

function startwithB(bArray)
{
  var matchArray = [];
  for(var i= 0; i<bArray.length; i++)
  {
    if( bArray[i].matchesB())
    {
      matchArray.push(bArray[i])
    }
    
  }
  
  return matchArray
}