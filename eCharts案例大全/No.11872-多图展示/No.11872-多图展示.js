option = {
    color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9', '#60a900', '#01949b', ' #f17677'],
    legend: {
        x: 'center',
        align: 'left',
        data: ['男性玩家', '女性玩家']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '55%',
        top: 'center',
        right: '1%',
        containLabel: true
    },
    yAxis: {
        type: 'value',

        splitNumber: 5,

    },
    xAxis: {
        type: 'category',

        data: ['13/03', '14/03', '15/03']
    },
    series: [

        {
            name: '男性玩家',
            type: 'bar',
            data: [13, 11, 11]
        },
        {
            name: '女性玩家',
            type: 'bar',
            data: [16, 14, 14]
        },

        {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            type: 'pie',
            center: ['20%', '50%'],
            radius: ['35%', '39%'],
            avoidLabelOverlap: false,

            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },

            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [{
                    value: 164,
                    name: '男'
                },
                {
                    value: 42,
                    name: '女'
                }
            ]
        },
    ]
};