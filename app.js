'use strict';
function getRandomInt(MinCust, MaxCust) {
    return Math.floor(Math.random() * (MaxCust - MinCust) + MinCust);
}

let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);
function Cookiestand(location,MinCust,MaxCust,AvgCookieSale){
    this.Location= location;
    this.MinCust= MinCust;
    this.MaxCust= MaxCust;
    this.AvgCookieSale= AvgCookieSale;
    this.cookiesPerHour= [];
    this.randomCustomer=[];
    this.totalSale= 0;
}
    Cookiestand.prototype.randomCustomerPerHour=function(){
        for(let i=0; i<hours.length; i++){
         this.randomCustomer.push(getRandom(this.MinCust,this.MaxCust));
        }
    

    Cookiestand.prototype.cookiesSaledPerHour=function(){
        for(let i=0; i<hours.length; i++){
            this.cookiesPerHour.push(Math.ceil(this.randomCustomer[i]*this.AvgCookieSale));
            this.total=this.total + this.cookiesPerHour[i];


        }
    }
    }
    Cookiestand.prototype.header=function(){

        let tr = document.createElement('tr');
        table.appendChild(tr);
        let th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = '   ';
        
        for (let i=0; i<hours.length; i++){
        let th1 = document.createElement('th');
        tr.appendChild(th1);
        th1.textContent = hours[i];
  
        }  
    
    }
    Cookiestand.prototype.rander=function(){
        let tr1 =document.createElement('tr');   
        let td =document.createElement('td');
        tr1.appendChild(td);
        td.textContent=this.location;
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
        let td1=document.createElement('td1');
        tr1.appendChild(td1);
        td1.textContent=this.cookiesPerHour[0];
    
    

    }
    //   rander:function(){
        //       let headerEl=document.createElement('h2');
        //       container.appendChild(headerEl);
        //       headerEl.textContent=this.Location;
        //       let ulEl = document.createElement('ul');
        //       container.appendChild(ulEl);
        //       let liEl;
        //       for (i=0; i<this.cookiesPerHour.length; i++){
        //           liEl=document.createElement('li');
        //           ulEl.appendChild(liEl);
        //           liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
            
        //       }
        //      liEl = document.createElement('li');
        //      ulEl.appendChild(liEl);
        //      liEl.textContent = this.total;

        //     }
        
    //     seattle.randomCustomerPerHour();
    //     seattle.cookiesSaledPerHour();
    //     seattle.rander();
    //    console.log(seattle);





    