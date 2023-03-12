option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        show: true,
        data:[{
            name: '今年数据',
            icon: 'roundRect',
        },{
            name: '去年数据',
            icon: 'roundRect',
        },{
            name: '去年数据1',
            icon: 'roundRect',
        },{
            name: '去年数据2',
            icon: 'roundRect',
        },{
            name: '去年数据3',
            icon: 'roundRect',
        },{
            name: '去年数据4',
            icon: 'roundRect',
        }],
        bottom: 0,
        left:20,
        itemWidth: 14,
        itemHeight: 14,
    },
    grid: {
        top: 0,
        left: 30,
        right: 30,
        bottom: '15%',
        containLabel: false,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            align: 'center'
        },
        axisPointer: {
        },
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            interval: 0,
        },
        axisTick: {
            show: false,
            interval: 0,
        }
    },
    dataZoom: {
        type:'inside',
        xAxisIndex:[0],
        filterMode: 'none',
        start: 0,
        end: 50,
        orient:'horizontal',
        zoomLock: true,
    },
    series: [
        {
            name:'今年数据',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210, 300, 100, 150, 230, 380]
        },
        {
            name:'去年数据',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310,200,300,270,220,340]
        },
        {
            name:'去年数据1',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310,200,300,270,220,340]
        },
        {
            name:'去年数据2',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310,200,300,270,220,340]
        },
        {
            name:'去年数据3',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310,200,300,270,220,340]
        },
        {
            name:'去年数据4',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310,200,300,270,220,340]
        },        
    ]
};
