option = {
    title: {
        text: 'grid.boundaryGap且xAxis.boundaryGap==false模式下x轴两边的label无法完整显示',
        subtext: 'grid.left的计算值应该为max(yAxis.label.width, xAxis.label.width / 2)；grid.right应该为xAxis.label.width / 2'
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true 
    },
    xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                fontSize: 30
            },
            data: ['87654321·12345678', 'B', 'C', 'D', 'E', 'F', '87654321·12345678']
    },
    yAxis: {
            type: 'value',
            axisLabel: {
                fontSize: 10 
            },
        },
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};