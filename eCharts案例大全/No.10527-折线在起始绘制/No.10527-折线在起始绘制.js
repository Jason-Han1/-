option = {
    title: {
        text: '动态数据',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data:['最新成交价', '预购队列']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            boundaryGap: false,
            data: [1,2,3,4,5,6,7,8,9,10]
        },
        {
            type: 'category',
            boundaryGap: true,
            data: [11,12,13,14,15,16,17,18,19,20]
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '价格',
            max: 30,
            min: 0,
            boundaryGap: [0, 0]
        },
        {
            type: 'value',
            scale: true,
            name: '预购量',
            max: 1200,
            min: 0,
            boundaryGap: [0, 0]
        }
    ],
    series: [
        {
            name:'预购队列',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [100,200,300,400,500,600,700,800,900,1000]
        },
        {
            name:'最新成交价',
            type:'line',
            data: [0,12,13,14,15,16,17,18,19,20]
        }
    ]
};

