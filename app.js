var table =document.getElementById('table');
var form = document.getElementById('form');

allList = ['Mobile', 'Laptop', 'Tablet']
function Device (deviceName,devicecategory,quantity) {
    
this.deviceName = deviceName ;
this.deviceName = devicecategory ;
this.quantity = quantity ;
this.price=  getRandomInt(350, 750);

allList.push(this);

}







form.addEventListener('submit',addClick);
function addClick (event){
event.preventDefault();
var deviceName = event.target.deviceName.value;
var devicecategory = event.target.devicecategory.value;
var quantity = event.target.quantity.value;

var anyName = new  Device (deviceName,devicecategory,quantity,);
//console.log(deviceName,devicecategory,quantity,allList);
getRandomInt ()
show()
get()
set()

}

function get(){
    var getJson = localStorage.getItem('key')
    if(getJson){
        allList = JSON.parse(getJson)
    }
}
function set(){
    
    var sendJson = JSON.stringify(allList);
    localStorage.setItem('key',sendJson)
}

function show(){
    var thEl =document.createElement('th');
    trEl.appendChild(thEl);
    thlE.innerHTML=`${deviceName}`
    var thlE2 =document.createElement('th');
    trEl.appendChild(thEl2);
    thelE.innerHTML=`${devicecategory}`
    var thlE3 =document.createElement('th');
    trE3.appendChild(thEl3);
    thlE3.innerHTML=`${quantity}`
    
var trEl= document.createElement('tr')
table.appendChild(trEl);
for (i=0;i<allList;i++){
    var tdEl= document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.innerHTML = allList[i],deviceName;
    
    var tdEl= document.createElement('td');
    trEl.appendChild(tdE2);
    tdE2.innerHTML = allList[i],devicecategory;
    
    var tdEl= document.createElement('td');
    trEl.appendChild(tdE3);
    tdE3.innerHTML = allList[i],quantit;
    
    

}
}
show()
set ()
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }