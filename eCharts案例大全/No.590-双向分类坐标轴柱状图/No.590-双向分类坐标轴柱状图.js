// 指定图表的配置项和数据
/**
 * 基本思路就是把分类名映射成数值
 */
// 阶段分类与数值的映射
var phaseParent = [{
        name: '方案制定阶段',
        color: '#3b1a40',
        order: 1,
        children: [{
                name: '收到业务需求',
                order: 1
            },
            {
                name: '需求评审',
                order: 2
            },
            {
                name: '提交建设方案',
                order: 3
            },
        ]
    },
    {
        name: '立项阶段',
        color: '#463793',
        order: 2,
        children: [{
                name: '建设方案评审',
                order: 4
            },
            {
                name: '立项决策会',
                order: 5
            },
            {
                name: '可研评审',
                order: 6
            },
            {
                name: '可研批复',
                order: 7
            },
        ]
    },
    {
        name: '采购准备阶段',
        color: '#3c6df0',
        order: 3,
        children: [{
                name: '采购材料编制提交',
                order: 8
            },
            {
                name: '采购材料评审',
                order: 9
            },
            {
                name: '采购预申请',
                order: 10
            },
            {
                name: '采购正式申请',
                order: 11
            },
        ]
    },
    {
        name: '采购发生阶段',
        color: '#ffab18',
        order: 4,
        children: [{
                name: '采购方案决策',
                order: 12
            },
            {
                name: '采购结果公布',
                order: 13
            },
            {
                name: '合同签订',
                order: 14
            },
        ]
    },
    {
        name: '设计阶段',
        color: '#9dff6b',
        order: 5,
        children: [{
            name: '设计批复',
            order: 15
        }, ]
    },
    {
        name: '工程实施阶段',
        color: '#7ed2c6',
        order: 6,
        children: [{
                name: '项目开工',
                order: 16
            },
            {
                name: '设备到货',
                order: 17
            },
            {
                name: '设备安装',
                order: 18
            },
            {
                name: '需求分析',
                order: 19
            },
            {
                name: '系统设计',
                order: 20
            },
            {
                name: '开发阶段',
                order: 21
            },
            {
                name: '集成测试',
                order: 22
            },
            {
                name: '验收测试',
                order: 23
            },
            {
                name: '割接上线',
                order: 24
            },
            {
                name: '试运行',
                order: 25
            },
            {
                name: '竣工验收',
                order: 26
            },
        ]
    }
];
var allSubPhase = [];
for (var i = 0; i < phaseParent.length; i++) {
    var children = phaseParent[i].children;
    for (var j = 0; j < children.length; j++) {
        var child = children[j];
        child.color = phaseParent[i].color;
        allSubPhase.push(child)
    }
}
var all_phase_cnt = allSubPhase.length;
var projectPhase = [
    ['收到业务需求', 'ERP集中化项目'],
    ['需求评审', '430项目'],
    ['建设方案评审', '可视化大屏项目'],
    ['立项决策会', '资产管理系统扩容改造项目'],
    ['项目开工', '大数据架构升级项目'],
    ['收到业务需求', 'ERP集中化项目1'],
    ['需求评审', '430项目2'],
    ['建设方案评审', '可视化大屏项目3'],
    ['立项决策会', '资产管理系统扩容改造项目4'],
    ['合同签订', '大数据架构升级项目5'],
    ['收到业务需求', 'ERP集中化项目7'],
    ['需求评审', '430项目7'],
];
var yData = projectPhase.map(data => data[1]);

/**
 * 把数据的分类阶段转换成数值
 * @param arr
 * @returns {[]}
 */
function getBarData(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        for (var j = 0; j < allSubPhase.length; j++) {
            if (cur[0] === allSubPhase[j].name) {
                res.push([allSubPhase[j].order, cur[1]])
                break;
            }
        }
    }
    return res;
}

function toPercent(decimal) {
    return (decimal * 100).toFixed(4) + '%'
}

var option = {
    title: {
        text: ''
    },
    tooltip: {
        show: true,
        formatter: function(params) {
            if (params.seriesIndex > 0) {
                return null;
            }
            const phaseOrder = params.data[0];
            return params.data[1] + "："
                // 获取阶段名称
                +
                allSubPhase.find(phase => phaseOrder === phase.order).name;
        }
    },
    grid: [{
            top: 100,
            bottom: 101,
        },
        // 展示一级阶段
        {
            height: 50,
            top: 0
        },
        // 展示二级阶段
        {
            height: 50,
            top: 50
        },
        // 第四个网格没有实际数据，仅用于辅助展示网格线
        {
            top: 100,
            bottom: 101
        },
    ],
    xAxis: [{
            type: 'value',
            position: 'top',
            min: 0,
            max: 26,
            gridIndex: 0,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            }
        },
        {
            type: 'category',
            position: 'top',
            gridIndex: 1,
            axisLine: {
                show: false
            },
            zlevel: 1
        },
        {
            type: 'category',
            position: 'top',
            gridIndex: 2,
            axisLine: {
                show: false
            },
            zlevel: 2
        },
        // 第四个网格没有实际数据，仅用于辅助展示网格线
        {
            type: 'category',
            position: 'bottom',
            gridIndex: 3,
            data: allSubPhase.map(phase => phase.name),
            zlevel: 0,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: true,
                interval: 0,
                lineStyle: {
                    type: 'dotted'
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    yAxis: [{
            type: 'category',
            gridIndex: 0,
            data: yData,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            }
        },
        {
            type: 'value',
            gridIndex: 1,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        {
            type: 'value',
            gridIndex: 2,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        // 第四个网格没有实际数据，仅用于辅助展示网格线
        {
            type: 'value',
            gridIndex: 3,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
    ],
    series: [{
        type: 'bar',
        data: getBarData(projectPhase),
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                color: (params) => {
                    let colors = ['#4150d8', '#28bf7e', '#ed7c2f', '#f2a93b', '#f9cf36', '#4a5bdc', '#4cd698', '#f4914e', '#fcb75b', '#ffe180', '#b6c2ff', '#96edc1']
                    return colors[params.dataIndex]
                }
            }
        },
    }],
};

// 增加一级阶段
for (var i = 0; i < phaseParent.length; i++) {
    option.series.push({
        data: [{
            name: phaseParent[i].name,
            value: 1
        }],
        label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            textStyle: {
                color: '#fff',
                fontWeight: 'bold',
            }
        },
        type: 'bar',
        barGap: 0,
        barWidth: toPercent(phaseParent[i].children.length / all_phase_cnt),
        itemStyle: {
            color: phaseParent[i].color,
            borderColor: '#efefef',
            borderWidth: 1,
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    })
}
// 增加二级阶段
for (var i = 0; i < allSubPhase.length; i++) {
    var curPhase = allSubPhase[i];
    // 把二级阶段名分两行展示
    var phaseName = curPhase.name;
    var halfLen = phaseName.length / 2;
    var showName = phaseName.substr(0, halfLen) + '\n' + phaseName.substr(halfLen);
    option.series.push({
        data: [{
            name: showName,
            value: 1
        }],
        label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            textStyle: {
                fontSize: 10,
                lineHeight: 12,
                color: '#fff',
            }
        },
        type: 'bar',
        barGap: 0,
        barWidth: toPercent(1 / all_phase_cnt),
        itemStyle: {
            color: curPhase.color,
            borderColor: '#efefef',
            borderWidth: 1,
        },
        xAxisIndex: 2,
        yAxisIndex: 2
    })
}