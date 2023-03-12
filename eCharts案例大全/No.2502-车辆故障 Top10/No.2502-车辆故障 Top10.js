let yLabel = ['0410', '0405', '0404', '0407', '0403', '0402', '0409', '0408', '0406', '0410'];
let yData = [5, 6, 6, 6, 7, 7, 8, 8, 9, 10];
let bgData = [];
for (let i in yData) {
    bgData.push(10);
}
option = {
    title: {
        text: '车辆故障 Top10',
        textStyle: {
            color: '#63C0FA',
            fontSize: '14',
            fontFamily: 'PingFang',
            fontWeight: '400',
        },
        left: 'center',
        top: '10',
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return (
                params[0].name +
                '<br/>' +
                params[0].seriesName +
                ' : ' +
                params[0].value +
                ' <br/>'
            );
        },
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                margin: 15,
                textStyle: {
                    color: '#BDC8DC',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: yLabel,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#BDC8DC',
                    fontSize: '12',
                },
            },
            data: yData,
        },
    ],
    series: [
        {
            name: '人数',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 30, 30, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#5BBEFF',
                        },
                        {
                            offset: 1,
                            color: '#148AF5',
                        },
                    ]),
                    shadowBlur: 0,
                    shadowColor: 'rgba(87,220,222,0.7)',
                },
            },
            barWidth: 20,
            data: yData,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: bgData,
            itemStyle: {
                normal: {
                    color: '#101B39',
                    borderColor: '#293D49',
                    barBorderRadius: [0, 30, 30, 0],
                },
            },
        },
    ],
};
