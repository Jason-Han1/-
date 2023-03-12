
   var cw = document.body.clientHeight / 70;

    var textStyle = {
        fontSize : 1.2*cw,
        color: "rgba(255,255,255,1)",
    }
    var  axisLabel = {
        show: true,
        textStyle: {
            fontSize:cw,
            color: "rgba(255,255,255,0.6)"
        }
    }
    var axisLine = {
        lineStyle: {
            color:"rgba(169,213,255,0.15)",
        }
    }

    var lineStyle = {
        color: "rgba(169,213,255,0.15)",
    }


option = {
    backgroundColor:'#03143A',
    color:['rgba(255,35,35,1)','rgba(66,232,0,1)','rgba(255,56,159,1)','rgba(138,138,255,1)'],
    title: {
        text: '团队项目统计',
        // subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    toolbox: {
        feature: {
            dataView: {
                show: false,
                readOnly: false,
            },
            restore: {
                show: false,
            },
            saveAsImage: {
                show: false,
            },
        },
    },
    legend: {
        data: ['项目总数', '经费总数', '人均经费'],
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisTick: {
            alignWithLabel: false,
        },
        data: [23,  44,  55,  19],
    },
    // 关键性代码
    yAxis: [{
            type: 'value',
            name: '经费总数',
            position: 'left',
            splitLine:{
                        show: true,
                        lineStyle: lineStyle,
                    },
            axisLabel:axisLabel,
            axisLine: {
                lineStyle: {
                    width:1,
                    color: 'rgba(255,35,35,1)',
                },
            },
        },
        {
            type: 'value',
            name: '人均经费',
            position: 'right',
            axisLabel: {
                formatter: '{value}',
            },
             splitLine:{
                        show: false,
                        lineStyle: lineStyle,
                    },
            axisLine: {
                lineStyle: {
                    color: 'rgba(66,232,0,1)',
                },
            },
        },
        {
            type: 'value',
            name: '项目总数',
            offset: 60, // 偏移
            position: 'right',
            axisLabel: {
                formatter: '{value}',
            },
            splitLine:{
                        show: false,
                        lineStyle: lineStyle,
                    },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,56,159,1)',
                },
            },
        },
        {
            type: 'value',
            name: '第四个',
            offset: 120, // 偏移
            position: 'right',
            axisLabel: {
                formatter: '{value}',
            },
            splitLine:{
                        show: false,
                        lineStyle: lineStyle,
                    },
            axisLine: {
                lineStyle: {
                    color: 'rgba(138,138,255,1)',
                },
            },
        },
    ],
    series: [{
            name: '项目总数',
            type: 'line',
            color: 'rgba(255,35,35,1)',
            data: [23,  44,  55,  19],
            yAxisIndex: 2, // 相对应的坐标轴
        },
        {
            name: '人均经费',
            type: 'line',
            color: 'rgba(66,232,0,1)',
            data: [34,  14,  15,  87],
            yAxisIndex: 1, // 相对应的坐标轴
        },
        {
            name: '经费总数',
            type: 'line',
            color: 'rgba(255,56,159,1)',
            data: [87,  33,  11,  33],
            yAxisIndex: 0, // 相对应的坐标轴
        },
        {
            name: '第四个',
            type: 'line',
            color: 'rgba(138,138,255,1)',
            data: [87,  33,  11,  33],
            yAxisIndex: 3, // 相对应的坐标轴
        },
    ],
}