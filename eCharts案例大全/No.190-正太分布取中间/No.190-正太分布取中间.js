//相关详细说明：https://www.cnblogs.com/daxiongblog/p/12679363.html
var formulaCalcByFunc = function (formula, digit) {
    var pow = Math.pow(10, digit);
    return parseInt(formula * pow, 10) / pow;
};

function gaussFunc(x, xMaxi, yMaxi, s) {
    return yMaxi * math.exp(-(((x - xMaxi) * (x - xMaxi)) / s));
}
/**
 * 标准正态分布函数
 * @@param x 数据
 * @@param mean 平均数
 * @@param stdev 标准差
 */
function normalDistributionfun(x, mean, stdev) {
    return (1 / (Math.sqrt(2 * Math.PI) * stdev)) * Math.exp((-1 * ((x - mean) * (x - mean))) / (2 * stdev * stdev));
}

/**第二种方法： 使用标准正态分布函数实现的方法，通过在峰值周围寻找均值
 **结果将会偏向原始数据峰值
 ****/
function calcNormallineDta2(xData, yData) {
    var result = [];

    var totalCount = 0;

    var firstMode = 0; //峰值起始位置
    var modeCount = 0; //找到目前数据的峰值

    for (var i = 0; i < yData.length; i++) {
        totalCount += yData[i];
        if (yData[i] > modeCount) {
            modeCount = yData[i];
            firstMode = i;
        }
    }
    //找出出x轴左右范围内的均值(关键代码)
    var mode = 0;
    var modeDuplicates = 0;

    var fellOffTop = true;

    for (var j = firstMode; j < yData.length; j++) {
        if (yData[j] > yData[firstMode] - yData[firstMode] / 10) {
            //10：分布线系数
            mode += j;
            modeDuplicates++;
        } else {
            fellOffTop = false;
            break;
        }
    }

    var fellOffBottom = true;

    for (var k = firstMode - 1; k >= 0; k--) {
        if (yData[k] > yData[firstMode] - yData[firstMode] / 10) {
            //10：分布线系数
            mode += k;
            modeDuplicates++;
        } else {
            fellOffBottom = false;
            break;
        }
    }
    var mean;
    if (fellOffBottom || fellOffTop) {
        mean = firstMode;
    } else {
        mean = mode / modeDuplicates;
    }
    //求出标准差

    var stdev = 0;

    for (var n = 0; n < yData.length; n++) {
        stdev += Math.pow(n - mean, 2) * yData[n];
    }

    stdev /= totalCount - 1;

    stdev = Math.sqrt(stdev);
    //带入正态分布公式
    for (var m = 0; m < yData.length; m++) {
        var probability = normalDistributionfun(m, mean, stdev);
        result.push(Math.round(probability * totalCount * 100) / 100);
    }
    return result;
}

var yData = [
    53,
    53,
    58.5,
    78,
    115,
    154.5,
    200,
    300.5,
    383.5,
    518,
    871.5,
    1382.5,
    2192.5,
    3340.5,
    5249,
    8979.5,
    15448,
    26225,
    44057.5,
    71392,
    109113,
    159006,
    224595.5,
    307191.5,
    405623,
    520332,
    646965.5,
    785170.5,
    930962.5,
    1078572.5,
    1227179.5,
    1373870,
    1522723.5,
    1671622.5,
    1812839.5,
    1944963,
    2068185,
    2180604.5,
    2280685.5,
    2361196.5,
    2417123.5,
    2457786,
    2483891,
    2494890,
    2496943.5,
    2498862.5,
    2500857.5,
    2500175,
    2501485,
    2499141,
    2492862,
    2478390,
    2459869.5,
    2443707,
    2430140,
    2421345.5,
    2404805,
    2377592.5,
    2334130,
    2263164,
    2163510.5,
    2031018.5,
    1872739.5,
    1698482,
    1507286,
    1306381.5,
    1114865.5,
    938499,
    771654.5,
    619227.5,
    488654.5,
    379699.5,
    289925.5,
    218837.5,
    165510.5,
    126806,
    97552,
    75560,
    59062,
    46304.5,
    36476,
    28583,
    22280.5,
    16965.5,
    12631.5,
    9265.5,
    6629,
    4548.5,
    3091,
    2102.5,
    1396.5,
    921,
    580,
    345,
    203.5,
    137,
    87,
    46,
    27.5,
    12,
    6,
];
var xData = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '70',
    '71',
    '72',
    '73',
    '74',
    '75',
    '76',
    '77',
    '78',
    '79',
    '80',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '90',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
    '100',
];
var datas2 = [];
var yData2 = [];
var yArr = [];
var xArr = xData.map((n) => parseInt(n));
var sumFuc = (s, c) => formulaCalcByFunc(s + c, 6);
var len = xArr.length;
var ysum = yData.reduce(sumFuc, 0);
for (var n = 0; n < yData.length; n++) {
    //var d = (dataArr[i] - mathCalcResult.avg) / mathCalcResult.stdDev;
    var y = yData[n] / ysum;
    yArr.push(y);
}
var avg = math.mean(yArr);

