option = {
    backgroundColor:'#FFF',
    title: {
          top: 40,
          text: 'Radar with Polygon Fill✍',
          subtext: '',
          x: 'center',
          textStyle: {
              align: 'center',
              color: '#888888',
              fontSize: 30,
              fontWeight: '100',
          },
      },
    tooltip: {},
    radar: {
        radius: '60%',
        center: ['50%', '55%'],
        // startAngle: 0,
        splitNumber: 10,
        nameGap: '15',
        name: {
            textStyle: {
                color: '#a8a8a8',
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ebebeb'
            }
        },
        splitLine: {
            lineStyle: {
                width: 1,
                color: '#ebebeb'
            }
        },
        splitArea: {
            areaStyle: {
                color: [ '#f8f8f8', '#fff', ].reverse(),
                
            }
        },
        indicator: [{
                name: 'Sunday',
                max: 100
            },
            {
                name: 'Monday',
                max: 100
            },
            {
                name: 'Tuesday',
                max: 100
            },
            {
                name: 'Wednesday',
                max: 100
            },
            {
                name: 'Thursday',
                max: 100
            },
            {
                name: 'Friday',
                max: 100
            },
            {
                name: 'Saturday',
                max: 100
            }
        ]
    },
    series: [{
        name: 'Title✍',
        type: 'radar',
        symbolSize: 12,
        itemStyle: {
                borderColor: '#ebebeb',
                borderWidth: 2,
            },
        areaStyle: {
            normal: {
                width: 1,
                opacity: 0.3,
            },
        },
        data: [{
            itemStyle: {
                normal: {
                    color: '#59c4bc',
                },
            },
            value: [20, 33, 80, 50, 30, 40, 100]
        }]
    }]
};