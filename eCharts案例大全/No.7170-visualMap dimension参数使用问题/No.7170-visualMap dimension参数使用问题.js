option = {
    title: {
        text: '一天用电量分布',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W'
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: false,
        dimension: 0,  //修改为2时,效果完全不同
        pieces: [{
            lte: 3,
            color: 'green'
        }, {
            gte: 4,
            color: 'green'
        }]
    },
    series: [
        {
            name: '用电量',
            type: 'line',
            smooth: true,
            encode: {
                    x: 0,       
                    y: 1,       
                }, 
            data: [[0,300,0], [1,100,1], [2,170,2], [3,250,3], [4,270,4], [5,300,5]],
        }
    ]
};
