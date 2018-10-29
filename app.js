
//store@1st and pike

var store1={

  name: '1st and pike',
  mincust: 23,
  maxcust:65,
  avgcookiesale:6.3,

  

  calculate:function(){
    var rannum=Math.floor(Math.random()*(this.maxcust-this.mincust)+this.mincust);

    return Math.floor(rannum*6.3);
  
  },

  render(){
    var container=document.createElement('section');
    var nameEl=document.createElement('h3');
    var messageEl=document.createElement('ul');

    nameEl.textContent=this.name;
    var a=6;
    var total=0;

    for(var i=0;i<6;i++,a++){
      var b=this.calculate();
      total+=b;
      var msg=document.createElement('li');
      msg.textContent+=`${a} am: ${b} cookies`;
      messageEl.appendChild(msg);
    }
   
    var tmsg=document.createElement('li');
    var d=this.calculate();
    tmsg.textContent=`12pm: ${d} cookies`;
    messageEl.appendChild(tmsg);
    total+=d;

    var c=1;
    for(var j=0;j<8;j++,c++){
      var b2=this.calculate();
      total+=b2;
      var ttmsg=document.createElement('li');
      ttmsg.textContent+=`${c}pm: ${b2} cookies`;
      messageEl.appendChild(ttmsg);
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