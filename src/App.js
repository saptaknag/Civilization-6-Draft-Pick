import { useEffect, useState } from 'react';
import './App.css';
import Banned from './Banned.jsx';
import Picked from './Picked.jsx';
import leaders from './leaders.js';
import Button from './Button.jsx';

function App() {

const [b1,setb1]=useState([leaders[0],leaders[0],leaders[0]]);
const [b2,setb2]=useState([leaders[0],leaders[0],leaders[0]]);
const [p1,setp1]=useState([leaders[0],leaders[0],leaders[0]]);
const [p2,setp2]=useState([leaders[0],leaders[0],leaders[0]]);
const [turnTeam,setTurnTeam]=useState(0); //A=0,B=1
const [turnType,setTurnType]=useState(0); //ban=0,pick=1
const [turnCount,setTurnCount]=useState(0);
const [selected,setSelected]=useState(""); 

const turnTeamList=[0,1,0,1,0,1,1,0,0,1,0,1];
const turnTypeList=[0,0,0,0,1,1,1,1,0,0,1,1];

useEffect(() => {
  setTurnType(turnTypeList[turnCount]);
  setTurnTeam(turnTeamList[turnCount]);
},[turnCount]);

function findex(arr)
{
  let i;
  for(i=0;i<arr.length;i++)
  {
    if(arr[i].name=="unpicked")
    {
      return(i);
    }
  }
}

function replace(arr,x,y)
{
  
  let n=[];
  for(let i=0;i<arr.length;i++)
  {
    if(i==x)
    {
      n.push(y);
      continue;
    }
    n.push(arr[i]);
  }
  
  return n;
}

function setOver(e){
  let i;
  for(i=0;i<leaders.length;i++)
  {
    if(e.name==leaders[i].name)
    {
    leaders[i].className="over";
    break;
    }
  }
}
  

function buttonClick(){
  let x;
  let li=leaders.filter(function(e,i){
    if(e.name==selected)
    return leaders.indexOf(i[0]);
  });

  if(turnType)
  {
    if(turnTeam)
    {
      x=findex(p2);
      setp2(replace(p2,x,li[0]));
    }
    else
    {
      x=findex(p1);
      setp1(replace(p1,x,li[0]));
    }
  }
  else
  {
    if(turnTeam)
    {
      x=findex(b2);
      setb2(replace(b2,x,li[0]));
    }
    else
    {
      x=findex(b1);
      setb1(replace(b1,x,li[0]));
    }
  }
  
  setOver(li[0]);
  setTurnCount(prev => ++prev);
  setSelected("");

}     

function iconClick(event){

  let i,f=1;
  for(i=0;i<leaders.length;i++)
  {
    if(event.target.alt==leaders[i].name)
    {
      if(leaders[i].className=="over")
      {
        f=0;
        break;
      }
    }
    
  }
  if(f)  
  setSelected(event.target.alt);
}

leaders.forEach(function (element){
  if(element.name==selected)
  element.className="selected";
  else if(element.className!="over")
  {
    element.className="img";
  }
});

let team="",turn="";

if(turnTeam)
team="Team 2";
else
team="Team 1";

if(turnType)
turn="Pick";
else
turn="Ban";

let final = team + "  " + turn;
if(turnCount>=12)
{
  final = "Lets go Gamers !"
}

  return (
    <div className="grid">
    <Banned gridcolumn= "1/3" gridrow= "1" bar={b1}/>
    <div className="Heading">
        CIVILIZATION VI DRAFT PICK <br/><br/>
        <Button col="red" text="BAN" onClick={buttonClick} disabled={turnType} count={turnCount} selectStatus={selected}/>
        <Button col="green" text="PICK" onClick={buttonClick} disabled={!turnType} count={turnCount} selectStatus={selected}/>
        <br/><p>{final}</p>
        
    </div>
    <Banned gridcolumn="5/7" grid-row="1" bar={b2}/>
    <Picked gridcolumn="1" gridrow="2/5" par={p1}/>
    <div className="Pool" >
    {leaders.map((l) => {
    if(l.img!=="pepe.jpg")
    return <img src={require("./"+l.img).default} alt={l.name} className={l.className} onClick={iconClick}></img>
    })}
    </div>
    <Picked gridcolumn="6" gridrow="2/5" par={p2}/>
    </div>
  );
}

export default App;