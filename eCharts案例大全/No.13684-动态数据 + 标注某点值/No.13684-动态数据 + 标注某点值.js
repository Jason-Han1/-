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
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: timesDate()
        },
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '价格',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
    ],
    series: [
        {
            name:'最新成交价',
            type:'line',
            smooth: true,
            symbolSize: 5,
            symbol: 'circle',
            showSymbol: false,
            areaStyle:{
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 187, 237, 0.5)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 189, 237, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }  
            },
            markPoint:{
                symbolSize: 10,
                symbol: 'circle',
                data:[{
                    coord:[9, 2]
                }],
                label:{
                  normal:{
                        show: true,
                        position: 'top',
                        formatter: function(params) {
                            if (params.dataIndex === 8){
                                return '{b}'
                            }
                        }
                    }  
                },
            },
            markLine: {
                data: [
                    {yAxis: 8, name: '实时'}
                ]
            },
            data:rwD()
        }
    ]
};
var r = [];
r = rwD();
setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data1 = option.series[0].data;
    data1.shift();
    data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);
    var markData = data1[data1.length-1];
    option.series[0].markPoint.data[0].coord[1] = markData;
    option.series[0].markLine.data[0].yAxis = markData;

    myChart.setOption(option);
}, 2100);
function rwD () { // y轴数据内容更新
    var res = [];
    var len = 0;
    while (len < 10) {
        res.push((Math.random()*10 + 5).toFixed(1) - 0);
        len++;
    }
    return res;
}
function timesDate(){ // x轴曲线时间
    var now = new Date();
    var res = [];
    var len = 10;
    while (len--) {
        res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
        now = new Date(now - 2000);
    }
    return res;
}