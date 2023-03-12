var data = [];

var percent = 67;
var _colors = ['#4182F7', '#41EFF2'];
var colors = [];

var ratio = Math.floor(percent / 2);
for (var i = 0; i < 100; i++) {
    if (i < ratio) {
        colors.push(_colors[0])
    } else {
        colors.push(_colors[1])
    }
}

for (var i = 0; i < 100; i++) {
    data.push({
        value: 0,
        name: 'aa',
        itemStyle: {
            normal: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: '#4182F7' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#41EFF2' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderWidth: 5,
                borderColor: colors[i],
                shadowBlur: 5,
                shadowColor: '#000',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }
    }, {
        value: 20,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'transparent',
                borderColor: 'transparent',
                borderWidth: 0
            }
        }
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    radius: [190, 200],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: false
            },
        }
    },
    data: data
}];
option = {
    backgroundColor: '#04243E',
    series: seriesObj
}