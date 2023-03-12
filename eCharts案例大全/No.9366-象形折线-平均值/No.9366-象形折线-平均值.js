//声明数据
var lineData = [{
        name: '漕河泾',
        value: 8.2,
        test: '备注1' //自定义参数
    },
    {
        name: '长桥',
        value: 9.32,
        test: '备注2'
    },
    {
        name: '华泾',
        value: 9.01,
        test: '备注3'
    },
    {
        name: '徐家汇',
        value: 9.34,
        test: '备注4'
    },
    {
        name: '田林',
        value: 2.90,
        test: '备注5'
    },
    {
        name: '凌云',
        value: 3.30,
        test: '备注6'
    },
    {
        name: '龙华',
        value: 3.20,
        test: '备注7'
    },
    {
        name: '康健',
        value: 9.32,
        test: '备注8'
    },
    {
        name: '虹梅',
        value: 9.01,
        test: '备注9'
    },
    {
        name: '枫林',
        value: 3.34,
        test: '备注10'
    },
    {
        name: '斜土',
        value: 1.90,
        test: '备注11'
    },
    {
        name: '湖南',
        value: 3.30,
        test: '备注12'
    },
    {
        name: '天平',
        value: 1.32,
        test: '备注13'
    }
];

//初始化echarts
option = {
    backgroundColor: '#f8f8f8', //背景色
    title: {
        show: false
    },
    tooltip: {
        trigger: 'axis', //axis , item
        axisPointer: {
            type: 'line', //'line' | 'cross' | 'shadow' | 'none
            lineStyle: {
                color: '#c9caca',
                width: 1,
                type: 'dotted'
            }
        },
        textStyle: {
            fontSize: 16
        },
        formatter: function(params) {
            console.log(params[0])
            var res;
            res = params[0].name + ' ' + params[0].value + '<br/>' + params[0].data.test;
            return res;
        }
    },
    grid: {
        top: '12%',
        right: '5%',
        bottom: '10%',
        left: '8%'
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            interval: 0, //类目间隔 设置为 1，表示(隔一个标签显示一个标签)
            textStyle: {
                color: '#333',
                fontSize: 16
            },
            formatter: '{value}'
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(102,102,102,.1)', //纵向网格线颜色
                width: 1,
                type: 'dashed'
            }
        },
        axisTick: {
            show: true //坐标轴小标记
        },
        data: (function(data) {
            var arr = [];
            data.forEach(function(items) {
                arr.push(items.name);
            });
            return arr;
        })(lineData) //载入横坐标数据
    },
    yAxis: {
        type: 'value',
        name: '数量\xa0\xa0\xa0\xa0\xa0\xa0',
        nameTextStyle: {
            color: '#666',
            fontFamily: 'Simsun',
            fontSize: 14
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#333',
                fontSize: 16
            },
            formatter: '{value}'
        },
        splitNumber: 5, //y轴刻度设置(值越大刻度越小)
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(102,102,102,.1)', //横向网格线颜色
                width: 1,
                type: 'dashed'
            }
        }
    },
    color: ['#01f274', '#8b1fb5'],
    series: [{
        name: '',
        type: 'effectScatter', //line, scatter, effectScatter
        symbol: 'circle', //曲线点样式 'emptyCircle', circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        symbolSize: 32, //曲线点大小
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#666',
                    fontSize: 15
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#f53f75' //图标点颜色
            }
        },
        lineStyle: {
            normal: {
                color: '#f53f75',
                width: 0
            }
        },
        smooth: true, //曲线变平滑 
        markLine: {
            precision: 0, //标线数值的精度，在显示平均值线的时候有用（即小数点后第几位）
            data: [{
                type: 'average',
                name: '平均值'
            }],
            lineStyle: {
                normal: {
                    type: 'dashed',
                    color: '#1668ec',
                    width: 3
                },
            },
            label: {
                show: true,
                formatter: '{c}',
                fontSize: 16
            }
        },
        data: lineData //载入数据
    }]
};

//使用刚指定的配置项和数据显示图表。
myChart.setOption(option);