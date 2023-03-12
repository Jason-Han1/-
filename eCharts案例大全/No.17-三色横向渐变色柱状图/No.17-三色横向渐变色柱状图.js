var attaData1 = [62, 52, 34, 61, 15, 25, 50, 60, 90, 100];
var attaData2 = [162, 152, 134, 161, 115, 60, 90, 10, 30, 125];
var attaData3 = [162, 152, 134, 161, 115, 125, 90, 92, 34, 60, 40];
option = {
    backgroundColor: '#000',
    dataZoom: [
        {
            moveOnMouseMove: true,
            type: 'slider',
            show: true,
            width: 5,
            fillerColor: '#269cdb',
            borderRadius: 5,
            yAxisIndex: [0],
            start: 1,
            end: 80, //初始化滚动条
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            zoomOnMouseWheel: false, //滚轮是否触发缩放
            moveOnMouseMove: true, //鼠标滚轮触发滚动
            moveOnMouseWheel: true,
        },
    ], 
    tooltip: {
        trigger: 'axis',
        borderColor: '#62FFFF',
        formatter: ' {b}     {c}户',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        x: 65,
        y: 40,
        x2: 65,
        y2: 20,
    },
    xAxis: {
        show: true,
        type: 'value',
        name: '单位:户',
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.79)',
            },
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255, 255, 255, 0.79)',
            },
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        data: ['杭州市', '宁波市', '绍兴市', '湖州市', '温州市', '丽水市', '台州市', '衢州市', '嘉兴市', '金华市'],
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.79)',
            },
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255, 255, 255, 0.79)',
            },
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    series: [
        {
            name: '绿码',
            type: 'bar',
            barWidth: 12,
            zlevel: 2,
            itemStyle: {
                barBorderRadius: [0, 20, 20, 0],
                color: {
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0, 255, 100, 1)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 255, 100, 0.5)', // 100% 处的颜色
                        },
                    ],
                },
                opacity: 0.8,
            },
            data: attaData1,
        },
        {
            name: '黄码',
            type: 'bar',
            barWidth: 12,
            zlevel: 2,
            itemStyle: {
                barBorderRadius: [0, 20, 20, 0],
                color: {
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(252, 179, 0, 1)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(252, 179, 0, 0.5)', // 100% 处的颜色
                        },
                    ],
                    opacity: 0.8,
                },
            },
            data: attaData2,
        },
        {
            name: '红码',
            type: 'bar',
            barWidth: 12,
            zlevel: 2,
            itemStyle: {
                barBorderRadius: [0, 20, 20, 0],
                color: {
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(244, 0, 16, 1)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(244, 0, 16, 0.5)', // 100% 处的颜色
                        },
                    ],
                    opacity: 0.8,
                },
            },
            data: attaData3,
        },
        
    ],
};
