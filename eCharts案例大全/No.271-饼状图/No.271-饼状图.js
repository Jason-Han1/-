function setColor(start, end) {
    return {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: start // 0% 处的颜色
            },
            {
                offset: 1,
                color: end // 100% 处的颜色
            }
        ]
    }
}

const centerX = '50%'
let startAngle = 110

option = {
    backgroundColor: '#0E1327',
    fontSize: 16,
    tooltip: {
        trigger: 'item',
        textStyle: {
            color: '#fff'
        },
        backgroundColor: 'rgba(16, 32, 40, 0.88)',
        borderRadius: 4,
        borderColor: '#20749e',
        formatter: params => {
            return params.marker + params.name + ': ' + params.value
        }
    },
    legend: {
        right: '0%',
        width: '50%',
        itemGap: 10,
        itemWidth: 14,
        itemHeight: 14,
        top: 'center',
        textStyle: {
            color: '#fff',
            rich: {
                a: {
                    fontSize: 12,
                    padding: [1, 0, 0, 0],
                    width: 85
                },
                b: {
                    fontSize: 10,
                    width: 55
                }
            }
        }
    },
    series: [
        {
            type: 'pie',
            hoverAnimation: false,
            color: [
                setColor('#9fe8ff', '#66ccff'),
                setColor('#fff7c0', '#ffec8c'),
                setColor('#62ffdf', '#33ffbb'),
                setColor('#ffd59f', '#ffab66'),
                '#7cff33'
            ],
            center: [centerX, '50%'],
            radius: ['43%', '70%'],
            avoidLabelOverlap: false,
            label: null,
            emphasis: null,
            labelLine: null,
            itemStyle: {
                borderWidth: 5, // 间距的宽度
                borderColor: 'rgba(0, 0, 0, 0.6)' //背景色
            },
            data: [ {name: '星期一', value: 200}, {name: '星期二', value: 134} ]
        },
        {
            type: 'pie',
            silent: true,
            z: 1,
            startAngle: startAngle,
            label: null,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: ['74%', '78%'],
            center: [centerX, '50%'],
            data: [
                {
                    value: 20,
                    itemStyle: {
                        color: '#33ffbb'
                    }
                },
                {
                    value: 90, //决定弧线长度
                    name: '',
                    itemStyle: {
                        color: 'rgba(0,0,0, 0)'
                    }
                }
            ]
        }
    ]
};
