//参考：https://www.makeapie.com/editor.html?c=xqjNqqjc_U
var datas = [
    { ranking: 1, station: '车站1', value: 131744 },
    { ranking: 2, station: '车站2', value: 104970 },
    { ranking: 3, station: '车站3', value: 29034 },
    { ranking: 4, station: '车站4', value: 23489 },
    { ranking: 5, station: '车站5', value: 18203 }
];
var seriesName = '出站量';

function contains(arr, dst) {
    var i = arr.length;
    while ((i -= 1)) {
        if (arr[i] == dst) {
            return i;
        }
    }
    return false;
}
var attackSourcesColor = [
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: '#EB3B5A' },
        { offset: 1, color: '#FE9C5A' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: '#FA8231' },
        { offset: 1, color: '#FFD14C' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: '#F7B731' },
        { offset: 1, color: '#FFEE96' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: '#395CFE' },
        { offset: 1, color: '#2EC7CF' },
    ]),
];
var attackSourcesColor1 = [
    '#EB3B5A',
    '#FA8231',
    '#F7B731',
    '#3860FC',
    '#1089E7',
    '#F57474',
    '#56D0E3',
    '#1089E7',
    '#F57474',
    '#1089E7',
    '#F57474',
    '#F57474',
];
var rankings = [];
var stationData = [];
var values = [];

datas.forEach(function (it, index) {
    rankings.push(it.ranking);
    stationData.push(it.station);
    values.push(it.value);
});

function dataFormat(data) {
    var arr = [];
    data.forEach(function (item, i) {
        let itemStyle = {
            color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i],
        };
        arr.push({
            value: item,
            itemStyle: itemStyle,
        });
    });
    return arr;
}

option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: {
        textStyle: {
            //图例文字的样式
            fontSize: 10,
            color: '#fff',
        },
        data: [seriesName],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            data: stationData,
            axisLabel: {
                margin: 30,
                fontSize: 10,
                align: 'left',
                padding: [2, 0, 0, 0],
                color: '#000',
                rich: {
                    nt1: {
                        color: '#fff',
                        backgroundColor: attackSourcesColor1[0],
                        width: 13,
                        height: 13,
                        fontSize: 10,
                        align: 'center',
                        borderRadius: 100,
                        lineHeight: '5',
                        padding: [0, 1, 2, 1],
                        // padding:[0,0,2,0],
                    },
                    nt2: {
                        color: '#fff',
                        backgroundColor: attackSourcesColor1[1],
                        width: 13,
                        height: 13,
                        fontSize: 10,
                        align: 'center',
                        borderRadius: 100,
                        padding: [0, 1, 2, 1],
                    },
                    nt3: {
                        color: '#fff',
                        backgroundColor: attackSourcesColor1[2],
                        width: 13,
                        height: 13,
                        fontSize: 10,
                        align: 'center',
                        borderRadius: 100,
                        padding: [0, 1, 2, 1],
                    },
                    nt: {
                        color: '#fff',
                        backgroundColor: attackSourcesColor1[3],
                        width: 13,
                        height: 13,
                        fontSize: 10,
                        align: 'center',
                        lineHeight: 3,
                        borderRadius: 100,
                        padding: [0, 1, 2, 1],
                        lineHeight: 5,
                    },
                },
                formatter: function (value, index) {
                    index = contains(stationData, value) + 1;
                    if (index - 1 < 3) {
                        return ['{nt' + index + '|' + index + '}'].join('\n');
                    } else {
                        return ['{nt|' + index + '}'].join('\n');
                    }
                },
            },
        },
        {
            type: 'category',
            inverse: true,
            offset: -10,
            position: 'left',
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                interval: 0,
                color: ['#fff'],
                align: 'left',
                verticalAlign: 'bottom',
                lineHeight: 32,
                fontSize: 10,
            },
            data: dataFormat(stationData),
        },
    ],
    series: [
        {
            zlevel: 1,
            name: seriesName,
            type: 'bar',
            barWidth: 15,
            data: dataFormat(values),
            align: 'center',
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                },
            },
            label: {
                show: true,
                fontSize: 10,
                color: '#fff',
                textBorderWidth: 2,
                padding: [2, 0, 0, 0],
            },
        },
        {
            name: seriesName,
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: [200000, 200000, 200000, 200000, 200000, 200000],
            itemStyle: {
                normal: {
                    color: '#05325F',
                    //width:"100%",
                    fontSize: 10,
                    barBorderRadius: 30,
                },
            },
        },
    ],
};
