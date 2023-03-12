var img = "/asset/get/s/data-1619312902117-G2jtCPn7m.png";

var trafficWay = [{
    name: '奎宁',
    value: 20
}, {
    name: '小宁',
    value: 10
},
 {
    name: '小奎',
    value: 10
},
{
    name: '小陈',
    value: 30
}];

var data = [];
var color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
for (var i = 0; i < trafficWay.length; i++) {
    data.push({
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: {
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
        }
    });
}
var seriesOption = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [105, 109],
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
                    for (var i = 0; i < trafficWay.length; i++) {
                        total += trafficWay[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if (params.name !== '') {
                        return   params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                    } else {
                        return '';
                    }
                },
            },
            labelLine: {
                length: 30,
                length2: 100,
                show: true,
                color: '#00ffff'
            }
        }
    },
    data: data
}];
option = {
    backgroundColor: '#0A2E5D',
    color: color,
    title: {
        text: '前端技术栈统计',
        top: '48%',
        textAlign: "center",
        left: "49%",
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: '400'
        }
    },
    graphic: {
        elements: [{
            type: "image",
            z: 3,
            style: {
                image: img,
                width: 178,
                height: 178
            },
            left: 'center',
            top: 'center',
            position: [100, 100]
        }]
    },
    tooltip: {
        show: false
    },
    legend: {
        icon: "circle",
        orient: 'horizontal',
        // x: 'left',
        // data: ['js', 'ts', 'Vue'],
        right: 250,
        bottom: 100,
        align: 'right',
        textStyle: {
            color: "#fff"
        },
        itemGap: 20
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}