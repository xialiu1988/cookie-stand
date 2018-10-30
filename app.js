
//store@1st and pike

// var store1={

//   name: '1st and pike',
//   mincust: 23,
//   maxcust:65,
//   avgcookiesale:6.3,

//   calculate:function(){
//     var rannum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);
//     return Math.floor(rannum*6.3);
//   },

//   render(){
//     var container=document.createElement('section');
//     var nameEl=document.createElement('h3');
//     var messageEl=document.createElement('ul');

//     nameEl.textContent=this.name;
//     var a=6;
//     var total=0;

//     for(var i=0;i<6;i++,a++){
//       var b=this.calculate();
//       total+=b;
//       var msg=document.createElement('li');
//       msg.textContent+=`${a} am: ${b} cookies`;
//       messageEl.appendChild(msg);
//     }
   
//     var tmsg=document.createElement('li');
//     var d=this.calculate();
//     tmsg.textContent=`12pm: ${d} cookies`;
//     messageEl.appendChild(tmsg);
//     total+=d;

//     var c=1;
//     for(var j=0;j<8;j++,c++){
//       var b2=this.calculate();
//       total+=b2;
//       var ttmsg=document.createElement('li');
//       ttmsg.textContent+=`${c}pm: ${b2} cookies`;
//       messageEl.appendChild(ttmsg);
//     }
//     var tttmsg=document.createElement('li');
//     tttmsg.textContent=`Total: ${total} cookies`;
//     messageEl.appendChild(tttmsg);
     
//     container.appendChild(nameEl);
//     container.appendChild(messageEl);

//     var mainEl=document.getElementById('main-content');
//     mainEl.appendChild(container);


//   }

// };
// store1.render();
var store1={

  name: '1st and pike',
  mincust: 23,
  maxcust:65,
  avgcookiesale:6.3,
  openhours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    
  calculate:function(){
    var rannum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);
    return Math.floor(rannum*6.3);
  },
    
  render(){
    var container=document.createElement('section');
    var nameEl=document.createElement('h3');
    var messageEl=document.createElement('ul');
    
    nameEl.textContent=this.name;
    
    var total=0;
    for(var i=0;i<this.openhours.length;i++)
    
    { var b=this.calculate();
      total+=b;
      var tmsg=document.createElement('li');
      tmsg.textContent =`${this.openhours[i]}: ${b} cookies`;
      messageEl.appendChild(tmsg);
    }
    var tttmsg=document.createElement('li');
    tttmsg.textContent=`Total: ${total} cookies`;
    messageEl.appendChild(tttmsg);
       
        
    container.appendChild(nameEl);
    container.appendChild(messageEl);
     
    var mainEl=document.getElementById('main-content');
    mainEl.appendChild(container);
     
    
  }
};
store1.render();

//2nd store

var store2={

  name: 'Seatac Airport',
  mincust: 3,
  maxcust:24,
  avgcookiesale:1.2,
  openhours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

  calculate:function(){
    var rannum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);
    return Math.floor(rannum*1.2);
  },

  render(){
    var container=document.createElement('section');
    var nameEl=document.createElement('h3');
    var messageEl=document.createElement('ul');

    nameEl.textContent=this.name;
   
    var total=0;
    for(var i=0;i<this.openhours.length;i++)

    { var b=this.calculate();
      total+=b;
      var tmsg=document.createElement('li');
      tmsg.textContent =`${this.openhours[i]}: ${b} cookies`;
      messageEl.appendChild(tmsg);
    }
    var tttmsg=document.createElement('li');
    tttmsg.textContent=`Total: ${total} cookies`;
    messageEl.appendChild(tttmsg);

    
    container.appendChild(nameEl);
    container.appendChild(messageEl);
 
    var mainEl=document.getElementById('main-content');
    mainEl.appendChild(container);
 

  }


};
store2.render();


//3rd store

var store3={

  name: 'Seattle center',
  mincust: 11,
  maxcust:38,
  avgcookiesale:3.7,
  openhours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  
  calculate:function(){
    var rannum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);
    return Math.floor(rannum*1.2);
  },
  
  render(){
    var container=document.createElement('section');
    var nameEl=document.createElement('h3');
    var messageEl=document.createElement('ul');
  
    nameEl.textContent=this.name;
  
    var total=0;
    for(var i=0;i<this.openhours.length;i++)
  
    { var b=this.calculate();
      total+=b;
      var tmsg=document.createElement('li');
      tmsg.textContent =`${this.openhours[i]}: ${b} cookies`;
      messageEl.appendChild(tmsg);
    }
         
    var tttmsg=document.createElement('li');
    tttmsg.textContent=`Total: ${total} cookies`;
    messageEl.appendChild(tttmsg);
     
    container.appendChild(nameEl);
    container.appendChild(messageEl);
   
    var mainEl=document.getElementById('main-content');
    mainEl.appendChild(container);
   
  
  }
  
  
};
store3.render();

//4th store
var store4={

  name: 'Capital Hill',
  mincust: 20,
  maxcust:38,
  avgcookiesale:2.3,
  openhours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  
  calculate:function(){
    var rannum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);
    return Math.floor(rannum*1.2);
  },
  
  render(){
    var container=document.createElement('section');
    var nameEl=document.createElement('h3');
    var messageEl=document.createElement('ul');
  
    nameEl.textContent=this.name;
  
    var total=0;
    for(var i=0;i<this.openhours.length;i++)
  
    { var b=this.calculate();
      total+=b;
      var tmsg=document.createElement('li');
      tmsg.textContent =`${this.openhours[i]}: ${b} cookies`;
      messageEl.appendChild(tmsg);
    }
    var tttmsg=document.createElement('li');
    tttmsg.textContent=`Total: ${total} cookies`;
    messageEl.appendChild(tttmsg);
     
      
    container.appendChild(nameEl);
    container.appendChild(messageEl);
   
    var mainEl=document.getElementById('main-content');
    mainEl.appendChild(container);
   
  
  }
};
store4.render();

//5th store
var store5={

  name: 'Alki',
  mincust: 2,
  maxcust:16,
  avgcookiesale:4.6,
  openhours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    
  calculate:function(){
    var rannum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);
    return Math.floor(rannum*1.2);
  },
    
  render(){
    var container=document.createElement('section');
    var nameEl=document.createElement('h3');
    var messageEl=document.createElement('ul');
    
    nameEl.textContent=this.name;
    
    var total=0;
    for(var i=0;i<this.openhours.length;i++)
    
    { var b=this.calculate();
      total+=b;
      var tmsg=document.createElement('li');
      tmsg.textContent =`${this.openhours[i]}: ${b} cookies`;
      messageEl.appendChild(tmsg);
    }
    var tttmsg=document.createElement('li');
    tttmsg.textContent=`Total: ${total} cookies`;
    messageEl.appendChild(tttmsg);
       
        
    container.appendChild(nameEl);
    container.appendChild(messageEl);
     
    var mainEl=document.getElementById('main-content');
    mainEl.appendChild(container);
     
    
  }
};
store5.render();