var ydata = [{
        name: '一营采集率',
        value: 68
    },
    {
        name: '一营未采集率',
        value: 32,
        label: {
            show: false
        }
    }
];
option = {
    backgroundColor: '#2c4a81',
    series: [{
        name: '采集率统计',
        type: 'pie',
        clockwise: true, //饼图的扇区是否是顺时针排布
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        radius: ["60%", "80%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        color: ['#269885', {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 1,
                color: 'rgba(4, 0, 0, 0.3)' // 0% 处的颜色
            }, {
                offset: 0,
                color: 'rgba(255, 255, 255, 0.3)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }],
        itemStyle: { //图形样式
            borderColor: '#2c4a81',
            borderWidth: 10,
            shadowColor: 'rgba(4, 0, 0, 0.3)',
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 8
        },
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{value|{d}}{per|%}\n{text|{b}}',
                rich: {
                    value: {
                        color: "#bdd9ff",
                        fontSize: 42,
                        align: 'center',
                        verticalAlign: 'middle',
                    },
                    per: {
                        color: "#bdd9ff",
                        fontSize: 18,
                        verticalAlign: 'middle',
                    },
                    text: {
                        color: "#bdd9ff",
                        fontSize: 18,
                        align: 'center',
                        verticalAlign: 'middle',
                        padding: 5
                    },

                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: 46,
                }
            }
        },
        data: ydata
    }]
};
myChart.setOption(option);