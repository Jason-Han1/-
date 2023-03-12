var data = [{
    value: 100,
    name: '分析视频事件'
}, {
    value: 100,
    name: '毫米波雷达'
}, {
    value: 80,
    name: '路况服务'
}, {
    value: 60,
    name: '天气服务'
}, {
    value: 100,
    name: '二维码报警'
}, {
    value: 100,
    name: '其他'
}]
var color = ['rgba(96, 244, 194, 1)', 'rgba(0, 171, 255, 1)', 'rgba(255, 245, 0, 1)', 'rgba(255, 136, 31, 1)', 'rgba(49, 255, 0, 1)', 'rgba(255,255,255,1)']
option = {
    backgroundColor: 'darkblue',
    series: [{
        type: 'pie',
        radius: ['39%', '46%'],
        center: ['50%', '50%'],
        data: data,
        color: color,
        label: {
            normal: {
                fontSize: 14,
                formatter: function(params) {
                    return '{a|' + params.name + '}\n{b|' + params.value + '}' //引导线上面文字
                    //引导线下面文字
                },
                distanceToLabelLine: 0,
                padding: [0, 0, 0, 0],
                rich: {
                    a: {
                        color: 'white',
                        padding: [15, -110, -12, -110],
                        fontSize: 18
                    },
                    b: {
                        padding: [-25, -110, 0, -110],
                        borderRadius: '50%',
                        fontSize: 28,
                    },
                }
            }

        },
        labelLine: {
            normal: {
                align: 'right',
                length: 30,
                length2: 120,
            }
        }
    }]
}