var data = [70, 34, 60, 78, 69];
var titlename = ['作业帮', '拼夕夕', '钉钉', '腾讯会议', '健康码'];
var valdata = [1283, 796, 1234, 1111, 831];//这是干吗用的不清楚
option = {
    backgroundColor: '#fff',
    title: {
        text: '公司集团',
        textStyle: {
             fontSize: 22
        }
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#7e7e7e',
        },


    }, {
        show: false,
        inverse: true,
        data: valdata,
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#fff',
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
        zlevel: 2,
        data: data,
        barWidth: 30,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: '#919191',
            }
        },
        label: {
            normal: {
                show: true,
                position: [690, '7px'],
                formatter: '{c}%'
            }
        },
    }, {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [100, 100, 100, 100, 100],
        barWidth: 30,
        itemStyle: {
            normal: {
                color: '#f1f1f1',

                barBorderRadius: 30,
            }
        }
    }, ]
};