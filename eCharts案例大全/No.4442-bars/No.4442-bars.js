let data = [{
        value: 120,
        label: '周一'
    }, {
        value: 142,
        label: '周二'
    }, {
        value: 110,
        label: '周三'
    },
    {
        value: 132,
        label: '周四'
    }
];
option = {
    grid: {
        top: 70,
        left: 33,
        right: 150,
        bottom: 15,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show: false
    },
    yAxis: {
        show: true,
        inverse: true,
        type: 'category',
        axisLine: {
            show: false
        }
    },
    series: [{
        name: 'label',
        type: 'bar',
        barWidth: 20,
        yAxisIndex: 0,
        label: {
            show: true,
            position: 2,
            color: '#262C41',
            fontSize: 15
        },
        data: data.map((item) => {
            return {
                value: 0,
                label: {
                    formatter() {
                        return item.label;
                    }
                }
            };
        })
    }, {
        name: 'value',
        type: 'bar',
        barWidth: 20,
        barMinHeight: 20, // 最小高度
        yAxisIndex: 0,
        label: {
            show: true,
            position: 'right',
            fontSize: 30,
            offset: [10, 0],
            formatter({
                value
            }) {
                return `${value}人`;
            }
        },
        itemStyle: {
            barBorderRadius: 8
        },
        data: data.map(({
            value
        }, index) => {
            let color = new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                offset: 1,
                color: 'rgba(0,244,255,1)' // 0% 处的颜色
            }, {
                offset: 0,
                color: 'rgba(0,77,167,1)' // 100% 处的颜色
            }], false)
            return {
                value,
                label: {
                    color
                },
                itemStyle: {
                    color
                }
            };
        })
    }]
};