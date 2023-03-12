var xData = [
    '12:05',
    '12:06',
    '12:07',
    '12:08',
    '12:09',
    '12:10',
    '12:11',
    '12:12',
    '12:13',
    '12:14',
    '12:15',
    '12:16',
    '12:17',
    '12:18',
    '12:19',
    '12:20',
];

 var data1 =  [1000, 1300, 1200, 700, 600, 700, 900,1000, 1300, 1200, 700, 600, 700, 900,1000, 1300];
     var data2 =  [700, 800, 900, 800, 700, 400, 500, 700, 400, 500,700, 800, 900, 800, 700, 400 ];
     var data3 =  [400, 300, 500, 200, 200, 300, 300,400, 300, 500, 200, 200, 300, 300, 200,];
     var data4 =  [300, 200, 400, 100, 400, 200, 200,300, 200, 400, 100, 400, 200, 200,300, 200 ];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        textStyle: {
            fontWeight: 'normal',
            fontSize: '100%'
        },
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '24%',
        bottom: '10%',
        containLabel: true,
    },
    legend: {
        top: '8%',
        itemWidth: 13,
        itemHeight: 9,
         textStyle: { fontSize: 14, color: '#000'},
    },
    xAxis: {
        type: 'category',
        data: xData,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#2B6BD1',
            },
        },
        axisTick: {
            show: false,
        },

    axisLabel: { textStyle: { fontSize: 16, color: '#2B6BD1'  }, },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#2B6BD1',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                // 使用深浅的间隔色
                color: ["#2B6BD1"],
                type: "dashed",
                opacity: 0.5,
            },
        },
        axisLabel: { textStyle: { fontSize: 16, color: '#2B6BD1' } }
    },
    series: [
        {
            name: '模型Name1',
            type: 'bar',
            color: '#4173CC',
            barWidth: '50%',
            stack: 'asset',
            emphasis: {
                focus: 'series',
            },
            data: data1,
        },
        {
            name: '模型Name2',
            type: 'bar',
            color: '#6E99DD',
            barWidth: '50%',
            stack: 'asset',
            emphasis: {
                focus: 'series',
            },
            data: data2,
        },
        {
            name: '模型Name3',
            type: 'bar',
            color: '#84ABE5',
            barWidth: '50%',
            stack: 'asset',
            emphasis: {
                focus: 'series',
            },
            data: data3,
        },
        {
            name: '模型Name4',
            type: 'bar',
            color: '#BAD9F9',
            barWidth: '50%',
            stack: 'asset',
            emphasis: {
                focus: 'series',
            },
            data: data4,
        }, 
    ],
};

if (option && typeof option === 'object') {
    myChart.setOption(option, true);
}
