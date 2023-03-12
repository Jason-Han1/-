var scaleData = [
    {
        name: '工程建设',
        value: 10,
    },
    {
        name: '产权交易',
        value: 10,
    },
    {
        name: '土地交易',
        value: 30,
    },
    {
        name: '其他交易',
        value: 10,
    },
    {
        name: '土地交易',
        value: 10,
    },
    {
        name: '其他交易',
        value: 10,
    },
];
// 随机颜色
var rich = {
    white: {
        color: '#ddd',
        align: 'center',
        padding: [3, 0],
    },
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0,
    },
};
function bg2() {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

function rancolors(len) {
    var color = [];
    for (var i = 0; i <= len; i++) {
        var sjys = bg2();
        color.push(sjys);
        for (var i = 0; i < color.length; i++) {
            if ((color[i] = sjys)) {
                color[i] = bg2();
            }
        }
    }
    return color;
}
var data = [];
var color = rancolors(7);
for (var i = 0; i < scaleData.length; i++) {
    data.push(
        {
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 50,
                    shadowBlur: 100,
                    borderColor: color[i],
                    shadowColor: color[i],
                },
            },
        },
        {
            value: 50,
            name: '',
            itemStyle: placeHolderStyle,
        }
    );
}
var seriesObj = [
    {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [100, 200],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#ddd',
                    formatter: function (params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < scaleData.length; i++) {
                            total += scaleData[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return params.name + '\n{white|' + '占比' + percent + '%}';
                        } else {
                            return '';
                        }
                    },
                    rich: rich,
                },
                labelLine: {
                    length: 30,
                    length2: 100,
                    show: true,
                    color: '#00ffff',
                },
            },
        },
        data: data,
    },
];
option = {
    backgroundColor: '#04243E',

    tooltip: {
        show: false,
    },
    legend: {
        show: false,
    },
    toolbox: {
        show: false,
    },
    series: seriesObj,
};
