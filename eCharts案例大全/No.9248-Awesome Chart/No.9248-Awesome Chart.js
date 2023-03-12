app.title = '世界人口总量 - 条形图';

var dataAll=[
    {
        itemStyle:{color:'red'},
        value :6
    },
    
     {
        itemStyle:{color:'blue'},
        value :5
     },
     {
        itemStyle:{color:'yellow'},
        value :4
     },
     {
        itemStyle:{color:'pink'},
        value :3
     },
     {
        itemStyle:{color:'black'},
        value :2
     },
     {
        itemStyle:{color:'gray'},
        value :1
     }
    ]
    

var xLabel= ['a','b','c','d','e','f']
option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data:xLabel
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            animationDurationUpdate:1000,
            data: dataAll
        }
    ]
};

setInterval(function () {
    for (var i = 0; i < 6; i++) {
        dataAll[i].value+=1
    }
    var mock=[
        ['f','b','c','d','e','a'],
        ['f','e','c','d','b','a'],
        ['f','c','b','d','e','a'],
        ['a','e','c','b','d','f'],
        ['f','b','c','e','b','a'],
        ['f','c','b','d','e','a'],
        ['a','e','c','b','d','f'],
        ['f','b','c','d','e','a'],
        ['a','e','c','b','d','f'],
        ['f','e','c','d','b','a']
    ]
    xLabel=mock[parseInt(Math.random()*10)]
    
    myChart.setOption({
        yAxis:{
            data:xLabel
        },
        series: [{
            data: dataAll
        }]
    });
}, 2000);