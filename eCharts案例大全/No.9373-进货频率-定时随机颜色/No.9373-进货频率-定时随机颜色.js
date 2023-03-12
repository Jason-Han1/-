var now = new Date('2019-10-1'); //初始日期
var dataDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    yDate = [];
for (var i = 1; i <= dataDay.length; i++) {
    var day = now.getDate(); /*now.getFullYear() + "-" + (now.getMonth() + 1) + "月" +*/
    yDate.push(day);
    yDate = yDate.sort(sorting).reverse();
    now.setDate(now.getDate() + 1);
}

function sorting(a, b) {
    return a - b
}
//console.log(JSON.stringify(yDate));
var data_ep = [820, 970, 240, 100, 470, 580, 270, 240, 500, 410, 820, 270, 640, 300, 140, 520, 270, 640, 100, 410, 820, 270, 240, 300, 410, 520, 170, 220, 100, 170, 471];

var colorList = [
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0'
];
var rand = parseInt(Math.random() * colorList.length); //获取不同随机数

//初始化echarts
var initChart = function(rand) {

    option = {
        backgroundColor: '#f8f8f8', //背景色
        title: {
            text: '进货频率',
            x: 'center',
            y: '5',
            textStyle: {
                fontSize: 16,
                fontWeight: '400',
                color: '#666' // 主标题文字颜色
            }
        },
        tooltip: {
            trigger: 'axis', //axis , item
            backgroundColor: 'rgba(4, 22, 62, .6)',
            borderColor: '#59dcff',
            borderWidth: 1,
            borderRadius: 0,
            axisPointer: {
                type: 'shadow'
            },
            textStyle: {
                fontSize: 13
            },
            confine: true, //是否将 tooltip 框限制在图表的区域内
            formatter: function(params, ticket, callback) {
                var res = now.getFullYear() + "年" + now.getMonth() + "月" + params[0].name + "日" + "<br>进货频率：" + params[0].name + "次";
                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + '单位数：' + params[i].value + '家';
                }
                setTimeout(function() {
                    callback(ticket, res); // 仅为了模拟异步回调
                }, 3000)
                return res;
            }
        },
        legend: {
            show: true,
            x: 'center',
            y: 'bottom'
        },
        toolbox: {
            show: false
        },
        grid: {
            x: 45,
            y: 50,
            width: '86%',
            height: '85%',
        },
        xAxis: [{
            type: 'value',
            position: 'bottom',
            boundaryGap: true, //边界间隙
            name: '\n\n\xa0(频率)',
            nameTextStyle: {
                color: '#666',
                fontSize: 13
            },
            offset: 4,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#04163c',
                    fontSize: 13
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 54, 93, .9)'
                }
            },
            axisTick: {
                show: false //坐标轴小标记
            },
            splitLine: {
                show: true, //是否显示分割线
                lineStyle: {
                    color: 'rgba(0, 54, 93, .5)', //纵向向网格线颜色
                    type: 'dashed',
                    width: 1
                }
            }
        }, {
            type: 'value',
            min: 0,
            max: 100,
            boundaryGap: false, //边界间隙
            offset: 1,
            axisLabel: {
                textStyle: {
                    color: '#04163c',
                    fontSize: 12
                },
                formatter: '{value}%'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(18,104,174,.5)'
                }
            },
            axisTick: {
                show: false //坐标轴小标记
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: {
            type: 'category',
            position: 'left',
            name: '日期\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0', // \xa0表示空格
            nameTextStyle: {
                color: '#666',
                fontSize: 13
            },
            nameGap: 22,
            axisLabel: {
                textStyle: {
                    color: '#04163c',
                    fontSize: 13
                },
                margin: 4,
                interval: 4 //y轴坐标间隔
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 54, 93, .9)',
                    width: 1
                }
            },
            axisTick: {
                show: false, //坐标轴小标记
            },
            splitLine: {
                show: false
            },
            data: yDate //载入y轴数据
        },
        series: [{
            name: '企业数',
            type: 'bar',
            data: data_ep,
            label: {
                normal: {
                    show: true,
                    position: 'right', //top,inside,insideTop,...
                    textStyle: {
                        color: '#04163c'
                    }
                }
            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    //color:'#009cff', //图形颜色
                    /*color:new echarts.graphic.LinearGradient(0, 1, 1, 0, [{ //new echarts.graphic.RadialGradient(0.5,0.5,1, [{
                            offset: 0,
                            color: '#0092f7'
                        }, {
                            offset: 1,
                            color: '#85e9ff'
                    }])*/
                    color: colorList[rand] //随机颜色
                }
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
    return myChart;
};

initChart(rand);

setInterval(function() {
    var rand2 = parseInt(Math.random() * colorList.length); //获取不同随机数
    initChart(rand2);

}, 3000);