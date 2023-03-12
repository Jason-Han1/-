var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['视频广告', '联盟广告', '邮件营销', '直接访问', "搜索引擎", "推广服务"],
        selected: {
            '视频广告': false
        },
    },

    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',

        data: [{
            value: 235,
            name: '视频广告'
        }, {
            value: 274,
            name: '联盟广告'
        }, {
            value: 210,
            name: '邮件营销'
        }, {
            value: 325,
            name: '直接访问'
        }, {
            value: 140,
            name: '搜索引擎'
        }, {
            value: 0,
            name: '推广服务',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: function(params, option) {
                            if (params.data.value == 0) {
                                // params.data.itemStyle.normal.labelLine.show = false;  
                                params.data.label.normal.show = false;
                                params.data.labelLine.normal.show = false;

                            }
                        },
                    },
                    labelLine: {
                        show: true
                    }
                }
            }
        }]
    }]
}


//可以对legend 进行置灰
var opt = option.series[0];
var opt1 = option.legend;
var legendName = '';
for (i in opt.data) {
    var val = opt.data[i]
    if (val.value == 0) {
        var valName = opt.data[i].name
        for (j in opt1.data) {
            legendName = opt1.data[j]
        }

    }
}
option.legend.selected[valName] = false;


// 使用刚指定的配置项和数据显示图表。  
myChart.setOption(option);