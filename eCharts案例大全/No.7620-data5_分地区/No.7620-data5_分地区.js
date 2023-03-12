var fontColor = '#fff';
var data = [{
    "name": "东部地区",
    "value": 117
}, {
    "name": "中部地区",
    "value": 84
}, {
    "name": "西部地区",
    "value": 136
}]


option = {
    color: ['#bf19ff', '#854cff', '#5f45ff', '#02cdff', '#314976', '#f9e264', '#f47a75', '#009db2', '#024b51- 0780cf', '#765005'],
    backgroundColor: '#0f375f',
    title: {
        text: 337,
        subtext: '总计',
        textStyle: {
            color: '#f2f2f2',
            fontSize: 40,
        },
        subtextStyle: {
            fontSize: 30,
            color: ['#ff9d19']
        },
        x: 'center',
        y: 'center',
    },
    grid: {
        bottom: 150,
        left: 100,
        right: '10%'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br/> {c}人  ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 10,
        textStyle: {
            color: '#f2f2f2',
            fontSize: 25,

        },
        icon: 'roundRect',
        data: data,
    },
    series: [
        // 主要展示层的
        {
            radius: ['50%', '90%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                position: 'inner',
                formatter: '{b}：{c}人',
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: true
                }
            },
            data: data,

        },
        // 边框的设置
        {
            radius: ['45%', '50%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            animation: false,
            tooltip: {
                show: false
            },
            data: [{
                value: 1,
                itemStyle: {
                    color: "rgba(250,250,250,0.3)",
                },
            }],
        }, {
            name: '外边框',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['100%', '100%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 9,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#0b5263'
                    }
                }
            }]
        },
    ]
};