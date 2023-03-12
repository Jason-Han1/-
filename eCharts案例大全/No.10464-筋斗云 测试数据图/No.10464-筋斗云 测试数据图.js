var xData=[];
var data=[];


var random = function(min, max){
      // 若max不存在 min 赋值给max,并重新赋值min
     if(max === null){
          max = min;  
          min = 0;
     }
     return min+ Math.floor(Math.random()*(max-min+1))
}

var date=new Date();
var prevDate=new Date(date.getTime() - 24*60*60*1000);


var day=prevDate.getDate();
var allday,days=[];
var m=prevDate.getMonth();
if(day!=31){
    m= m===0 ? 12 : m;
    if (m == 2) {
        allday = year % 4 === 0 ? 29 : 28;
    } else if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
    //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
        allday = 31;
    } else {
    //其他月份，天数为：30.
        allday = 30;
    }
}
var sDay=day;
for(var i=0; i<31;i++){
    // if(i<day){
    //      xData.push(date.getFullYear()+'年'+(m+1) +'月'+sDay--+'日');
    // }else{
    //     var d=allday--;
    //     if(d>day){
    //         xData.push(prevDate.getFullYear()+'年'+m+'月'+d+'日');
    //     }
    // }
    xData.push(date.getFullYear()+'年7月'+(i+1)+'日');
    var aa=random(1000,6000);
    data.push(aa);
}
console.log(data);



option = {
    backgroundColor:'#013561',
    grid:{
      bottom:80,  
    },
    xAxis: {
        type: 'category',
        data: xData,//.reverse(),
        axisLabel:{
            
                interval :0,
            rotate:40,
            color:'#408bad'
        },
        axisLine:{
            lineStyle:{
                color:'#0b426d'
            }
        }
    },
    yAxis: {
        type: 'value',
        offset:5,
        axisLine:{
            show:false,
        },
        axisLabel:{
            color:'#408bad'
        },
        splitLine:{
            lineStyle:{
                color:'#0b426d'
            }
        }
    },
    series: [{
        barWidth:'40%',
        data: data,
        type: 'bar',
        itemStyle:{
            barBorderRadius:50,
            
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#f4874e"
                },
                {
                    offset: 1,
                    color: "#e86e19"
                }
            ]),
            
            
            shadowBlur: 20,
            shadowColor: 'rgba(40, 40, 40, 0.5)',
        }
    }],
    color:['#81dfff']
};
