// 部分注释的位置会使用变量
let color = ["#83a1c5", "#45d7ff", "#286eff", "#b98c3e", "#ec5a26"];
// legend
let level = ['无', '轻度', '中度', '中重', '重度'];
// 模拟数据
let data = {
    psy: ['睡意', '视觉疲劳', '脑力疲劳', '思维活动', '情绪波动', '脑力负荷'],
    none: [23, 12, 14, 15, 64, 83],
    mild: [49, 03, 90, 58, 75, 84],
    moderate: [69, 98, 32, 48, 21,58],
    moderately: [53, 64, 45, 54, 38, 61],
    serious: [64, 16, 76, 53, 48, 96]
};

option = {
    backgroundColor: '#031930',
    title: {
        text: '8:00~9:00AM',
        textStyle: {
            color: '#82a1c4',
            fontSize: 18,
            lineheight: 20
        },
        padding: [10, 20],
        left: '10%',
        top: 50,
        borderColor: '#015292',
        borderWidth: 1,
        borderRadius: 8
    },
    legend: {
        //level
        data: level,
        orient: 'vertical',
        bottom: 50,
        right: 30,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#82a1c4'
        },
        selectedMode: false
    },
    grid: {
        top: 100
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                show: true,
                color: '#015292'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#82a1c4'
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#015092',
                opacity: 0.6,
                type: 'dotted'
            }
        },
        //刻度内容
        data: data.psy
    },
    yAxis: {
        type: 'value',
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                color: '#015292',
                show: true
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#82a1c4',
            show: true,
            formatter: function(value, index) {
                let text = value;
                if(index === 0) {
                    text = '0%';
                }
                return text;
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#015092',
                opacity: 0.6,
                type: 'dotted'
            }
        },
        min: 0,
        max: 100
    },
    series: [{
        name: level[0],
        type: 'bar',
        //程度；无
        data: data.none,
        itemStyle: {
            color: color[0],
            barBorderRadius: [20, 20, 0, 0]
        },
        barWidth: 20,
        silent: true
    },{
        name: level[1],
        type: 'bar',
        //程度；无
        data: data.mild,
        itemStyle: {
            color: color[1],
            barBorderRadius: [20, 20, 0, 0]
        },
        barWidth: 20,
        silent: true
    },{
        name: level[2],
        type: 'bar',
        //程度；无
        data: data.moderate,
        itemStyle: {
            color: color[2],
            barBorderRadius: [20, 20, 0, 0]
        },
        barWidth: 20,
        silent: true
    },{
        name: level[3],
        type: 'bar',
        //程度；无
        data: data.moderately,
        itemStyle: {
            color: color[3],
            barBorderRadius: [20, 20, 0, 0]
        },
        barWidth: 20,
        silent: true
    },{
        name: level[4],
        type: 'bar',
        //程度；无
        data: data.serious,
        itemStyle: {
            color: color[4],
            barBorderRadius: [20, 20, 0, 0]
        },
        barWidth: 20,
        silent: true
    },]
};

// 随机数据
function vdata() {
    for(let i = 0; i < data.none.length; i++) {
        data.none[i] = Math.floor(Math.random() * 101);
        data.mild[i] = Math.floor(Math.random() * 101);
        data.moderate[i] = Math.floor(Math.random() * 101);
        data.moderately[i] = Math.floor(Math.random() * 101);
        data.serious[i] = Math.floor(Math.random() * 101);
    }
    option.series[0].data = data.none;
    option.series[1].data = data.mild;
    option.series[2].data = data.moderate;
    option.series[3].data = data.moderately;
    option.series[4].data = data.serious;
    myChart.setOption(option, true);
}
setInterval(function() {
    vdata();
}, 1000
);