option = {
    title: {
        text: '(1) 基于时间段的PV',
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    xAxis: [
        {
            type: 'category',
            data: ['00:00', '01:00', '02:00', '03:00','04:00', '05:00', '06:00', '07:00', '08:00','09:00', '10:00', '11:00', '12:00', '13:00', '14:00','15:00', '16:00', '17:00', '18:00','19:00', '20:00', '21:00', '22:00', '23:00'],
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            type: 'bar',
            data: [883050, 408230, 224135, 150291, 130242, 167167, 353113, 643449, 889436, 1090885, 1266073, 1235099, 1239727, 1361263, 1354489, 1402819, 1344148, 1219982, 1248371, 1573259, 1901024, 2177996, 2155801, 1641759],
            label: {
                show: true,
                position: 'top',
                color:'#4d4d4d'
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ],
                label: {
                    color:'#4d4d4d'
                },
            },
        }
    ]
};
