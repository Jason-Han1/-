// 最大值和当前值根据后台返回
let max =100;
let currentNum = 50;


let linearEndColor = '#FFCC59';
let linearStartColor = '#1AF6EE';

var db_options = { //用于改变dashboard_option里的参数
    data: [{
        value: currentNum,
        name: ''
    }],
    color: [],
    title: {
        show: false,
        offsetCenter: [0, 0],
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 5
    }
};

var dashboard_option = { //echarts的设置
    grid: {
        left: 0,
        right: 0
    },
    title: {
        show: false  
    },
    polar: {
        // 圆弧大小
        radius: '115%',
        center: ["55%", "52%"]
    },
    angleAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 2 * max,
        boundaryGap: ['0', '100'],
        startAngle: 180
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: ['a', 'b', 'c'],
        z: 10
    },
    series: [{
            type: 'bar',
            data: [, , 100],
            coordinateSystem: 'polar',
            barMaxWidth: 50,
            z: 2,
            roundCap: 1,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: linearEndColor // 0% 处的颜色
                }, {
                    offset: 1,
                    color: linearStartColor // 100% 处的颜色
                }],
            },
            barGap: '-100%',
        }, {
            type: 'bar',
            data: [, , 100],
            z: 0,
            silent: true,
            coordinateSystem: 'polar',
            barMaxWidth: 50,
            name: 'C',
            roundCap: 1,
            color: '#D2D2D2',
            barGap: '-100%',
        },
        {
            name: "内部进度条",
            type: "gauge",
            center: ['55%', '53%'],
            radius: '78%',
            startAngle: 182,
            endAngle: -2,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [currentNum / max, {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: linearEndColor // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: linearStartColor // 100% 处的颜色
                            }],
                        }],
                        [1, "#D2D2D2"]
                    ],
                    width: 1
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
                opacity: 0
            },
            detail: {
                formatter: function (value) {
                    if (value !== 0) {
                        var num = Math.round(value);
                        return parseInt(num).toFixed(0) + "%";
                    } else {
                        return 0;
                    }
                },
                offsetCenter: [0, 82],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 18,
                    fontWeight: '700',
                    color: 'red'
                }
            },
            title: { //标题
                show: false,
            },
            data: [{
                name: '',
                value: currentNum,
            }],
            pointer: {
                show: true,
                length: '75%',
                radius: '20%',
                width: 10, //指针粗细
            },
            animationDuration: 4000,
        },
        {
            "type": "pie",
            radius: ['82%', '82%'],
            "hoverAnimation": false,
            startAngle: 225,
            endAngle: 0,
            "data": [{
                "name": "",
                "value": currentNum / 5,
                "label": {
                    show: false
                },
                "labelLine": {
                    show: false
                },
                itemStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            }, {
                //画中间的小圆点图标
                "name": "",
                "value": 0,
                "label": {
                    position: 'inside',
                    backgroundColor: '#f7b365',
                    borderRadius: 15,
                    padding: 8,
                    borderWidth: 8,
                    borderColor: "#f7b365"

                }
            }, {
                "name": "",
                value: 1.33 - currentNum / 5,
                "label": {
                    show: false
                },
                "labelLine": {
                    show: false
                },
                itemStyle: {
                    color: 'rgba(255,255,255,0)'
                }
            }]
        }
    ]
};

function init_dashboard(value) { //此函数根据value的范围大小，为仪表盘参数设置不同的颜色、数字
    db_options.data[0].value = value;
    db_options.color.splice(0, db_options.color.length);
    db_options.color.push([value / max, '#00BAFF']);

    db_options.color.push([1, 'rgba(49,58,92,0)']);
}

function db_init(value) { //改变option的入口，需要传入一个值
    var option_dashboard = [];
    init_dashboard(value);
    option_dashboard = dashboard_option;
    return option_dashboard;
}
option = db_init(currentNum || 0);