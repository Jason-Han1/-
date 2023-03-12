var scaleData = [{
        'name': '工程建设',
        'value': 10
    },
    {
        'name': '产权交易',
        'value': 100
    }
  
];
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
var color=['#00ffff','#ffa800','#ff5b00','#ff3000']
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 8,
                shadowBlur: 0,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 3, // 圆弧与圆弧之间的间距
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
    name: '',
     roseType: "radius",
    type: 'pie',
    clockWise: false,
    radius: [105, 100],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show : false
            }
        }
    },
    data: data
}];
option = {
    backgroundColor: '#04243E',
    tooltip: {
        show: true
    },
    color: color,  //设置颜色
    legend: {
        icon: "circle",
        top:'44%',
        right: '20%',
        itemGap: 30,
        // itemStyle: {
        //     color: 'inherit'
        // },
        textStyle: {
            color: '#fff'
        }
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}