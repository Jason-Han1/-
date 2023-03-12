//声明数据
var chartData = [{
        name: '部门名称1',
        value: 50,
        test: '备注1' //自定义参数
    },
    {
        name: '部门名称2',
        value: 60,
        test: '备注2'
    },
    {
        name: '部门名称3',
        value: 66,
        test: '备注3'
    },
    {
        name: '部门名称4',
        value: 72,
        test: '备注4'
    },
    {
        name: '部门名称5',
        value: 80,
        test: '备注5'
    },
    {
        name: '部门名称6',
        value: 88,
        test: '备注6'
    },
    {
        name: '部门名称7',
        value: 96,
        test: '备注7'
    },
    {
        name: '部门名称8',
        value: 100,
        test: '备注8'
    }
];

var itemValue = [],
    bgData = []; //声明背景数据

// 取出所有数据最大值,作为柱形图背景数据
chartData.forEach(function(items, index) { //console.log(items)
    itemValue.push(items.value);
});
maxdata = Math.max.apply(null, itemValue); ///applay方法★取得最大值
//console.log("最大值为 %c"+ maxdata, "color:red");
for (var i = 0; i < chartData.length; i++) {
    bgData.push(maxdata); //取得最大值
}
console.log(bgData);

//图表

option = {
    backgroundColor: '#0d073d', // 背景透明
    title: {
        show: false
    },
    tooltip: {
        trigger: 'axis', // axis , item
        axisPointer: {
            type: 'shadow' // 'line' | 'shadow'
        },
        //backgroundColor:'transparent',
        padding: 0,
        textStyle: {
            fontSize: 16,
            fontFamily: 'Simsun',
            color: '#fff'
        },
        formatter: function(params, ticket, callback) {
            console.log(params[1])
            var res = '<table class="charts_tip">' +
                '<thead>' +
                '<tr><th colspan="2" style="padding:2px 5px; background:' + params[1].color + '">' + params[1].name + '</th></tr>' +
                '</thead>' +
                '<tbody>' +
                '<tr><td class="cc" style="padding:2px 5px;">数量</td><td>' + params[1].value + '</td></tr>' +
                '<tr><td class="cc" style="padding:2px 5px;">备注</td><td>' + params[1].data.test + '</td></tr>' +
                '</tbody>' +
                '</table>';
            setTimeout(function() {
                callback(ticket, res); // 仅为了模拟异步回调
            }, 3000)
            return res;
        }
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    grid: {
        top: '8%',
        left: '7%',
        right: '15%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        position: 'bottom',
        boundaryGap: true, // 边界间隙
        min: 0,
        axisLabel: {
            show: false,
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255, 255, .5)'
            }
        },
        axisTick: {
            show: false // 坐标轴小标记
        },
        splitLine: {
            show: false, // 是否显示分割线
            lineStyle: {
                color: 'rgba(255, 255, 9255, 0)', // 纵向向网格线颜色
                type: 'dashed',
                width: 1
            }
        }
    }],
    yAxis: {
        type: 'category',
        position: 'left',
        axisLabel: {
            textStyle: {
                color: '#8aa5ab',
                fontSize: 15
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, .5)',
                width: 1
            }
        },
        axisTick: {
            show: false // 坐标轴小标记
        },
        splitLine: {
            show: false
        },
        data: (function(data) {
            var arr = [];
            data.forEach(function(items) {
                arr.push(items.name);
            });
            return arr;
        })(chartData) // 载入y轴数据
    },
    series: [{
        type: 'bar',
        barGap: "-100%",
        label: {
            normal: {
                show: false
            }
        },
        barWidth: 27,
        itemStyle: {
            normal: {
                color: '#1a2859' // 图表颜色
            }
        },
        data: bgData, // 载入背景数据
        z: 0
    }, {
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'right', // top, right, inside, insideTop,...
                textStyle: {
                    color: 'white',
                    fontSize: 16
                },
                formatter: '{c}' + "%"
                /*formatter: function(params) { console.log(params)
                    var strVal = 0;
                    chartData.forEach(function(v, i, array) {
                        if (params.name == v.name) {
                            strVal = v.value;
                            params.data = v.test
                        }
                    })
                    return strVal + '%';
                }*/
            }
        },
        barWidth: 27,
        itemStyle: {
            normal: {
                //color:'#ffc938', // 图表颜色
                color: function(params) { // 颜色定制显示（按顺序）
                    var colorList = ['#ea9ef3', 'yellowgreen', '#4a5eea', '#00a0e9', '#8957a1', '#80f1b0', '#ff6692', '#f29b76'];
                    return colorList[params.dataIndex]
                },
                //barBorderRadius: [0, 17, 17, 0]  //圆角
            }
        },
        data: chartData, // 载入数据(内含自定义参数)
        z: 1
    }]
};

// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);