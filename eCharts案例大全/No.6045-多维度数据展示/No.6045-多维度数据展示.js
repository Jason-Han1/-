var data = {
    title: ['总计', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    plan_production: [500, 300, 490, 333, 346, 777, 888, 864, 789, 765, 333, 346, 777, 721],
    actual_production: [300, 400, 500, 300, 400, 500, 300, 400, 500, 500, 400, 500, 300, 400],
    attainment_rate: [560, 380, 290, 460, 370, 480, 290, 560, 230, 490, 400, 500, 300, 400],
    productivity: [350, 425, 188, 700, 410, 312, 743, 621, 321, 142, 400, 500, 300, 400],
    nums: [30, 45, 88, 100, 110, 70, 80, 90, 100, 100, 45, 88, 100, 110, 70]
};

for (var pr in data) {
    data[pr] = data[pr].slice(1, -1);
}

function getTableLine(num) {
    var list = [];
    var bottom = 122;
    var height = 20;
    for (var i = 0; i < num; i++) {
        list.push({
            type: 'line',
            bottom: bottom - i * height,
            right: 40,
            style: {
                fill: '#ffff'
            },
            shape: {
                x1: 0,
                y1: 0,
                x2: 3200,
                y2: 0
            }

        });
    }
    return list;
}
var lineList = getTableLine(6);


option = {
    title: [{
        text: ' \n住宅用地\n商服用地\n工矿仓储用地\n其他用地\n宗数',
        bottom: 18,
        left: 1,
        textStyle: {
            lineHeight: 20,
            fontSize: 14,
            fontWeight: 'normal',
            color:'#37474F',
            fontWeight: 'bold',
            formatter: function(value) {
                return '{table|' + value + '}';
            },
            rich: {
                table: {
                    align: 'center',
                     color:'#80CBC4',
                
                }
            }
        }
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data: ['住宅用地', '商服用地', '工矿仓储用地', '其他用地', '宗数']
    },
    grid: {
        bottom: 150,
        left: 90,
        right:40
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: data.title,
        axisTick: {
            length: 128,
        },
        axisLabel: {
            formatter: function(value, index) {
                return '{table|' + value +
                    '}\n{table|' + data.plan_production[index] +
                    '}\n{table|' + data.actual_production[index] +
                    '}\n{table|' + data.attainment_rate[index] +
                    '}\n{table|' + data.productivity[index] +
                    '}\n{table|' + data.nums[index] + '}';
            },
            rich: {
                table: {
                    lineHeight: 20,
                    align: 'center',
                    color:'#37474F'
                }
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
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        minInterval: 1,
        name: '面积',
        splitLine: {
            show: false
        },
        min: function(v) {
            return Math.max((v.min - 10), 0);
        },
         axisLine: {
                    lineStyle: {
                        color: '#455A64'
                    }
                }
    }, {
        type: 'value',
        scale: true,
        name: '宗数',
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}'
        },
         axisLine: {
                    lineStyle: {
                        color: '#455A64'
                    }
                }
    }],
    color: ['#5C6BC0', '#FFCA28', '#795548', '#B0BEC5','#209f84'],
    series: [{
        name: '住宅用地',
        type: 'bar',
        label: {
            show: true,
            position: 'top'
        },
        yAxisIndex: 0,
        data: data.plan_production
    }, {
        name: '商服用地',
        type: 'bar',
        label: {
            show: true,
            position: 'top'
        },
        yAxisIndex: 0,
        data: data.actual_production
    }, {
        name: '工矿仓储用地',
        type: 'bar',
        label: {
            show: true,
            position: 'top',

        },
        
        yAxisIndex: 0,
        data: data.attainment_rate
    }, {
        name: '其他用地',
        type: 'bar',
        label: {
            show: true,
            position: 'top',

        },
     
        yAxisIndex: 0,
        data: data.productivity
    }, {
        name: '宗数',
        type: 'line',
        label: {
            show: true,
            position: 'top',

        },
        
        yAxisIndex: 1,
        data: data.nums
    }],
    graphic: lineList
};