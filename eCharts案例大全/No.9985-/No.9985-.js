let data = [{
        name: "进场",
        list: [{
                date: "周一",
                value: 20
            },
            {
                date: "周二",
                value: 13
            },
            {
                date: "周三",
                value: 15
            },
            {
                date: "周四",
                value: 18
            },
            {
                date: "周五",
                value: 6
            },
            {
                date: "周六",
                value: 11
            },
            {
                date: "周日",
                value: 14
            }
        ]
    },
    {
        name: "进场",
        list: [{
                date: "周一",
                value: 20
            },
            {
                date: "周二",
                value: 13
            },
            {
                date: "周三",
                value: 15
            },
            {
                date: "周四",
                value: 18
            },
            {
                date: "周五",
                value: 6
            },
            {
                date: "周六",
                value: 11
            },
            {
                date: "周日",
                value: 14
            }
        ]
    }
];
let dateList=[];
let yData1 = [];
let yData2 = [];
data[0].list.forEach(function(item,index){
     dateList.push(data[0].list[index].date);
    yData1.push(data[0].list[index].value);
});
data[1].list.forEach(function(item,index){
    yData2.push(data[1].list[index].value);
});

option = {
    backgroundColor: 'rgb(3, 19, 52)',
    color: ['#2ea5c3', '#e08f68'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },

        formatter: function(params) {
            var tiplabel = params[0].name + '<br/>' +
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[0].color.colorStops[0].color + '"></span>' +
                params[0].seriesName + ':' + params[0].value + '<br/>' +
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[1].color.colorStops[0].color + '"></span>' +
                params[1].seriesName + ':' + params[1].value;
            return tiplabel;
        }
    },
    legend: {
        data: [data[0].name, data[1].name],
        left: 'right',
        icon: "circle",
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        //top:80,
        left: 10,
        bottom: 20,
        right: 20,
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: dateList,
        axisLabel: {
            tooltip: {
                show: true,
            },
            inside: false,
            textStyle: {
                fontSize: 14
            },
            interval: 0,
            color: 'rgba(255,255,255,0.6)'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#0C1A5B',
            }
        },

    },
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#0C1A5B',
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 14
            },
            formatter: function(value) {
                return value
            },
            color: 'rgba(255,255,255,0.6)'
        }
    }],
    series: [{
            name: data[0].name,
            yAxisIndex: 0,
            //barMinHeight:5,
            barCategoryGap: '30%',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        color: '#fff',
                        fontSize: 14,
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#A43EE5'
                    }, {
                        offset: 1,
                        color: '#CE7C13'
                    }]),
                    opacity: 1,
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data: yData1
        },
        {
            name: data[1].name,
            yAxisIndex: 0,
            //barMinHeight:5,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        color: '#fff',
                        fontSize: 14
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00FFFF'
                    }, {
                        offset: 1,
                        color: '#004EFF'
                    }]),
                    opacity: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data: yData2
        }
    ]
}