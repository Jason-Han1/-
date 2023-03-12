
var opdata = [],opdata2=[];
opdata = [ ['2022-01-05 24:00:00',50],['2022-01-06 01:00:00',30]   ]
opdata2 = [ ['2022-01-06 02:00:00',20],['2022-01-06 08:30:00',20]   ]
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
        min:"2022-01-05 24:00:00",
        max:"2022-01-06 09:00:00",
        type:"time",
        axisLabel:{
          formatter:function(v){
            //   return echarts.format.formatTime('MM-dd', v);
            return formatterDate(v);
          }
        }
    },
    yAxis: {
        type: 'value',
        position:"right",
        min:0,
        max:100,
        axisTick:{show:false}
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
  ]
};

function formatterDate(longtime){
    let date = new Date(longtime);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    hour = hour < 10 ? "0"+hour:hour;
    let minute = date.getMinutes();
    minute = minute < 10 ? "0"+minute:minute;
    month = month < 10 ? "0"+month:month;
    day = day < 10 ? "0"+day:day;
    let strdate = month+'-'+day + " " +hour + ":" + minute;
    console.log(strdate); // 2018-10-09
    return strdate;
}