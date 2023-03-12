option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: [{
        type: 'category',
        data: ['只要平凡', '时间飞行', '对你太想念', '不找了', '闻窗一如初见', '关于春天的一切', '流程'],
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            formatter: function(value) {
                var newName = ''
                var num = 4;
                var len = Math.ceil(value.length / num) || 0;
                if (value.length > num) {
                    for (var p = 0; p < len; p++) {
                        var tempStr = ''
                        var start = p * num;
                        var end = start + num;
                        if (p == len - 1) {
                            tempStr = value.substring(start, value.length);
                        } else {
                            tempStr = value.substring(start, end) + "\n";
                        }
                        newName += tempStr;
                    }

                } else {
                    newName = value;
                }
                return newName
            }
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
    }]
};