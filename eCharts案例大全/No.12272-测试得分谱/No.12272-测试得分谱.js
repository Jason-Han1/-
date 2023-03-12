var ck = [0.72, 0.82, 0.91, 0.7, 0.62, 0.65, 0.5, 0.37, 0.87, 0.47, 0.65, 0.99];
var bfb = '0.3'
//以上是数据
var cb = function(){
    var l = parseInt(ck.length*0.3);
    var cbdata = []
    for(var i=0;i<l;i++){
        cbdata[i] = 1;
    }
    return cbdata;
};
//格式化数据
option = {
    backgroundColor: '#fff',
    title: {
        text: '测试得分谱',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#333'
        },
        left: 'center',
        bottom: '25'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            show: false,
            lineStyle: {

                color: 'rgba(255,255,255,0)'
            }
        },
        formatter: "{b}<br/>分值占比 {c}"
    },

    grid: {
        left: '3%',
        right: '8%',
        bottom: '20%',
        containLabel: true
    },
    xAxis: [{
        name: '重要知识点',
        type: 'category',
        boundaryGap: true,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        nameTextStyle: {
            color: '#999'
        },
        axisLabel: {
            color: '#999',
            show: true
        },
        data: ['about', 'boot', 'cat', 'doule', 'end', 'four', 'greet', 'hour', 'ice', 'jack', 'ket', 'length']
    }],
    yAxis: [{
        type: 'value',
        name: '分值占比',
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },

        nameTextStyle: {
            color: '#999'
        },
        splitLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            color: '#999'
        },
        max: 1
    }],
    series: [{
        name: '知识点',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(124,189,255, 0.8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(124,189,255, 0)'
                }], false),
                shadowColor: 'rgba(255,255,255, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(124,189,255)',
                borderColor: 'rgba(124,189,255,0.3)',
                borderWidth: 12

            }
        },
        z: 1,
        data: ck,
    }, {
        name: '域',
        type: 'bar',
        barWidth: '100%',
        itemStyle: {
            normal: {
                color: 'rgba(128,128,128,0.2)'
            },
            emphasis: {
                color: 'rgba(128,128,128,0.2)'
            }


        },
        z: 0,
        data: cb(),


    }]
};