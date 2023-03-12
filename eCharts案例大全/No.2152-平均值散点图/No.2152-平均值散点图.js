let NumberList = [];
let series;
function Decimal(x, y) {
    return Math.round(x * Math.pow(10, y)) / Math.pow(10, y);
}
let valueList = {
    //平均值
    COUNT_B: [{ NUM1: 10 / 3, NUM2: 4 / 3 }],
    //散点位置
    COUNT_C: [
        { NUM: ['1', '0'], WSNAME: 'aaa' },
        { NUM: ['1', '0'], WSNAME: 'bbb' },
        { NUM: ['8', '4'], WSNAME: 'ccc' },
    ],
};
valueList.COUNT_C.push({ NUM: [valueList.COUNT_B[0].NUM1, valueList.COUNT_B[0].NUM2], WSNAME: '平均值' });
valueList.COUNT_C.map((i) => {
    NumberList.push(i.NUM);
});
series = [
    {
        name: '',
        type: 'scatter',
        data: NumberList,
    },
];
valueList.COUNT_C.map((i) => {
    series.push({
        name: i.WSNAME,
        type: 'scatter',
        emphasis: {
            focus: 'series',
        },
        data: [i.NUM],
        symbolSize: 15,
    });
});

valueList.COUNT_B.map((i) => {
    series[0].markLine = {
        silent: true,
        data: [{ type: 'average', name: '平均值' }, { xAxis: i.NUM1 }],
    };
});

option = {
    graphic: [
        {
            type: 'group',
            bounding: 'raw',
            right: 'center',
            bottom: 0,
            z: 100,
            children: [
                {
                    type: 'rect',
                    left: 'center',
                    top: 'center',
                    z: 100,
                    shape: {
                        width: 400,
                        height: 20,
                    },
                    style: {
                        fill: 'rgba(0,0,0,0)',
                    },
                },
                {
                    type: 'text',
                    left: 'center',
                    bottom: 0,
                    z: 100,
                    style: {
                        fill: 'black',
                        text: '横轴主题',
                        font: '18px Microsoft YaHei',
                    },
                },
            ],
        },
        {
            type: 'group',
            left: 0,
            top: 'center',
            children: [
                {
                    type: 'rect',
                    z: 100,
                    left: 0,
                    top: 'middle',
                    shape: {
                        width: 20,
                        height: 90,
                    },
                    style: {
                        fill: 'rgba(0,0,0,0)',
                    },
                },
                {
                    type: 'text',
                    z: 100,
                    left: 0,
                    rotation: -11,
                    top: 'middle',
                    style: {
                        fill: 'black',
                        text: '纵轴主题',
                        font: '18px Microsoft YaHei',
                    },
                },
            ],
        },
    ],

    grid: {
        left: '9%',
        right: '18%',
        bottom: '12%',
        containLabel: true,
    },
    tooltip: {
        // trigger: 'axis',
        showDelay: 0,
        formatter: function (params) {
            if (params.value.length > 1) {
                return (
                    params.seriesName +
                    ' :<br/>' +
                  Decimal(params.value[0],2)  +
                    '次' +
                    '<br/>' +
                   Decimal(params.value[1],2) +
                    '分钟'
                );
            }
        },
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1,
            },
        },
    },
    legend: {
        show: false,
    },
    xAxis: [
        {
            name: '单位：次',
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value}',
            },
            splitLine: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            name: '单位：分钟',
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value}',
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: series,
};
