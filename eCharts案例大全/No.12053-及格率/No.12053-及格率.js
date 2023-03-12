option = {
    backgroundColor: '#F7F7F7',
    //全局颜色，顺序对应每个 series
    color: ['#68A54A', '#A9CBA2', '#E2E2E2'],
    title: {
        text: '及格率',
        top: '3%',
        left: '1%',
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 16,
        }
    },
    series: [{
        name: '中间环形',
        type: 'pie',
        //圆，半径，值1内圆，值2外圆
        radius: ['55%', '75%'],
        //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
        center: ['50%', '42%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        //数据标签
        label: {
            show: false,
            position: 'center',
            textStyle: {
                fontSize: 25,
                fontWeight: 'bold'
            },
            formatter: '{b}\n{c}%',
            // 针对 center 参数校正标签显示位置
            lineHeight: 3
        },
        data: [{
                value: 54.03,
                name: '',
                label: {
                    normal: {
                        show: true
                    }
                }
            },
            {
                value: 100 - 54.03,
                name: ''
            }
        ]
    }, {
        name: '最内圈',
        type: 'pie',
        //圆，半径，值1内圆，值2外圆
        radius: ['50%', '50.3%'],
        //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
        center: ['50%', '42%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        //数据标签
        label: {
            show: false
        },
        itemStyle: {
            color: '#E2E2E2'
        },
        data: [{
            value: 100
        }]
    }, {
        name: '最外圈',
        type: 'pie',
        //圆，半径，值1内圆，值2外圆
        radius: ['80%', '80.3%'],
        //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
        center: ['50%', '42%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        //数据标签
        label: {
            show: false
        },
        itemStyle: {
            color: '#E2E2E2'
        },
        data: [{
            value: 100
        }]
    }]
};