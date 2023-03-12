
var data = {
    xAxis : [],
    series : []
    
}

var len = 0;
while (len < 10) {
    data.series.push(Math.floor(Math.random()*10 * 5));
    len++;
}
function newItem(){
    return echarts.util.merge({
        type: 'category',
        boundaryGap: true,
        data: data.xAxis
    })
    
}



var now = new Date();
var ser = 10;
while (ser--) {
    data.xAxis.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
    now = new Date(now - 2000);
}

option = {
    title: {
        text: '动态数据',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data:['最新成交价', '预购队列']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: {
        show: true,
        start: 30,
        end: 70,
       // filterMode: 'empty'
    },
    xAxis: [
        newItem()
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '价格',
            max: 50,
            min: 0,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            name:'最新成交价',
            type:'bar',
            data:data.series
        }
    ]
};

app.count = 11;
setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data0 = option.series[0].data;
    
    data.series.shift();
    data.series.push(Math.floor(Math.random() * 10 * 5));

    data.xAxis.shift();
    data.xAxis.push(axisData);
    
    myChart.setOption({
        xAxis : [
            {
                data: data.xAxis
            }
        ],
        series : [
            {
                data:data.series
            }
        ]
    })
    
    
    
}, 2100);

