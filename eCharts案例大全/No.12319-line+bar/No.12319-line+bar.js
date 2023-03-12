app.title = '折柱混合';

option = {
    backgroundColor:"white",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    color:['#FFE4E1','#C55B28','#5CACEE'],
    
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[102.0, 104.9, 117.0, 119.2, 125.6, 76.7, 135.6, 162.2, 132.6, 120.0, 116.4, 103.3]
        },
        {
            name:'降水量',
            type:'line',
            data:[122.6, 102.9, 111.0, 126.4, 128.7, 170.7, 175.6, 182.2, 148.7, 108.8, 116.0, 122.3]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[1.0, 2.2, 3.3, 4.5, 6.3, 6.2, 7.3, 8.4, 9.0, 5.5, 12.0, 6.2]
        },
        
    ]
};