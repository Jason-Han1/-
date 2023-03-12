var xAxis_data = [
    '合肥',
    '瑶海区',
    '庐阳区',
    '蜀山区',
    '包河区',
    '高新区',
    '经开区',
    '新站区',
    '安巢经开区',
    '长丰县',
    '肥东县',
    '肥西县',
    '庐江县',
    '巢湖市',
];
var series_data = [
    [209.41, 20.56, 51.8, 20.16, 34.8, 25.24, 11.18, 11.13, 1.42, 14.84, 8.52, 4.26, 1.76, 3.72],
    [1088.48, 109.84, 256.53, 110.28, 210.49, 131.67, 60.81, 44.92, 7.25, 56.24, 46.27, 24.35, 10.76, 19.07],
    [9.97, 4.37, 3.05, -15.05, -2.5, 31.15, 6.06, 20.52, 8.95, 14.78, 26.42, 12.73, 4.07, 6.12],
    [23.58, 20.01, 24.38, 19.13, 20.66, 21.73, 40.76, 27.64, 17.88, 15.65, 37.6, 39.91, 54.46, 14.53],
];

var legend_data = ['当月零售额', '累计零售额', '当月增速(%)', '累计增速(%)'];
var option = {
    backgroundColor: '#323a5e',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },

    grid: {
        left: '2%',
        right: '4%',
        bottom: '14%',
        top: '16%',
        containLabel: true,
    },
    legend: {
        data: legend_data,
        right: 10,
        top: 12,
        textStyle: {
            color: '#fff',
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },
    xAxis: {
        type: 'category',
        data: xAxis_data,
        axisLine: {
            lineStyle: {
                color: 'white',
            },
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
                fontFamily: 'Microsoft YaHei',
            },
        },
    },

    yAxis: [
        {
            type: 'value',
            name: '亿元',
            //max: '1200',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)',
                },
            },
            axisLabel: {},
        },
        {
            type: 'value',
            name: '同比（%）',
            nameTextStyle: {
                color: 'white',
            },
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: 'white',
                },
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                //formatter: '{value} %', //右侧Y轴文字显示
                formatter: '{value} ', //右侧Y轴文字显示
                textStyle: {
                    color: 'white',
                },
            },
        },
    ],
    /*dataZoom: [
        {
            show: true,
            height: 12,
            xAxisIndex: [0],
            bottom: '8%',
            start: 0,
            end: 100,
            handleIcon:
                'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
                color: '#d3dee5',
            },
            textStyle: {
                color: '#fff',
            },
            borderColor: '#90979c',
        },
        {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35,
        },
    ],*/
    series: [
        {
            name: legend_data[0],
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#fccb05',
                        },
                        {
                            offset: 1,
                            color: '#f5804d',
                        },
                    ]),
                    barBorderRadius: 12,
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
                formatter: '{@value}',
            },

            data: series_data[0],
        },
        {
            name: legend_data[1],
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#8bd46e',
                        },
                        {
                            offset: 1,
                            color: '#09bcb7',
                        },
                    ]),
                    barBorderRadius: 11,
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
                formatter: '{@value}',
            },
            data: series_data[1],
        },
        {
            name: legend_data[2],
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        /* {
                            offset: 0,
                            color: '#248ff7',
                        },
                        {
                            offset: 1,
                            color: '#6851f1',
                        },*/
                        {
                            offset: 0,
                            color: '#fccb05',
                        },
                        {
                            offset: 1,
                            color: '#f5804d',
                        },
                    ]),
                    barBorderRadius: 11,
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
                formatter: '{@value}',
            },
            data: series_data[2],
        },
        {
            name: legend_data[3],
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        /* {
                            offset: 0,
                            color: '#AD24F7',
                        },
                        {
                            offset: 1,
                            color: '#C151F1',
                        },*/
                        {
                            offset: 0,
                            color: '#8bd46e',
                        },
                        {
                            offset: 1,
                            color: '#09bcb7',
                        },
                    ]),
                    barBorderRadius: 11,
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
                formatter: '{@value}',
            },
            markLine: {
                symbol: 'none',
                data: [
                    {
                        silent: false, //鼠标悬停事件  true没有，false有
                        lineStyle: {
                            //警戒线的样式  ，虚实  颜色
                            type: 'solid',
                            color: '#FA3934',
                        },
                        label: {
                            position: 'end',
                            formatter: '',
                        },
                        yAxis: 0, // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
                    },
                ],
            },
            data: series_data[3],
        },
    ],
};

var app = {
    currentIndex: -1,
};

var timeOut = null;
autoMoven();
function autoMoven() {
    timeOut = setInterval(function () {
        var dataLen = option.series[0].data.length;

        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
    }, 1000);
}
function stop(){
    clearInterval(timeOut)
}

myChart.on('mouseover',stop);
myChart.on('mouseout',autoMoven);