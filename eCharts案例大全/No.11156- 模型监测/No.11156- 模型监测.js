option = {
    //title:{
      //  text:'模型失效监测',
        //left:'50%'
//    },
    legend: {
        left:0,
        top:'0%'
    },
    // 设置提示框
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },

    dataset: {
        // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
        // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
        //dimensions:  ['指标', '指标不准率', '情感不准率', '指标遗漏率'],
        source: [
            ['指标', '指标不准率', '情感不准率', '指标遗漏率', '整体不准率', '被校验消息数'],
            ['产品质量', 12, 9, 1, 22, 98],
            ['跑分结果', 13, 7, 2, 22, 98],
            ['性能配置', 9, 12, 8, 29, 87],
            ['产品包装', 7, 13, 12, 32, 76],
            ['整体', 1, 9, 13, 23, 98],
            ['整体外观', 2, 7, 9, 18, 87],
            ['机身设计', 12, 1, 7, 20, 76],
            ['机身颜色', 12, 2, 1, 15, 76],
            ['机身大小', 17, 14, 2, 33, 65],
            ['...', 9, 6, 4, 19, 96]
        ]
    },
    yAxis: {type: 'category'},
    xAxis: [{
            position: 'bottom',
            name: '百分比（%）',
            splitNumber: 10,
            axisLine: {
                symbol: ['none', 'none'],
                lineStyle: {
                    width: 1,
                    opacity: 0.3
                }
            }
        }, {
            position: 'top',
            name: '条数',
            splitNumber: 10,
            axisLine: {
                symbol: ['none', 'none'],
                lineStyle: {
                    width: 1,
                    opacity: 0.3
                }
            }
        }

    ],
    series: [
        {type: 'line'},
        {type: 'line'},
        {type: 'line'},
        {type: 'line'},
        {type: 'bar',
            xAxisIndex: 1,
            itemStyle:{
                color:'#3AC47F'
            }
        }
    ],
    dataZoom:[
        {
            type: 'slider',
            yAxisIndex: 0,
            start: 0,
            end: 100,
            //left:10
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            start: 0,
            end: 80
        }
        //{
          //  backgroundColor:"rgba(120,0,0,0.6)",
            //borderColor:"#ddd",
        //}
    ],
    grid:[
            {x: '10%', y: '10%', width: '75%', height: '85%'}
        ]
};