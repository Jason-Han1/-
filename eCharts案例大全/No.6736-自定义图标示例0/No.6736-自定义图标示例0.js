let icon = '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9125" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M874.044235 149.955765L873.411765 361.411765l150.588235 150.588235-150.588235 150.588235 0.63247 211.456L662.588235 873.411765l-150.588235 150.588235-150.588235-150.588235-211.456 0.63247L150.588235 662.588235l-150.588235-150.588235 150.588235-150.588235-0.63247-211.456L361.411765 150.588235l150.588235-150.588235 150.588235 150.588235z" fill="#FF6E6E" p-id="9126"></path><path d="M512 512m-271.058824 0a271.058824 271.058824 0 1 0 542.117648 0 271.058824 271.058824 0 1 0-542.117648 0Z" fill="#0C0058" p-id="9127"></path></svg>'
icon = encodeURIComponent(icon) // 转译
icon = 'data:image/svg+xml;utf8,' + icon // 添加url前缀
icon = 'image://' + icon // 添加ECharts需要的前缀

var option = {
    xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        symbol: icon,
        symbolSize: 30,
    }]
};