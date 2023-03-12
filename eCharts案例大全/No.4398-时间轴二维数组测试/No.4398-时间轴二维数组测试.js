var stime = "2020-09-04 16:20:";
var flag = 0;
var opdata = [];
var opdata2 = [];
var opdata3 = [];
var opdata4 = [];
var opdata5 = [];
for(var k = 0; k<29; k++){
  flag +=2;
  if(flag == "10" || flag == "20" || flag == "26" || flag == "50"){
    opdata.push( [stime+flag,""] );
  }else{
    opdata.push( [stime+flag , 20] );
  }
}
flag = 0;
for(var k = 0; k<29; k++){
    flag +=2;
  if(flag == "15" || flag == "26" || flag == "50"){
    opdata2.push( [stime+flag,""] );
  }else{
    opdata2.push( [stime+flag, 50] );
  }
}
flag = 0;
for(var k = 0; k<29; k++){
  flag +=2;
  if(flag == "30"  || flag == "48"){
    opdata3.push( [stime+flag,""] );
  }else{
    opdata3.push( [stime+flag,60] );
  }
}

flag = 0;
for(var k = 0; k<29; k++){
  flag +=2;
  if(flag == "6"  || flag == "48"){
    opdata4.push( [stime+flag,""] );
  }else{
    opdata4.push( [stime+flag,40] );
  }
}
flag = 0;
for(var k = 0; k<29; k++){
  flag +=2;
  if(flag == "12"  || flag == "20"){
    opdata5.push( [stime+flag,""] );
  }else{
    opdata5.push( [stime+flag,30] );
  }
}

option = {
  tooltip:{
    show:true,
    trigger: 'axis',
    axisPointer:{
      label:{
        // formatter:function(e){
        //   return '12321';
        // }  
      }
    },
    formatter:function(a){
      //console.log(a);
      var str = "";
      for(var h =0; h <a.length; h++){
        str += a[h].seriesName+":"+a[h].value[0]+"@"+a[h].value[1]+"<br>";
      }
      return str;
    }
  },
    xAxis: {
        min:"2020-09-04 16:20:01",
        max:"2020-09-04 16:20:59",
        type:"time",
        axisLabel:{
          rotate:90
        }
    },
    yAxis: {
        type: 'value',
        position:"right",
        min:0,
        max:75,
        maxInterval:1,
        axisTick:{show:false}
        // axisLabel:{
        //   formatter:function(v,a){
        //     if(v == "20" || v == "30" || v == "40" || v == "50" || v == "60"){
        //         return "自定义";
        //     }
        //     return v;
        //   }
        // }
    },
    dataZoom:{
        type:"inside",
        filterMode:"none"
    },
    series: [
      {
        name:"one",
        data: opdata,
        type: 'line',
        connectNulls:true,
        connectNulls:false,
        symbolSize:0,
        lineStyle:{
          width:10,
        }
    },
    {
        name:"two",
        data: opdata2,
        type: 'line',
        connectNulls:true,
        connectNulls:false,
        symbolSize:0,
        lineStyle:{
          width:10,
        }
    },
     {
        name:"three",
        data: opdata3,
        type: 'line',
        connectNulls:true,
        connectNulls:false,
        symbolSize:0,
        lineStyle:{
          width:10,
        }
    },
     {
        name:"four",
        data: opdata4,
        type: 'line',
        connectNulls:true,
        connectNulls:false,
        symbolSize:0,
        lineStyle:{
          width:10,
        }
    },
     {
        name:"five",
        data: opdata5,
        type: 'line',
        connectNulls:true,
        connectNulls:false,
        symbolSize:0,
        lineStyle:{
          width:10,
        }
    }
  ]
};

