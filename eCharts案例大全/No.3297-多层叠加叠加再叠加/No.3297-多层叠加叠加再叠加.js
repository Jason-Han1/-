//EUI.include("vfs/root/echarts/echarts-roundCap.js");

// EUI.include("vfs/root/echarts/echarts2.js");

// var myChart1 = echarts2.init(document.getElementById("HHH15"));
var value = '4';
var getmax = 100;

var getvalue = 80;

option = {
    title: [
        {
            text: '全校承担本科教学任务的教授比率',

            bottom: '0%',

            x: 'center',

            borderColor: '#1598FF',

            borderWidth: 1,

            borderRadius: 56,

            backgroundColor: '#1598FF',

            padding: [7, 50],

            textStyle: {
                fontWeight: 'bold',

                fontSize: 13,

                color: '#fff',
            },
        },
    ],

    angleAxis: {
        show: false,

        max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度

        type: 'value',

        startAngle: 225, //极坐标初始角度

        splitLine: {
            show: false,
        },
    },

    barMaxWidth: 20, //圆环宽度

    radiusAxis: {
        show: false,

        type: 'category',
    },

    //圆环位置和大小

    polar: {
        center: ['50%', '50%'],

        radius: '120%',
    },

    series: [
        {//画中间的小圆点图标
            type: 'pie',
            radius: ['60%', '60%'],
            hoverAnimation: false,
            startAngle: 225,
            endAngle: 0,
            data: [
                {
                    name: '',
                    value: value / 5,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
                {
                    name: '',
                    value: 0,
                    label: {
                        position: 'inside',
                        backgroundColor: '#ffffff',
                        borderRadius: 15,
                        padding: 8,
                        borderWidth: 5,
                        borderColor: '#f7b365',
                    },
                },
                {
                    name: '',
                    value: 1.33 - value / 5,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: 'rgba(255,255,255,0)',
                    },
                },
            ],
            z: 4, //圆环层级，同zindex
        },
        {
            type: 'bar',

            data: [
                {
                    //上层圆环，显示数据

                    value: getvalue,

                    itemStyle: {
                        color: '#1598FF',
                    },
                },
            ],

            barGap: '-100%', //柱间距离,上下两层圆环重合

            coordinateSystem: 'polar',

            roundCap: true, //顶端圆角

            z: 3, //圆环层级，同zindex
        },

        {
            //下层圆环，显示最大值

            type: 'bar',

            data: [
                {
                    value: getmax,

                    itemStyle: {
                        color: '#1598FF',

                        opacity: 0.2,

                        borderWidth: 0,
                    },
                },
            ],

            barGap: '-100%',

            coordinateSystem: 'polar',

            roundCap: true,

            z: 1,
        },

        //仪表盘

        {
            type: 'gauge',

            startAngle: 225, //起始角度，同极坐标

            endAngle: -45, //终止角度，同极坐标

            axisLine: {
                show: false,
            },

            splitLine: {
                show: false,
            },

            axisTick: {
                show: false,
            },

            axisLabel: {
                show: false,
            },

            splitLabel: {
                show: false,
            },

            pointer: {
                // 分隔线

                shadowColor: 'auto', //默认透明

                shadowBlur: 5,

                length: '50%',

                width: '2',
            },

            itemStyle: {
                color: '#1598FF',

                borderColor: '#1598FF',

                borderWidth: 3,
            },

            detail: {
                formatter: function (params) {
                    return getvalue + '%';
                },

                color: '#1598FF',

                fontSize: 22,

                offsetCenter: [0, 50],
            },

            title: {
                show: false,
            },

            data: [
                {
                    value: getvalue,
                },
            ],
        },
        {
            name: '外部刻度',

            type: 'gauge',

            //  center: ['20%', '50%'],

            radius: '75%',

            min: 0, //最小刻度

            max: 100, //最大刻度

            splitNumber: 10, //刻度数量

            startAngle: 225,

            endAngle: -45,

            axisLine: {
                show: true,

                lineStyle: {
                    width: 1,

                    color: [[1, 'rgba(0,0,0,0)']],
                },
            }, //仪表盘轴线

            axisLabel: {
                show: false,

                color: '#4d5bd1',

                distance: 25,
            }, //刻度标签。

            axisTick: {
                show: true,

                splitNumber: 7,

                lineStyle: {
                    color: '#C7CBCF', //用颜色渐变函数不起作用

                    opacity: 0.6,

                    width: 2,
                },

                length: -8,
            }, //刻度样式

            splitLine: {
                show: false,

                length: -20,

                lineStyle: {
                    color: '#C7CBCF', //用颜色渐变函数不起作用
                },
            }, //分隔线样式

            detail: {
                show: false,
            },

            pointer: {
                show: false,
            },
        },
        {
            //指针外环

            type: 'pie',

            hoverAnimation: false,

            legendHoverLink: false,

            radius: ['10%', '15%'],

            z: 10,

            label: {
                normal: {
                    show: false,
                },
            },

            labelLine: {
                normal: {
                    show: false,
                },
            },

            data: [
                {
                    value: 100,

                    itemStyle: {
                        normal: {
                            color: '#1598FF',
                        },
                    },
                },
            ],
        },

        {
            //指针内环

            type: 'pie',

            hoverAnimation: false,

            legendHoverLink: false,

            radius: ['0%', '10%'],

            z: 10,

            label: {
                normal: {
                    show: false,
                },
            },

            labelLine: {
                normal: {
                    show: false,
                },
            },

            data: [
                {
                    value: 100,

                    itemStyle: {
                        normal: {
                            color: '#FFFFFF',
                        },
                    },
                },
            ],
        },
    ],
};

// myChart1.setOption(option1, true);
