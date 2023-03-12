var sysT = {
    "用采": '#2D9BFF',
    "营销系统": '#39BFFF',
    "ERP": '#76C2FF',
    "财务管控": '#5F57FC',
    "PMS": '#2D9BFF',
    "近源层_用采": '#92FFFF',
    "近源层_营销": '#ACFF96',
    "近源层_ERP": '#7583FF',
    "近源层_PMS": '#73C3FF',
    "近源层_财务管控": '#5477FE',
    "资产域": '#5F57F9',
    "客户域": '#7982FE',
    "财务域": '#4F78FE',
    "标准区_用采": '#2B9DFF',
    "标准区_营销系统": '#92FFFF',
    "标准区_ERP": '#38C0FF',
    "标准区_财务管控": '#74C3FF',
    "标准区_PMS": '#AAFF95',
    "分析层自建宽表": '#73C3FF'
}

var nodes = [
    {
        "name": "用采"
    },
    {
        "name": "营销系统"
    },
    {
        "name": "ERP"
    },
    {
        "name": "财务管控"
    },
    {
        "name": "PMS"
    },
    {
        "name": "近源层_用采"
    },
    {
        "name": "近源层_营销"
    },
    {
        "name": "近源层_ERP"
    },
    {
        "name": "近源层_PMS"
    },
    {
        "name": "近源层_财务管控"
    },
    {
        "name": "资产域"
    },
    {
        "name": "客户域"
    },
    {
        "name": "财务域"
    },
    {
        "name": "标准区_用采"
    },
    {
        "name": "标准区_营销系统"
    },
    {
        "name": "标准区_ERP"
    },
    {
        "name": "标准区_财务管控"
    },
    {
        "name": "标准区_PMS"
    },
    {
        "name": "分析层自建宽表"
    }
];
var links = [
    {
        "source": "用采",
        "target": "近源层_用采",
        "value": 500
    },
    {
        "source": "营销系统",
        "target": "近源层_营销",
        "value": 958
    },
    {
        "source": "ERP",
        "target": "近源层_ERP",
        "value": 1080
    },
    {
        "source": "财务管控",
        "target": "近源层_财务管控",
        "value": 2627
    },
    {
        "source": "PMS",
        "target": "近源层_PMS",
        "value": 2109
    },
    {
        "source": "近源层_用采",
        "target": "标准区_用采",
        "value": 355
    },
    {
        "source": "近源层_营销",
        "target": "标准区_营销系统",
        "value": 958
    },
    {
        "source": "近源层_ERP",
        "target": "标准区_ERP",
        "value": 1080
    },
    {
        "source": "近源层_PMS",
        "target": "标准区_PMS",
        "value": 2109
    },
    {
        "source": "近源层_财务管控",
        "target": "标准区_财务管控",
        "value": 2627
    },
    {
        "source": "近源层_用采",
        "target": "客户域",
        "value": 121
    },
    {
        "source": "近源层_营销",
        "target": "客户域",
        "value": 524
    },
    {
        "source": "近源层_ERP",
        "target": "资产域",
        "value": 12
    },
    {
        "source": "近源层_ERP",
        "target": "财务域",
        "value": 80
    },
    {
        "source": "近源层_PMS",
        "target": "资产域",
        "value": 536
    },
    {
        "source": "近源层_PMS",
        "target": "综合域",
        "value": 200
    },
    {
        "source": "近源层_财务管控",
        "target": "财务域",
        "value": 88
    },
    {
        "source": "资产域",
        "target": "UEP两级数据贯通",
        "value": 524
    },
    {
        "source": "客户域",
        "target": "UEP两级数据贯通",
        "value": 608
    },
    {
        "source": "财务域",
        "target": "UEP两级数据贯通",
        "value": 153
    },
    {
        "source": "标准区_用采",
        "target": "UEP两级数据贯通",
        "value": 420
    },
    {
        "source": "标准区_营销系统",
        "target": "UEP两级数据贯通",
        "value": 958
    },
    {
        "source": "标准区_ERP",
        "target": "UEP两级数据贯通",
        "value": 1107
    },
    {
        "source": "标准区_财务管控",
        "target": "UEP两级数据贯通",
        "value": 2628
    },
    {
        "source": "标准区_PMS",
        "target": "UEP两级数据贯通",
        "value": 2109
    },
    {
        "source": "标准区_ERP",
        "target": "智慧供应链",
        "value": 4
    },
    {
        "source": "标准区_PMS",
        "target": "PIS项目",
        "value": 2107
    },
    {
        "source": "标准区_用采",
        "target": "PIS项目",
        "value": 418
    },
    {
        "source": "标准区_营销系统",
        "target": "PIS项目",
        "value": 1252
    },
    {
        "source": "标准区_PMS",
        "target": "供电服务",
        "value": 200
    },
    {
        "source": "标准区_财务管控",
        "target": "智慧供应链",
        "value": 2621
    },
    {
        "source": "标准区_用采",
        "target": "线变关系应用",
        "value": 418
    },
    {
        "source": "近源层_ERP",
        "target": "分析层自建宽表",
        "value": 300
    },
    {
        "source": "近源层_营销",
        "target": "分析层自建宽表",
        "value": 418
    },
    {
        "source": "近源层_用采",
        "target": "分析层自建宽表",
        "value": 418
    },
    {
        "source": "近源层_财务管控",
        "target": "分析层自建宽表",
        "value": 418
    },
    {
        "source": "近源层_PMS",
        "target": "分析层自建宽表",
        "value": 418
    },
    {
        "source": "分析层自建宽表",
        "target": "供电服务",
        "value": 185
    },
    {
        "source": "分析层自建宽表",
        "target": "数据挖掘展示",
        "value": 32
    },
    {
        "source": "分析层自建宽表",
        "target": "营销综合应用",
        "value": 30
    },
    {
        "source": "分析层自建宽表",
        "target": "ERP多维精益",
        "value": 14
    },
    {
        "source": "分析层自建宽表",
        "target": "数据超市场景",
        "value": 4
    },
    {
        "source": "分析层自建宽表",
        "target": "民企清欠场景",
        "value": 1
    }
];



var dataF = [];
var colorList = [];

for (var key in sysT) {
    colorList.push({
        name: key,
        itemStyle: {
            color: sysT[key]
        }
    })
}

for (var i = 0; i < links.length; i++) {
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: sysT[links[i].source]
    }, {
        offset: 1,
        color: sysT[links[i].target]
    }])
    dataF.push({
        source: links[i].source,
        target: links[i].target,
        value: links[i].value,
        lineStyle: {
            color: color
        }
    })
}
option = {

    series: [{
        type: 'sankey',
        data: colorList,
        links: dataF,
        focusNodeAdjacency: 'allEdges',
        itemStyle: {
            borderWidth: 1,
            borderColor: '#aaa'
        },
        lineStyle: {
            color: 'source',
            curveness: 0.5
        }
    }]

}