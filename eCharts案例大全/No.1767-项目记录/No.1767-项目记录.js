var legendData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var yAxisData = ['检修区域南厂', '东修区域南厂', '加工组装区域', '动车焊接区域', '轮轴区域'];
// 累计利润
var leiji = [
    [10, 15, 10, 15, 10],
    [20, 25, 20, 25, 20],
    [30, 35, 30, 35, 30],
    [40, 45, 40, 45, 40],
    [50, 55, 50, 55, 50],
    [60, 65, 60, 65, 60],
    [70, 75, 70, 75, 70],
    [80, 85, 80, 85, 80],
    [90, 95, 90, 95, 90],
    [100, 105, 100, 105, 100],
    [110, 115, 110, 115, 110],
    [120, 125, 120, 125, 140],
];
// 进度
var jindu = [
    [30, 20, 10, 15, 10],
    [20, 25, 20, 25, 20],
    [30, 35, 30, 35, 30],
    [10, 15, 10, 15, 10],
    [20, 25, 20, 25, 20],
    [30, 35, 30, 35, 30],
    [10, 15, 10, 15, 10],
    [20, 25, 20, 25, 20],
    [30, 35, 30, 35, 30],
    [10, 15, 10, 15, 10],
    [20, 25, 20, 25, 20],
    [30, 35, 30, 35, 30],
];
var colorArr = [
    '#33AEEE',
    '#2950FF',
    '#00F1FF',
    '#9EFFCC',
    '#4BCD6C',
    '#BEF01B',
    '#FFDE81',
    '#FFBE02',
    '#FF8C4B',
    '#FBADA0',
    '#E790FE',
    '#E386AB',
];
var data = [];
leiji.forEach(function (item, i) {
    var dataArr = [];
    leiji[i].forEach(function (item, j) {
        dataArr.push({
            vaule: leiji[i][j],
            taxt: jindu[i][j],
        });
    });
    data.push(dataArr);
});
console.log(data);
var seriesData = [];
legendData.forEach(function (item, i) {
    seriesData.push({
        name: legendData[i],
        type: 'line',
        data: leiji[i],
        symbolSize: 8,
        symbol: 'circle',
        label: {
            show: true,
            position: [20,10],
            formatter: function (params) {
                return params.value + ',\n' +
                `{a|${jindu[params.seriesIndex][params.dataIndex]}%}`;
            },
            rich: {
                a: {
                    color: '#fff',
                    align: 'center',
                    fontSize: 12,
                    padding: [8, 0],
                    fontFamily: 'PingFang',
                },
            },
            textStyle: {
                color: 'rgba(215,234,245,1)',
                fontSize: 12,
            },
        },
        itemStyle: {
            normal: {
                color: colorArr[i], //点的颜色
                lineStyle: {
                    color: colorArr[i], //线的颜色
                    width: 1, // 折线图线条粗细设置
                },
            },
        },
    });
});
option = {
    backgroundColor: '#031f2d',
    legend: {
        right: '5',
        bottom: '20',
        itemWidth: 15,
        itemHeight: 8,
        itemGap: 15,
        textStyle: {
            color: '#E3E3E5',
            fontSize: 12,
            fontFamily: 'PingFang',
        },
        icon: 'rect',
        data: legendData,
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '100',
        top: '10%',
        containLabel: true,
    },
    yAxis: {
        type: 'category',
        boundaryGap: false,
        data: yAxisData,
        axisTick: {
            show: false, // 隐藏x轴的分割点
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#E3E3E5',
                fontFamily: 'PingFang',
            },
            formatter: function (params) {
                let valueTxt = '';
                if (params.length > 3) {
                    valueTxt = params.substring(0, 3) + '\n' + params.substring(3, params.length);
                } else {
                    valueTxt = params;
                }
                return valueTxt;
            },
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#CCCCCC',
                type: 'dashed',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#CCCCCC',
                type: 'dashed',
            },
        },
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false, // 隐藏x轴的分割点
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#CCCCCC',
            },
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#E3E3E5',
                fontFamily: 'PingFang',
            },
        },
        position: 'top',
        splitLine: {
            show: false,
            lineStyle: {
                color: '#CCCCCC',
            },
        },
    },
    series: seriesData,
};
