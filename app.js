'use strict';

let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

let Seattle={
    Location='seattle',
    MinCust: 23,
    MaxCust: 65,
    AvgCookieSale: 6.3,
    custPerHour: [],
    totalSale: 0,
    amountOfCookie:function(){
        for(let i=0; i<hours.length; i++)
        Seattle.custPerHour.push(getRandom(23,65));
        let body= document.getElementById('body');
        let paragraph= document.createElement('p');
        body.appendChild(paragraph);
        paragraph.textContent=this.Location;
        let ulEl = document.createElement('ul');
        let liEl;
        body.appendChild(ulEl);
        for(let a=0; a<Seattle.custPerHour.length; a++){
        liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${hours[a]}: ${this.custPerHour[a]} cookies`; 
        }

    },
    total:function(){ 
      for (let s=0; s<this.custPerHour.length; s++) {
      this.totalSale+=(this.custPerHour[s]*this.AvgCookieSale); 
    

    }
    let ulEl2 = document.createElement('ul');
        let liEl2;
        body.appendChild(ulEl2);
        ulEl2.appendChild(liEl2);
        liEl2.textContent=`total: ${math.floor(this.totalSale)} cookies`;
}
}
function getRandom(MinCust, MaxCust) {
    min = Math.ceil(MinCust);
    max = Math.floor(MaxCust);
    return Math.floor(Math.random() * (MaxCust - MinCust + 1) + MinCust);

};
Seattle.custPerHour();
console.log(Seattle);
Seattle.total();




let Tokyo={
    Location='Tokyo',
    MinCust: 3,
    MaxCust: 24,
    AvgCookieSale: 1.2,
    custPerHour: [],
    totalSale: 0,
    amountOfCookie:function(){
        for(let i=0; i<hours.length; i++)
        Tokyo.custPerHour.push(getRandom(3,24));
        let body= document.getElementById('body');
        let paragraph= document.createElement('p');
        body.appendChild(paragraph);
        paragraph.textContent=this.Location;
        let ulEl = document.createElement('ul');
        let liEl;
        body.appendChild(ulEl);
        for(let a=0; a<Tokyo.custPerHour.length; a++){
        liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${hours[a]}: ${this.custPerHour[a]} cookies`;
        }
    },
    total:function(){ 
        for (let s=0; s<this.custPerHour.length; s++) {
        this.totalSale+=(this.custPerHour[s]*this.AvgCookieSale); 
      
  
      }
      let ulEl2 = document.createElement('ul');
          let liEl2;
          body.appendChild(ulEl2);
          ulEl2.appendChild(liEl2);
        liEl2.textContent=`total: ${math.floor(this.totalSale)} cookies`;
  }

}
function getRandom(MinCust, MaxCust) {
    min = Math.ceil(MinCust);
    max = Math.floor(MaxCust);
    return Math.floor(Math.random() * (MaxCust - MinCust + 1) + MinCust);

};
Tokyo.custPerHour();
console.log(Tokyo);
Seattle.total();




let Dubai={
    Location='Dubai',
    MinCust: 11,
    MaxCust: 38,
    AvgCookieSale: 3.7,
    custPerHour: [],
    totalSale: 0,
    amountOfCookie:function(){
        for(let i=0; i<hours.length; i++)
        Dubai.custPerHour.push(getRandom(11,38));
        let body= document.getElementById('body');
        let paragraph= document.createElement('p');
        body.appendChild(paragraph);
        paragraph.textContent=this.Location;
        let ulEl = document.createElement('ul');
        let liEl;
        body.appendChild(ulEl);
        for(let a=0; a<Dubai.custPerHour.length; a++){
        liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${hours[a]}: ${this.custPerHour[a]} cookies`;
        }
    },
    total:function(){ 
        for (let s=0; s<this.custPerHour.length; s++) {
        this.totalSale+=(this.custPerHour[s]*this.AvgCookieSale); 
      
  
      }
      let ulEl2 = document.createElement('ul');
          let liEl2;
          body.appendChild(ulEl2);
          ulEl2.appendChild(liEl2);
          liEl2.textContent=`total: ${math.floor(this.totalSale)} cookies`;
  }

}
function getRandom(MinCust, MaxCust) {
    min = Math.ceil(MinCust);
    max = Math.floor(MaxCust);
    return Math.floor(Math.random() * (MaxCust - MinCust + 1) + MinCust);

};
Dubai.custPerHour();
console.log(Dubai);
Seattle.total();




Paris={
    Location='Paris',
    MinCust: 20,
    MaxCust: 38,
    AvgCookieSale: 2.3,
    custPerHour: [],
    totalSale: 0,
    amountOfCookie:function(){
        for(let i=0; i<hours.length; i++)
        Paris.custPerHour.push(getRandom(20,38));
        let body= document.getElementById('body');
        let paragraph= document.createElement('p');
        body.appendChild(paragraph);
        paragraph.textContent=this.Location;
        let ulEl = document.createElement('ul');
        let liEl;
        body.appendChild(ulEl);
        for(let a=0; a<Paris.custPerHour.length; a++){
        liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${hours[a]}: ${this.custPerHour[a]} cookies`;
        }
    },
    total:function(){ 
        for (let s=0; s<this.custPerHour.length; s++) {
        this.totalSale+=(this.custPerHour[s]*this.AvgCookieSale); 
      
  
      }
      let ulEl2 = document.createElement('ul');
          let liEl2;
          body.appendChild(ulEl2);
          ulEl2.appendChild(liEl2);
          liEl2.textContent=`total: ${math.floor(this.totalSale)} cookies`;
  }

}
function getRandom(MinCust, MaxCust) {
    min = Math.ceil(MinCust);
    max = Math.floor(MaxCust);
    return Math.floor(Math.random() * (MaxCust - MinCust + 1) + MinCust);

};
Paris.custPerHour();
console.log(Paris);
Seattle.total();



let Lima={
    Location='Lima',
    MinCust: 2,
    MaxCust: 16,
    AvgCookieSale: 4.6,
    custPerHour: [],
    totalSale: 0,
    amountOfCookie:function(){
        for(let i=0; i<hours.length; i++)
        Lima.custPerHour.push(getRandom(2,16));
        let body= document.getElementById('body');
        let paragraph= document.createElement('p');
        body.appendChild(paragraph);
        paragraph.textContent=this.Location;
        let ulEl = document.createElement('ul');
        let liEl;
        body.appendChild(ulEl);
        for(let a=0; a<Lima.custPerHour.length; a++){
        liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${hours[a]}: ${this.custPerHour[a]} cookies`;
        }
    },
    total:function(){ 
        for (let s=0; s<this.custPerHour.length; s++) {
        this.totalSale+=(this.custPerHour[s]*this.AvgCookieSale); 
      
  
      }
      let ulEl2 = document.createElement('ul');
          let liEl2;
          body.appendChild(ulEl2);
          ulEl2.appendChild(liEl2);
          liEl2.textContent=`total: ${math.floor(this.totalSale)} cookies`;
  }

}
function getRandom(MinCust, MaxCust) {
    min = Math.ceil(MinCust);
    max = Math.floor(MaxCust);
    return Math.floor(Math.random() * (MaxCust - MinCust + 1) + MinCust);

};
Lima.custPerHour();
console.log(Lima);
Seattle.total();