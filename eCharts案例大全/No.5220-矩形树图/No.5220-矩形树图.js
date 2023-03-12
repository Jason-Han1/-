var fontSize = (val) => {
    return val
}
let formatUtil = echarts.format
let json = [{
    "name": "iPhone 7",
    "value": 9
}, {
    "name": "iPhone 7 Plus",
    "value": 8
}, {
    "name": "iPhone 11",
    "value": 8
}, {
    "name": "iPhone 6S Plus",
    "value": 7
}, {
    "name": "OPPO R11",
    "value": 7
}, {
    "name": "iPhone X",
    "value": 7
}, {
    "name": "iPhone 8",
    "value": 7
}, {
    "name": "华为 Mate 9",
    "value": 6
}, {
    "name": "华为 P10 Plus",
    "value": 6
}, {
    "name": "华为 荣耀 V9",
    "value": 5
}, {
    "name": "iPhone XR",
    "value": 5
}, {
    "name": "华为 荣耀 8",
    "value": 4
}, {
    "name": "小米 6",
    "value": 3
}, {
    "name": "iPhone 6",
    "value": 3
}, {
    "name": "vivo X9s",
    "value": 3
}, {
    "name": "OPPO R9s Plus",
    "value": 3
}, {
    "name": "华为 P10",
    "value": 3
}, {
    "name": "华为 荣耀 V10",
    "value": 3
}, {
    "name": "华为 荣耀 9",
    "value": 3
}, {
    "name": "华为 P20",
    "value": 3
}, {
    "name": "魅族 16X",
    "value": 2
}, {
    "name": "华为 P30",
    "value": 2
}, {
    "name": "vivo X9",
    "value": 2
}, {
    "name": "iPhone XS MAX",
    "value": 2
}, {
    "name": "华为 nova 2s",
    "value": 2
}, {
    "name": "华为 Mate 20 Pro",
    "value": 2
}, {
    "name": "华为 Mate 10",
    "value": 2
}, {
    "name": "小米 6X",
    "value": 2
}, {
    "name": "华为 荣耀 9X",
    "value": 2
}, {
    "name": "华为 荣耀 10",
    "value": 2
}, {
    "name": "OPPO R9s",
    "value": 2
}, {
    "name": "LIO-AL00",
    "value": 2
}, {
    "name": "OPPO A9X",
    "value": 1
}, {
    "name": "华为 荣耀 Play",
    "value": 1
}, {
    "name": "小米 8",
    "value": 1
}, {
    "name": "OPPO PCLM10",
    "value": 1
}, {
    "name": "华为 畅享 9S",
    "value": 1
}, {
    "name": "Nubia 红魔 Mars",
    "value": 1
}, {
    "name": "小米 4",
    "value": 1
}, {
    "name": "三星 Galaxy N10",
    "value": 1
}, {
    "name": "Realme X 青春版",
    "value": 1
}, {
    "name": "小米 8 Pro",
    "value": 1
}, {
    "name": "华为 LIO-AN00",
    "value": 1
}, {
    "name": "vivo Xplay 5A",
    "value": 1
}, {
    "name": "vivo X9 Plus",
    "value": 1
}, {
    "name": "RMX1971",
    "value": 1
}, {
    "name": "荣耀 9i",
    "value": 1
}, {
    "name": "金立 S9L",
    "value": 1
}, {
    "name": "vivo iQOO",
    "value": 1
}, {
    "name": "小米 MIX 2S",
    "value": 1
}, {
    "name": "vivo X9L",
    "value": 1
}, {
    "name": "OPPO R17",
    "value": 1
}, {
    "name": "华为 荣耀 畅玩 7X",
    "value": 1
}, {
    "name": "华为 畅享 9 Plus",
    "value": 1
}, {
    "name": "华为 荣耀 9i",
    "value": 1
}, {
    "name": "华为 P30 Pro",
    "value": 1
}, {
    "name": "坚果 Pro",
    "value": 1
}, {
    "name": "三星 Galaxy Note 9",
    "value": 1
}, {
    "name": "vivo NEX",
    "value": 1
}, {
    "name": "iPhone SE",
    "value": 1
}, {
    "name": "OPPO R11 Plus",
    "value": 1
}, {
    "name": "vivo X27 Pro",
    "value": 1
}, {
    "name": "魅族 16th",
    "value": 1
}, {
    "name": "小米 5S",
    "value": 1
}, {
    "name": "iPhone 8 Plus",
    "value": 1
}, {
    "name": "华为 麦芒 5",
    "value": 1
}, {
    "name": "华为 nova 3i",
    "value": 1
}, {
    "name": "vivo Z3",
    "value": 1
}, {
    "name": "VIVO X9 L",
    "value": 1
}, {
    "name": "三星 Galaxy S10",
    "value": 1
}, {
    "name": "华为 荣耀 20",
    "value": 1
}, {
    "name": "华为 nova 3",
    "value": 1
}, {
    "name": "OPPO R11s",
    "value": 1
}, {
    "name": "华为 荣耀 畅玩 5A",
    "value": 1
}, {
    "name": "华为 Nova 5 Pro",
    "value": 1
}, {
    "name": "金立 S10L",
    "value": 1
}, {
    "name": "华为 荣耀 10 Lite",
    "value": 1
}, {
    "name": "小天才 Z3",
    "value": 1
}, {
    "name": "三星 Galaxy S8+",
    "value": 1
}, {
    "name": "OPPO A59s",
    "value": 1
}, {
    "name": "红米 Note 8 Pro",
    "value": 1
}, {
    "name": "华为 荣耀 畅玩 7A",
    "value": 1
}, {
    "name": "华为 nova",
    "value": 1
}, {
    "name": "三星 Galaxy S8",
    "value": 1
}, {
    "name": "vivo Y93",
    "value": 1
}, {
    "name": "vivo X9 Plus L",
    "value": 1
}, {
    "name": "一加 6T",
    "value": 1
}, {
    "name": "华为 nova 2 Plus",
    "value": 1
}, {
    "name": "vivo X9i",
    "value": 1
}, {
    "name": "华为 荣耀 畅玩 6X",
    "value": 1
}, {
    "name": "一加 6",
    "value": 1
}, {
    "name": "LG Nexus 5",
    "value": 1
}, {
    "name": "vivo S1",
    "value": 1
}]
let data = [{
    value: 170,
    children: json
}]
option = {
    backgroundColor: '#012248',
    color: [
        "#2C58A6"
    ],
    tooltip: {
        formatter: (info)=>{
            let value = info.value
            let treePathInfo = info.treePathInfo
            let treePath = []

            for (let i = 1; i < treePathInfo.length; i++) {
                treePath.push(treePathInfo[i].name)
            }

            return [
                '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join(' - ')) + '</div>',
                '数量: ' + formatUtil.addCommas(value),
            ].join('')
        }
    },
    series: [{
        name: '型号',
        type: 'treemap',
        itemStyle: {
            normal: {
                // borderColor: '#2C58A6',
            }
        },
        label: {
            fontSize: fontSize(15)
        },
        levels: [{
                itemStyle: {
                    normal: {
                        borderColor: '#ffffff',
                        borderWidth: 0,
                        gapWidth: 0,
                    }
                },
            },
            {
                colorAlpha: [0.75, 0.90],
                colorSaturation: [0.30, 0.40],
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        gapWidth: 0,
                        // borderColorSaturation: 0.3,
                    }
                },
            }
        ],
        width: '90%',
        height: '90%',
        leafDepth: 2,
        data: data
    }]
}