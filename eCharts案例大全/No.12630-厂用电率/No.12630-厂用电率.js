
var datas =[7.602,7.459,7.128,6.813,6.692];
option = {
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        }, 
        axisTick: {
            show: false
        },
        data: [2013,2014,2015,2016,2017],
        axisLabel:{
        	interval:0,
        // 	rotate:50,
            textStyle:{
            	fontSize:12
            }
        },
    }],
    yAxis: [{
        type: 'value',
    
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
             show: false
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: '厂用点率',
        type: 'line',
        // smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#15f5ff  '
                }, {
                    offset: 0.5,
                    color: '#099cff'
                }, {
                    offset:1,
                    color: '#005eff'
                }], false),
                shadowColor: 'rgba(228, 139, 76, 0.1)',
                // shadowBlur: 10
            }
        },
        symbolSize:0,  
        itemStyle: {
            normal: {
                color:  new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#15f5ff  '
                }, {
                    offset: 0.5,
                    color: '#099cff'
                }, {
                    offset:1,
                    color: '#005eff'
                }], false),
                // borderColor:'#e48b4c'
            },
        },
        data: datas,
    } ]
};