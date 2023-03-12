var data = [200, -320, -30, 400, 200, -300, -800];
var help = [];
var positive = [];
var negative = [];
var min = Number.MAX_VALUE;

for (var i = 1, sum = 0; i < data.length + 1; ++i) {
    sum += data[i - 1];
    if (sum < min) {
        min = sum;
    }
}
console.log('min', min);


for (var i = 0, sum = -min; i < data.length; ++i) {
    if (data[i] >= 0) {
        positive.push(data[i]);
        negative.push('-');
    } else {
        positive.push('-');
        negative.push(-data[i]);
    }

    if (i === 0) {
        console.log('sum', sum);
        help.push(-min);
    } else {
        console.log(data[i-1], '+', sum, '=', data[i - 1] + sum)
        sum += data[i - 1];
        
        if (data[i] < 0) {
            console.log('sum', sum + data[i]);
            help.push(sum + data[i]);
        } else {
            console.log('sum', sum);
            help.push(sum);
        }
    }
}

option = {
    title: {
        text: '根据数据自动计算出的阶梯瀑布图'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#bbb'  
        },
        data: function() {
            var list = [];
            for (var i = 1; i <= 11; i++) {
                list.push('11月' + i + '日');
            }
            return list;
        }()
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        min: 0,
        axisLabel: {
            color: '#b2b2b2',
            formatter: function (value) {
                return (value + min) + '亿';
            }
        },
        axisTick: {
            show: false
        },
    },
    series: [{
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: help
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            data: positive,
            itemStyle: {
                color: '#d06c65'
            }
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            data: negative,
            itemStyle: {
                color: '#6fb672'
            }
        }
    ]
};