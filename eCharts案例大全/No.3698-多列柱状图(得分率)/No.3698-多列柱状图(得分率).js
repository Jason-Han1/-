option = {
    title: {
        text: '图表标题',
        left: 'center',
        top: '5px',
    },
    color: ['#5b9bd5', '#ed7d31', '#a5a5a5', '#ffc000'],
    xAxis: {
        type: 'category',
        axisTick: { show: false },
        data: ['检查次数', '应得分', '检查实际得分', '得分率'],
    },
    legend: {
        data: ['项目1施工单位A', '项目1施工单位C', '项目1施工单位B', '项目4施工单位D'],
        top: 'bottom',
    },
    yAxis: {
        type: 'value',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params) {
            var signStr = '';
            if (params[0]['axisValue'] == '得分率') {
                signStr = '%';
            }
            return (
                params[0]['axisValue'] + '<br/>' +
                params[0].marker +params[0]['seriesName'] +' ' +params[0]['value'] + signStr + '<br/>' +
                params[1].marker +params[1]['seriesName'] +' ' +params[1]['value'] +signStr +'<br/>' +
                params[2].marker +params[2]['seriesName'] +' ' +params[2]['value'] +signStr +'<br/>' +
                params[3].marker +params[3]['seriesName'] +' ' +params[3]['value'] +signStr
            );
        },
    },
    series: [
        {
            name: '项目1施工单位A',
            data: [10, 20, 30, 40],
            type: 'bar',
        },
        {
            name: '项目1施工单位C',
            data: [20, 30, 40, 50],
            type: 'bar',
        },
        {
            name: '项目1施工单位B',
            data: [30, 40, 50, 60],
            type: 'bar',
        },
        {
            name: '项目4施工单位D',
            data: [40, 50, 60, 70],
            type: 'bar',
        },
    ],
};
