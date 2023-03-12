option = {
    title: {
        text: '{a|80}{b|%}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontWeight: 'bold',
                    fontSize: '18'
                },
                b: {
                    verticalAlign: 'bottom',
                    fontSize: '10'
                }
            }
        }
    },
    toolbox: {
        show: false
    },

    grid: {
        top: '5%',
        left: '2%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: false
    },

    series: [{
        name: '',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        // 高亮偏移值
        hoverOffset: 20,
        label: {
            normal: {
                show: false
            }
        },

        labelLine: {
            normal: {
                show: false
            }
        },
        //   highlight 自定义属性  有此属性该数据集保持高亮
        data: [{
                value: "11",
                name: "baidu"
            },
            {
                value: "5",
                name: "google",
                highlight: true
            }
        ]
    }]
};



/**
 * echarts 执行action
 * @param instance  ecahrts 实例
 * @param type  action 类型
 * @param index   对应的 数据索引
 */
function chartAction(instance, type, index) {
    instance.dispatchAction({
        type: type,
        dataIndex: index
    });
}

/**
 * 初始高亮状态  
 */
myChart.on('finished', function(e) {
    var data = myChart.getOption().series[0].data;
    for (var i in data) {
        if (data) {
            if (data[i].highlight) {
                chartAction(myChart, 'highlight', i);
            }
        }
    }
});



/**
 * 鼠标移出 判断   有高亮标识的数据集 保持高亮
 */
myChart.on('mouseout', function(e) {
    var highlight = e.data.highlight;

    if (highlight) {
        chartAction(this, 'highlight', e.dataIndex)
    }
})

/**
 *  鼠标hover 动作判断   非高亮标识的数据集 保持原状
 */
myChart.on('mouseover', function(e) {
    var highlight = e.data.highlight;
    if (!highlight) {
        chartAction(this, 'downplay', e.dataIndex)
    }
})