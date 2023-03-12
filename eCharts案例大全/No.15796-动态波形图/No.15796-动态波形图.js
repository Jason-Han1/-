var count = 300;
var categories = [];
var data1 = [];
var data2 = [];
var base1 = 8;
var base2 = 15;
var amp1 = 4;
var amp2 = 8;
var offset = 0;
for (var i = 0; i < count; i++) {
    categories.unshift(offset.toString());
    data1.unshift((i % 2 ? -1 : 1) * (base1 + Math.random() * amp1));
    data2.unshift((i % 2 ? 1 : -1) * (base2 + Math.random() * amp2));
    offset++;
}


option = {
     backgroundColor: '#333645',
    color: ['#fd2e89', '#ff80c2', ],

    title: {
        text: '音频图',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left: '3%',
        data: ['x', 'y']
    },
    xAxis: {
        type: 'category',
        name: 'x',
       splitLine: {
            lineStyle:{
                type:'solid',
                color: '#ff80c2'
            }
        },
        "axisLine": {
            lineStyle: {
                color: '#ff80c2'
            }
        },
        

        boundaryGap: true,
        splitLine: {
            show: false
        },
        axisLabel: {
            // interval: 0  
        },
        data: categories
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '10%',
        bottom: '4%',
        containLabel: true
    },
    yAxis: {
        name: 'y',
        splitLine: {
            lineStyle: {
                color: '#ff80c2'
            }
        },
        
         axisLabel: {
            textStyle: {
                color: '#ff80c2'
            }
        },

    },
    series: [{
            name: 'x',
            type: 'line',
            smooth: 1,
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: {
                normal: {
                    opacity:1,
                }
            },
            data: data1
        },

        {
            name: 'y',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            areaStyle: {
                normal: {
                    opacity: 1
                }
            },
            data: data2
        }
    ],
    animation: false
};
setInterval(function () {

    for (var i = 0; i <1.5; i++) {
        categories.pop();
        data1.pop();
        data2.pop();
        categories.unshift(offset.toString());
        data1.unshift((offset % 2 ? -1 : 1) * (base1 + Math.random() * amp1));
        data2.unshift((offset % 2 ? 1 : -1) * (base2 + Math.random() * amp2));
        offset++;
    }

    myChart.setOption({
        xAxis: {
            data: categories  
        },
        series: [{
            name: 'x',
            data: data1
        }, {
            name: 'y',
            data: data2
        }]
    });
}, 50);