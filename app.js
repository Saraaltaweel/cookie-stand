'use strict';
function getRandomInt(MinCust, MaxCust) {
    return Math.floor(Math.random() * (MaxCust - MinCust) + MinCust);
}
let columntotal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
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
         this.randomCustomer.push(getRandomInt(this.MinCust,this.MaxCust));
        //  console.log(getRandomInt(this.MinCust,this.MaxCust))
        }
    }
    Cookiestand.prototype.cookiesSaledPerHour=function(){
        for(let i=0; i<hours.length; i++){
            this.cookiesPerHour.push(Math.floor(this.randomCustomer[i]*this.AvgCookieSale));
            this.totalSale=this.totalSale + this.cookiesPerHour[i];
            columntotal[i]+=this.cookiesPerHour[i];
            // console.log(this.cookiesPerHour)

        }
    }
    
       function header(){
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
        for(let i=0; i<hours.length; i++){
            td= document.createElement('td');
            tr.appendChild(td);
            td.textContent= this.cookiesPerHour[i];
        }
        let td1 =document.createElement('td');
        tr.appendChild(td1);
        td1.textContent=this.totalSale;
       
    
    

    }
function footer() {
    let tr1=document.createElement('tr');
    table.appendChild(tr1);
    let td2=document.createElement('td');
    tr1.appendChild(td2);
    td2.textContent=`total`;
    let sum=0;
    for (let i=0; i<hours.length; i++){
        let td2=document.createElement('td');
        tr1.appendChild(td2);
        td2.textContent=columntotal[i];
       sum=sum+columntotal[i];
    }
    let td3=document.createElement('td');
    tr1.appendChild(td3);
    td3.textContent=sum;

    }  

    const form = document.getElementById('cookie-stand');
    form.addEventListener('submit',newCookies);

    function newCookies(event){
    event.preventDefault();
    console.log(event);

    const location = event.target.location.value;
        let minCust= event.target.minCust.value;
        let maxCust = event.target.maxCust.value;
        let avrg = event.target.avrg.value;
        let cookie = new Cookiestand (location,minCust,maxCust,avrg);

         cookie.randomCustomerPerHour();
         cookie.cookiesSaledPerHour();
         cookie.random();
         footer();

    }

      
   


    let seattle=new Cookiestand('seattle',23,65,6.3);
    let tokyo=new Cookiestand('tokyo',3,24,1.2);
    let dubai=new Cookiestand('dubai',11,38,3.7);
    let paris=new Cookiestand('paris',20,48,2.3);
    let lima=new Cookiestand('lima',2,16,4.6);


    
    header();
    seattle.randomCustomerPerHour();
    seattle.cookiesSaledPerHour();
    seattle.rander();
    tokyo.randomCustomerPerHour();
    tokyo.cookiesSaledPerHour();
    tokyo.rander();
    dubai.randomCustomerPerHour();
    dubai.cookiesSaledPerHour();
    dubai.rander();
    paris.randomCustomerPerHour();
    paris.cookiesSaledPerHour();
    paris.rander();
    lima.randomCustomerPerHour();
    lima.cookiesSaledPerHour();
    lima.rander();
    footer();






    

   