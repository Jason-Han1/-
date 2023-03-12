let backgroundColor = 'rgba(0,0,0,1)';
let chartdata = [
    {
        value: 200,
    },
];
let max = 333;

option = {
    backgroundColor: backgroundColor,
    yAxis: {
        type: 'category',
        axisLine: {
            show: false, //坐标线
        },
        axisTick: {
            show: false, //小横线
        },
        axisLabel: {
            color: '#999', //坐标轴字颜色
        },
    },

    xAxis: {
        show: false,
        max: max,
    },
    grid: {
        top: '40',
        right: '10%',
        left: '10%',
        bottom: '40', //图表尺寸大小
    },
    animationDuration: 3000,
    series: [
        {
            type: 'bar',
            barWidth: '10px',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.4)',
                // barBorderRadius: [30, 30, 30, 30] //圆角大小
            },
            label: {
                show: true,
                position: 'right', //每一条的数据位置
                padding: [-22, 0, 0, -15],
                formatter: (params) => {
                    return '▼' + params.value;
                },
                textStyle: {
                    color: '#fff',
                    fontSize:20
                },
            },
            itemStyle: {
                normal: {
                    color: '#37ffea', //每个数据的颜色
                    // barBorderRadius: [30, 30, 30, 30], //圆角大小
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 103, 255, 0.2)',
                    shadowOffsetX: -5,
                    shadowOffsetY: 5,
                },
            },
            data: chartdata,
        },
    ],
};
