option = {
    grid: {
        x: 50,
        y: 50,
        x2: 50,
        y2: 35
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}月 : {c}万"
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ADADB3',
                type: 'dotted',
            }
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: [{
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ADADB3',
                width: 0, //隐藏y轴
            }
        },
        splitLine: { //网格线
            lineStyle: {
                type: 'dotted', //设置网格线类型 dotted：虚线   solid:实线
            },
            show: true //隐藏或显示
        },
        axisTick: {
            show: false,
        },
        splitNumber: 5
    }],
    title: {
        show: true,
        text: '销售业绩',
        x: 'left',
        textStyle: {
            color: '#666667',
            fontSize: '14',
            paddingLeft: '20'
        }
    },
    legend: {
        icon: 'circle',
        left: '80px',
        data: ['签约额', '回款额'],
        textStyle: {
            color: '#98989C',
            fontSize: 12,
        }
    },
    series: [{
            name: '签约额',
            // data: this.contractTotalArray,
            data: [233, 451, 745, 645, 125, 354, 647, 945, 641, 789, 541, 999],
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#08CFBC' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#17DB9E' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    lineStyle: {
                        width: 4, //设置线条粗细
                        shadowColor: 'rgba(23, 219, 158,.1)',
                        shadowOffsetX: 3,
                        shadowOffsetY: 5
                    }
                },
            }
        },
        {
            name: '回款额',
            // data: this.receivablesTotalArray,
            data: [333, 251, 545, 695, 225, 564, 847, 445, 941, 659, 941, 789],
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#FF5E5B' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#FF955B' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    lineStyle: {
                        width: 4, //设置线条粗细
                        shadowColor: 'rgba(255, 94, 91,.1)',
                        shadowOffsetX: 3,
                        shadowOffsetY: 5,
                    }
                },
            }
        },
    ]
}