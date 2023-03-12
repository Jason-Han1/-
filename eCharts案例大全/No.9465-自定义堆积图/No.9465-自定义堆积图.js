var name = ['邮件营销', '联盟广告', '视频广告', '直接访问']
var series = []
name.forEach((item, index) => {
    series.push({
        name: item,
        type: 'line',
        stack: '总量',
        symbol: 'none',
        areaStyle: {},
        lineStyle: {
            normal: {
                color: index < name.length - 1 ? '#fff' : '#333'
            }
        },
        data: [120, 132, 101, 134, 90, 230, 210]
    })
})
option = {
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value',
        position: 'right'
    }],
    series
};