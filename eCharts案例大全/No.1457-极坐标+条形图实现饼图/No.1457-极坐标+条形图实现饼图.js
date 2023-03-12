option = {
    color: ['#EB4B4B', 'rgb(245,245,245)'],
    title: [
        {
            text: '75%',
            x: '50%',
            y: '45%',
            textAlign: 'center',
            textStyle: {
                fontSize: '40',
                fontWeight: '500',
                color: 'rgba(0,0,0,0.90)',
                textAlign: 'center',
            },
        },
        {
            text: '使用率',
            left: '50%',
            top: '52%',
            textAlign: 'center',
            textStyle: {
                fontSize: '16',
                fontWeight: '400',
                color: 'rgba(0,0,0,0.40)',
                textAlign: 'center',
            },
        },
    ],
    polar: {
        radius: ['75%', '60%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
        startAngle: 0,
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
    series: [
        {
            name: '1',
            type: 'bar',
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            data: [75],
            coordinateSystem: 'polar',
            itemStyle: {
                color: 'orange',
            },
        },

        // {
        //     name: '2',
        //     type: 'bar',
        //     roundCap: true,
        //     barWidth: 60,
        //     showBackground: true,
        //     data: [25],
        //     coordinateSystem: 'polar',
        //     itemStyle: {
        //         color: 'red',
        //     },
        // },
    ],
};
