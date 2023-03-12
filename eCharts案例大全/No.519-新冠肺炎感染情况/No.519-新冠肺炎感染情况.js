sourceData = [{
    name: '238例',
    value: 38,
    extData: [238, 'RGB(89,121,146)', 0, '沙特阿拉伯']
}, {
    name: '238例',
    value: 39,
    extData: [238, 'RGB(89,139,146)', 0, '智利']
}, {
    name: '250例',
    value: 40,
    extData: [250, 'RGB(91,166,161)', 0, '冰岛']
}, {
    name: '256例',
    value: 41.3,
    extData: [256, 'RGB(75,172,161)', 0, '巴林']
}, {
    name: '258例',
    value: 42.6,
    extData: [258, 'RGB(67,174,152)', 0, '爱沙尼亚']
}, {
    name: '260例',
    value: 43.9,
    extData: [260, 'RGB(90,186,164)', 0, '罗马尼亚']
}, {
    name: '272例',
    value: 45.2,
    extData: [272, 'RGB(68,159,128)', 0, '泰国']
}, {
    name: '286例',
    value: 46.5,
    extData: [286, 'RGB(74,176,122)', 0, '斯洛文尼亚']
}, {
    name: '287例',
    value: 47.8,
    extData: [287, 'RGB(57,187,91)', 0, '波兰']
}, {
    name: '307例',
    value: 49,
    extData: [307, 'RGB(38,197,79)', 0, '巴基斯坦']
}, {
    name: '313例',
    value: 50,
    extData: [313, 'RGB(54,200,99)', 0, '新加坡']
}, {
    name: '335例',
    value: 52,
    extData: [335, 'RGB(48,197,54)', 0, '卢森堡']
}, {
    name: '359例',
    value: 53,
    extData: [359, 'RGB(29,208,46)', 0, '芬兰']
}, {
    name: '366例',
    value: 54,
    extData: [366, 'RGB(29,225,51)', 0, '爱尔兰']
}, {
    name: '418例',
    value: 55,
    extData: [418, 'RGB(39,227,21)', 0, '希腊']
}, {
    name: '452例',
    value: 56,
    extData: [452, 'RGB(55,233,16)', 0, '卡塔尔']
}, {
    name: '522例',
    value: 57,
    extData: [522, 'RGB(122,241,18)', 0, '捷克']
}, {
    name: '529例',
    value: 58,
    extData: [529, 'RGB(136,219,40)', 0, '以色列']
}, {
    name: '529例',
    value: 59,
    extData: [529, 'RGB(195,222,41)', 0, '巴西']
}, {
    name: '642例',
    value: 60,
    extData: [642, 'RGB(221,210,41)', 0, '葡萄牙']
}, {
    name: '727例',
    value: 62,
    extData: [727, 'RGB(221,184,41)', 0, '加拿大']
}, {
    name: '900例',
    value: 64,
    extData: [900, 'RGB(221,150,39)', 0, '马来西亚']
}, {
    name: '日本',
    value: 66,
    extData: [924, 'RGB(239,161,37)', 0, '']
}, {
    name: '丹麦',
    value: 68,
    extData: [1132, 'RGB(239,153,16)', 0, '']
}, {
    name: '瑞典',
    value: 70,
    extData: [1301, 'RGB(240,131,38)', 0, '']
}, {
    name: '比利时',
    value: 72,
    extData: [1486, 'RGB(243,123,7)', 0, '']
}, {
    name: '挪威',
    value: 74,
    extData: [1562, 'RGB(213,105,48)', 0, '']
}, {
    name: '奥地利',
    value: 76,
    extData: [1646, 'RGB(219,94,30)', 0, '']
}, {
    name: '荷兰',
    value: 80,
    extData: [2051, 'RGB(219,81,32)', 0, '']
}, {
    name: '英国',
    value: 89,
    extData: [2626, 'RGB(234,69,13)', 0, '']
}, {
    name: '瑞士',
    value: 94,
    extData: [3115, 'RGB(216,62,8)', 0, '']
}, {
    name: '韩国',
    value: 97,
    extData: [8565, 'RGB(229,74,18)', 0, '']
}, {
    name: '法国',
    value: 100,
    extData: [9134, 'RGB(232,52,35)', 0, '']
}, {
    name: '美国',
    value: 106,
    extData: [9458, 'RGB(218,38,21)', 0, '']
}, {
    name: '德国',
    value: 134,
    extData: [12327, 'RGB(209,17,16)', 12, '']
}, {
    name: '西班牙',
    value: 146,
    extData: [14769, 'RGB(224,10,46)', 92, '']
}, {
    name: '伊朗',
    value: 176,
    extData: [17361, 'RGB(200,13,66)', 107, '']
}, {
    name: '意大利',
    value: 226,
    extData: [36455, 'RGB(175,7,82)', 36, '']
}]




