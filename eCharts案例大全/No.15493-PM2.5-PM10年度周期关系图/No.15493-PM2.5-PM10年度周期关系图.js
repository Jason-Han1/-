var timeData = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

/*timeData = timeData.map(function (str) {
    return str.replace('2009/', '');
});*/

option = {
    title: {
        text: 'PM2.5-PM10年度周期关系图',
        subtext: '堆叠数据',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data:['PM2.5','PM10'],
        x: 'left'
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    axisPointer: {
        link: {xAxisIndex: 'all'}
    },
    dataZoom: [
        {
            show: true,
            realtime: true,
            start: 20,
            end: 80,
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        }
    ],
    grid: [{
        left: 50,
        right: 50,
        height: '35%'
    }, {
        left: 50,
        right: 50,
        top: '55%',
        height: '35%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData,
            position: 'top'
        }
    ],
    yAxis : [
        {
            name : 'PM2.5',
            type : 'value',
            max:300,
        },
        {
            gridIndex: 1,
            name : 'PM10',
            type : 'value',
            inverse: true
        }
    ],
    series : [
        {
            name:'2014-PM2.5',
            type:'line',
            smooth:true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {normal: {color: '#2ec7c9',},},
            areaStyle: {normal: {color: '#2ec7c9',opacity:0.3,},},
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[92,130,83,55,54,48,75,56,59,103,86,58]
        },
        {
            name:'2015-PM2.5',
            type:'line',
            smooth:true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {normal: {color: '#b6a2de',},},
            areaStyle: {normal: {color: '#b6a2de',opacity:0.3,},},
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[89,83,78,63,50,52,52,40,41,60,100,134]
        },
        {
            name:'2016-PM2.5',
            type:'line',
            smooth:true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {normal: {color: '#ffb980',},},
            areaStyle: {normal: {color: '#ffb980',opacity:0.3,},},
            itemStyle: {normal: {areaStyle: {type: 'default'},}},
            data:[60,46,84,58,49,53,59,40,47,70,90,105]
        },

        {
            name:'2014-PM10',
            type:'line',
            smooth:true,
            stack: '堆叠',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {normal: {color: '#2ec7c9',},},
            areaStyle: {normal: {color: '#2ec7c9',},},
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [104,115,121,89,82,27,33,31,35,68,102,81]
        },
        {
            name:'2015-PM10',
            type:'line',
            smooth:true,
            stack: '堆叠',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {normal: {color: '#b6a2de',},},
            areaStyle: {normal: {color: '#b6a2de',},},
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [70,65,122,83,73,45,44,47,43,54,39,68]
        },
        {
            name:'2016-PM10',
            type:'line',
            smooth:true,
            stack: '堆叠',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {normal: {color: '#ffb980',},},
            areaStyle: {normal: {color: '#ffb980',},},
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [50,45,93,87,66,42,33,37,40,49,94,66]
        }
    ]
};