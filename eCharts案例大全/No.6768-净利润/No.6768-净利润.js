var labelRight = {
    position: 'left'
};
option = {
    title: {
        text: '净利润',
        subtext: '',
        sublink: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 80,
        bottom: 30
    },
    xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {show: false},
        axisLabel: {show: true},
        axisTick: {show: false},
        splitLine: {show: false},
        data: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019]
    },
    series: [
        {
            name: '净利润',
            type: 'bar',
            stack: '总量',
      
            data: [
                {
                    value: -1258,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(11, 153, 84, 1)"}
                },
                {
                    value: -74373,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(11, 153, 84, 1)"}
                },
                {
                    value: 272597,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(153, 11, 11, 1)"}
                },
                {
                    value: 295935,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(153, 11, 11, 1)"}
                },
                {
                    value: -49366,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(11, 153, 84, 1)"}
                },
                {
                    value: 69491,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(153, 11, 11, 1)"}
                },
                {
                    value: 272243,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(153, 11, 11, 1)"}
                },
                {
                    value: 1704,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(153, 11, 11, 1)"}
                },
                {
                    value: -34903,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(11, 153, 84, 1)"}
                },
                {
                    value: 20063,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(153, 11, 11, 1)"}
                },
                {
                    value: -34027,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(11, 153, 84, 1)"}
                },
                {
                    value: 219478,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(153, 11, 11, 1)"}
                },
                {
                    value: 377874,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(153, 11, 11, 1)"}
                },
                {
                    value: 520016,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(153, 11, 11, 1)"}
                },
                {
                    value: 322868,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(153, 11, 11, 1)"}
                },
                {
                    value: 338359,
                    label: {show: true,   position: "inside", fontSize: 18},
                    itemStyle: {color: "rgba(153, 11, 11, 1)"}
                },
            ]
        }
    ]
};
