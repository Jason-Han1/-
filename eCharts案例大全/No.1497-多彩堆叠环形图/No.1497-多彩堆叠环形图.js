var data = [
    { name: '计算机科学与技术', value: 5394 },
    { name: '物联网工程', value: 4584 },
    { name: '土木工程', value: 3231 },
];
function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}
// 计算数据
var nameValues = data.map((item) => item.name);
var valValues = data.map((item) => item.value);
var sumValue = valValues.reduce(function (total, currentVal) {
    return total + currentVal;
});
var objData = array2obj(data, 'name');
console.log(sumValue)

// 声明所需变量
var series = [];
var calcRateObjs = [];

for (let i = 0; i < data.length; i++) {
    series.push({
        name: '',
        type: 'pie',
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
        center: ['50%', '50%'],
        label: {
            show: false,
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
    calcRateObjs.push({ name: data[i].name, value: ((data[i].value / sumValue) * 100).toFixed(2) + '%' });
}
option = {
    backgroundColor: 'rgb(43, 51, 59)',
    title: { 
        show: true,
        text: "专业人数统计",
    },
    legend: {
        show: true,
        icon: 'circle',
        top: '13.5%',
        bottom: '53%',
        left: '28.5%',
        data: nameValues,
        width: 40,
        padding: [0, 220],
        itemGap: 46,
        formatter: function (name) {
            var calcRate = calcRateObjs.find(function (item) {
                if (name === item.name) {
                    return item;
                }
            });
            return '{title|' + name + '}: {value|' + objData[name].value + '} {value|(' + calcRate.value + ')}';
        },
        textStyle: {
            rich: {
                title: {
                    fontSize: 14,
                    lineHeight: 40,
                    color: 'rgb(0, 178, 246)',
                },
                value: {
                    fontSize: 18,
                    lineHeight: 20,
                    color: 'rgb(207, 220, 40)',
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
    series: series,
};
