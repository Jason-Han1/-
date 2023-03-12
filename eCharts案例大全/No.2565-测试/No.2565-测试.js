//政治面貌图表
option = {
    backgroundColor: '#000',
    color: [
        {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: 'rgb(74,199,245)', // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: 'rgba(74,199,245)', // 100% 处的颜色
                },
            ],
        },
        {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: 'rgb(255,177,112)', // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: 'rgb(255,177,112)', // 100% 处的颜色
                },
            ],
        },
        'rgb(127,124,255)',
        'rgb(5,215,233)',
        'rgb(253,145,135)',
        'rgb(235,105,131)',
        'transparent',
    ],
    series: [
        {
            type: 'pie',
            radius: ['0%', '70%'],
            avoidLabelOverlap: false,
            startAngle: 180,
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    //shadowBlur: 10,
                    borderColor: '#020E36',
                    //shadowColor: '#fff'
                },
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 88,
                },
            },
            label: {
                normal: {
                    formatter: (params) => {
                        console.log(params);
                        return (
                            '{value|' +
                            params.name +
                            ' ' +
                            params.value +
                            '次 ' +
                            (params.percent * 2).toFixed(1) +
                            '%' +
                            '}\n\n'
                        );
                    },
                    padding: [0, -150, 0, -120],
                    rich: {
                        /*name: {
                            fontSize: 12,
                            padding: [0, 40, 0, 40],
                            color: '#cecece',
                        },*/
                        value: {
                            fontSize: 14,
                            padding: [0, 50, 0, 50],
                            color: '#cecece',
                        },
                    },
                },
            },

            data: [
                {
                    value: 0,
                    name: 'O3',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: 0,
                    name: 'NO2',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: 0,
                    name: 'PM2.5',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    value: 27,
                    name: 'PM10',
                },
                {
                    value: 25,
                    name: 'CO',
                },
                {
                    value: 25,
                    name: 'SO2',
                },
                {
                    value: 240,
                    name: '',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 0,
                            shadowBlur: 0,
                            borderColor: 'transparent',
                            shadowColor: 'transparent',
                        },
                    },
                },
            ],
        },
    ],
};
