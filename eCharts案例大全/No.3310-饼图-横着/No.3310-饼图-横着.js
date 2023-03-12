function minArray(array) {
    let min = array[0];
    const len = array.length;
    for (let i = 1; i < len; i++) {
        if ((array[i] && array[i] < min) || (array[i] == 0 && array[i] < min)) {
            min = array[i];
        }
    }
    return min;
}
function maxArray(array) {
    let max = array[0];
    const len = array.length;
    for (let i = 0; i < len; i++) {
        if ((array[i] && array[i] > max) || (array[i] == 0 && array[i] > max)) {
            max = array[i];
        }
    }
    return max;
}
var data = { xAxis: ['企业总数', '废气企业', '废水企业', '铅污染', '铬污染'], data: [417, 74, 72, 67, 55] };

if (!Object.keys(data).length) {
    return false;
} else {
    var maxarr = Number(maxArray(data.data));
}

var salvProMax = []; // 背景按最大值
 let fontSizeMax = data.xAxis[0].length
for (let i = 0; i < data.xAxis.length; i++) {
    if (data.xAxis[i].length > fontSizeMax) {
          fontSizeMax = data.xAxis[i].length
        }
    salvProMax.push(maxarr);
}
option = {
    backgroundColor: '#000C3B',
    grid: {
        left: '5%',
        right: '5%',
        bottom: '-3%',
        top: '3%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return params[0].name + ' : ' + params[0].value + '次';
        },
    },
    xAxis: [{
        show: false,
        type: "value",
        splitLine: {
            show: false
        },
        max: function(value) {
            return value.max
        }
    }],
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                },
                rich: {
                  a3: {
                    color: 'rgba(225,225,225,0)'
                  }
                },
                formatter: function (value, index) {
                  const indx = index + 1
    
                  const extent = (val) => {
                    var str = '';
                    if (str.length < fontSizeMax) {
                      for (let i = 0; i < (fontSizeMax - val.length); i++) {
                        str += '空'
                      }
                    }
                    return str
                  }
                   return indx + value + `{a3|${extent(value)}}`
                }
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: data.xAxis,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                },
                formatter: '{value}次',
            },
            data: data.data,
        },
    ],
    series: [
        {
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: '#FF1F22',
                },
            },
            barWidth: 10,
            data: data.data,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 30,
                },
            },
        },
    ],
};
