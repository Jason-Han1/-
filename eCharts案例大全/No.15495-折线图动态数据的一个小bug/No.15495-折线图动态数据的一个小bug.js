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
        start: 40,
        end: 100,
       // filterMode: 'empty'
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                    now = new Date(now - 2000);
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '价格',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            name:'最新成交价',
            type:'line',
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
                    len++;
                }
                return res;
            })()
        }
    ]
};

app.count = 11;
setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data0 = option.series[0].data;
    
    data0.shift();
    data0.push((Math.random() * 10 + 5).toFixed(1) - 0);

    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);
    myChart.setOption(option);
}, 2100);
