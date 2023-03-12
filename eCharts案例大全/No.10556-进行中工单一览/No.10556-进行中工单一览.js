// 位置
// var positionTotal = ;

// var baifenbi = [5, 7, 30, 18];
var grayBar = [8, 17, 34, 26];
var paiming = [4, 3, 2, 1];
var zongjine = [500, 1000, 2000, 3000, ];
var xingm = ['紧急', '严重', '一般', '轻微'];
var colorSet;
var baifenbi = [{
        value: '5',
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#AE5126' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#FF9D44' // 100% 处的颜色
            }])

        }
    },
    {
        value: '7',
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#97E402' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#D5FE58' // 100% 处的颜色
            }])
        }
    },
    {
        value: '30',
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#00BD9D' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#5DFFA5' // 100% 处的颜色
            }])

        }
    },
    {
        value: '18',
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#0054FF' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#00F2FF' // 100% 处的颜色
            }])
        }
    },

];
var rich = { //富文本
    white: { //自定义颜色
        color: '#ffffff',
        fontSize: 16,
        padding: [20, 0]
    },
    blue: {
        color: '#00BAFF',
        fontSize: 16,
        padding: [65, 50]
    },
    gray: {
        color: '#fff',
        fontSize: 20,
        padding: [0, -20]
    },
    weight: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 600,
        padding: [0, 25]
    }
};
option = {
    backgroundColor: '#02061d',
    color: ['#61A8FF'], //进度条颜色
    /* grid: {
         left: '-10%',  //如果离左边太远就用这个......
         //right: '14%',
         bottom: '5%',
         top: '5%',
         containLabel: true
     },*/
    xAxis: [{
            show: false,
        },
        //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        axisLabel: {
            show: false, //让Y轴数据不显示
        },
        itemStyle: {

        },
        axisTick: {
            show: false, //隐藏Y轴刻度
        },
        axisLine: {
            show: false, //隐藏Y轴线段
        },
        data: xingm,
    },
    series: [
        //背景色--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '25%', //统计条宽度 
            itemStyle: {
                normal: {
                    color: 'rgba(1,47,80,0.2)',
                    borderColor: 'rgba(0,151,254,.8)'
                },
            },
            z: 1,
            data: grayBar,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 20
                    },
                    position: 'right',
                    formatter: function(data) {
                        return "{weight|" + grayBar[data.dataIndex] + '}{gray|' + '起' + '}'
                    },
                    rich: rich
                }
            },
        },
        //蓝条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '25%', //统计条宽度 
            itemStyle: {
                normal: {
                    color: {
                        type: 'bar',
                        // colorStops: colorSet,
                        globalCoord: false, // 缺省为 false

                    }
                },
            },
            max: 1,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff', //百分比颜色
                        fontSize: 20
                    },
                    position: 'insideBottomLeft',
                    formatter: function(data) {
                        return '{blue|' + '已处理:' + baifenbi[data.dataIndex].value + '起' + '}'
                    },
                    rich: rich
                }
            },
            labelLine: {
                show: false,
            },
            z: 2,
            data: baifenbi,
        },
        //数据条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 200,
                    color: 'transparent'
                },
            },
            label: {
                normal: {
                    show: true,
                    //label 的position位置可以是top bottom left,right,也可以是固定值
                    //在这里需要上下统一对齐,所以用固定值
                    position: [0, '-100%'],
                    formatter: function(data) {
                        return '{white|' + xingm[data.dataIndex] + "}";
                        // '}{gray|' + grayBar[data.dataIndex] + "起" + '}';

                    },
                    rich: rich
                }
            },
            data: zongjine
        }

    ]
};