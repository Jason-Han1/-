var data1 = [600, 235, 780, 400, 634, 550];
var xData = ['CNC-1', 'CNC-2', 'CNC-3', 'CNC-4', 'CNC-5', 'CNC-6'];
option = {
    backgroundColor: 'black',
    title: {
        text: '设备产量日统计',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 28,
        },
        top: '5%',
        left: 'center',
    },
    grid: {
        borderWidth: 0,
        top: '19%',
        left: '5%',
        right: '2%',
        bottom: '14%',
        textStyle: {
            color: '#fff',
        },
    },
    legend: {
        top: '5%',
        right: '10%',
        textStyle: {
            fontSize: 20,
            fontFamily: 'MicrosoftYaHeiUI',
            color: '#FFFFFF',
        },
        itemWidth: 28,
        itemHeight: 28,
        data: [
            {
                name: '产量',
                icon:
                    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA1ElEQVR4Xu2WsQ2AMBADP4ghYBtGZxsYAhHEAMQ19tF+g+/PSVqFfy08fwEAA8IJUIFwATgEqQAVCCdABcIF4BagAlQgnAAVCBeAW4AKUIFwAlQgXABuASpABcIJjCtw9O3vfOaquta2f+UYApjO3v8O4P3/e2mfOQEw2jAGpFeg0g9BhwNQZeAlqAi5zzHAfcMqHwYoQu5zDHDfsMqHAYqQ+xwD3Des8mGAIuQ+xwD3Dat8GKAIuc8xwH3DKh8GKELucwxw37DKhwGKkPscA9w3rPI9drIYQbytq9EAAAAASUVORK5CYII=',
            },
        ],
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255)',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                color: 'rgba(255,255,255)',
                fontSize: 18,
            },
            data: xData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: true,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255)',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                color: 'rgba(255,255,255)',
                fontSize: 18,
            },
            splitArea: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '产量',
            type: 'bar',
            // "stack": "总量",
            barWidth: 60,
            barGap: '10%',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 18,
                            color: '#fff',
                        },
                    },
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(255,217,102)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#020D20', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: data1,
        },
    ],
};
