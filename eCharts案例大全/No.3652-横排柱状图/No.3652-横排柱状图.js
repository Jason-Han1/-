let backgroundColor = 'rgba(0,0,0,1)';
let chartdata = [
    [111, 222, 333, 444],
    ['石油', '煤矿', '汽油', '电力'],
];
let color = [
    '#02a9f4',
    '#86c200',
    '#ffc933',
    '#e31404',
    '#ff6f00',
    '#ebae81',
    '#ca8622',
    '#bda29a',
    '#6e7074',
    '#546570',
    '#c4ccd3',
];

option = {
    backgroundColor: backgroundColor,
    barWidth: 15,
    grid: {
        top: '5%',
        bottom: '6%', //也可设置left和right设置距离来控制图表的大小
        left: '5%',
        right: '15%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            //  改变x轴颜色
            show: false,
            lineStyle: {
                color: '#26D9FF',
            },
        },
        axisLabel: {
            //  改变x轴字体颜色和大小
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
        },
    },
    yAxis: {
        type: 'category',
        data: chartdata[1],
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            //  改变y轴颜色
            lineStyle: {
                color: '#26D9FF',
            },
        },
        axisLabel: {
            //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
        },
    },
    dataZoom: [
        {
            show: false,
            xAxisIndex: [0],
            left: 0,
            bottom: 30,
            start: 1,
            end: 100,
            handleSize: '100%',
            handleStyle: {
                color: '#5B3AAE',
            },
            textStyle: {
                color: 'rgba(204,187,225,0.5)',
            },
            fillerColor: 'rgba(67,55,160,0.4)',
            borderColor: 'rgba(204,187,225,0.5)',
        },
        {
            type: 'inside',
            show: true,
            start: 1,
            end: 100,
        },
    ],
    series: [
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        formatter: (params) => {
                            return params.data;
                        },
                        position: 'right', //在上方显示
                        textStyle: {
                            //数值样式
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 600,
                        },
                    },
                    color: (params) => {
                        return color[params.dataIndex];
                    },
                    borderWidth: 2,
                },
            },
            data: chartdata[0],
        },
    ],
};
