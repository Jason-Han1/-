myChart.setOption({
    title: {
        text: '物流临保概况',
        subtext: '2017/05',
        left: 'leafDepth'
    },
    tooltip: {
         formatter: '{b}:<br />营业收入： {c}万元'
    },
    color: ['rgb(100,200,300)'],
    series: [{
        name: '销售收入',
        type: 'treemap',
        visibleMin: 100,
        data: [ // 注意，最外层是一个数组，而非从某个根节点开始。
            {
                value: 2000,
                children: [{
                        value: 400, // value字段的值，对应到面积大小。
                        // 也可以是数组，如 [2323, 43, 55]，则数组第一项对应到面积大小。
                        // 数组其他项可以用于额外的视觉映射，详情参见 series-treemp.levels。
                        id: 'someid-1', // id 不是必须设置的。
                        // 但是如果想使用 API 来改变某个节点，需要用 id 来定位。
                        name: '湖南大区', // 显示在矩形中的描述文字。
                        children: [
                            {   value: 150,
                                id: 'someid-31',
                                name: '长沙',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '常德',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '湘潭',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '株洲',
                            },{
                                value: 20,
                                id: 'someid-31',
                                name: '怀化',
                            }, 
                            // ...
                        ],
                        label: { // 此节点特殊的 label 定义（如果需要的话）。
                            // ...         // label的格式参见 series-treemap.label。
                        },
                        itemStyle: { // 此节点特殊的 itemStyle 定义（如果需要的话）。
                            // ...         // label的格式参见 series-treemap.itemStyle。
                        }
                    }, {
                        value: 300,
                        id: 'someid-2',
                        name: '湖北大区',
                        children: [
                            {   value: 150,
                                id: 'someid-31',
                                name: '武汉',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '咸宁',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '鄂州',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '荆州',
                            },{
                                value: 20,
                                id: 'someid-31',
                                name: '宜昌',
                            },

                            // ...
                        ],

                    }, {
                        value: 200,
                        id: 'someid-3',
                        name: '四川大区',
                        children: [
                            {   value: 150,
                                id: 'someid-31',
                                name: '成都',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '德阳',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '广安',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '达州',
                            },{
                                value: 20,
                                id: 'someid-31',
                                name: '绵阳',
                            }, 
                            // ...
                        ],

                    }, {
                        value: 100,
                        id: 'someid-4',
                        name: '云南大区',
                        children: [
                            {   value: 150,
                                id: 'someid-31',
                                name: '昆明',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '曲靖',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '玉溪',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '大理',
                            },{
                                value: 20,
                                id: 'someid-31',
                                name: '腾冲',
                            }, 
                            // ...
                        ],

                    }, {
                        value: 300,
                        id: 'someid-2',
                        name: '广东大区',
                        children: [
                            {   value: 150,
                                id: 'someid-31',
                                name: '广州',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '深圳',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '珠海',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '东莞',
                            },{
                                value: 20,
                                id: 'someid-31',
                                name: '惠州',
                            },

                            // ...
                        ],

                    }, {
                        value: 200,
                        id: 'someid-2',
                        name: '广西大区',
                        children: [
                            {   value: 150,
                                id: 'someid-31',
                                name: '武汉',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '咸宁',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '鄂州',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '荆州',
                            },{
                                value: 20,
                                id: 'someid-31',
                                name: '宜昌',
                            },

                            // ...
                        ],

                    }, {
                        value: 200,
                        id: 'someid-2',
                        name: '江西大区',
                        children: [
                            {   value: 150,
                                id: 'someid-31',
                                name: '南昌',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '九江',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '抚州',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '上饶',
                            },{
                                value: 20,
                                id: 'someid-31',
                                name: '宜春',
                            },

                            // ...
                        ],

                    }, {
                        value: 300,
                        id: 'someid-2',
                        name: '福建大区',
                        children: [
                            {   value: 150,
                                id: 'someid-31',
                                name: '福州',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '泉州',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '厦门',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '漳州',
                            },{
                                value: 20,
                                id: 'someid-31',
                                name: '莆田',
                            },

                            // ...
                        ],

                    }, {
                        value: 300,
                        id: 'someid-2',
                        name: '河南大区',
                        children: [
                            {   value: 150,
                                id: 'someid-31',
                                name: '郑州',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '开封',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '洛阳',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '平顶山',
                            },{
                                value: 20,
                                id: 'someid-31',
                                name: '安阳',
                            },

                            // ...
                        ],

                    }, {
                        value: 150,
                        id: 'someid-2',
                        name: '河北大区',
                        children: [
                            {   value: 150,
                                id: 'someid-31',
                                name: '石家庄',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '张家口',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '唐山',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '秦皇岛',
                            },{
                                value: 20,
                                id: 'someid-31',
                                name: '邯郸',
                            },

                            // ...
                        ],

                    }, {
                        value: 50,
                        id: 'someid-2',
                        name: '贵州大区',
                        children: [
                            {   value: 150,
                                id: 'someid-31',
                                name: '贵阳',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '兴义',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '六盘水',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '遵义',
                            },{
                                value: 20,
                                id: 'someid-31',
                                name: '安顺',
                            },

                            // ...
                        ],

                    }


                ]
            },
            // {
            //     value: [23, 59, 12]
            //     // 如果没有children，可以不写
            // },
            // ...
        ],
        leafDepth: 2,
        levels: [{
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 10,
                    gapWidth: 4
                }
            }
        }, {
            colorSaturation: [0.3, 0.6],
            itemStyle: {
                normal: {
                    borderColorSaturation: 0.7,
                    gapWidth: 5,
                    borderWidth: 2
                }
            }
        }, {
            colorSaturation: [0.3, 0.5],
            itemStyle: {
                normal: {
                    borderColorSaturation: 0.6,
                    gapWidth: 1
                }
            }
        }, {
            colorSaturation: [0.3, 0.5]
        }]
    }]
})



// });