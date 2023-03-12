var echartData = [32, 25, 39, 26, 28],
option = {
   tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>{c}人",
    },
    grid: {
        top: '30%',
        left: '5%',
        right: '30%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['985院校', '211院校', '一本', '二本', '三本'],
    }],
    yAxis: [{
        type: 'value'
    }],

    series: [{
        name: '人数统计',
        barMaxWidth: '40%',
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [
                        '#C1232B', '#B5C334', '#E87C25', '#27727B',
                        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                    ];
                    return colorList[params.dataIndex]
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: function(params) {
                        var total = 0;
                        var percent = 0;
                        echartData.forEach(function(value, index) {
                            total += value;
                        });
                        percent = ((params.value / total) * 100).toFixed(2);
                        return '' + params.name + '\n\n' + params.value + '人，' + '' + percent + '%';
                    },
                }
            }
        },
        data: echartData,
    }]
};