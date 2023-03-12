option = {
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月','5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    }, ],
    yAxis: {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        }
    ,
    series: [{
            name: '柱1',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7,  162.2, 32.6, 20.0, 6.4, 3.3],
            z: 1
        },
        {
            name: '柱2',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70, 182.2, 48.7, 18.8, 6.0, 2.3],
            z: 1

        },
        {
            xAxisIndex: 1,
            name: '线1',
            type: 'line',
            itemStyle:{
                normal:{
                    lineStyle:{
                        color: '#c23c31',
                        type:'dotted' //'dotted'虚线 'solid'实线
                    }
                }
            }, 
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        },
        {
            xAxisIndex: 1,
            name: '线2',
            type: 'line',
            itemStyle:{
                normal:{
                    lineStyle:{
                        color: '#2f4554',
                        type:'dotted'
                    }
                }
            }, 
            data: [2.6, 5.9, 9.0, 182.2, 48.7, 18.8, 6.0, 2.3],
        }
    ]
};

// 增加了一个隐藏的x轴，用来控制线图的点的位置
option.xAxis[1] = {
    type: 'value',
    max: option.xAxis[0].data.length * 100,
    show: false
}
option.series[2].data = option.series[2].data.map((x, i) => [27 + i * 100, x])
option.series[3].data = option.series[3].data.map((x, i) => [73 + i * 100, x])