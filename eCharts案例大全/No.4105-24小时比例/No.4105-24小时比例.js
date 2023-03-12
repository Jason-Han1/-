option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['我的酒店', '商圈','城市']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#2C6FB7',
               // backgroundColor: '#999',
                borderRadius: 2,
                padding: [3, 5]
            }
        },
         splitLine: {
      lineStyle: {
        color: "#999"
      }
    },
    splitArea: {
      show: false
    },
        indicator: [{
                name: '00',
                max: 100
            },
            {
                name: '23',
                max: 100
            },
            {
                name: '22',
                max: 100
            },
            {
                name: '21',
                max: 100
            },
            {
                name: '20',
                max: 100
            },
            {
                name: '19',
                max: 100
            },
            {
                name: '18',
                max: 100
            },
            {
                name: '17',
                max: 100
            },
            {
                name: '16',
                max: 100
            },
            {
                name: '15',
                max: 100
            },
            {
                name: '14',
                max: 100
            },
            {
                name: '13',
                max: 100
            },
            {
                name: '12',
                max: 100
            },
            {
                name: '11',
                max: 100
            },
            {
                name: '10',
                max: 100
            },
            {
                name: '09',
                max: 100
            },
            {
                name: '08',
                max: 100
            },
            {
                name: '07',
                max: 100
            },
            {
                name: '06',
                max: 100
            },
            {
                name: '05',
                max: 100
            },
            {
                name: '04',
                max: 100
            },
            {
                name: '03',
                max: 100
            },
            {
                name: '02',
                max: 100
            },
            {
                name: '01',
                max: 100
            },
        ]
    },
    series: [{
        name: '去年 vs  今年',
        type: 'radar',
        // areaStyle: {normal: {}},
        connectNulls: false,
        data: [{
                value: [80, 60, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 6,,,,,],
                name: '我的酒店'
            },
            {
                value: [35, 50, 55, 60, 65, 50, 55, 60, 65, 70, 55, 60, 65, 70, 75, 80, 85, 50, 55, 60, 65, 78,58,20,21],
                name: '商圈'
            },
                        {
                value: [35, 60, 65, 70, 55, 60, 65, 70, 75, 80, 85, 50, 55, 60, 65, 78,58,20,21,,,,],
                name: '城市'
            }
        ]
    }]
};