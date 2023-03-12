app.title = '极坐标系下的堆叠柱状图';

option = {
    angleAxis: {
        type: 'category',
        data: ['VISTA看天下', '环球时报', '澎湃新闻', '人民日报', '知乎', '中国新闻网', '中国之声','北京青年报','豆瓣','头条新闻','新京报'],
        z: 10
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [42, 22, 25, 36, 72, 8, 13,9,29,35,9],
        coordinateSystem: 'polar',
        name: '数量',
        stack: 'a'
    
    
    }],
    legend: {
        show: true,
        data: ['数量', 'B', 'C']
    }
};
