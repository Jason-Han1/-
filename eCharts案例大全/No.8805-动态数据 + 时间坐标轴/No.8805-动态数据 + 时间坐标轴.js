function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return Math.round(value)
}

var data = [];
var data1=[]
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;

for (var i = 0; i < 1000; i++) {
    data.push(randomData());
   
}
for (var i = 0; i < 1000; i++) {
 data1.push(randomData());
}

option = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
     legend: {
                        data:['ceshi','ceshi1'],
     },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: []
};
function getItemColor(val){
 if(val.data>120)
 {
     return 'red'
 }else{
     return 'green'
 }
 
}

setInterval(function () {

    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      
        
    }
     for (var i = 0; i < 5; i++) {
        data1.shift();
        data1.push(randomData());
     }

    myChart.setOption({
        series: [{
            name:'ceshi',
            type:'line',
             itemStyle:{color:'green'
             },
            data: data1
        },{ name:'ceshi1',
            type:'line',
             itemStyle:{color:'red'
             },
            data: data
        }]
    });
}, 1000);