var data_xAxis = ['一月', '二月', '三月', '四月', '五月', '六月'];
var seriesData1 = [400, 400, 400, 400, 400, 400];
var seriesData2 = [350, 300, 250, 200, 180, 150];

option = {
    title: {
        text: ''
    },
    legend: {
        data: ['', '']
    },
    grid: {
        top: 'middle',
        left: '0%',
        right: '4%',
        bottom: '3%',
        height: '80%',
        containLabel: true
    },
    xAxis: {
        data: data_xAxis,
        axisLabel: {
            show: true,
            color: 'rgb(170,170,170)'
        },
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        }
    },
    yAxis: {
        axisLine: { //坐标 轴线
            show: false, //是否显示坐标轴轴线
            onZero: true, //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false, //是否显示分隔线。默认数值轴显示，类目轴不显示。
        },
    },
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
                html +=
                    '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
                    params[i].color + ';"></span>';

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
        color: '#F5F5F5',
        data: seriesData1,
        type: 'bar',
        barWidth: '12px',
        itemStyle: {
            normal: {
                barBorderRadius: [6, 6, 0, 0],
            }
        },
        label: {
            normal: {
                show: false,
                textStyle: {
                    color: '#000'
                },
                position: 'top'
            }
        }
    }, {
        label: {
            show: false,
            position: 'top', // top or inside
            // padding: 10,
            // color: '#2979ff', // 百分比颜色
            color: '#fff',
            // fontSize: 14,
            formatter: '{c}%'
        },
        name: '投诉举报',
        type: 'bar',
        barWidth: '12px',
        barGap: '-100%',
        data: seriesData2,
        // color: '#33FFCC',
        itemStyle: {
            // 柱条渐变色
            // LinearGradient(
            //   0, 0, 0, 1 分别代表开始位置, 依次为右下左上, 该配置
            //  表示自上而下渐变
            // )
            normal: {
                barBorderRadius: [6, 6, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1F8EFA'
                }, {
                    offset: 1,
                    color: '#1F8EFA'
                }], false)
            },
            emphasis: {},
        },

    }]
};