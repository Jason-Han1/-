option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            interval: 0,
            formatter: (params, idx)=>{
                // 这里 data的最后一位(Sun) 会返回两次 导致X轴最后一个label字体变粗，与前面的字体风格不统一
                console.log(params, idx)
                return params;
            }
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
