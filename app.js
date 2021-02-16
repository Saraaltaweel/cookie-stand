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
        let tr=document.createElement('tr');
        table.appendChild(tr);
        let emptyf=document.createElement('th');
        tr.appendChild(emptyf);

        let th;
        for(let i=0 ; i<hours.length; i++){
            th=document.createElement('th');
            tr.appendChild(th);
            th.textContent=hours[i];

        }
        let dailyTotal= document.createElement('th');
        tr.appendChild(dailyTotal);
        dailyTotal.textContent='Daily Total';

        }  
    
    
    Cookiestand.prototype.rander=function(){
        let tr =document.createElement('tr'); 
        table.appendChild(tr); 
        let locationTit=document.createElement('td');
        tr.appendChild(locationTit);
        locationTit.textContent=this.Location;
        
        let td;
        for(let i=0; i<this.cookiesPerHour.length; i++){
            td= document.createElement('td');
            tr.appendChild(td);
            td.textContent= this.cookiesPerHour;
        }
       
    
    

    }

    let seattle=new Cookiestand('seattle',23,65,6.3);
    let tokyo=new Cookiestand('tokyo',3,24,1.2);
    let dubai=new Cookiestand('dubai',11,38,3.7);
    let paris=new Cookiestand('paris',20,48,2.3);
    let lima=new Cookiestand('lima',2,16,4.6);
    
    header();
    seattle.randomCustomerPerHour();
    seattle.cookiesPerHour();
    seattle.rander();
    tokyo.randomCustomerPerHour();
    tokyo.cookiesPerHour();
    tokyo.rander();
    dubai.randomCustomerPerHour();
    dubai.cookiesPerHour();
    dubai.rander();
    paris.randomCustomerPerHour();
    paris.cookiesPerHour();
    paris.rander();
    lima.randomCustomerPerHour();
    lima.cookiesPerHour();
    lima.rander();







    

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





    