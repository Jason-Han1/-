option = {
    backgroundColor: 'rgba(30, 34, 48, 1)',
    color: ['rgba(80, 177, 113, 1)', 'rgba(217, 185, 107, 1)', 'rgba(200, 65, 65, 1)', 'rgba(113, 113, 113, 1)'],
    legend: {
        bottom: '3%',
        itemWidth: 10,
        itemHeight: 8,
        itemGap: 15,
        textStyle: {
            fontFamily: 'MicrosoftYaHei',
            fontSize: 14,
            color: 'rgba(178, 175, 173, 1)'
        },
        data: ['行驶', '停车', '熄火', '离线']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        backgroundColor: 'rgba(42, 51, 74, 0.89)',
        borderColor: 'transparent',
        formatter: function (params) {
            let returnData = '<div style="padding: 2px 10px;">'
            returnData += '<span style="font-family: MicrosoftYaHei; font-size: 14px; color: rgba(210, 221, 249, 1);">' + params[0].axisValue + '</span><br/>'
            for (let i = 0; i < params.length - 1; i++) {
                returnData += '<span style="display:inline-block; width:10px; height:8px; margin-right:5px; border-radius:1px; background-color:' + params[i].color + '"></span>'
                returnData += '<span style="font-family: MicrosoftYaHei; font-size: 14px; color: rgba(178, 175, 173, 1); ">' + params[i].seriesName + '：</span><span style="font-family: Verdana; font-size: 12px; color: ' + params[i].color + '">' + params[i].value + '</span><span style="display:inline-block; margin-left: 4px; line-height: 10px; font-family: MicrosoftYaHei; font-size: 12px; color: rgba(178, 175, 173, 1);">车</span><br/>'
            }
            returnData += '</div>'
            return returnData
        }
    },
    grid: {
        left: '3%',
        top: '10%',
        right: '5%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        name: '辆',
        nameTextStyle: {
            fontFamily: 'MicrosoftYaHei',
            fontSize: 12,
            color: 'rgba(113, 113, 113, 1)'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(52, 51, 51, 1)'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            margin: 10,
            fontFamily: 'MicrosoftYaHei',
            fontSize: 12,
            color: 'rgba(113, 113, 113, 1)',
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        type: 'category',
        data: ['承运商1', '承运商2', '承运商3', '承运商4', '承运商5'],
        interval: true,
        axisLine: {
            lineStyle: {
                color: 'rgba(52, 51, 51, 1)',
            },
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            margin: 10,
            fontFamily: 'MicrosoftYaHei',
            fontSize: 12,
            color: 'rgba(113, 113, 113, 1)',
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            name: '行驶',
            type: 'bar',
            stack: 'truck',
            barWidth: 20,
            itemStyle: {
                borderColor: 'transparent',
                borderWidth: 3,
            },
            label: {
                show: false,
            },
            data: [29, 19, 26, 44, 20]
        },
        {
            name: '停车',
            type: 'bar',
            stack: 'truck',
            barWidth: 20,
            itemStyle: {
                borderColor: 'transparent',
                borderWidth: 3,
            },
            label: {
                show: false,
            },
            data: [38, 36, 44, 33, 20]
        },
        {
            name: '熄火',
            type: 'bar',
            stack: 'truck',
            barWidth: 20,
            itemStyle: {
                borderColor: 'transparent',
                borderWidth: 3,
            },
            label: {
                show: false,
            },
            data: [33, 45, 30, 23, 60]
        },
        {
            name: '离线',
            type: 'bar',
            stack: 'truck',
            barWidth: 20,
            itemStyle: {
                borderColor: 'transparent',
                borderWidth: 3,
            },
            label: {
                show: false,
            },
            data: [33, 45, 30, 23, 60]
        },
        {
            name: '背景框',
            type: 'bar',
            data: [0, 0, 0, 0, 0],
            barWidth: 30,
            barGap: '-126%',
            showBackground: true,
            backgroundStyle: {
                color: 'transparent',
                borderColor: 'rgba(255, 255, 255, 0.19)',
                borderWidth: 1
            },
            itemStyle: {
                normal: {
                    color: 'transparent'
                },
            },
            z: 1
        },
    ],
};
