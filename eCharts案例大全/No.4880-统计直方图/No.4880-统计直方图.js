option = {
    title: {
        left: 'center',
        text: '统计直方图'
    },
    xAxis: [
        {
        type: 'category',
        name: '航速',
        nameLocation: 'middle',
        nameGap: 35,
        data: ['[1, 2)', '[2, 3)', '[3, 5)', '[5, 9)', '[9, 12)', '[12, 13)', '[13, 15]'],
    },
    ],
    yAxis: [{
        name: '频数',
        nameLocation: 'middle',
        nameGap: 50,
        scale: true,
        type: 'value'
    },
    {
        name: '核密度',
        nameLocation: 'middle',
        nameGap: 50,
        scale: true,
        type: 'value'
    },],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000'
        },
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        },
        label: {
            backgroundColor: '#777'
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: false
            },
            brush: {
                type: ['lineX', 'clear']
            }
        }
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            //可配置
            top: '85%',
            //可配置
            start: 0,
            //可配置
            end: 100
        },
        // {
        //     type: 'slider',
        //     show: true,
        //     yAxisIndex: [0],
        //     //可配置
        //     left: '95%',
        //     //可配置
        //     start: 0,
        //     //可配置
        //     end: 100
        // },
        {
            type: 'inside',
            xAxisIndex: [0],
            //可配置
            start: 0,
            //可配置
            end: 100
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            //可配置
            start: 0,
            //可配置
            end: 100
        }
    ],
    legend: {
        top: 30,
        data: ['实测', '核密度']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true
    },
    series: [
        {
            yAxisIndex: 0,
            name: '实测',
            symbol: 'none',
            data: [82, 92, 90, 93, 90, 130, 120],
            type: 'bar',
        },
    {
            yAxisIndex: 1,
            name: '核密度',
            symbol: 'none',
            data: [0.004, 0.02, 0.018, 0.027, 0.02, 0.1, 0.08],
            type: 'line',
        },
    ]
};