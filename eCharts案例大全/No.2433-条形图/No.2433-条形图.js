option = {
    backgroundColor: '#0f375f',
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
        left: 'center',
        top: '5%',
        textStyle: {
            color: '#fff',
        },
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 25,
    },
    dataZoom: [
        {
            show: true,
            height: 10,
            xAxisIndex: [0],
            bottom: 6,
            start: 0,
            end: 100,
            handleIcon:
                'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '100%',
            handleStyle: {
                color: 'rgba(255, 255, 255,0.5)',
            },
            textStyle: {
                color: '#fff',
                fontSize: 10,
            },
            fillerColor: 'rgba(42, 131, 223,1)',
            borderColor: 'rgba(66, 130, 197,1)',
            backgroundColor: 'rgba(12, 67, 124,0.5)',
            showDataShadow: false,
            brushSelect: false,
        },
        {
            type: 'inside',
            disabled: false,
        },
    ],
    xAxis: {
        show: true,
        type: 'category',
        name: '',
        nameLocation: 'end',
        nameTextStyle: {
            fontSize: 14,
        },
        inverse: false,
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed',
                color: '',
                width: 1,
            },
        },
        axisTick: {
            show: true,
            alignWithLabel: false,
            interval: 'auto',
            inside: false,
            length: 5,
            lineStyle: {
                type: 'solid',
                width: 1,
                color: 'rgba(28, 158, 222, 1)',
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                width: 1,
                color: 'rgba(28, 158, 222, 1)',
            },
        },
        axisLabel: {
            margin: 8,
            interval: 'auto',
            rotate: 0,
            fontSize: 14,
            color: 'rgba(28, 158, 222, 1)',
        },
        data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    },
    yAxis: [
        {
            show: true,
            type: 'value',
            name: '',
            min: 0,
            nameTextStyle: {
                color: 'rgba(255,255,255,0.7)',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(28, 158, 222, 1)',
                },
            },
            axisTick: {
                show: true,
            },
            axisLabel: {
                formatter: '{value}',
                rotate: 0,
                textStyle: {
                    color: 'rgba(28, 158, 222, 1)',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: 'rgba(0, 206, 209, 0.1)',
                },
            },
        },
    ],
    series: [
        {
            name: '调解成功',
            type: 'bar',
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#29acff',
                        },
                        {
                            offset: 1,
                            color: '#4bdfff',
                        },
                    ]),
                    barBorderRadius: 6,
                },
            },
            label: {
                show: true,
                rotate: 0,
                color: '#29acff',
                position: 'top',
                fontSize: 12,
            },
            data: [400, 400, 300, 300, 300, 400, 400, 400, 300],
        },
        {
            name: '调解失败',
            type: 'bar',
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#3d93f2',
                        },
                        {
                            offset: 1,
                            color: '#5dc1fd',
                        },
                    ]),
                    barBorderRadius: 6,
                },
            },
            label: {
                show: true,
                rotate: 0,
                color: '#3d93f2',
                position: 'top',
                fontSize: 12,
            },
            data: [400, 500, 500, 500, 500, 400, 400, 500, 500],
        },
        {
            name: '调解终止',
            type: 'bar',
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#01c871',
                        },
                        {
                            offset: 1,
                            color: '#55f49c',
                        },
                    ]),
                    barBorderRadius: 6,
                },
            },
            label: {
                show: true,
                rotate: 0,
                color: '#01c871',
                position: 'top',
                fontSize: 12,
            },
            data: [400, 600, 700, 700, 1000, 400, 400, 600, 700],
        },
    ],
};
