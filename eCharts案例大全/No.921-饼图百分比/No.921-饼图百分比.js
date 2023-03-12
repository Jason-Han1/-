var data = {
    'name': '手机支付',
    'value': [15],
    'nAmount': 566557.14
};

var color = ['#73c0de', '#fac858', '#ee6666','#91cc75']

option = {
    //backgroundColor: '#03060F',
    title: [{
        text: data.value[0] + '\n' + '政务诚信',
        textStyle: {
            color: color[0],
            fontSize: 20
        },
        textAlign: 'center',
        itemGap: 20,
        left: '25%',
        top: '20%'
    },{
        text: data.value[0] + '\n' + '商务诚信',
        textStyle: {
            color: color[1],
            fontSize: 20
        },
        itemGap: 20,
        textAlign: 'center',
        left: '75%',
        top: '20%'
    },{
        text: data.value[0] + '\n' + '社会诚信',
        textStyle: {
            color: color[2],
            fontSize: 20
        },
        itemGap: 20,
        textAlign: 'center',
        left: '25%',
        top: '70%'
    },{
        text: data.value[0] + '\n' + '司法公信',
        textStyle: {
            color: color[3],
            fontSize: 20
        },
        itemGap: 20,
        textAlign: 'center',
        left: '75%',
        top: '70%'
    }],
    tooltip: {
       show:false
    },
    // 极坐标系的角度轴
    angleAxis: [{
        id:1,
        max: 100,
        clockwise: false, // 逆时针
        // 隐藏刻度线
        show: false,
        startAngle: 120,
        polarId:1
    },{
        id:2,
        max: 100,
        clockwise: false, // 逆时针
        // 隐藏刻度线
        show: false,
        startAngle: 120,
        polarId:2
    },{
        id:3,
        max: 100,
        clockwise: false, // 逆时针
        // 隐藏刻度线
        show: false,
        startAngle: 120,
        polarId:3
    },{
        id:4,
        max: 100,
        clockwise: false, // 逆时针
        // 隐藏刻度线
        show: false,
        startAngle: 120,
        polarId:4
    }],
    // 极坐标系的径向轴。
    radiusAxis: [{
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
        polarId:1
    },{
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
        polarId:2
    },{
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
        polarId:3
    },{
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
        polarId:4
    }],
    // 极坐标系
    polar: [{
        id:1,
        center: ['25%', '25%'], //中心点位置
        radius: '80%', //图形大小

    },{
        id:2,
        center: ['75%', '25%'], //中心点位置
        radius: '80%', //图形大小

    },{
        id:3,
        center: ['25%', '75%'], //中心点位置
        radius: '80%', //图形大小

    },{
        id:4,
        center: ['75%', '75%'], //中心点位置
        radius: '80%', //图形大小

    }],
    series: [ {
            type: 'bar',
            z: 10,
            data: [473/5],
            polarIndex:0,
            showBackground: false,
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 15,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: color[0],
                    shadowBlur: 5,
                    shadowColor: color[0],
                }
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['41%', '38%'],
            center: ['25%', '25%'],
            startAngle: 120,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                normal: {
                    color:color[0],
                }
            },
            tooltip: {
                show: false
            },
            label: {
                show: false
            },
            data: [100]
        },{
            type: 'bar',
            z: 10,
            data: data.value,
            polarIndex:1,
            showBackground: false,
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 35,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color:color[1],
                    shadowBlur: 5,
                    shadowColor: color[1],
                }
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['41%', '38%'],
            center: ['75%', '25%'],
            startAngle: 120,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                normal: {
                    color: color[1],
                }
            },
            tooltip: {
                show: false

            },
            label: {
                show: false
            },
            data: [100]
        },{
            type: 'bar',
            z: 10,
            data: data.value,
            polarIndex:2,
            showBackground: false,
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 35,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: color[2],
                    shadowBlur: 5,
                    shadowColor: color[2],
                }
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['41%', '38%'],
            center: ['25%', '75%'],
            startAngle: 120,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                normal: {
                    color: color[2],
                }
            },
            tooltip: {
                show: false

            },
            label: {
                show: false
            },
            data: [100]
        },{
            type: 'bar',
            z: 10,
            data: data.value,
            polarIndex:3,
            showBackground: false,
            backgroundStyle: {
                color: color[1],
                borderWidth: 10,
                width: 10
            },
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 35,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: color[3],
                    shadowBlur: 5,
                    shadowColor: color[3],
                }
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['41%', '38%'],
            center: ['75%', '75%'],
            startAngle: 120,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                normal: {
                    color: color[3],
                }
            },
            tooltip: {
                show: false

            },
            label: {
                show: false
            },
            data: [100]
        }
    ]
};