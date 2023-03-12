let data = [{
        name: "盖梁构件",
        list: [{
                date: "一月",
                value: 15
            },
            {
                date: "二月",
                value: 16
            },
            {
                date: "三月",
                value: 8
            }
        ]
    },
    {
        name: "支柱构件",
        list: [{
                date: "一月",
                value: 22
            },
            {
                date: "二月",
                value: 15
            },
            {
                date: "三月",
                value: 15
            }
        ]
    },
    {
        name: "桥墩构件",
        list: [{
                date: "一月",
                value: 16
            },
            {
                date: "二月",
                value: 11
            },
            {
                date: "三月",
                value: 12
            }
        ]
    }
];
let dateList = [];
let yData1 = [];
let yData2 = [];
let yData3 = [];
data[0].list.forEach(function(item, index) {
    dateList.push(data[0].list[index].date);
    yData1.push(data[0].list[index].value);
});
data[1].list.forEach(function(item, index) {
    yData2.push(data[1].list[index].value);
});
data[2].list.forEach(function(item, index) {
    yData3.push(data[2].list[index].value);
});


option = {
    tooltip: {
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
        data: [data[0].name, data[1].name,data[2].name],
        left: 'right',
        icon: "circle",
        textStyle: {
            color: '#666'
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
            color: '#666'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ddd',
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
                color: '#ddd',
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color:'#666'
            },
            formatter: function(value) {
                return value
            },
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
                        color: '#666',
                        fontSize: 14,
                    },
                    color:'#4A90E2',
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
                        color: '#666',
                        fontSize: 14
                    },
                    color: '#D5C836',
                    opacity: 1,
                }
            },
            type: 'bar',
            data: yData2
        },
        {
            name: data[2].name,
            yAxisIndex: 0,
            //barMinHeight:5,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        color: '#666',
                        fontSize: 14
                    },
                    color:'#B445EE',
                    opacity: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data: yData3
        }
    ]
}