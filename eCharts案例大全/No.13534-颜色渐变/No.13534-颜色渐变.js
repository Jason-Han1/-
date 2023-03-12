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
    xAxis: 
        {
            type: 'category',
            boundaryGap: true,
            data: [1,2,3]
        }
    ,
    yAxis: [
        {
            type: 'value',
            name: '价格',
           
        },
        {
            type: 'value',
            name: '预购量',
           
        }
    ],
    series: [
        {
            name:'预购队列',
            type:'bar',
            yAxisIndex: 1,
            data:[100,200,300]
            
        },
        {
            name:'最新成交价',
            type:'line',
            xAxisIndex: 0,
            data:[1,2,3]
        }
    ]
};

 myChart.setOption(option);



