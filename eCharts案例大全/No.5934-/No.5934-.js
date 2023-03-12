sourceData = [{
        'name': '香港特别行政区',
        'value': 40,
        'extData': [1070, '#479c7f', 0, '']
    },
    {
        'name': '天津市',
        'value': 51,
        'extData': [2105, '#48af54', 0, '']
    },
    {
        'name': '上海市',
        'value': 59,
        'extData': [2965, '#53b440', 0, '']
    },
    {
        'name': '甘肃省',
        'value': 63,
        'extData': [3375, '#67b52d', 0, '']
    },

    {
        'name': '吉林省',
        'value': 67,
        'extData': [3744, '#8cc13f', 0, '']
    },

    {
        'name': '内蒙古自治区',
        'value': 70,
        'extData': [4040, '#bbd337', 0, '']
    },


    {
        'name': '陕西省',
        'value': 81,
        'extData': [5174, '#d2b130', 0, '']
    },

    {
        'name': '辽宁省',
        'value': 93,
        'extData': [6317, '#da9c2d', 0, '']
    },

    {
        'name': '湖北省',
        'value': 95,
        'extData': [6583, '#dc9e31', 0, '']
    },

    {
        'name': '四川省',
        'value': 124,
        'extData': [9461, '#da9c2d', 0, '']
    },
    {
        'name': '江苏省',
        'value': 131,
        'extData': [10140, '#ee5388', 0, '']
    },

    {
        'name': '广东省',
        'value': 152,
        'extData': [12260, '#f62f90', 0, '']
    }
]


graphicData = [{
    type: 'group',
    left: 'center',
    top: '60%',
    bounding: 'raw', //重要，否则内容无法超过组
    z: 100,
    children: []
}]
graphicScatter = {
    type: 'circle',
    shape: {
        r: 2
    },
    style: {
        fill: 'white'
    },
    z: 100
}
graphicText = [{
    type: 'text',
    // left: 'center',
    // top: 10,
    z: 100,
    style: {
        fill: 'white',
        text: '韩国',
        font: 'bold 16px Microsoft YaHei',
        textAlign: 'center'
    }
}, {
    type: 'text',
    // left: 'center',
    // top: 40,
    z: 100,
    style: {
        fill: 'white',
        text: '5766例',
        font: 'bold 14px Microsoft YaHei',
        textAlign: 'center',

    }
}, {
    type: 'text',
    // left: 'center',
    // top: 70,
    z: 100,
    style: {
        fill: 'white',
        text: '死亡36例',
        font: 'bold 12px Microsoft YaHei',
        textAlign: 'center'
    }
}]
graphicChildren = {
    type: 'group',
    // left: 'center',
    // top: 'center',
    position: [],
    bounding: 'raw',
    z: 100,
    children: []

}

function convertData1() {
    var maxScale = 1
    var minScale = 0.1
    var stepRadius = 2 * Math.PI / sourceData.length
    var stepScale = (maxScale - minScale) / sourceData.length
    for (var i = 0; i < sourceData.length; i++) {
        sourceData[i].itemStyle = {
            color: sourceData[i]["extData"][1],
            borderWidth: 0
        }
        sourceData[i].label = {
            show: i > 6 ? false : false,
            position: i <= 5 ? "outer" : "inside",
            // alignTo: "labelLine",
            align: "right",
            borderWidth: 1,
            borderColor: "red",
            alignTo: "edge",
            margin: 650,
            formatter: (a) => {
                return a.data.extData[3]
            }
        }
        sourceData[i].labelLine = {
            show: i > 6 ? false : false,
            // length: i <= 5 ? 5 * (i - 5) : 0,
            // length2: i <= 5 ? 0 : 0,
            lineStyle: {
                type: "dashed"
            }
        }
        var curRadius = (i + 0.5) * stepRadius
        // var curArclen = 1
        var curScale = i > 11 ? minScale + stepScale * (i) : 0.6 + stepScale * (i)
        var startR = i > 11 ? sourceData[i]["value"] * 450 / sourceData.slice(-1)[0]["value"] * 0.95 : ((
            sourceData[i]["value"] * 460 / sourceData.slice(-1)[0]["value"] + 20))
        var curR = [startR, startR * (i > 33 ? 0.95 : (i > 11 ? 0.75 : 1.12)), startR * (i > 33 ? 0.95 : (i >
            11 ? 0.8 : 1.17)) * (i > 33 ? 0.95 :
            (i > 11 ? 0.8 : 1.17))]
        var curPositions = []
        var curChilds = []
        var curCircles = []
        for (var j = 0; j < 3; j++) {
            var curX = Math.sin(curRadius) * curR[j]
            var curY = -Math.cos(curRadius) * curR[j]
            curPositions.push([curX, curY])
            var curChild = JSON.stringify(graphicChildren)
            curChild = JSON.parse(curChild)
            curChild.position = [curX, curY]
            curChild.rotation = i > 33 ? -((i + 0.5) / sourceData.length * 2 * Math.PI) : (i <= 11 ? -((i +
                0.5) / sourceData.length * 2 * Math.PI) + Math.PI / 2 : 0)
            curChild.scale = [curScale, curScale]
            curgraphicText = JSON.parse(JSON.stringify(graphicText[j]))
            curgraphicText.style.text = j == 0 ? sourceData[i]["name"] : (j == 1 ? (i > 11 ? sourceData[i][
                "extData"
            ][0] + "网点" : "") : (j == 2 && i > 33 ? (sourceData[i][
                "extData"
            ][2] + "个") : (i <= 11 ? sourceData[i][
                "extData"
            ][3] : "")))
            // curgraphicText.style.text = j == 0 ? sourceData[i]["name"] : (j == 1 ? i > 11 ? sourceData[i][
            //     "extData"
            // ][0] + "例" : "" : i > 33 ? sourceData[i][
            //     "extData"
            // ][2] + "例" : "")
            if (i <= 11) {
                curgraphicText.style.fill = "black"
                curgraphicText.style.textAlign = "left"
            }
            curChild.children = [curgraphicText]
            curChilds.push(curChild)
            // var curCircle = JSON.parse(JSON.stringify(graphicScatter))
            // curCircle.position = [curX, curY]
            // curCircles.push(curCircle)
            // graphicData[0].children.push(curCircle)
            graphicData[0].children.push(curChild)
        }
        console.log(i, sourceData[i]["name"], curRadius, curR, curPositions)
    }

    return sourceData
}



option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    graphic: graphicData,
    series: [{
        name: '银行网点个数',
        type: 'pie',
        radius: [20, 450],
        center: ['50%', '60%'],
        label: {
            show: true
        },
        roseType: 'area',
        data: convertData1(),
    }]
};