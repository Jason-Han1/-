var Names = ["综合", "听力", "口语", "阅读", "写作"];
var Stu = [35, 45, 88, 21, 14];
var Group = [80, 87, 75, 90, 75];
var Max = [100, 100, 100, 100, 100];
option = {
    tooltip: {},
    backgroundColor: '#fff',
    radar: [{
        name: {
            formatter: '{value}',
            textStyle: {
                color: '#666666',
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: '#d5d5d5',
            }
        },
        splitArea: {
            areaStyle: {
                color: '#fff',
                opacity: 0,
            }
        },
        indicator: [{
                text: Names[0],
                max: Max[0]
            },
            {
                text: Names[1],
                max: Max[1]
            },
            {
                text: Names[2],
                max: Max[2]
            },
            {
                text: Names[3],
                max: Max[3]
            },
            {
                text: Names[4],
                max: Max[4]
            }
        ],
        center: ['50%', '50%'],
        radius: 65
    }],
    series: [{
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                opacity: 1
            }
        },
        data: [{
            value: Group,
            name: '整体学习效率'
        }]
    }, {
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                opacity: 1
            }
        },
        data: [{
            value: Stu,
            name: '个人学习效率'
        }]
    }],
    color: [
        new echarts.graphic.LinearGradient(0, 0, 0, 1,
            [{
                offset: 0,
                color: 'rgba(48,145,243,0.9)'
            }, {
                offset: 1,
                color: 'rgba(49,196,252,0.9)'
            }], false), new echarts.graphic.LinearGradient(0, 0, 0, 1,
            [{
                offset: 0,
                color: 'rgba(255,153,28,0.9)'
            }, {
                offset: 1,
                color: 'rgba(255,197,55,0.9)'
            }], false)
    ]
};