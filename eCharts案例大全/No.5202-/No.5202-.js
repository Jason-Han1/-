var getname = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var getvalue0 = [26, 35, 64, 9, 52, 36, 19, 25, 65, 32, 65, 75];
var getvalue1 = [55, 45, 23, 65, 35, 95, 64, 35, 269, 59, 51, 65];
var getvalue2 = [55, 45, 23, 65, 35, 95, 64, 35, 269, 59, 51, 65];
var getvalue3 = [55, 45, 23, 65, 35, 95, 64, 35, 269, 59, 51, 65];
var getvalue4 = [55, 45, 23, 65, 35, 95, 64, 35, 269, 59, 51, 65];
var getlegend = ['兰香园', '银杏苑', '桂香园', '芙蓉园', '金竹园'];
var getvalue = [[26, 35, 64, 9, 52, 36, 19, 25, 65, 32, 65, 75],
[55, 42, 93, 165, 35, 95, 94, 55, 199, 259, 151, 65],
[75, 55, 103, 25, 55, 25, 114, 35, 19, 99, 71, 165],
[32, 105, 63, 85, 135, 35, 74, 45, 209, 39, 31, 88],
[25, 85, 83, 75, 95, 45, 64, 95, 169, 79, 21, 95]];
var sumData = [];
sumData = sumData.concat(getvalue0).concat(getvalue1).concat(getvalue2).concat(getvalue3).concat(getvalue4)
var maxnum=Math.max.apply(null,sumData);
var maxlen=Math.pow(10,String(Math.ceil(maxnum)).length-2);

if(maxnum>=5){
    var max = Math.ceil(maxnum / (9.5*maxlen))*maxlen*10;
}else{
    var max = 5;
}

var colorList = [{
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#234DD7' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#51AFFF' // 100% 处的颜色
    }],
}, {
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#1B856D' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#2CFFBA' // 100% 处的颜色
    }],
}, {
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#817619' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#FFFF00' // 100% 处的颜色
    }],
}, {
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#209ECD' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#27F8F6' // 100% 处的颜色
    }],
}, {
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#826CFF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#9F9BFF' // 100% 处的颜色
    }],
}];
var shadowColorList = ['rgba(35,77,215,0.2)', 'rgba(27,133,109,0.2)', 'rgba(129,118,25,0.2)', 'rgba(32,158,205,0.2)', 'rgba(130,108,255,0.2)'];

let lineseries = [];
for (var i = 0; i < getlegend.length; i++) {
    lineseries.push({
        name: getlegend[i],
        type: 'line',
        smooth: true,
        data: getvalue[i],
        symbol: 'circle',
        symbolSize: 0,
        lineStyle: {
            normal: {
                width: 3,
                color: colorList[i],
                shadowColor: shadowColorList[i],
                shadowBlur: 10,
                shadowOffsetY: 0,
            }
        },
        itemStyle: {
            normal: {
                color: colorList[i],
                borderColor: colorList[i],
                borderWidth: 3
            },
        },
    });
}

var option = {
    backgroundColor: '#000',
    grid: {
        top: 60,
        bottom: 40,
        left: 50,
        right: 20
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
    },
    legend: {
        type: "scroll",
        icon: 'circle',
        right: '10',
        top: '10',
        data: getlegend,
        itemGap: 20,
        itemWidth: 11,
        itemHeight: 11,
        textStyle: {
            fontSize: '13',
            color: '#A9C1E5',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#C5DCFF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#3E5B7D',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#C5DCFF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#3E5B7D',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(62,91,125,.5)',
            }
        }
    }],
    series: lineseries
};