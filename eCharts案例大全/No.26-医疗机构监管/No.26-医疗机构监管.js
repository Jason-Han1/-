data = [
    {
        name: '新增项目',
        value: 100,
    },
    {
        name: '竣工项目',
        value: 75,
    },
    {
        name: '结项项目',
        value: 50,
    },
    {
        name: '终止项目',
        value: 25,
    },
    {
        name: '终止1项目',
        value: 30,
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
            name: '',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
            center: ['50%', '50%'],
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
            radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
            center: ['50%', '50%'],
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
                        color: 'rgb(3, 31, 62)',
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
    backgroundColor: '#013A54',
    title: {
        text: '医疗机构监管',
    },
    legend: {
        show: true,
        icon: 'circle',
        // top: "center",
        top: '13%',
        bottom: '53%',
        left: '50%',
        data: arrName,
        width: 50,
        padding: [0, 18],
        itemGap: 36,
        formatter: function (name) {
            return '{title|' + name + '} {value|' + objData[name].value + '}  {title|%}';
        },
        textStyle: {
            rich: {
                title: {
                    fontSize: 20,
                    lineHeight: 30,
                    color: 'rgb(0, 178, 246)',
                },
                value: {
                    fontSize: 18,
                    lineHeight: 20,
                    color: '#fff',
                },
            },
        },
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: '{a}<br>{b}:{c}({d}%)',
    },
    color: ['rgb(9,187,247)', 'rgb(184,254,165)', 'rgb(253,218,23)', 'rgb(252,152,12)'],
    xAxis: [
        {
            show: false,
        },
    ],
    series: optionData.series,
};
