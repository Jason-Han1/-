//计算正态数值分布频率
function fun(x, u, a) {
    return (1 / Math.sqrt(2 * Math.PI)) * a * Math.exp((-1 * ((x - u) * (x - u))) / (2 * a * a));
}
//给数组添加数据
function addParam(arr, target) {
    //是否是等于
    var flag = false;
    var target = parseFloat(target);
    //最小
    if (target < parseFloat(arr[0])) {
        arr.unshift(target.toString());
        return arr;
    }

    //最大
    if (target > parseFloat(arr[arr.length - 1])) {
        arr.push(target.toString());
        return arr;
    }

    //中间
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i]) > target) {
            if (arr[i - 1] == target) flag = true;
            break;
        }
    }
    if (flag) {
        return arr;
    } else {
        arr.splice(i, 0, target.toString());
        return arr;
    }
}
//获取数据数组最大值
function getTop(arr) {
    var maxIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        maxIndex = parseFloat(arr[i]) > parseFloat(arr[maxIndex]) ? i : maxIndex;
    }
    return parseFloat(arr[maxIndex]);
}
//构造正态曲线特定值对象
function getParam(low, mean, up, top) {
    var res = {};
    res['low'] = low;
    res['mean'] = mean;
    res['up'] = up;
    res['top'] = top;

    return res;
}
//求数组和
var getSum = function (x, y) {
    return parseFloat(x) + parseFloat(y);
};
//求平均值
var getMean = function (arr_x, arr_y) {
    var mean = 0;
    var sum = 0;
    var len = 1;
    if (arr_x.length == arr_y.length) {
        len = arr_y.reduce(getSum);
        for (var i = 0; i < arr_x.length; i++) {
            sum = sum + parseFloat(arr_x[i]) * parseFloat(arr_y[i]);
        }
    } else {
    }
    mean = (sum / len).toFixed(0);
    return mean;
};
//求标准偏差
var getStdev = function (arr_x, arr_y, avg) {
    var sum = 0;
    var len = arr_y.reduce(getSum); //总样本数
    var subtractAvg = [];
    for (var i = 0; i < arr_x.length; i++) {
        //做平均差平方
        subtractAvg.push((arr_x[i] - avg) * (arr_x[i] - avg));
    }
    for (var j = 0; j < subtractAvg.length; j++) {
        //平均差平方和
        sum = sum + parseFloat(subtractAvg[j]) * parseFloat(arr_y[j]);
    }
    return Math.sqrt(sum / len); //标准偏差
};

var yArr = []; //正态分布频率
var xArr = []; //正态分布数值

//数据值分布列
var x = [
    2870.6894,
    3189.6552,
    3230.0885,
    3293.1035,
    3318.9655,
    3353.448,
    3362.0688,
    3362.069,
    3362.7844,
    3362.8319,
    3431.034,
    3433.6283,
    3439.655,
    3508.6207,
    3543.1033,
    3543.1034,
    3561.9475,
    3568.3438,
    3575.2212,
    3575.2215,
    3586.2069,
    3592.9204,
    3662.787,
    3672.415,
    3698.2743,
    3706.8966,
    3707.9646,
    3711.2067,
    3716.8141,
    3716.8142,
    3725.6636,
    3725.6637,
    3750.0,
    3752.2122,
    3752.2124,
    3758.6207,
    3775.862,
    3787.6106,
    3813.8078,
    3823.0088,
    3827.4336,
    3827.5862,
    3831.8584,
    3839.9947,
    3853.4483,
    3853.4494,
    3902.655,
    3902.6551,
    3911.5,
    3938.053,
    3942.4761,
    3948.2761,
    3961.1901,
    4008.6207,
    4043.1034,
    4060.3448,
    4083.0573,
    4116.3791,
    4116.3792,
    4120.6897,
    4129.3103,
    4146.5517,
    4159.292,
    4163.7931,
    4172.4118,
    4172.4134,
    4241.3793,
    4491.3788,
];
//console.log(x);
//数据值频数数组
var y = [
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    3,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    4,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
];
//console.log(y);
var mean = parseFloat(getMean(x, y)); //平均值
//console.log("平均值:"+mean);
var stdev = parseFloat(getStdev(x, y, mean)); //
//console.log("标准偏差:"+stdev);

//正态分布3倍标准差范围
var low = mean - 1 * stdev;
var up = mean + 1 * stdev;

xArr = x.concat();
xArr = addParam(xArr, low.toFixed(0).toString()); //增加最小值整数
xArr = addParam(xArr, mean.toFixed(0).toString()); //增加平均值整数
xArr = addParam(xArr, up.toFixed(0).toString()); //增加最大值整数

var top = (1 / Math.sqrt(2 * Math.PI)) * stdev;
var mar = getParam(low.toFixed(0).toString(), mean.toFixed(0).toString(), up.toFixed(0).toString(), top);
//console.log(mar);

for (var j = 0; j < x.length; j++) {
    var res = fun(x[j], mean, stdev).toFixed(4);
    yArr.push(res);
}

var colors = ['#4BD3D6', '#FA61A3', '#0070C0', '#FF3428'];
option = {
   
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            
        },
    },
    grid: {
        right: '15%',
    },
    legend: {
        data: ['原数据频数', '正态分布'],
    },
    xAxis: [
        {
            type: 'category',

            axisTick: {
                alignWithLabel: true,
            },
            data: x,
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '概率',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[1],
                },
            },
            axisLabel: {
                formatter: '{value}',
            },
        },
        {
            type: 'value',
            name: '频数',
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0],
                },
            },
            axisLabel: {
                formatter: '{value}',
            },
        },
    ],
    series: [
        {
            name: '原数据频数',
            type: 'bar',
            yAxisIndex: 1,
            data: y,
        },
        {
            name: '正态分布',
            type: 'line',
            smooth: true,
            yAxisIndex: 0,
            data: yArr,
        },
        {
            name: '满分线',
            type: 'line',
            markLine: {
                itemStyle: {
                    color: '#000',
                    normal: {
                        lineStyle: {
                            width: 2,
                            color: colors[2],
                            type: 'solid', //'dotted'虚线 'solid'实线
                        },
                        label: {
                            show: true,
                            position: 'end',
                            color: 'black',
                            formatter: function (params) {
                                str = mar.low;
                                return str;
                            },
                        },
                    },
                },
                name: 'low',
                //symbol:'none',//去掉箭头
                data: [
                    [
                        {
                            coord: [mar.low, 0],
                        },
                        {
                            coord: [mar.low, mar.top],
                        }, //如何获取grid上侧最大值，目前是写死的
                    ],
                ],
            },
        },
        {
            name: '及格线',
            type: 'line',
            markLine: {
                itemStyle: {
                    color: '#000',
                    normal: {
                        lineStyle: {
                            width: 2,
                            color: colors[3],
                            type: 'solid', //'dotted'虚线 'solid'实线
                        },
                        label: {
                            show: true,
                            position: 'end',
                            color: 'black',
                            formatter: function (params) {
                                str = mar.up;
                                return str;
                            },
                        },
                    },
                },
                name: 'up',
                yAxisIndex: 0,
                //symbol: 'none',//去掉箭头
                data: [
                    [
                        {
                            coord: [mar.up, 0],
                        },
                        {
                            coord: [mar.up, mar.top],
                        }, //如何获取grid上侧最大值，目前是写死的
                    ],
                ],
            },
        },
    ],
};
