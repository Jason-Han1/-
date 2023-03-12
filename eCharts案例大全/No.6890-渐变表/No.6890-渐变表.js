let data = {
    value: 52.32,
    name: '完成率'
}
option = {
    backgroundColor: '#04243E',
    title: {
        text: '{num|' + data.value + '}{key| %}',
        subtext: data.name,
        x: '49%',
        y: '46%',
        textAlign: 'center',
        textStyle: {
            rich: {
                num: {
                    fontWeight: 'bold',
                    color: '#fff',
                    fontFamily: '微软雅黑',
                    fontSize: 25,
                },
                key: {
                    fontWeight: 'bold',
                    color: '#fff',
                    fontFamily: '微软雅黑',
                    fontSize: 15,
                }
            }

        },
        subtextStyle: {
            lineHeight: 30,
            fontSize: 15
        }
    },
    data: [{
        name: data.name,
    }],
    series: [{ // 主圆环
        name: data.name,
        type: 'pie',
        radius: ['50%', '70%'],
        startAngle: 225,
        color: [{
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 0,
                color: 'rgba(51,227,189,1)' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'rgba(51,227,189,.1)' // 100% 处的颜色
            }]
        }, 'transparent'],
        hoverAnimation: true,
        legendHoverLink: false,
        z: 10,
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 75 * data.value / 100
        }, {
            value: 100 - (75 * data.value / 100)
        }]
    }, { // 背景圆环
        name: '',
        type: 'pie',
        radius: ['50%', '70%'],
        silent: true,
        startAngle: 225,
        labelLine: {
            normal: {
                show: false
            }
        },
        z: 5,
        data: [{
            value: 75,
            itemStyle: {
                color: '#1A3B4C'
            }
        }, {
            value: 25,
            itemStyle: {
                color: 'transparent'
            }
        }]
    }, { // 中间圈
        name: '',
        z: 5,
        type: 'pie',
        cursor: 'default',
        radius: ['45%', '45%'],
        startAngle: 225,
        hoverAnimation: false,
        legendHoverLink: false,
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 75,
            itemStyle: {
                borderColor: 'rgba(51,123,321,1)',
                borderType: 'dashed'
            }
        }, {
            value: 25,
            itemStyle: {
                color: 'transparent'
            }
        }]
    }]
};