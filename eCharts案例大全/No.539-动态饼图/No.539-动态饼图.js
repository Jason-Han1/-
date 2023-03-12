let num = 0;
let colors = ['#FF9532', '#FF375F', '#6BBFFF'];
let index = 0;
let pieData = [
    {
        name: '林业碳汇',
        value: 7.76,
    },
    {
        name: '甲烷利用',
        value: 4.53,
    },
    {
        name: '可再生资源',
        value: 87.71,
    },
];
option = {
    backgroundColor: '#111',
    legend: {
        orient: 'vertical',
        icon: 'rect',
        x: '60%',
        y: 'center',
        itemWidth: 15,
        itemHeight: 15,
        itemGap: 10,
        align: 'left',
        textStyle: {
            color: 'rgb(132,159,186)',
            fontSize: 15,
            padding: [0, 0, 0, 10],
        },
        formatter(name) {
            let then = option.series[0].data; //获取series中的data
            // let total = 0;

            // for (let i = 0; i < then.length; i++) {
            //     if (then[i].name != '' && then[i].name != null && then[i].name != undefined) {
            //         total += parseInt(then[i].value);
            //     }
            // }
            // var str = '';

            // var p = 0;
            for (let i = 0; i < then.length; i++) {
                if (then[i].name == name) {
                    // p = (then[i].value / total) * 100;
                    str = name + '       ' + then[i].value + '%';
                }
            }
            return str;
        },
    },
    polar: {
        radius: ['44%', '50%'],
        center: ['13%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            type: 'pie',
            center: ['33%', '50%'],
            radius: ['30%', '40%'],
            clockwise: true,
            avoidLabelOverlap: true,
            startAngle: 180, //起始角度
            hoverOffset: 1,
            zlevel: 15,
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold',
                    formatter: ['{a|{d}%}', '{b|{b}}'].join('\n'),
                    rich: {
                        a: {
                            color: '#fff',
                            fontSize: 32,
                            lineHeight: 46,
                            verticalAlign: 'bottom',
                        },
                        b: {
                            color: '#a7a9c7',
                            fontSize: 12,
                            lineHeight: 24,
                        },
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colors[params.dataIndex];
                    },
                },
            },
            label: {
                show: true,
                position: 'center',
                color: 'rgba(13, 17, 29,0)',
            },
            data: pieData,
        },
        {
            type: 'gauge', //旋转小点下面指示盘lh
            name: '',
            radius: '50%',
            startAngle: '0',
            endAngle: '-359.99',
            splitNumber: '200',
            center: ['33%', '50%'],
            pointer: {
                show: false,
            },
            title: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 95,
                    name: '',
                },
            ],
            axisLine: {
                lineStyle: {
                    width: 20,
                    opacity: 0,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 13,
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#111',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(66, 66, 66, 1)',
                            },
                            {
                                offset: 1,
                                color: '#111',
                            },
                        ],
                        globalCoord: false,
                    },
                    width: 1,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false,
            },
        },
        {
            name: '', //外层光晕
            type: 'pie',
            startAngle: 90,
            radius: ['51%', '53%'],
            hoverAnimation: false,
            center: ['33%', '50%'],
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false,
                    },
                    color: 'rgba(66, 66, 66, .4)',
                    shadowBlur: 10,
                    shadowColor: 'rgba(253, 249, 20, .3)',
                },
            },
            data: [
                {
                    value: 100,
                },
            ],
        },
        {
            name: '', //外层光晕
            type: 'pie',
            startAngle: 90,
            radius: ['51.5%', '55%'],
            hoverAnimation: false,
            center: ['33%', '50%'],
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false,
                    },
                    color: 'rgba(66, 66, 66, .3)',
                    shadowBlur: 10,
                    shadowColor: 'rgba(253, 249, 20, .3)',
                },
            },
            data: [
                {
                    value: 100,
                },
            ],
        },
        {
            name: '', //外层光晕
            type: 'pie',
            startAngle: 90,
            radius: ['55.5%', '56.8%'],
            hoverAnimation: false,
            center: ['33%', '50%'],
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false,
                    },
                    color: 'rgba(66, 66, 66, .2)',
                    shadowBlur: 10,
                    shadowColor: 'rgba(253, 249, 20, .3)',
                },
            },
            data: [
                {
                    value: 100,
                },
            ],
        },
        {
            name: '', //外层光晕
            type: 'pie',
            startAngle: 90,
            radius: ['57.5%', '58.5%'],
            hoverAnimation: false,
            center: ['33%', '50%'],
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false,
                    },
                    color: 'rgba(66, 66, 66, .1)',
                    shadowBlur: 10,
                    shadowColor: 'rgba(253, 249, 20, .3)',
                },
            },
            data: [
                {
                    value: 100,
                },
            ],
        },
        {
            name: '', //旋转小圆点 lh
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 3,
                        cy: api.getHeight() / 2,
                        r: (Math.min(api.getWidth(), api.getHeight()) / 2.21) * 0.545,
                        startAngle: ((0 + num) * Math.PI) / 180,
                        endAngle: ((1 + num) * Math.PI) / 180,
                    },
                    style: {
                        stroke: '#fdf914',
                        fill: 'transparent',
                        lineWidth: 5,
                        align: 'left',
                    },
                    silent: true,
                };
            },
            data: [0],
        },
    ],
};
function fun() {
    var timer = setInterval(function () {
        console.log(index);
        // option.title[0]. = pieData[index].name;
        myChart.dispatchAction({
            type: 'hideTip',
            seriesIndex: 0,
            dataIndex: index,
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index == 0 ? 2 : index - 1,
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index,
        });
        index++;
        if (index > 2) {
            index = 0;
        }
    }, 3000);
}
fun();
function numb() {
    num = num + 5;
    myChart.setOption(option, true);
}
setInterval(function () {
    numb();
}, 100);
