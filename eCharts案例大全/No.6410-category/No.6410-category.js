var scaleData = [{
        'name': '办公类',
        'value': 10
    },
    {
        'name': '照明类',
        'value': 10
    },
    {
        'name': '空调类',
        'value': 10
    },
    {
        'name': '其他',
        'value': 10
    },


    {
        'name': '电梯类',
        'value': 10
    },


].reverse();
var rich = {
    white: {
        color: '#ddd',
        align: 'center',
        padding: [3, 0]
    }
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];
var color = ['rgba(22, 172, 142, 1)', 'rgba(0, 251, 183, 1)', 'rgba(248, 136, 42, 1)', 'rgba(20, 218, 255, 1)', 'rgba(6, 232, 219, 1)'].reverse();
var colorBorder = ['rgba(22, 172, 142, 0.4)', 'rgba(0, 251, 183, 0.4)', 'rgba(248, 136, 42, 0.4)', 'rgba(20, 218, 255, 0.4)', 'rgba(6, 232, 219, 0.4)'].reverse();
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        data: scaleData[i].value,
        value: 20,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                color: color[i],
                borderWidth: 20,
                borderColor: colorBorder[i]
            }
        }
    }, {
        value: 8,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
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
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < scaleData.length; i++) {
                        total += scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if (params.name !== '') {
                        return params.name;
                    } else {
                        return '';
                    }
                },
                rich: rich
            },
            labelLine: {
                length: 30,
                length2: 60,
                show: true,

            }
        }
    },
    data: data
}];
option = {
    backgroundColor: '#04243E',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}