graphicData = [{
    type: 'group',
    left: 'center',
    top: '70%',
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
graphic_total_Text = [{
    type: 'text',
    right: -220,
    bottom: 450,
    z: 100,
    style: {
        fill: 'black',
        text: '截至北京时间3月19日18时',
        font: 'bold 12px Microsoft YaHei',
        textAlign: 'right'
    }
}, {
    type: 'text',
    right: -220,
    bottom: 445,
    z: 100,
    style: {
        fill: 'black',
        //text: '除中国外超过120个国家',
        font: 'bold 18px Microsoft YaHei',
        textAlign: 'right',

    }
}, {
    type: 'rect',
    right: -225,
    bottom: 390,
    z: 100,
    shape: {
        width: 140,
        height: 30
    },
    style: {
        fill: 'red'

    }
}, {
    type: 'text',
    right: -220,
    bottom: 395,
    z: 100,
    style: {
        fill: 'white',
        text: '累计确诊118101例',
        font: 'bold 15px Microsoft YaHei',
        textAlign: 'right',

    }
}, {
    type: 'rect',
    right: -225,
    bottom: 355,
    z: 100,
    shape: {
        width: 130,
        height: 30
    },
    style: {
        fill: 'red'

    }
}, {
    type: 'text',
    right: -220,
    bottom: 360,
    z: 100,
    style: {
        fill: 'white',
        text: '累计死亡5715例',
        font: 'bold 15px Microsoft YaHei',
        textAlign: 'right'
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
            lineStyle: {
                type: "dashed"
            }
        }
        var curRadius = (i + 0.5) * stepRadius
        // var curArclen = 1
        var curScale = i > 21 ? minScale + stepScale * (i) : 0.6 + stepScale * (i)
        var startR = i > 21 ? sourceData[i]["value"] * 450 / sourceData.slice(-1)[0]["value"] * 0.95 : ((
            sourceData[i]["value"] * 460 / sourceData.slice(-1)[0]["value"] + 20))
        var curR = [startR, startR * (i > 33 ? 0.95 : (i > 21 ? 0.75 : 1.12)), startR * (i > 33 ? 0.95 : (i >
            21 ? 0.8 : 1.17)) * (i > 33 ? 0.95 :
            (i > 21 ? 0.8 : 1.17))]
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
            curChild.rotation = i > 33 ? -((i + 0.5) / sourceData.length * 2 * Math.PI) : (i <= 21 ? -((i +
                0.5) / sourceData.length * 2 * Math.PI) + Math.PI / 2 : 0)
            curChild.scale = [curScale, curScale]
            curgraphicText = JSON.parse(JSON.stringify(graphicText[j]))
            curgraphicText.style.text = j == 0 ? sourceData[i]["name"] : (j == 1 ? (i > 21 ? sourceData[i][
                "extData"
            ][0] + "例" : "") : (j == 2 && i > 33 ? (sourceData[i][
                "extData"
            ][2] + "例") : (i <= 21 ? sourceData[i][
                "extData"
            ][3] : "")))
            if (i <= 21) {
                curgraphicText.style.fill = "black"
                curgraphicText.style.textAlign = "left"
            }
            curChild.children = [curgraphicText]
            curChilds.push(curChild)
            graphicData[0].children.push(curChild)
        }
        console.log(i, sourceData[i]["name"], curRadius, curR, curPositions)
    }
    for (var m = 0; m < 3 * 2; m++) {
        var cur_total_text = graphic_total_Text[m]
        graphicData[0].children.push(cur_total_text)
    }
    return sourceData
}



option = {
    title: {
        //text: '新冠肺炎全球疫情形势(仿人民日报)',
        //subtext: '优化算法，自动排列标签文本',
        left: 'center',
        textStyle: {
            color: "red",
            fontSize: 10
        },
        backgroundColor: "rgb(254,248,239)",
        top: "3%"
    },
    tooltip: {
        show:false
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
        name: '面积模式',
        type: 'pie',
        radius: [20, 450],
        center: ['50%', '70%'],
        label: {
            show: true
        },
        roseType: 'area',
        data: convertData1(),
        rich: {
            a: {
                color: 'white',
                lineHeight: 10
            },
            b: {
                backgroundColor: {
                    image: 'xxx/xxx.jpg'
                },
                height: 40
            },
            x: {
                fontSize: 18,
                fontFamily: 'Microsoft YaHei',
                borderColor: '#449933',
                borderRadius: 4
            }
        }
    },
    {
            name:'alpha1',
            type:'pie',
            radius: [20,40],
            center: ['50%', '70%'],
            itemStyle: {
                    normal:{color: 'rgba(255, 255, 255, 0.2)'}
    },
            data:[
                {value:10,name:''}
            ]
        },
        {
            name:'alpha2',
            type:'pie',
            radius: [20,60],
            center: ['50%', '70%'],
            itemStyle: {
                    color: 'rgba(255, 255, 255, 0.2)',
    },
            data:[
                {value:10,name:''}
            ]
        }
    ]
};