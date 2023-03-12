option = {
    title: {
        text: '在 IE 中自定义tooltip-formatter，导致无法加载图表！'
    },
    tooltip: {
        trigger: 'axis',
        formatter(params){
            return "在 IE 中自定义tooltip-formatter，" +
            "<br>导致无法加载图表！";
        }
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};