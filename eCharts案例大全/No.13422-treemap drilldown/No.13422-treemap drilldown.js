var data = [{
        name: "钓鱼",
        children: [{
            name: "政府",
            value: 6,
        }, {
            name: "金融",
            value: 1,
        }, {
            name: "科研",
            value: 1
        }]
    },
    {
        name: "病毒",
        children: [{
            name: "教育",
            value: 2
        }, {
            name: "媒体",
            value: 1
        }, {
            name: "科研",
            value: 1
        }]
    },
    {
        name: "APT攻击",
        children: [{
            name: "政府",
            value: 3,
        }, {
            name: "金融",
            children: [{
                name: "银行",
                value: 3,
            }, {
                name: "证券",
                value: 1,
            }]
        }]
    },
    {
        name: "DDOS攻击",
        children: [{
            name: "教育",
            value: 5,
        }, {
            name: "科研",
            value: 3,
        }, {
            name: "金融",
            value: 2
        }]
    }
]
var modes = ['2012Budget', '2011Budget', 'Growth'];
option = {
    title: {
        text: 'treemap drilldown',
        subtext: '2018/06',
        left: 'leafDepth'
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
            fontSize: 16,
            formatter: function(params) {
                var arr = [
                    params.name,
                    params.value + '次'
                ];
                return arr.join('\n');
            }
        },
        levels: [{
                itemStyle: {
                    normal: {
                        borderColor: '#555',
                        borderWidth: 4,
                        gapWidth: 4
                    }
                }
            },
            {
                colorSaturation: [0.3, 0.6],
                itemStyle: {
                    normal: {
                        borderColorSaturation: 0.7,
                        gapWidth: 2,
                        borderWidth: 2
                    }
                }
            },
            {
                colorSaturation: [0.3, 0.5],
                itemStyle: {
                    normal: {
                        borderColorSaturation: 0.6,
                        gapWidth: 1
                    }
                }
            },
            {
                colorSaturation: [0.3, 0.5]
            }
        ]
    }]
};