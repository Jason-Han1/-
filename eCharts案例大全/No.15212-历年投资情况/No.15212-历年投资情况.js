option = {
    backgroundColor: 'rgba(255,255,255,0)',
    title: {
        text: '历年投资情况',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#0000'
            }
        }
    },
    legend: {
        data:['投资项目总数', '总投资额']
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
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var now = new Date();
                var res = ['2011','2012','2013','2014','2015','2016'];
                return res;
            })()
        },
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var res = [];
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '投资项目数（个）',
            max: 6000,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
        {
            type: 'value',
            scale: true,
            name: '投资总额（万元）',
            max: 18000,
            min: 0,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            name:'总投资额',
            type:'bar',
            xAxisIndex: 1,
            barMaxWidth:65,
            yAxisIndex: 1,
            data:(function (){
                var res = [9034.56,6928.99,10556.12,12362.77,17825.45];

                return res;
            })()
        },
        {
            name:'投资项目总数',
            type:'line',
            data:(function (){
                var res = [2050,1593,2587,3065,3749,4076,5029];
                return res;
            })()
        }
    ]
};

app.count = 11;
setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data0 = option.series[0].data;
    var data1 = option.series[1].data;
    data0.shift();
    data0.push(Math.round(Math.random() * 1000));
    data1.shift();
    data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);
    option.xAxis[1].data.shift();
    option.xAxis[1].data.push(app.count++);

   // myChart.setOption(option);
}, 2100);
