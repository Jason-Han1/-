option = {
    color: ['#3398DB','#ff0000'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1', '2', ''],
            axisTick: {
                show:false,
                alignWithLabel: true
            }
        },
        {
            type: 'category',
            position: 'bottom',
            data: ['','','3'],
            axisTick: {
                show:false,
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine:{
                show: false,
            },
            axisTick:{
                show: false
            },
            splitNumber: 20
            // splitLine:{
            //     show:false
            // }
        },
        {
            type: 'value',
            axisLine:{
                show: false,
            },
            axisTick:{
                show: false
            },
            splitLine:{
                show:false
            }
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            stack: '1',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: '20%',
            data: [10, 52]
        },
        {
            name: '直接访问1',
            type: 'bar',
            stack: '1',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barWidth: '20%',
            data: [30, 22]
        },
         {
            name: 'x直接访问2',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            stack: '2',
            barWidth: '20%',
            data: [,,
            {
                value:320,
                itemStyle:{
                    color:'yellow'
                }
            }]
        },
         {
            name: 'x直接访问3',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            stack: '2',
            barWidth: '20%',
            data: [,,{
                value:320,
                itemStyle:{
                    color:'darkblue'
                }
            }]
        }
    ]
};
