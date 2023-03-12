let arr1 = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
    arr2 = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10'];
let yMax = Math.max(...arr1);
let dataShadow = [];
if (yMax === 0) {
    yMax = 1;
}
for (let i = 0; i < arr1.length; i++) {
    dataShadow.push(yMax);
}
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '15%',
        top: '15%',
        containLabel: true
    },
    dataZoom: [
        {
            yAxisIndex: 0,
            show: false,
            type: 'slider',
            startValue: 0,
            endValue: 4,
        },
        {
            yAxisIndex: 1,
            show: false,
            type: 'slider',
            startValue: 0,
            endValue: 4,
        },
    ],
    xAxis: [
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLabel: {
                lineHeight: 20
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: '#ccc',
                    type: 'dashed',
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: arr2,
            axisLabel: {
                fontSize: 15,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            inverse: true,
        },
        {
            type: 'category',
            boundaryGap: false,
            data: arr1,
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            inverse: true,
        },
    ],
    series: [
        {
            type: 'bar',
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: 'rgba(54, 114, 217, 0.05)',
                    barBorderRadius: 100,
                },
            },
            barGap: '-100%',
            data: dataShadow,
            animation: false,
        },
        {
            type: 'bar',
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#3672D9',
                        },
                        {
                            offset: 1,
                            color: '#639CFF',
                        },
                    ]),
                    barBorderRadius: 100,
                },
            },
            data: arr1,
        },
    ],
};

setInterval(function(){
    if (option.dataZoom[0].endValue == arr1.length) {
        option.dataZoom[0].endValue = 4;
        option.dataZoom[0].startValue = 0;
        option.dataZoom[1].endValue = 4;
        option.dataZoom[1].startValue = 0;
    } else {
        option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
        option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
        option.dataZoom[1].endValue = option.dataZoom[1].endValue + 1;
        option.dataZoom[1].startValue = option.dataZoom[1].startValue + 1;
    }
    // chart.setOption(option);
},1500)