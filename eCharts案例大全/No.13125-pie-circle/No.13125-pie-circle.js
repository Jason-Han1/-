var scaleData = [{
        'name': '大豆',
        'value': 10
    },
    {
        'name': '玉米',
        'value': 10
    },
    {
        'name': '小麦',
        'value': 10
    }
];

var placeHolderStyle = {
    normal: {
        color: 'rgba(0, 0, 0, 0)', // 隐藏内线条(更改属性值查看效果)
        borderColor: 'rgba(0, 0, 0, 0)', // 隐藏外线条(更改属性值查看效果)
        borderWidth: 0
    }
};
var data = [];
var color = ['#ff0000', '#00ff00', '#33aaff']
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i],
                color: color[i]
            }
        },
        label: {
            normal: {
                formatter: scaleData[i].name + scaleData[i].value,
                textStyle: {
                    fontSize: 16,
                }
            },

        }
    }, {
        value: 0.5, // 两曲线环间距
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [119, 120], // 内、外环构成的曲线大小和宽度(更改属性值查看效果)
    hoverAnimation: false,
    data: data
}];
option = {
    backgroundColor: '#04243E',
    title: {
        text: 'title中是背景相关属性',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: "#fff",
        }
    },
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