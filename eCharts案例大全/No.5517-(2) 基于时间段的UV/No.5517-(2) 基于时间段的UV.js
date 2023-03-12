option = {
    title: {
        text: '(2) 基于时间段的UV',
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
            data: [82520, 43192, 25587, 18215, 16510, 21805, 46463, 85630, 115717, 135754, 149994, 152680, 154438, 157068, 154522, 157312, 155669, 152027, 151574, 162375, 172752, 178064, 169121, 133456],
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
