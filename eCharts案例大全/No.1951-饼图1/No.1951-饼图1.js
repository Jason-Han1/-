let color1 = [
    ['rgba(255, 131, 49,0.3)', 'rgba(255, 131, 49,0.8)', 'rgba(255, 131, 49)'],
    ['rgba(60, 244,255,0.3)', 'rgba(60, 244, 255, 0.8)', 'rgba(60, 244, 255)'],
    ['rgba(120,255,184,0.3)', 'rgba(120,255,184,0.8)', 'rgba(120,255,184)'],
    ['rgba(255,233,111,0.3)', 'rgba(255,233,111,0.8)', 'rgba(255,233,111)'],
];
let data1 = [
    { value: 12, name: '告警' },
    { value: 50, name: '正常' },
    { value: 38, name: '劣化' },
    { value: 28, name: '劣化' },
];
option = {
    backgroundColor: '#060d22',
    tooltip: {
        show: false,
    },
    series: [
        // 
         {
            name: '八爪线',
            type: 'pie',
            radius: ['32%', '30%'],
            hoverAnimation: false,
            hoverAnimation: false,
            legendHoverLink: false,
            animation: false,
            // 图形是否不影响和触发鼠标事件
            silent:true,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return color1[params.dataIndex][2];
                    },
                    borderWidth: 5,
                    borderColor: '#030d22',
                },
            },
            label: {
                show: true,
            },
            labelLine: {
                normal: {
                    length: 80,
                    length2: 40,
                    show: true,
                    lineStyle: {
                        width: 2,
                    },
                },
            },
            data: data1,
        },
        // 内圈
        {
            name: '八爪图',
            type: 'pie',
            radius: [0, '30%'],
            // hoverAnimation: false,
            legendHoverLink: false,
            // animation: false,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return {
                            type: 'line',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [
                                { offset: 0, color: color1[params.dataIndex][0] },
                                { offset: 1, color: color1[params.dataIndex][1] },
                            ],
                        };
                    },
                    borderWidth: 5,
                    borderColor: '#030d22',
                },
            },
            label: {
                position: 'inner',
                color: '',
                show: false,
                fontSize: 14,
            },
            data: data1,
        },
       
    ],
};
