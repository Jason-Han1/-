option = {
    backgroundColor: 'black',
    series: [
        {
            type: 'liquidFill',
            radius: '80%',
            data: [0.6, 0.4],
            backgroundStyle: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0,24,55, 0)',
                        },
                        {
                            offset: 0.75,
                            color: 'rgba(0,24,55, 0)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(37,237,259, 1)',
                        },
                    ],
                    globalCoord: false,
                },
            },
            outline: {
                borderDistance: 0,
                itemStyle: {
                    borderWidth: 0,
                    borderColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(50,115,256, 1)',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(50,115,233, .75)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(50,115,233, 1)',
                            },
                        ],
                        globalCoord: false,
                    },
                },
            },
            // color: ['rgba(37,237,240, 1)', 'rgba(37,200,220, 1)'],
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {
                        offset: 0,
                        color: 'rgba(37,237,259, 1)',
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(0,100,259, 0.5)',
                    },
                    {
                        offset: 1,
                        color: 'darkblue',
                    },
                ],
                globalCoord: false,
            },
            label: {
                normal: {
                    formatter: '',
                },
            },
        },
    ],
};
