var value = [
    ['product', 'GDP', 'PPI', 'PDD'],
    ['2016-09', 2242.6, 7.1, 7.2],
    ['2016-10', 3312.5, 7.4, 7.2],
    ['2016-11', 2127.5, 6.4, 8.2],
    ['2016-12', 3527, 8.1, 6.2],
    ['2017-01', 3547.3, 7.1, 6.2],
    ['2017-02', 2927.5, 17.4, 9.2],
    ['2017-03', 3126.5, 7.4, 4.2],
    ['2017-04', 2677, 7.1, 9.2],
    ['2017-05', 3546.5, 27.2, 11.2],
    ['2017-06', 3327.1, 7.2, 11.2],
    ['2017-07', 2226.1, 7.1, 7.2],
    ['2017-08', 3116.5, 7.4, 21.2],
    ['2017-09', 3336.6, 7.4, 19.2],
    ['2017-10', 3222, 17.1, 16.2],
    ['2017-11', 3337.5, 7.2, 12.2],
    ['2017-12', 2447.1, 7.2, 11.2],
    ['2018-01', 3117, 7.1, 12.2],
    ['2018-02', -417.5, -1.4, 11.2],
    ['2018-03', 2227.5, 7, 15.2],
    ['2018-04', 3117, 7.1, 5.2],
    ['2018-05', 3117.3, 8.1, 7.2],
    ['2018-06', 3227.6, 7.1, 12.2],
    ['2018-07', 2337.3, 7.1, 1.2],
];
option = {

    dataset: {
        source: value //数据源
    },
    title: {
        text: 'GDP同比增速', //标题
        left: '40%',
    },
    tooltip: {
        //提示框组件
    },

    grid: {
        //坐标系（）
        bottom: '100',
        left: '70',
        top: 40,
    },
    legend: {
        //示例组件
        bottom: 0,
        borderColor: '#000',
        borderWidth: 1,
    },
    xAxis: [{
        //x洲
        type: 'category',
        axisPointer: {
            type: 'shadow'
        },
        axisTick: { //刻度线
            show: false
        },
        axisLabel: { //刻度的
            interval: 0,
            rotate: 90
        }
    }],
    yAxis: [{
            type: 'value',
            name: '亿元',
            nameRotate: '90', //控制单位旋转角度
            nameGap: "60", //控制单位位置
            nameLocation: 'middle',
            min: -1100,
            max: 4000,
            splitArea: { //控制区域颜色
                show: true,
                areaStyle: {
                    color: ['#B3D8FF', '#fff'],
                },
            },
            axisTick: { //刻度线
                show: false
            },
        },
        {
            type: 'value',
            name: '%',
            nameRotate: '270',
            nameGap: "40",
            nameLocation: 'middle',
            min: -10,
            max: 40,
            splitLine: {
                show: false
            },
            axisTick: { //刻度线
                show: false
            },
        }
    ],
    series: [{ //柱状图
            type: 'bar',
            itemStyle: {
                //bar的样式
                barBorderRadius: [0, 0, 0, 0],
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowBlur: 4,
                color: '#b1c8dc',
                opacity: 0.8,
            },
            barWidth: 20 //bar的宽度
        },
        { //折线1
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
                color: '#d4cf30',
            },
        },
        { //折线2
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
                color: '#64ca83',
            },
        },
    ]
};