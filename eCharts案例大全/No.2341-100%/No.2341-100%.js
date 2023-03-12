

option = {
    backgroundColor: '#000',
    title: {
        text: 100 + '%',
        textStyle: {
            fontSize: 20,
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'normal',
            color: '#fff',
        },
        x: 'center',
        y: '48%',
    },
    series: [
        {
            z: 1,
            type: 'pie',
            radius: '88%',
            center: ['50%', '50%'],
            avoidLabelOverlap: true,
            hoverAnimation: false,
            label: {
                show: false,
                position: 'center',
            },
            labelLine: {
                show: false,
            },
            color:'rgba(32, 242, 255, 0.1)',
            data: [100],
        },
        {
            type: 'liquidFill',
            z: 2,
            radius: '80%',
            center: ['50%', '50%'],
            //  shape: 'roundRect',
            data: [0.5, 0.5],
            backgroundStyle: {
                color: {
                    type: 'radial', // 径向渐变
                    x: 0.5, // 圆心坐标（中心）
                    y: 0.5,
                    r: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: 'rgba(255, 255, 255,1)',
                        },
                        {
                            offset: 0,
                            color: 'rgba(255, 255, 255,0.1)',
                        },
                    ],
                    globalCoord: false,
                },
            },
            outline: {
                borderDistance: 20,
                itemStyle: {
                    borderWidth: 20,
                    borderColor: 'rgba(32, 242, 255, 0.3)',
                },
            },
            color: [
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: 'rgba(6, 187, 112, 0.3)', //下
                        },
                        {
                            offset: 0,
                            color: 'rgba(11, 201, 199, 0.3)',
                        },
                    ],
                    globalCoord: false,
                },
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: 'rgba(6, 187, 112, 1)', //下
                        },
                        {
                            offset: 0,
                            color: 'rgba(11, 201, 199, 1)',
                        },
                    ],
                    globalCoord: false,
                },
            ],
            label: {
                normal: {
                    formatter: '',
                },
            },
        },
    ],
};
