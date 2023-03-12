var trafficWay = [{
    name: 'G2',
    value: 543002
}, {
    name: 'G3',
    value: 210000
}];

var data = [];
var borderColor = ['#00ffff', '#ffe000']
var color = ['#184B4E', '#633909']
var shadowColor = ['#02DFEB', '#FFC600']
for (var i = 0; i < trafficWay.length; i++) {
    data.push({
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
            normal: {
                borderWidth: 1,
                shadowBlur: 9,
                borderColor: borderColor[i],
                color: color[i],
                shadowColor: shadowColor[i]
            }
        }
    });
}
var seriesPosltion = [{
        center: ['50%', '17%']
    },
    {
        center: ['50%', '50%']
    },
    {
        center: ['50%', '83%']
    },
];
var seriesOption=[]
for (let temp of seriesPosltion) {
    seriesOption.push({
        name: '',
        type: 'pie',
        //clockWise: false,
        radius: ['15%', '25%'],
        center: temp.center,
        //startAngle: 0,
        top: 10,
        bottom: 10,
        hoverAnimation: true,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#fff',
                    fontSize: 16,
                    align: 'left',
                    lineHeight: 20,
                    // fontWeight: 'bold',
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < trafficWay.length; i++) {
                            total += trafficWay[i].value;
                        }
                        return params.name + '终端数' + '\n' + params.value;
                    },
                },
                labelLine: {
                    length: 20,
                    length2: 30,
                    show: true,
                    color: '#00ffff'
                }
            }
        },
        data: data
    })
}

var titleOption = [];
var titlePosition = [{
    title: `在线终端数`,
    unit: '14%',
    num: '17%'
}, {

    title: `活动终端数`,
    unit: '47%',
    num: '50%'
}, {
    title: `售票活动\n终端数`,
    unit: '77%',
    num: '83%'
}];
for (let item of titlePosition) {
    titleOption.push({
        text: item.title,
        top: item.unit,
        textAlign: "center",
        left: "49.5%",
        textStyle: {
            color: '#74FBFD',
            fontSize: 16,
            lineHeight: 18,
            fontWeight: '500'
        }
    }, {
        text: '543212',
        top: item.num,
        textAlign: "center",
        left: "49.5%",
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: '500'
        }
    })
};
option = {
    backgroundColor: '#0D2B42',
    color: color,
    title: titleOption,
    tooltip: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}