option = {
    title: {
        text: 'Awesome Chart'
    },
    legend: {
        data: ['登录人数', '总用户数']
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        formatter: function(params) {
            // 系列
            let html = params[0].name + "<br>";

            for (var i = 0; i < params.length; i++) {

                // 获取每个系列对应的颜色值
                html += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>';

                // 通过判断指定系列增加 % 符号
                if (option.series[params[i].seriesIndex].name == "登录人数") {
                    html += params[i].seriesName + ": " + params[i].value + "%<br>";
                } else {
                    html += params[i].seriesName + ": " + params[i].value + "<br>";
                }
            }
            return html;
        }
    },
    series: [{
        name: '总用户数',
        type: 'bar',
        color: '#ccc',
        data: [100, 200, 101, 500, 230, 333, 100]
    }, {
        label: {
            show: true,
            position: 'top', // top or inside
            // padding: 10,
            // color: '#2979ff', // 百分比颜色
            color: '#fff',
            // fontSize: 14,
            formatter: '{c}%'
        },
        name: '登录人数',
        type: 'bar',
        barGap: '-100%',
        data: [80, 30, 30, 340, 30, 60, 10],
        // color: '#33FFCC',
        itemStyle: {
            // 柱条渐变色
            // LinearGradient(
            //   0, 0, 0, 1 分别代表开始位置, 依次为右下左上, 该配置
            //  表示自上而下渐变
            // )
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00FBFF'
                }, {
                    offset: 1,
                    color: '#39A7FC'
                }], false)
            },
            emphasis: {}
        },

    }]
};