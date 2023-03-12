var data = [
    {
        name: "钓鱼",
        itemStyle: {
            color:'#f3aa02',
        },
        children: [{
            name: "政府",
            value: 1,
            itemStyle: {
                colorSaturation: 0.4,
                colorAlpha:0.8
            },
        }, {
            name: "金融",
            value: 1,
            itemStyle: {colorSaturation:  0.45,},
        }, {
            name: "科研",
            value: 1,
            itemStyle: {colorSaturation:  0.5,},
        },{
            name: "金融",
            value: 1,
            itemStyle: {colorSaturation:  0.55,},
        }, {
            name: "金融",
            value: 1,
            itemStyle: {colorSaturation:  0.6,},
        }, {
            name: "金融",
            value: 1,
            itemStyle: {colorSaturation: 0.65,},
        }, {
            name: "金融",
            value: 1,
            itemStyle: {colorSaturation:  0.7,},
        }, {
            name: "金融",
            value: 1,
            itemStyle: {colorSaturation:  0.75,},
        }, {
            name: "金融",
            value: 1,
            itemStyle: {colorSaturation:0.8,}
        }, ]
    },
    {
        name: "APT攻击",
        children: [{
            name: "政府",
            value: 1,
        }, {
            name: "银行",
            value: 1,
        }, {
            name: "证券",
            value: 1,
        },{
            name: "金融",
            value: 1,
        }, {
            name: "金融",
            value: 1,
        }, {
            name: "金融",
            value: 1,
        }, {
            name: "金融",
            value: 1,
        }, {
            name: "金融",
            value: 1,
        }, {
            name: "金融",
            value: 1,
        }, ]
    },
    {
        name: "DDOS攻击",
        children: [{
            name: "教育",
            value: 1,
        }, {
            name: "科研",
            value: 1,
        }, {
            name: "金融",
            value: 1
        },{
            name: "金融",
            value: 1,
        }, {
            name: "金融",
            value: 1,
        }, {
            name: "金融",
            value: 1,
        }, {
            name: "金融",
            value: 1,
        }, {
            name: "金融",
            value: 1,
        }, {
            name: "金融",
            value: 1,
        }, ]
    }
]
// var modes = ['2012Budget', '2011Budget', 'Growth'];
option = {
    title: {
            left: 0,
            top: "4%",
            text:['{c|}' + '{d|受攻击类型分布}'],
            // text:[],
            textStyle: {
                rich: {
                    c: {
                        color: '#2196f3',
                        fontSize: 20,
                        fontWeight: 'bold',
                        width: 4,
                        height: 15,
                        backgroundColor: '#2196f3',

                    },
                    d: {
                        color: '#3e4956',
                        fontWeight:'bold',
                        fontSize: 14,
                        padding: [0, 0, 0, 10],
                    },
                }
            },
        },
    tooltip: {},
    series: [{
        name: '全部',
        type: 'treemap',
        visibleMin: 300,
        data: data,
        leafDepth: 2, //呈现层级，若为1加载时仅展开一层，接下来的每一层通过单击进入，如上面的效果图所示，  
        //每一层级呈现的样式  
        label: {
            show:false,
            fontSize: 16,
            formatter: function(params) {
                var arr = [
                    params.name,
                    params.value + '次'
                ];
                return arr.join('\n');
            }
        },
        levels: [
            {
                // colorSaturation: [0.2, 0.8],
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        gapWidth: 1
                    }
                }
            },
            {
                colorSaturation: [0.3, 0.7],
                colorMappingBy:'id',
                itemStyle: {
                    normal: {
                        // borderColorSaturation: 0.7,
                        gapWidth: 2,
                        borderWidth: 2
                    }
                }
            },
        ]
    }]
};