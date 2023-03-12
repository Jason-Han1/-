// 数据源
const dataOrigin = {
    xAxisData: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10'
    ],
    yAxisData: [
        'A段',
        'B段',
        'C段',
        'D段',
        'E段',
        
    ],
    seriesDatas: [
        {
            name: '事件',
            data: [
                [2, 0, 2],
                [3, 0, 10],
            ],
            color: '#8DB25D',
        },
    ],
};


option = {
    title: {
        text: '分段事件轨迹',
        left: 'center',
        textStyle: {
            fontWeight: 'bold',
            fontFamily: 'Microsoft YaHei',
            fontSize: 18,
        },
    },
    
    grid: {
        top: 40,
        left: 65,
        right: 15,
        bottom: 65,
    },
 
    xAxis: {
        type: 'category',
        data: dataOrigin.xAxisData,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitArea: {
            show: true,
        },
    },
    yAxis: {
        type: 'category',
        data: dataOrigin.yAxisData,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitArea: {
            show: true,
        },
    },
    series: dataOrigin.seriesDatas.map(({ name, data, color }) => ({
        name,
        data,
        type: 'heatmap',
        label: {
            show: true,
        },
        itemStyle: {
            color,
            borderColor: '#fff',
            borderWitdh: 5,
            borderCap: 'round',
        },
    })),
};
