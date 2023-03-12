var labels = ['报警响应率', '故障修复率', '已查消防设施完好率', '消防设施巡查覆盖率', '巡更完成率', '在岗率', '培训完成率'];
option = {
    title: {
        text: '基础雷达图(百分比)',
    },
    tooltip: {
        formatter: function(params) {
            var results = '';
            for (var i = 0; i < labels.length; i++) {
                results += labels[i] + ':' + params.value[i] + '%<br>';
            }
            return results;
        }
    },
    radar: {
        name: {
            textStyle: {
                color: '#000',
            }
        },
        indicator: [{
                name: '报警响应率',
                max: 100
            },
            {
                name: '故障修复率',
                max: 100
            },
            {
                name: '已查消防设施完好率',
                max: 100
            },
            {
                name: '消防设施巡查覆盖率',
                max: 100
            },
            {
                name: '巡更完成率',
                max: 100
            },
            {
                name: '在岗率',
                max: 100
            },
            {
                name: '培训完成率',
                max: 100
            },
        ]
    },
    series: [{
        type: 'radar',
        data: [{
            value: [100, 100, 80, 30, 6.9, 10, 90],
        }, ],
        areaStyle:{
            normal:{
                
            },
        },
    }],
};