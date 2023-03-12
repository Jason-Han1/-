option = {
    color: new echarts.graphic.LinearGradient(
        0, 1, 0, 0,
        [{offset: 0, color: 'green'}, {offset: 1, color: 'yellow'}]
    ),
    tooltip: {},
    legend: {
        orient: 'horizontal',
        data:['I/II网','III/IV网']
    },
    xAxis: {
        type: 'category',
        data: ['南京市', '无锡市', '徐州市', '常州市', '苏州市', '南通市', 
        '连云港市', '淮安市', '盐城市', '扬州市', '镇江市', '泰州市', '宿迁市']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name:'I/II网',
        type:'bar',
        data:[69, 64, 62, 62, 60, 67, 60, 60, 60, 62, 69, 66, 65]
    }, 
    {
        name:'III/IV网',
        type:'bar',
        data:[52, 52, 57, 57, 59, 51, 59, 51, 56, 54, 59, 59, 52]
    }]
};