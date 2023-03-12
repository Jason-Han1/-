option = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, '周一'],
            [57.1, 78254, '周二'],
            [74.4, 41032, '周三'],
            [50.1, 12755, '周四'],
            [89.7, 20145, '周五'],
            [68.1, 79146, '周六'],
            [19.6, 91852, '周日'],
        ]
    },
    grid: {
        containLabel: true
    },
    xAxis: {
        name: 'amount',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'black',
                type: 'dashed'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "black",
                fontSize: 12
            },
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        name: '信息量/条',
          nameTextStyle:{
            color:'#738191',
          },
        type: 'category',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'black',
                type: 'dashed'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "black",
                fontSize: 12
            },
        },
        axisTick: {
            show: false
        },
    },
    series: [{
        type: 'bar',
        barWidth: 30, //柱图宽度
        encode: {
            // Map the "amount" column to X axis.
            x: 'amount',
            // Map the "product" column to Y axis
            y: 'product'
        },
        itemStyle: { //柱图背景色
            color: '#1DA1F2'
        },
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'right', //在上方显示
                    textStyle: { //数值样式
                        color: 'black',
                        fontSize: 16
                    }
                }
            }
        },
    }]
};