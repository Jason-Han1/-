option = {
    backgroundColor: '#013954',
    title: {
        text: 'Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '销量 <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 20,
        top: 20,
        data: ['供应商1', '供应商2', '供应商3', '供应商4', '供应商5'],
        textStyle: {
            color: '#fff'
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [{
                value: 210,
                name: '供应商5'
            },
            {
                value: 235,
                name: '供应商4'
            },
            {
                value: 274,
                name: '供应商3'
            },
            {
                value: 310,
                name: '供应商2'
            },
            {
                value: 435,
                name: '供应商1'
            }
        ],
        roseType: 'radius',
        label: {
            color: '#fff'
        },
        labelLine: {
            lineStyle: {
                color: '#888'
            }
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = ['#ffff99', '#00ffcc', '#00ff99', '#33ccff', '#388df6'];
                    return colorList[params.dataIndex % colorList.length];
                }
            }
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
            return Math.random() * 200;
        }
    }]
};