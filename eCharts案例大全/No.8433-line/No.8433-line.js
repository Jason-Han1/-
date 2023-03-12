var scale = 1;
option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        name: '日期',
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        name: '数量'
    },
    /*工具按钮组*/
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310],
        label: {
            normal: {
                show: true,
                position: "insideBottom",
                rotate: '90',
                offset: [10, -50],
                distance: 20 * scale,
                formatter: function(params) {
                    return params.data.value;
                },
                textStyle: {
                    color: "#ffc72b",
                    fontSize: 20 * scale
                }
            }
        },
    }]
};