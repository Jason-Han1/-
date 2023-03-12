var baifen = 225;
var radius = [
     ['60%', '65%'],
    ['50%', '55%'],
    ['40%', '45%']
]


var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        borderWidth: 10,
        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
    }
};
var placeHolderStyle = {
    normal: {
        color: '#393d50',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#393d50'
    }
};

var series = []
for (var i = 0; i < baifen / 100; i++) {
    var value = baifen / 100 - i
    series.push({
        // name: 'Line 2',
        type: 'pie',
        clockWise: false,
        radius: radius[i],
        center: ['50%', '50%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        startAngle: 90,
        data: [{
                value: value,
                //name: '',
            },
            {
                value: value > 1 ? 0 : 1 - value,
                //name: '',
                tooltip: {
                    show: false
                },
                itemStyle: placeHolderStyle
            },
        ]
    })
}
option = {
    color: ['#94d96c'],
    backgroundColor: '#142058',
    title: {
        text: baifen + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: "#94d96c",
        }
    },
    // tooltip: {
    //     trigger: 'item',
    //     show: true,
    //     formatter: "{b} : <br/>{d}%",
    //     backgroundColor: 'rgba(0,0,0,0.7)', // 背景
    //     padding: [8, 10], //内边距
    //     extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    // },
    series: series
};