data = [
    {
        name: '通讯接口测试',
        value: 100,
    },
    {
        name: '第三方接口',
        value: 75,
    },
    {
        name: '计算分摊结果',
        value: 50,
    },
    {
        name: '机票价格',
        value: 25,
    },
];
arrName = getArrayValue(data, 'name');
arrValue = getArrayValue(data, 'value');
sumValue = 133.33;
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

function inr(i) {
    return 35 - i * 10 + '%';
}
function outr(i) {
    return 40 - i * 10 + '%';
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
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [inr(i), outr(i)],
            center: ['50%', '55%'],
            label: {
                show: false,
            },
            itemStyle: {
                borderRadius: 100,
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
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [inr(i), outr(i)],
            center: ['50%', '55%'],
            label: {
                show: false,
            },
            itemStyle: {
                borderRadius: 100,
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
                        color: '#F0F0F0',
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
    }
    return res;
}

option = {
    backgroundColor: '#fff',
    title: {
        text: '历史调用规则成功次数Top5',
        top: '30%',
        left: '25%',
    },
    legend: {
        show: true,
        icon: 'none',
        top: 'center',
        top: '35.5%',

        left: '29%',
        data: arrName,
        width: 300,
        padding: [0, 16],
        itemGap: 29,
        formatter: function (name) {
            return '{title|' + name + '} {value|' + objData[name].value + '次}';
        },

        textStyle: {
            rich: {
                title: {
                    fontSize: 14,
                    lineHeight: 20,
                    color: 'rgb(0, 0, 0)',
                    width: 130,
                    fontWeight: 'bold',
                },
                value: {
                    fontSize: 14,
                    lineHeight: 20,
                    width: 40,
                    color: '#495057',
                    align: 'right',
                },
            },
        },
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: '{b}:{c}',
    },
    color: ['#4A9DEB', '#4A9DEB', '#4A9DEB', '#4A9DEB', '#4A9DEB'],
    xAxis: [
        {
            show: false,
        },
    ],
    series: optionData.series,
};
