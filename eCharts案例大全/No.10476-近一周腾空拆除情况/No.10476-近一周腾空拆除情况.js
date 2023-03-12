// 获取日期集合
function getDateArr(day) {
    dateArr = [];
    for (i = 0; i < day; i++) {
        dateArr.unshift(getDay(-i))
    }
    return dateArr;
}

// 获取日期
function getDay(day) {
    var today = new Date();
    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return tMonth + "-" + tDate;
}

// 日期补0
function doHandleMonth(month) {
    var m = month;
    if (month.toString().length == 1) {
        m = "0" + month;
    }
    return m;
}

option = {
    backgroundColor:'#000',
    grid:{
      top:'20%',
      left:'20%',
      right:'20%',
      bottom:'20%',
    },
   tooltip: {
           trigger: 'axis'
       },
       legend: {
           left: '5%',
           show:true,
           textStyle: {
               fontSize: 24,
               color: '#FFF',
           },
           
           data:['最多','最少']
       },
       toolbox: {
           show: true,
           feature: {
               dataZoom: {
                   yAxisIndex: 'none'
               },
               dataView: {readOnly: false},
               magicType: {type: ['line', 'bar']},
               restore: {},
               saveAsImage: {}
           }
       },
       xAxis:  {
           show:true,
           type: 'category',
           boundaryGap: false,
           data: getDateArr(3),
           axisLabel: {fontSize: 12, fontWeight: 'bold',color: '#FFF'},
           axisLine: {
               show: true,
               lineStyle: {
                   color: '#FFF',
                   width:3
               }
           },
       },
       yAxis: {
           show:true,
           type: 'value',
           axisLabel: {
               fontSize: 24,fontWeight: 'bold',color: '#FFF',
               formatter: '{value}'
           },
           axisLine: {
               show: true,
               lineStyle: {
                   color: '#FFF',
                   width:3
               }
           },
       },
       series: [
           {
               name:'最多',
               type:'line',
               data:[ 26, 28, 28],
               symbolSize:15,
               itemStyle : {
                   normal: {
                       label : {
                           show: true,
                           fontSize:18,
                           fontWeight:600
                       },
                       lineStyle:{
                           width:8
                       },
                       color : 'rgb(75,92,196)',
                   }
               }
           },
           {
               name:'最少',
               type:'line',
               data:[ 12, 15, 9],
               symbolSize:10,
               itemStyle : {
                   normal: {
                       label : {
                           show: true,
                           fontSize:18,
                           fontWeight:600
                       },
                       lineStyle:{
                           width:8
                       },
                       color : 'rgb(213,19,64)',
                   }
               }
           }
       ]
    
};