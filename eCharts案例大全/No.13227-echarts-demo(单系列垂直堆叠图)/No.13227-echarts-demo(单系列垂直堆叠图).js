option = {
    legend: {
        name: [],
        textStyle: {
            color: '#fff',
            fontSize: 12,
        },
    },
    // tooltip（提示框组件）
    tooltip: {
        //trigger(触发类型)，可选'item','axis','none'
        trigger: 'axis',
        axisPointer: {
            //指示器类型,可选'line','shadow','cross'
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: ['福州', '莆田', '泉州', '漳州', '厦门', '龙岩', '三明', '南平', '宁德', '省检'],
        axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 12,
        },
        splitLine: {
            show: false
        },
        axisLine: {
            // show:false,
            lineStyle: {
                color: '#419aba'
            }
        },
        axisTick: {
            show: false
        },

    },
    yAxis: [{
        type: 'value',
        //axisTick 坐标轴刻度相关设置
        axisTick: {
            show: true
        },
        //axixLine 坐标轴轴线相关设置
        axisLine: {
            lineStyle: {
                color: '#419aba',
            }
        },
        //axisLabel 坐标轴刻度标签的相关设置
        axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 12
        },
        splitLine: {
            lineStyle: {
                // 使用深浅的间隔色
                color: '#419aba'
            }
        }
    }, ],
    series: [{
            name: '计划数',
            type: 'bar',
            stack: '个数',
            data: [200, 200, 150, 250, 400, 500, 600, 700, 800, 900, 100, 600],
            barWidth: '35%',
            barMinHeight:5,
            itemStyle: {
                color: '#78b6b3',
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },

        },
        {
            name: '高风险数',
            //type决定图表类型
            type: 'bar',
            //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
            stack: '个数',
            data: [2, 3, 2, 2, 2.5, 6, 5, 1, 1, 2, 1, 2, 1, 2],
            barWidth: '35%',
            barMinHeight:5,
            itemStyle: {
                color: '#ba2c2c',
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 20
                    }
                }
            },
        },


    ]
};