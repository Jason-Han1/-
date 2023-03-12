let dataC1 = [20, 30, 60, 40, 50, 30];
let dataC2 = [20, 30, 60, 40, 50, 30];
let dataC3 = [20, 30, 60, 40, 50, 30];
let xData = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'];

var fontColor = '#30eee9';
option = {
    backgroundColor: '#0b1146',
    grid: {
        left: '5%',
        right: '2%',
        top: '10%',
        bottom: '15%',
    },
     legend: {
        data:['a'],
        textStyle:{
             color:'#A9DDEE',
        },
       
        orient: 'horizontal',
        icon: 'rect',
        top: '5',
        right: '5%',
        itemGap: 10,
        itemWidth: 12,
        itemHeight: 7,
     },
        
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#57617B',
            },
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false, //顶头显示
        axisLine: {
            show: true,
            lineStyle: {
                color: '#3585d5',
            },
        },
    
        axisTick: {
            show: false,
            // alignWithLabel: true,
            lineStyle: {
                color: '#3585d5',
            },
        },
        axisLabel: {
            fontSize: 18,
        },
        data: xData,
    },
    yAxis: {
        name: '%',
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#3585d5',
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dotted',
                color: '#3585d5',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 16,
        },
       boundaryGap: false,
    },
    series: [
        {
            name: 'a',
            type: 'line',
            stack: '总量',
            smooth: true,
            symbol: 'none',
            showSymbol: true,
            symbolSize: 80,
            itemStyle: {
                normal: {
                    color: '#71bd27',
                    lineStyle: {
                        color: '#71bd27',
                        width: 3,
                    },
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0.4,
                                color: 'rgba(240, 250, 230,0.1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(240, 250, 230,0.9)',
                            },
                        ]),
                    },
                },
            },
            // markPoint: {
            //     itemStyle: {
            //         normal: {
            //             color: 'red',
            //         },
            //     },
            // },
            data: dataC1,
        },
    ],
};
