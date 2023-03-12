var fss1 = [
    [534, 101226, '豆包兔'],
    [443, 61077, '父母成长必读'],
    [465, 49508, '好孕成双'],
    [448, 48664, '亲子笔记'],
    [473, 45332, 'BaBysky'],
    [455, 39943, '宝贝日日记'],
    [461, 36587, '拜托了妈妈'],
    [535, 30365, '不哭得小屁孩'],
    [372, 28581, '极客师妹'],
    {
        value: [515, 27893, '父母世界'],
        itemStyle: {
            color: '#b83259'
        },
        label: {
            show: true,
            position: 'bottom',
            formatter: '父母世界',
            fontWeight: 'bold'
        }
    },
    [530, 27646, '逗玩'],
    [373, 24123, '妈咪宝贝传媒'],
    [478, 19396, '育儿网'],
    [490, 17159, '生活好物攻略'],
    [526, 15886, '茉莉妈妈APP'],
    [572, 15793, '辣妈萌宝团'],
    [539, 15528, '明小宣'],
    [484, 14599, '妈妈网'],
    [211, 13754, '悦宝贝'],
    [240, 13356, '暧妈育儿经']
];
var fss2 = [
    [389, 351, '假妈爱测评'],
    [387, 333, '妈妈的朋友圈'],
    [381, 772, '育儿者联盟'],
    [356, 323, '试试'],
    [353, 468, '肌萌研究所'],
    [351, 335, '母婴百科'],
    [351, 199, '神奇妈力奥']
];
var wcrws1 = [

    [534, 150, '豆包兔'],
    {
        value: [515, 148, '父母世界'],
        itemStyle: {
            color: '#b83259'
        },
        label: {
            show: true,
            position: 'top',
            formatter: '父母世界',
            fontWeight: 'bold'
        }
    },
    [490, 139, '生活好物攻略'],
    [488, 99, '喵喵购'],
    [530, 91, '逗玩'],
    [522, 88, '爸妈堂育儿'],
    [526, 83, '暴走的买买兔'],
    [506, 69, '妈咪宝宝小助手'],
    [304, 66, '辣妈潮宝汇'],
    [456, 65, '陪你一起'],
    [461, 64, '拜托了妈妈'],
    [428, 51, '糖醋雁子'],
    [324, 49, '棒妈经验谈'],
    [261, 45, '贝爱妈咪'],
    [476, 40, '点点的美好生活'],
    [480, 38, '宝妈说'],
    [371, 37, '家有三宝达人'],
    [435, 35, '冯尼美']
];
var zywcrw = [{
    value: [389, 3, '假妈爱测评'],
    itemStyle: {
        color: '#b83259'
    },
    label: {
        show: true,
        position: 'bottom',
        formatter: '假妈爱测评',
        fontWeight: 'bold'
    }
}];

option = {
    title: {
        text: ''
    },
    grid: {
        x: '7%',
        y: '7%',
        width: '68%',
        height: '68%'
    },
    yAxis: {

        name: '任务完成数',
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 15
        },
        type: 'value',
        scale: true,
        offset: -260,
        axisLabel: {
            formatter: '{value} '
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8'
            }
        }
    },
    xAxis: {

        name: '综合能力',
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 15
        },
        type:'value',
        min: 200,
        max: 580,
        offset: -180,
        axisLabel: {
            show: true,
            inside: true
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8'
            }
        }
    },
    series: [{

            type: 'scatter',
            data: wcrws1,
            symbolSize: 11,
            itemStyle: {
                color: '#192c5c'
            },
            label: {
                show: true,
                position: 'top',
                formatter: function(params) {
                    return params.value[2]
                }
            },
            markLine: {
                show: true,
                lineStyle: {
                    color: '#59b832',
                    type: 'solid'
                },
                data: [{
                        type: 'average',
                        name: '平均值',
                        valueIndex: 0
                    },
                    {
                        type: 'average',
                        name: '平均值',
                        valueIndex: 1
                    }
                ]
            }
        },

    ]
}