options = [{
    title: {
        left: 'center',
        text: '散点图 + 折线图',
        subtext: '纵倾=[0,0), 航速=[3,0)',
        textStyle: {
            fontSize: 17,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
        subtextStyle: {
            fontSize: 14,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'balck',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000'
        },
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: false
            },
            brush: {
                type: ['lineX', 'clear']
            }
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            top: '92.5%',
            start: 0,
            end: 100
        },
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            left: '93%',
            start: 0,
            end: 100
        },
        {
            type: 'inside',
            xAxisIndex: [0],
            start: 0,
            end: 100
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            start: 0,
            end: 100
        }
    ],
    xAxis: {
        type: 'value',
        name: '功率',
        nameLocation: 'middle',
        nameGap: 30,
        scale: true,
        nameTextStyle: {
            fontSize: 15,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
        axisLabel: {
            fontSize: 15,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
    },
    yAxis: {
        type: 'value',
        name: '功率',
        scale: true,
        nameTextStyle: {
            fontSize: 15,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
        axisLabel: {
            fontSize: 15,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
    },
    legend: {
        right: 90,
        top:30,
        data: ['实际功率', '预测功率'],
        textStyle: {
            fontSize: 15,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
    },
    series: [{
        name: '实际功率',
        symbolSize: 8,
        data: [
            [1, 8.04],
            [2, 6.95],
            [3, 7.58],
            [4, 8.81],
            [5, 8.33],
            [6, 9.96],
            [7, 7.24],
            [8, 4.26],
            [9, 10.84],
            [10, 4.82],
            [12, 5.68],
        ],
        type: 'line'
    }]
},
{
    title: {
        left: 'center',
        text: '散点图 + 折线图',
        subtext: '纵倾=[0,0), 航速=[3,0)',
        textStyle: {
            fontSize: 17,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
        subtextStyle: {
            fontSize: 14,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'balck',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000'
        },
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: false
            },
            brush: {
                type: ['lineX', 'clear']
            }
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            top: '92.5%',
            start: 0,
            end: 100
        },
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            left: '92.5%',
            start: 0,
            end: 100
        },
        {
            type: 'inside',
            xAxisIndex: [0],
            start: 0,
            end: 100
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            start: 0,
            end: 100
        }
    ],
    xAxis: {
        type: 'value',
        name: '功率',
        nameLocation: 'middle',
        nameGap: 30,
        scale: true,
        nameTextStyle: {
            fontSize: 15,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
        axisLabel: {
            fontSize: 15,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
    },
    yAxis: {
        type: 'value',
        name: '功率',
        scale: true,
        nameTextStyle: {
            fontSize: 15,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
        axisLabel: {
            fontSize: 15,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
    },
    legend: {
        right: 90,
        top:30,
        data: ['实际功率', '预测功率'],
        textStyle: {
            fontSize: 15,
            fontFamily: "Arial",
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
    },
    series: [{
        name: '实际功率',
        symbolSize: 8,
        data: [
            [1, 8.04],
            [2, 6.95],
            [3, 7.58],
            [4, 8.81],
            [5, 8.33],
            [6, 9.96],
            [7, 7.24],
            [8, 4.26],
            [9, 10.84],
            [10, 4.82],
            [12, 5.68],
        ],
        type: 'line'
    }]
}]