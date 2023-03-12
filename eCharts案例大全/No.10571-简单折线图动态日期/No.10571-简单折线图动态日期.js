// 基于准备好的dom，初始化echarts实例    
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];
var linetData = [];
for (var i = 0; i < 7; i++) {
    var date = new Date(dottedBase -= 1000 * 3600 * 24);
    category.unshift([
        date.getMonth() + 1,
        date.getDate()
    ].join('-')); //控制日期当前前七天
    var b = Math.random() * 250; //控制b线条随机生成,随机数200以内 可以自己设置
    var d = Math.random() * 200; //控制d线条随机生成随机数100以内
    var c = Math.random() * 150; //控制c线条随机生成随机数150以内
    barData.push(b);
    lineData.push(d);
    linetData.push(c);
}
var option = {
    backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(153, 51, 255,.8)'
        },
        {
            offset: 0.8,
            color: 'rgba(51, 204, 255,.8)'
        }
    ], false),
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: [{
            orient: 'horizontal',
            icon: 'roundRect', //字段控制形状类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
            itemWidth: 20, //icon宽
            itemHeight: 15, //icon高
            itemGap: 13,
            data: ['新增订单'],
            x: '25%',
            y: '93%',
            textStyle: {
                fontFamily: 'rzbg',
                fontWeight: 700,
                fontSize: 20,
                color: '#cc66ff'
            }
        },
        {
            orient: 'horizontal',
            icon: 'roundRect',
            itemWidth: 20,
            itemHeight: 15,
            itemGap: 13,
            data: ['维修订单'],
            x: '45%',
            y: '93%',
            textStyle: {
                fontFamily: 'rzbg',
                fontWeight: 700,
                fontSize: 20,
                color: '#cc66ff'
            }
        },
        {
            orient: 'horizontal',
            icon: 'roundRect',
            itemWidth: 20,
            itemHeight: 15,
            itemGap: 13,
            data: ['换芯订单'],
            x: '65%',
            y: '93%',
            textStyle: {
                fontFamily: 'rzbg',
                fontWeight: 700,
                fontSize: 20,
                color: '#cc66ff'
            }
        }
    ],
    grid: { //调整图表位置
        left: '5%',
        right: '5%',
        top: '16%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: [{
        nameLocation: 'end', //x轴name位置 ，还可选'start'，'center'
        nameGap: 5, //name离X轴距离
        data: category,
        boundaryGap: false, //x坐标轴从零刻度开始
        axisTick: { //轴刻度线
            "show": false
        },
        axisLabel: { //x轴上文字样式修改
            show: true,
            textStyle: {
                fontSize: 20, //x轴上文字样式修改
                color:'#9933ff'
            },
            margin: 30, //X轴上文字离X轴距离
            interval: 0, //横轴信息隔每一位显示 为0表示全部显示 
            rotate: 30, //30度角倾斜显示  
        },
        axisLine: {
            symbol: ['none', 'arrow'], //轴上添加箭头
            symbolOffset: 12, //往外偏移距离
            lineStyle: {
                fontSize: 30,
                color: '#fff' //X轴颜色
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        }
    }, 
       ],
    yAxis: [{
        min: 0, //Y轴最小值
        max: 300, //Y轴最大值
        splitNumber: 5, //Y轴刻度修改 MAX/splitNumber=间距 
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            symbol: ['none', 'arrow'], //轴上添加箭头
            symbolOffset: 12, //往外偏移距离
            lineStyle: {
                color: '#fff' //Y轴刻度颜色修改
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize:20,
                color: "#fff", //Y轴刻度颜色修改
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        }
    }],
    series: [{
            name: '新增订单',
            color: '#52c2c2',
            type: 'line',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(82,194,194, .7)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(82,194,194, .2)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 20
                }
            },
            data: barData,
        },
        {
            name: '维修订单',
            color: '#a274ff',
            type: 'line',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(162,116,255, 0.7)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(162,116,255, .2)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 20,

                }
            },
            data: lineData,
        },
        {
            name: '换芯订单',
            color: '#f7b0bf',
            type: 'line',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(247,176,191, 0.7)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(247,176,191, .2)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 20
                }
            },
            data: linetData,
        }
    ]
};