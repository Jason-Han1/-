option = {
    backgroundColor: '#fff',
    title: [
        {
            text: '百分比',
            textStyle: {
                color: '#444444',
                fontSize: 60,
                fontWeight: 'bold',
            },
            itemGap: 20,
            left: '42%',
            top: '46%',
        },
    ],
    grid: [
        {
            containLabel: true,
        },
    ],
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
            show: false,
        },
    },
    polar: [
        {
            center: ['50%', '50%'], //中心点位置
            radius: '80%', //图形大小
        },
    ],
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#444444',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            type: 'bar',
            z: 10,
            name: '完成度',
            data: [68],
            showBackground: false,
            backgroundStyle: {
                borderWidth: 10,
                width: 10,
            },
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: '14%', //大的占比环
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: '#14d88e',
                },
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['46%', '34%'],
            center: ['50%', '50%'], //中心点位置
            startAngle: 90,
            hoverAnimation: false,
            clockWise: true,
            silent: true,
            itemStyle: {
                normal: {
                    color: '#f3f3f7',
                    shadowBlur: 0,
                    shadowColor: '#66666a',
                },
            },
            tooltip: {
                show: false,
            },
            label: {
                show: false,
            },
            data: [100],
        },
    ],
};
