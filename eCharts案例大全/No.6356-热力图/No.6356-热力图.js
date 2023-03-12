option = {
    title: {
        //可配置
        left: 'center',
        //可配置
        text: '热力图'
    },
    tooltip: {
        position: 'top',
    },
    animation: false,
    grid: {
        //可配置
        height: '50%',
        //可配置
        top: '10%'
    },
    xAxis: {
        //可配置
        name: '水深',
        //可配置
        nameLocation: 'middle',
        //可配置
        nameGap: 30,
        //可配置
        type: 'category',
        //动态可变
        data: ['[0, 1)', '[1, 5)', '[5, 10)'],
        splitArea: {
            show: true
        },
    },
    yAxis: {
        //可配置
        name: '纵倾',
        //可配置
        type: 'category',
        //动态可变
        data: ['[0, 2)', '[2, 5)', '[2, 10)'],
        splitArea: {
            show: true
        },
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            //可配置
            top: '70%',
            //可配置
            start: 0,
            //可配置
            end: 100
        },
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            //可配置
            left: '93%',
            //可配置
            start: 0,
            //可配置
            end: 100
        },
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
    visualMap: {
        //可配置
        min: 0,
        //可配置
        max: 10,
        calculable: true,
        //可配置
        orient: 'horizontal',
        //可配置
        left: 'center',
        //可配置
        bottom: '15%'
    },
    series: [{
        //可配置
        name: 'Count',
        type: 'heatmap',
        //动态可变
        data: [[0,0,5],[0,1,1],[0,2,0],[1,0,5],[1,1,1],[1,2,0],[2,0,5],[2,1,1],[2,2,0]],
        label: {
            show: true,
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        itemStyle: {
            borderColor: "#000",
            borderWidth: 2,
            borderType: 'solid'
        }
    }]
};