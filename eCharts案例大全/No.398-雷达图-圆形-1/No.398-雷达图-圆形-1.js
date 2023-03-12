option = {
    // color: ['green', 'red'], 
    tooltip: {
        show: true,
        trigger: 'item',
    },
    legend: {
        show: false,
    },
    radar: {
        center: ['50%', '50%'], //位置
        radius: ['5%','70%'], //内半径和外半径大小
        startAngle: 90, 
        splitNumber: 4,//有几个环
        shape: 'circle', //环是圆型还是polygon菱形
        axisName:{ //每个指示器名称的配置项
            color:'red',
            fontSize:18,
        },
        splitArea: {
            areaStyle: {
                color: ['transparent'],//环型之间默认是间隔色分开，这里不用间隔色
            },
        },
         axisLine: {
            show: false, //不显示横竖十字线
        },
        axisLabel: {
            show: false, //不显示十字线上的label文字
        },
       
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: 'pink', //圆的线条颜色
              
            },
        },
        indicator: [
            {
                name: '小学',
                max: 88,
                
            },
            {
                name: '中学',
                max: 88,
            },
            {
                name: '高中',
                max: 88,
            },
            {
                name: '大学',
                max: 88,
            },
        ],
    },
    series: [
        {
            name: ' ',
            type: 'radar',
            symbol: 'circle', //顶点形状
            symbolSize: 10,
            areaStyle: {
                color: 'red', //面积
            },
            itemStyle: {
                color: 'green', //顶点颜色
                borderColor: 'rgba(86,199,60, 0.3)',
                borderWidth: 10,
            },
            lineStyle: {
                color: 'black', //顶点之间线条颜色
                width: 2,
            },
            data: [[80, 50, 55, 80, 50, 80]],
        },
    ],
};
