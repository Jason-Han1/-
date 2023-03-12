option = {
    title: {
        text: '基础折线图',
        textStyle: {
            color: 'red',
            fontWeight: 'bold'
        },
        subtext: '仅供参考',
        subtextStyle: {
            color: '#aaa',
            fontStyle: 'italic'
        },
        left: 'center',

    },
    xAxis: {
        data: ['一', '二', '三', '四', '五', '六', '日']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};