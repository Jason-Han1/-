option = {
    backgroundColor: '#fff',
    title: [{
        text: '95%',
        textStyle: {
            color: '#22ac38',
            fontSize: 35
        },
        itemGap: 20,
        left: '20%',
        top: '40%'
    },{
        text: '总体完成度',
        textStyle: {
            color: '#444444',
            fontSize: 35,
            fontWeight:'normal'
        },
        itemGap: 20,
        left: '15%',
        top: '50%'
    }],
    grid: [{
        top: '10%',
        width: '50%',
        left: '45%',
        containLabel: true
    }],
    angleAxis: {
        polarIndex: 0,
        min: 0,
        max: 100,
        show: false,
        boundaryGap: ['40%', '40%'],
        startAngle: 90,
    },
    radiusAxis: {
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
    },
    polar: [{
        center: ['25%', '50%'], //中心点位置
        radius: '80%' //图形大小
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName + ' : ' + params[0].value + '%<br/>'
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: false,
            textStyle: {
                color: '#444444'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ['一级道路作业完成率', '二级道路作业完成率', '三级道路作业完成率', '四级道路作业完成率']
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#444444',
                fontSize: '12'
            },
            formatter: function(value) {
                return value + "%";
            },
        },
        data: [50.5, 50, 50, 50]
    }],
    series: [{
            name: '完成率',
            type: 'bar',
            zlevel: 1,
            silent:false,
            label: {
                normal: {
                    color: '#444444',
                    show: true,
                    position: [0, '-24px'],
                    textStyle: {
                        fontSize: 16
                    },
                    formatter: function(a, b) {
                        return a.name
                    }
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: '#14d88e',
                },
            },
            barWidth: 20,
            data: [50.5, 50, 50, 50],
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: '#f3f3f7',
                    barBorderRadius: 30,
                }
            },
        },
        {
            type: 'bar',
            z: 10,
            name: "完成度",
            data: [50],
            showBackground: false,
            backgroundStyle: {
                borderWidth: 10,
                width: 10
            },
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 35, //大的占比环
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: "#14d88e"
                }
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['46%', '34%'],
            center: ['25%', '50%'], //中心点位置
            startAngle: 90,
            hoverAnimation: false,
            clockWise: true,
             silent: true,
            itemStyle: {
                normal: {
                    color: '#f3f3f7',
                    shadowBlur: 0,
                    shadowColor: '#66666a',
                }
            },
            tooltip: {
                show: false,
            },
            label: {
                show: false
            },
            data: [100]
        }
    ]
};