data = [
    {
        name: '销售毛利',
        value: 13211,
    },
    {
        name: '销售回款',
        value: 42111,
    },
    {
        name: '销售金额',
        value: 81711,
    },
    {
        name: '销售费用',
        value: 121711,
    },
];
arrName = getArrayValue(data, 'name');
arrValue = getArrayValue(data, 'value');
sumValue = eval(arrValue.join('+'));
objData = array2obj(data, 'name');
optionData = getData(data);
function getArrayValue(array, key) {
    var key = key || 'value';
    var res = [];
    if (array) {
        array.forEach(function (t) {
            res.push(t[key]);
        });
    }
    return res;
}

function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}

function getData(data) {
    var res = {
        series: [],
        yAxis: [],
    };
    for (let i = 0; i < data.length; i++) {
        res.series.push({
            name: '职员1',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
            center: ['30%', '55%'],
            label: {
                show: false,
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                borderWidth: 5,
            },
            data: [
                {
                    value: data[i].value,
                    name: data[i].name,
                },
                {
                    value: sumValue - data[i].value,
                    name: '',
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                    },
                    tooltip: {
                        show: false,
                    },
                    hoverAnimation: false,
                },
            ],
        });
        res.series.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
            center: ['30%', '55%'],
            label: {
                show: false,
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                borderWidth: 5,
            },
            data: [
                {
                    value: 7.5,
                    itemStyle: {
                        color: '#E3F0FF',
                        borderWidth: 0,
                    },
                    tooltip: {
                        show: false,
                    },
                    hoverAnimation: false,
                },
                {
                    value: 2.5,
                    name: '',
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                    },
                    tooltip: {
                        show: false,
                    },
                    hoverAnimation: false,
                },
            ],
        });
        res.yAxis.push(((data[i].value / sumValue) * 100).toFixed(2) + '%');
    }
    return res;
}

option = {
    backgroundColor: '#fff',
    legend: {
        show: true,
        top: 'center',
        left: '70%',
        data: arrName,
        itemWidth: 30,
        itemHeight: 20,
        width: 50,
        padding: [0, 5],
        itemGap: 25,
        formatter: function (name) {
            return '{title|' + name + '}\n{value|' + objData[name].value + '元}';
        },
        textStyle: {
            rich: {
                title: {
                    fontSize: 10,
                    lineHeight: 10,
                    color: 'rgba(0,0,0,.45)',
                },
                value: {
                    fontSize: 14,
                    lineHeight: 18,
                    color: 'rgba(0,0,0,.85)',
                },
            },
        },
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: '{a}<br>{b}:{c}({d}%)',
    },
    color: ['#FF8700', '#ffc300', '#00e473', '#009DFF'],
    grid: {
        top: '20%',
        bottom: '48%',
        left: '30%',
        containLabel: false,
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
            axisLabel: {
                interval: 0,
                inside: true,
                textStyle: {
                    color: '#000',
                    fontSize: 10,
                },
                show: true,
            },
            data: optionData.yAxis,
        },
    ],
    xAxis: [
        {
            show: false,
        },
    ],
    series: optionData.series,
};
