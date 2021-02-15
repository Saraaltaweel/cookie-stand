'use strict';

let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

let Seattle={
    Location='seattle',
    MinCust: 23,
    MaxCust: 65,
    AvgCookieSale: 6.3,
    cookiesPerHour: [],
    randomCustomer:[],
    totalSale: 0,
    randomCustomerPerHour:function(){
        for(let i=0; i<hours.length; i++){
         this.randomCustomer.push(getRandom(this.MinCust,this.MaxCust));
        }
    },

    cookiesSaledPerHour:function(){
        for(let i=0; i<hours.length; i++){
            this.cookiesPerHour.push(Math.ceil(this.randomCustomer[i]*this.AvgCookieSale));
            this.total=this.total + this.cookiesPerHour[i];


        }
    },
          rander:function(){
              let headerEl=document.createElement('h2');
              container.appendChild(headerEl);
              headerEl.textContent=this.Location;
              let ulEl = document.createElement('ul');
              container.appendChild(ulEl);
              let liEl;
              for (i=0; i<this.cookiesPerHour.length; i++){
                  liEl=document.createElement('li');
                  ulEl.appendChild(liEl);
                  liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
            
              }
             liEl = document.createElement('li');
             ulEl.appendChild(liEl);
             liEl.textContent = this.total;

            }
        }
        seattle.randomCustomerPerHour();
        seattle.cookiesSaledPerHour();
        seattle.rander();
       console.log(seattle);





        let Tokyo={
            Location='seattle',
            MinCust: 3,
            MaxCust: 24,
            AvgCookieSale: 1.2,
            cookiesPerHour: [],
            randomCustomer:[],
            totalSale: 0,
            randomCustomerPerHour:function(){
                for(let i=0; i<hours.length; i++){
                 this.randomCustomer.push(getRandom(this.MinCust,this.MaxCust));
                }
            },
        
            cookiesSaledPerHour:function(){
                for(let i=0; i<hours.length; i++){
                    this.cookiesPerHour.push(Math.ceil(this.randomCustomer[i]*this.AvgCookieSale));
                    this.total=this.total + this.cookiesPerHour[i];
        
        
                }
            },
                  rander:function(){
                      let headerEl=document.createElement('h2');
                      container.appendChild(headerEl);
                      headerEl.textContent=this.Location;
                      let ulEl = document.createElement('ul');
                      container.appendChild(ulEl);
                      let liEl;
                      for (i=0; i<this.cookiesPerHour.length; i++){
                          liEl=document.createElement('li');
                          ulEl.appendChild(liEl);
                          liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
                    
                      }
                     liEl = document.createElement('li');
                     ulEl.appendChild(liEl);
                     liEl.textContent = this.total;
        
                    }
                }
                Tokyo.randomCustomerPerHour();
                Tokyo.cookiesSaledPerHour();
                 Tokyo.rander();
                console.log(Tokyo);




            
                let Dubai={
                    Location='seattle',
                    MinCust: 11,
                    MaxCust: 38,
                    AvgCookieSale: 3.7,
                    cookiesPerHour: [],
                    randomCustomer:[],
                    totalSale: 0,
                    randomCustomerPerHour:function(){
                        for(let i=0; i<hours.length; i++){
                         this.randomCustomer.push(getRandom(this.MinCust,this.MaxCust));
                        }
                    },
                
                    cookiesSaledPerHour:function(){
                        for(let i=0; i<hours.length; i++){
                            this.cookiesPerHour.push(Math.ceil(this.randomCustomer[i]*this.AvgCookieSale));
                            this.total=this.total + this.cookiesPerHour[i];
                
                
                        }
                    },
                          rander:function(){
                              let headerEl=document.createElement('h2');
                              container.appendChild(headerEl);
                              headerEl.textContent=this.Location;
                              let ulEl = document.createElement('ul');
                              container.appendChild(ulEl);
                              let liEl;
                              for (i=0; i<this.cookiesPerHour.length; i++){
                                  liEl=document.createElement('li');
                                  ulEl.appendChild(liEl);
                                  liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
                            
                              }
                             liEl = document.createElement('li');
                             ulEl.appendChild(liEl);
                             liEl.textContent = this.total;
                
                            }
                        }
                        Dubai.randomCustomerPerHour();
                        Dubai.cookiesSaledPerHour();
                        Dubai.rander();
                        console.log(Dubai);
                        
                        

                        let Paris={
                            Location='seattle',
                            MinCust: 20,
                            MaxCust: 38,
                            AvgCookieSale: 2.3,
                            cookiesPerHour: [],
                            randomCustomer:[],
                            totalSale: 0,
                            randomCustomerPerHour:function(){
                                for(let i=0; i<hours.length; i++){
                                 this.randomCustomer.push(getRandom(this.MinCust,this.MaxCust));
                                }
                            },
                        
                            cookiesSaledPerHour:function(){
                                for(let i=0; i<hours.length; i++){
                                    this.cookiesPerHour.push(Math.ceil(this.randomCustomer[i]*this.AvgCookieSale));
                                    this.total=this.total + this.cookiesPerHour[i];
                        
                        
                                }
                            },
                                  rander:function(){
                                      let headerEl=document.createElement('h2');
                                      container.appendChild(headerEl);
                                      headerEl.textContent=this.Location;
                                      let ulEl = document.createElement('ul');
                                      container.appendChild(ulEl);
                                      let liEl;
                                      for (i=0; i<this.cookiesPerHour.length; i++){
                                          liEl=document.createElement('li');
                                          ulEl.appendChild(liEl);
                                          liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
                                    
                                      }
                                     liEl = document.createElement('li');
                                     ulEl.appendChild(liEl);
                                     liEl.textContent = this.total;
                        
                                    }
                                }
                                Paris.randomCustomerPerHour();
                                Paris.cookiesSaledPerHour();
                                Paris.rander();
                                console.log(Paris);




                                let Lima={
                                    Location='seattle',
                                    MinCust: 2,
                                    MaxCust: 16,
                                    AvgCookieSale: 4.6,
                                    cookiesPerHour: [],
                                    randomCustomer:[],
                                    totalSale: 0,
                                    randomCustomerPerHour:function(){
                                        for(let i=0; i<hours.length; i++){
                                         this.randomCustomer.push(getRandom(this.MinCust,this.MaxCust));
                                        }
                                    },
                                
                                    cookiesSaledPerHour:function(){
                                        for(let i=0; i<hours.length; i++){
                                            this.cookiesPerHour.push(Math.ceil(this.randomCustomer[i]*this.AvgCookieSale));
                                            this.total=this.total + this.cookiesPerHour[i];
                                
                                
                                        }
                                    },
                                          rander:function(){
                                              let headerEl=document.createElement('h2');
                                              container.appendChild(headerEl);
                                              headerEl.textContent=this.Location;
                                              let ulEl = document.createElement('ul');
                                              container.appendChild(ulEl);
                                              let liEl;
                                              for (i=0; i<this.cookiesPerHour.length; i++){
                                                  liEl=document.createElement('li');
                                                  ulEl.appendChild(liEl);
                                                  liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
                                            
                                              }
                                             liEl = document.createElement('li');
                                             ulEl.appendChild(liEl);
                                             liEl.textContent = this.total;
                                
                                            }
                                        }
                                        Lima.randomCustomerPerHour();
                                        Lima.cookiesSaledPerHour();
                                        Lima.rander();
                                       console.log(Lima);
                                       
