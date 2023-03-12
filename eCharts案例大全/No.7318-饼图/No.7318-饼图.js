option = {
    title: {
        text: '项目金额（万）',
        left: 'center',
        top: '30',
        textStyle: {
            fontSize: 13
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}万 ({d}%)'
    },
    legend: {
        orient: 'horizontal',
        icon:'circle',
        left: 'center',
        bottom: 'bottom',
        data: ['党政', '教育', '医疗', '公检', '司法']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: false
    },
    series: [{
        name: '项目金额',
        type: 'pie',
        radius: ['50%', '70%'],
        color: ['#FBAF4E','#00D1A6','#A680F4','#F1587D','#8194B9','#eedd78','#73a373'],
        avoidLabelOverlap: false,
        label: {
            show: true,
            formatter: '{c}',
            padding: [-20, -30, 0, -30]
        },
        // radius以半径不同来表示数据大小
        roseType: 'radius',
        labelLine: {
            show: true,
            // length: '5',
            length2: '30'
        },
        data: [{
                value: 335,
                name: '党政'
            },
            {
                value: 310,
                name: '教育'
            },
            {
                value: 234,
                name: '医疗'
            },
            {
                value: 135,
                name: '公检'
            },
            {
                value: 444,
                name: '司法'
            }
        ]
    }]
};