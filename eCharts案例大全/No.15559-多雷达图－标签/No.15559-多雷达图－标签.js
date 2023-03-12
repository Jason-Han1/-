option = {
    title: {
        text: '多雷达图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'center',
        data: ['某软件', '某主食手机', '某水果手机', '降水量', '蒸发量']
    },
    radar: [

        {
            indicator: [{
                text: '外观',
                max: 100
            }, {
                text: '拍照',
                max: 100
            }, {
                text: '系统',
                max: 100
            }, {
                text: '性能',
                max: 100
            }, {
                text: '屏幕',
                max: 100
            }],
            radius: 80,
            center: ['50%', '60%'],
        }
    ],
    series: [

        {
            type: 'radar',
            radarIndex: 0,
            symbol: 'arrow',
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        console.log(params);
                    }
                }
            },
            data: [
                [0, 12, 34, 55],
                [1, 45, 56, 66, 78]
            ]

        }
    ]
};