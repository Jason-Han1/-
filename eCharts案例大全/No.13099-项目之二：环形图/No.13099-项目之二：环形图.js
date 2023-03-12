var data = [];

var percent = 67;
var _colors = ['#FFB02A', '#00D3DE'];
var colors = [];

var ratio = Math.floor(percent / 2);
for (var i = 0; i < 50; i++) {
    if (i < ratio) {
        colors.push(_colors[0])
    } else {
        colors.push(_colors[1])
    }
}

for (var i = 0; i < 50; i++) {
    data.push({
        value: 10,
        name: 'aa',
        itemStyle: {
            normal: {
                borderWidth: 10,
                borderColor: colors[i],
                shadowBlur: 5,
                shadowColor: '#000',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }
    }, {
        value: 50,
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