'use strict';

let hour = ['6am', '7am','8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
let totalArr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let parent=document.getElementById('mainpage')
let table = document.createElement('table');
parent.appendChild(table);

let countRow=1;

function CokLocation (location, minCusPerHour ,maxCusPerHour, avgCookPerCus) {
    this.Location = location;
    this.minCusPerHour = minCusPerHour;
    this.maxCusPerHour =maxCusPerHour;
    this.avgCookPerCus=  avgCookPerCus;
    this.cookPerHour=[];
    this.total=0;
}
 

    
    CokLocation.prototype.render=function (){
        countRow++;
    
            
            let tr = document.createElement('tr')
            table.appendChild(tr);
        let td = document.createElement('td') ; 
        td.textContent = this.Location
        tr.appendChild(td);
         

        for(let i = 0 ; i <hour.length; i++)
        { 

            this.cookPerHour.push(Math.floor((Math.random() * (1+this.maxCusPerHour-this.minCusPerHour) +this.minCusPerHour)*this.avgCookPerCus));
           this.total =  this.total+this.cookPerHour[i] ;
           totalArr[i] += this.cookPerHour[i];


            let td = document.createElement('td') ; 
            td.textContent = this.cookPerHour[i]
            tr.appendChild(td);

        }     
        let td1 = document.createElement('td') ; 
        td1.textContent =this.total;
        tr.appendChild(td1);
    }



   
header();


let seattle = new CokLocation('Seattle', 23,65,6.3)
seattle.render();

let tokyo = new CokLocation('Tokyo',3,24,1.2)
tokyo.render();

let dubai = new CokLocation('Dubai',11,38,3.7)
dubai.render();

let paris=new CokLocation('Paris',20,38,2.3)
paris.render();

let lima = new CokLocation('Lima',2,16,4.6)
lima.render();


function header(){
    let tr = document.createElement('tr')
    table.appendChild(tr);
    let th2 = document.createElement('th')
    tr.appendChild(th2);
    th2.textContent = ' ';
    for(let i =0 ;i<hour.length;i++){
    
    let th =document.createElement('th')
    tr.appendChild(th);
    
    th.textContent=hour[i];
   
    }
    let th1 =document.createElement('th')
    tr.appendChild(th1);
    th1.textContent='Daily Location Total';
}

function footer (){
    let totGlobal= 0;
    let tr = document.createElement('tr')
    table.appendChild(tr);
    let th1 = document.createElement('th')
    tr.appendChild(th1)

    th1.textContent='Totals ';
    let th
for(let i =0 ; i<seattle.cookPerHour.length;i++) {
     th = document.createElement('th')
    tr.appendChild(th)
    
th.textContent= totalArr[i];
totGlobal+=totalArr[i];

}


let th3 = document.createElement('th')
tr.appendChild(th3)
th3.textContent= totGlobal;



}
footer();


const form = document.getElementById('cookie-stand')
 form .addEventListener('submit', addNewlocation)

 function addNewlocation(event){
    event.preventDefault();
console.log(event);
    let  location= event.target.location.value ;

    let min = event.target.minCust.value;
    min=parseInt(min);

    let max = event.target.maxCust.value;
    max=parseInt(max);

    let avg= event.target.avrg.value;
    avg=parseFloat(avg);

    let newLocation = new CokLocation (location , min ,max ,avg);

    table.deleteRow(countRow);
    newLocation.render();
    footer();


 }
 