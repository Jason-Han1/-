var xData = ['1-15', '16-30', '31-45', '46-60', '60+'],
    yData1 = [104, 56, 136, 86, 98],
    borderData = [],
    legend = ['本企业', '电力用户', '其他企业', '同比'],
    colorArr = [
        {
            start: 'rgba(19, 247, 243,.7)',
            end: 'rgba(18, 58, 86,0.5)',
        },
    ];
var normalColor = 'rgba(255,255,255,0.5)';
let seriesData = [];
var borderHeight = 2;
xData.forEach((element) => {
    borderData.push(borderHeight);
});
[yData1].forEach((item, index) => {
    var obj1 = {};
    var obj2 = {};
    obj1 = {
        name: legend[index],
        type: 'bar',
        stack: legend[index],
        data: item,
        barWidth: '15%',
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: colorArr[index].start + '0.7)',
                        },
                        {
                            offset: 0.5,
                            color: colorArr[index].start + '0.3)',
                        },
                        {
                            offset: 1,
                            color: colorArr[index].end,
                        },
                    ],
                    globalCoord: false,
                },
            },
        },
    };

    seriesData.push(obj1);
});
console.log(seriesData);
option = {
    backgroundColor: '#000',
    grid: {
        left: '3%',
        top: '16%',
        right: '3%',
        bottom: 0,
        containLabel: true,
    },
    legend: {
        show: true,
        icon: 'rect',
        itemWidth: 20,
        itemHeight: 3,
        right: '15%',
        top: '0%',
        textStyle: {
            color: '#fff',
        },
        data: legend,
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            var str = '';
            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName !== '') {
                    str += params[i].name + ':'  + params[i].value + '<br/>';
                }
            }
            return str;
        },
    },
    xAxis: [
        {
            type: 'category',
            data: xData,
            axisPointer: {
                type: 'shadow',
            },
            axisLabel: {
                textStyle: {
                    color: normalColor,
                    fontSize: 12,
                },
            },
            axisLine: {
                lineStyle: {
                    color: normalColor,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            nameTextStyle: {
                color: normalColor,
                fontSize: 12,
            },
            // "min": 0,
            // "max": 50,
    
            axisLine: {
                lineStyle: {
                    color: normalColor,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: normalColor,
                },
            },
        },
        {
            type: 'value',
            name: '单位（人）',
            nameTextStyle: {
                color: normalColor,
                fontSize: 12,
            },
 
            axisLine: {
                lineStyle: {
                    color: normalColor,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(255,255,255,0.2)',
                },
            },
        },
    ],
    series: seriesData,
};
