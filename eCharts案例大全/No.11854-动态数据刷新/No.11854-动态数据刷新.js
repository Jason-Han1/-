var option = {
    title: {
        text: '动态数据',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最新成交价', '预购队列']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },

    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: (function() {
            var now = new Date();
            var res = [];
            var len = 60;
            while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                now = new Date(now - 2000);
            }
            return res;
        })()
    },
        {
            type: 'category',
            boundaryGap: true,
            data: (function() {
                var res = [];
                var len = 60;
                while (len--) {
                    res.push(len + 1);
                }
                return res;
            })()
        }
    ],
    yAxis: [{
        type: 'value',
        scale: true,
        name: '价格',
        max: 20,
        min: 0,
        boundaryGap: [0.2, 0.2]
    },
        {
            type: 'value',
            scale: true,
            // name: '预购量',
            max: 100,
            min: 0,
            boundaryGap: 0
        }
    ],
    series: [{
        name: '预购队列',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        barGap: '-100%',
        barCategoryGap: '0%',
        itemStyle: {
            normal: {
                color: 'rgba(0,0,0,0)',
                borderRightWidth: '1',
                borderColor: '#ddd'
            }
        },
        lineStyle: {
            shadowColor: '#0f0',
            shadowBlur: 8,
            shadowOffsetX: '3',
            shadowOffsetY: '4',
        },
        data: (function() {
            var res = [];
            var len = 60;
            while (len--) {
                res.push(100);
            }
            return res;
        })()
    },
        {
            name: '最新成交价',
            type: 'line',
            data: (function() {
                var res = [];
                var len = 0;
                while (len < 60) {
                    res.push(0);
                    len++;
                }
                return res;
            })()
        }
    ],
    animationEasing: 'sinusoidalInOut',
    // animationDurationUpdate: 500,
    animationEasingUpdate:'sinusoidalInOut'
};




myChart.setOption(option);
var count = 11;
    setInterval(function() {
        axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

        var data0 = option.series[0].data;
        var data1 = option.series[1].data;
		console.log(data0 )
		
        data0.shift();
        data0.push(100);
        data1.shift();
        data1.push(Math.round(Math.random()*10));

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(count++);

        myChart.setOption({
            xAxis: [{
                data: option.xAxis[0].data
            }, {
                data: option.xAxis[1].data
            }],
            series: [{
                data: data0
            }, {
                data: data1
            }]
        });
    }, 1000);