function gaussFit(xOriginal, yOriginal, average) {
    var x = [];
    var y = [];
    // 过滤平滑部分
    for (var i = 0; i < yOriginal.length; i++) {
        if (yOriginal[i] > average) {
            x.push(xOriginal[i]);
            y.push(yOriginal[i]);
        }
    }

    var zMatrix = math.matrix(math.log(y));
    var zMatrixT = zMatrix;

    var xMatrix = math.ones([y.length, 3]);
    //[1,x,x*x]
    for (var j = 0; j < y.length; j++) {
        xMatrix[j][1] = x[j];
        xMatrix[j][2] = x[j] * x[j];
    }
    // 最小二乘法
    var xMatrixT = math.transpose(xMatrix);
    var bMatrix = math.multiply(math.multiply(math.inv(math.multiply(xMatrixT, xMatrix)), xMatrixT), zMatrixT);
    // 取值
    var b2 = math.subset(bMatrix, math.index(2));
    var b1 = math.subset(bMatrix, math.index(1));
    var b0 = math.subset(bMatrix, math.index(0));

    var s = -1 / b2;
    var xMaxi = (s * b1) / 2;
    var yMaxi = math.exp(b0 + (xMaxi * xMaxi) / s);

    var yFit = [];
    for (var n = 0; n < yOriginal.length; n++) {
        yFit.push(gaussFunc(xOriginal[n], xMaxi, yMaxi, s));
    }

    return yFit;
}
datas2 = gaussFit(xArr, yArr, avg);
for (var k = 0; k < datas2.length; k++) {
    var l = datas2[k] / yArr[k];
    //var d = (dataArr[i] - mathCalcResult.avg) / mathCalcResult.stdDev;
    var y = yData[k] * l;
    yData2.push(y);
    //yData2.push(y.toFixed(2));
}

var colors = ['#7CCD7C', '#d14a61', '#675bba'];
option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
    },
    grid: {
        right: '20%',
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false,
            },
            restore: {
                show: true,
            },
            saveAsImage: {
                show: true,
            },
        },
    },
    legend: {
        data: ['原数据', '正态分布'],
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                alignWithLabel: true,
            },
            data: xData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '原数据',
            position: 'left',
        },
        {
            type: 'value',
            position: 'right',
        },
    ],
    visualMap: [
        {},
        {
            type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 1,
            pieces: [
                {
                    gt: 27,
                    lt: 69,
                    color: 'rgba(0, 0, 180, 0.4)',
                },
            ],
        },
    ],
    series: [
        {
            name: '原数据',
            type: 'line',
            animation: false,
            showSymbol: false,
            itemStyle: {
                color: 'red',
            },
            areaStyle: {},
            data: yData,
        },
        {
            name: '正态分布',
            type: 'line',
            smooth: true,
            markLine: {
                symbol: ['none', 'none'],
                label: { show: false },
                data: [{ xAxis: 27 }, { xAxis: 69 }],
            },
            areaStyle: {},
            data: yData2,
        },
    ],
};
