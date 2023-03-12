//如果Y轴的描述文字很长，我们可以将文字显示在bar中，将数据显示在右侧。
//这样排版更加美观
//需要注意的是，要将bar的颜色的透明度调低。否则颜色会掩盖文字
var titlename = ['姓名', '身份证号', '年龄', '家庭住址', '籍贯'];
var valdata = [98, 90, 86, 30, 10]
var rateData = [100, 100, 100, 100, 100]

option = {
    backgroundColor: 'white', //设置背景色
    title: {
        text: '数据完整率统计',
        subtext: '人员登记信息完整率统计',
        show: true,
    },
    grid: {
        left: '2%',
        right: '2%',
        containLabel: true //是否显示刻度
    },
    xAxis: {
        show: false,
    },
    yAxis: [{
        type: 'category',
        data: titlename,
        boundaryGap: true,
        axisLabel: {
            interval: 0,
            inside: true,
            textStyle: {
                color: '#222222',
                fontSize: 14
            }
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        }
    }, {
        show: true,
        data: valdata,
        axisLabel: {
            formatter: '{value}%',
            textStyle: {
                fontSize: 12,
                color: '#000',
            },
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: valdata,
        label: {
            normal: {
                show: false,
                position: 'inside',
                color: '#222222',
                fontSize: 14,
                formatter: '{c}%'
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: [10, 10, 10, 10],
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 1,
                    color: 'rgba(3,235,255, 0.3)' //将透明度设置成0.3，这样Y轴左侧的label能够显示出来来
                }, {
                    offset: 0,
                    color: 'rgba(0,165,255, 0.5)'
                }]),
            },
        },
    }, {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: rateData,
        // barWidth: 30,
        itemStyle: {
            normal: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 2,
                barBorderRadius: [10, 10, 10, 10],
            }
        }
    }, ]
};