var data = [{
    'name': '设备一',
    'value': 8
}, {
    'name': '设备二',
    'value': 7
}, {
    'name': '设备三',
    'value': 6
}, {
    'name': '设备四',
    'value': 5
}, {
    'name': '设备五',
    'value': 4
}]
var seriesObjs = [];
var r = 80;
var color = ['#4126C5', '#5D6DF7', '#6993EF', '#509DF1', '#3BAFEE'];
var placeHolderStyle = {
    normal: {
        label: {
            show: false,
            position: 'center'
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
for (var i = 0; i < data.length; i++) {
    var seriesObj = {
        name: data[i].name,
        type: 'pie',
        clockWise: false,
        radius: [r - 1 - i * 10, r - i * 10],
        center : ['30%','50%'],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                borderColor: color[i],
            }
        },
        hoverAnimation: false,
        data: [{
            value: data[i].value
        }, {
            value: data[0].value * 4 / 3 - data[i].value,
            itemStyle: placeHolderStyle
        }]
    };
    seriesObjs.push(seriesObj)
}
option = {
    tooltip: {
        show: true,
        formatter: '{a} : {c}'
    },
    color: ['#4126C5', '#5D6DF7', '#6993EF', '#509DF1', '#3BAFEE'],
    legend: {
        show: true,
        icon : 'rect',
        itemWidth : 10,
        itemHeight : 8,
        orient: 'vertical',
        top: 30,
        right : 20,
        data: ['设备一', '设备二', '设备三', '设备四', '设备五'],
        formatter: function(name) {
            var total = 0;
            var target;
            for (var i = 0, l = data.length; i < l; i++) {
                total += data[i].value;
                if (data[i].name == name) {
                    target = data[i].value;
                }
            }
            var arr = '{a|' + name + '}  - - - - -  {b|' + target + '}{c|/10}';
            return arr
        },
        textStyle: {
            rich: {
                a: {
                    fontSize: 12,
                    align: 'center'
                },
                b: {
                    fontSize: 16,
                    fontWeight : 'bold',
                    color : '#7392DD',
                    align: 'center',
                    lineHeight: 10
                },
                c: {
                    fontSize: 14,
                    align: 'center'
                }
            }
        }
    },
    series: seriesObjs
};