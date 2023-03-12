
var datas =[96.3,96.4,97.5,95.6,98.1,94.8,89.6,94.1,80.1,52.4,75.8,94.7];
option = {
    backgroundColor: '#1b1b1b',
    title: {
        text: '',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: '#F1F1F3'
        },
        left: '6%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['党费'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '1%',
        right: '2%',
        bottom: '8%',
        top:'14%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLabel:{
        	interval:0,
        	rotate:50,
            textStyle:{
            	fontSize:12
            }
        },
    }],
    yAxis: [{
        type: 'value',
        interval: 40,
        max:120,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: '党费',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(82, 191, 255, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(82, 191, 255, 0)'
                }], false),
                shadowColor: 'rgba(228, 139, 76, 0.1)',
                shadowBlur: 10
            }
        },
        symbolSize:4,  
        itemStyle: {
            normal: {
                color: 'rgb(82, 191, 255)',
                borderColor:'#e48b4c'
            },
        },
        data: datas,
    } ]
};