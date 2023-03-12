var echart2Data = [
    {name: '临控证明', num: 5741},
    {name: '实有人口未登记', num: 5741},
    {name: '涉毒人员', num: 5741},
    {name: '党员人员', num: 5741},
    {name: '常住人口', num: 5741},
    {name: '流动人口', num: 5741},
    {name: '在逃人员', num: 5741}]
option = {
  backgroundColor: '#0A2E5D',
    "normal": {
        "top": 200,
        "left": 300,
        "width": 500,
        "height": 400,
        "zIndex": 6,
        "backgroundColor": ""
    },
    "color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
    "tooltip": {
        "show": true,
        "trigger": "item"
    },
    "radar": {
        "center": ["50%", "50%"],
        "radius": "70%",
        "startAngle": 90,
        "splitNumber": 4,
        "shape": "circle",
        splitArea: {
            areaStyle: {
            	 color: [
                         'rgba(9,66,94, 0.5)', 'rgba(22,85,97, 0.7)',
                         'rgba(23,89,103, 0.7)', 'rgba(25,92,109, 0.7)'
                     ].reverse()
            }
        },
        axisLabel: {
            show: false,
            fontSize: 18,
            color: "#fff",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#21726f"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#0c4b64"
            }
        },
        name: {
            textStyle: {
                color: '#fff',
                fontSize:'13',
                borderRadius: 3,
                padding: [0, 0, 0, 0]
            },
            rich: {
                a: {
                    width: 55,
                    height: 26,
                    color: '#02e28b',
                    align: 'center',
                    fontSize: '22',
                }
            },
            formatter: function(params) {
                var str = '';
                return  echart2Data[0].num
                // switch (params) {
                //     case '临控证明':
                //         str = {a| echart2Data[0].num }
                //         // str = params + '{a|' + echart2Data[0].num + '}';
                //         break;
                //     case '实有人口未登记':
                //         str = params + '{a|' + echart2Data[0].num + '}';
                //         break;
                //     case '涉毒人员':
                //         str = params + '{a|' + echart2Data[0].num + '}';
                //         break;
                //     case '党员人员':
                //         str = params + '{a|' + echart2Data[0].num + '}';
                //         break;
                //     case '常住人口':
                //         str = params + '{a|' + echart2Data[0].num + '}';
                //         break;
                //     case '流动人口':
                //         str = params + '{a|' + echart2Data[0].num + '}';
                //         break;
                //     case '在逃人员':
                //         str = params + '{a|' + echart2Data[0].num + '}';
                //         break;
                // }
                // return str
            },
            lineHeight: 30,
        },
        "indicator": [{
            "name": "临控证明",
            // "text": '5741',
            "max": 7000,
        }, {
            "name": "实有人口未登记",
            "max": 7000
        }, {
            "name": "涉毒人员",
            "max": 7000
        }, {
            "name": "党员人员",
            "max": 7000
        }, {
            "name": "常住人口",
            "max": 7000
        }, {
            "name": "流动人口",
            "max": 7000
        }, {
            "name": "在逃人员",
            "max": 7000
        }]
    },
    "series": [{
        "name": "笔录比中人员",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "areaStyle": {
            "normal": {
                "color": "rgba(75, 187, 111, 0.9)"
            }
        },
        itemStyle:{
            color: 'rgba(0, 255, 255, 1)',
            // borderColor:'rgba(0, 255, 255, 1, 0.1)',
            // borderWidth: 10,
            shadowColor: 'rgba(0, 255, 255, 1)',
            shadowBlur: 8
        },
        "lineStyle": {
            "normal": {
                "type": "dashed",
                "color": "rgba(0, 255, 255, 1)",
                "width": 2
            }
        },
        "data": [
            [5800, 3800, 5600, 5100, 5500, 4400, 5000]
        ]
    }, 
    ]
};