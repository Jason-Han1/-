option = {
   title: {
       text: 'echarts不同长度的折线图'
   },
   legend: {
       data:['在线数']
   },
   grid: {
       left: '3%',
       right: '4%',
       bottom: '3%',
       containLabel: true
   },
   toolbox: {
       feature: {
           saveAsImage: {}
       }
   },
   dataZoom:{
       type:'inside'
   },
   tooltip:{
       show:true
   },
   xAxis: {
       type: 'value',
       boundaryGap: false,
       min:0,
       max:80,
       axisLabel:{
           formatter:function(){
               return '20:58'
           }
       }
             //data: ['周一','周二','周三','周四','周五','周六','周日']
   },
   yAxis: {
       type: 'value',
       min:0,
       max:100
   },
   series: [
       {
           name:'在线数',
           type:'line',        
           data:[[10,20],[20,60],[40,60],[50,20],[75,70],[80,90]]
       },
 
   ]
};


let x = [];
let y= [];
let l = [];
for(let i = 0 ; i<x.length; i++){
    let k = [];
    k[0] = x[i];
    k[1] = y[i];
    l.push(k);
    
}
