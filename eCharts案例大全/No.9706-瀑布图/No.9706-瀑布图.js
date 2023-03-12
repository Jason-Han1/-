//300, 900, -200, 300, 1200, 2900
//https://antv.alipay.com/zh-cn/g2/3.x/demo/column/waterfall.html#
//https://www.highcharts.com.cn/docs/waterfall-series
//https://gallery.echartsjs.com/editor.html?c=xBksRWF2m7
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            } else {
                tar = params[2];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    xAxis: {
        type: 'category',
        data: ['日用品', '伙食费', '交通费', '水电费', '房租', '累计值']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: 'rgba(0,0,0,0)'
            },
            data: [0, 300, 1000, 1000, 1300, 0]
        },
        {
            name: '上升',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [300, 900, '-', 300, 1200, 2500]
        },
        {
            name: '下降',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: ['-', '-', 200, '-', '-', '-']
        }
    ]
};