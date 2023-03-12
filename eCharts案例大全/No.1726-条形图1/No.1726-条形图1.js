option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        left: '20',
        right: '20',
        bottom: '60',
        top: '16%',
        containLabel: true,
    },
    legend: {
        left: 'center',
        top: '5%',
        textStyle: {
            color: '#000',
        },
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 25,
    },
    dataZoom: [
        {
            show: true,
            height: 18
            ,
            xAxisIndex: [0],
            bottom: 20,
            start: 0,
            end: 100,
            handleIcon:
                'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '100%',
            handleStyle: {
                color: 'rgba(255, 255, 255,1',
            },
            textStyle: {
                color: '#909399',
                fontSize: 12,
            },
            fillerColor: '#CBCED4',
            borderColor: 'rgba(255, 255, 255,1)',
            backgroundColor: '#F0F2F5',
            showDataShadow: true,
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
                color: '#000',
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
                color: '#909399',
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                width: 1,
                color: '#909399',
            },
        },
        axisLabel: {
            margin: 8,
            interval: 'auto',
            rotate: 0,
            fontSize: 14,
            color: '#909399',
        },
        data: ['1# 白班', '1# 晚班', '2# 白班', '2# 晚班', '3# 白班', '3# 晚班', '4# 白班', '4# 晚班'],
    },
    yAxis: [
        {
            show: true,
            type: 'value',
            name: '',
            min: 0,
            nameTextStyle: {
                color: '#909399',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#909399',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: '{value} %',
                rotate: 0,
                textStyle: {
                    color: '#909399',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#e4e7ed',
                },
            },
        },
    ],
    series: [
        {
            name: '开机率',
            type: 'bar',
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#5C41FF',
                        },
                        {
                            offset: 1,
                            color: 'rgba(227, 227, 227,0.3)',
                        },
                    ]),
                    barBorderRadius: 6,
                },
            },
            label: {
                show: true,
                rotate: 0,
                color: '#5C41FF',
                position: 'top',
                fontSize: 12,
                labelFormatter:'{data} %'
            },
            data: [95, 83, 56, 89, 87, 89, 92, 71, 44],
            barGap:'80%',
            barCategoryGap:'100%'
        },
        {
            name: '稼动率',
            type: 'bar',
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#419FFF',
                        },
                        {
                            offset: 1,
                            color: 'rgba(227, 227, 227,0.3)',
                        },
                    ]),
                    barBorderRadius: 6,
                },
            },
            label: {
                show: true,
                rotate: 0,
                color: '#419FFF',
                position: 'top',
                fontSize: 12,
            },
            data: [89, 71, 60, 32, 34, 74, 52, 46, 26],

        },

    ],
};
