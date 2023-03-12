    function colorMappingChange(value) {
        var levelOption = getLevelOption(value);
        chart.setOption({
            series: [{
                levels: levelOption
            }]
        });
    }

    var formatUtil = echarts.format;

    function getLevelOption() {
        return [
            {
                itemStyle: {
                    borderColor: '#777',
                    borderWidth: 0,
                    gapWidth: 1
                },
                upperLabel: {
                    show: false
                }
            },
            {
                itemStyle: {
                    borderColor: '#555555',
                    borderWidth: 3,
                    gapWidth: 1
                },
                emphasis: {
                    itemStyle: {
                        borderColor: '#ddd'
                    }
                }
            },
            {
                colorSaturation: [0.35, 0.5],
                itemStyle: {
                    borderWidth: 2,
                    gapWidth: 1,
                    borderColorSaturation: 0.3
                }
            }
        ];
    }

    myChart.setOption(option = {

        title: {
            text: 'BU&紧密公司作战地图',
            left: 'center'
        },

        tooltip: {
            formatter: function (info) {
                var value = info.value;
                var treePathInfo = info.treePathInfo;
                var treePath = [];

                for (var i = 1; i < treePathInfo.length; i++) {
                    treePath.push(treePathInfo[i].name);
                }

                return [
                    '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
                ].join('');
            }
        },

        color: ['#ffffff',"#ffffff"],
        
        
        series: [
            {
                name: 'GAP Progress Overview',
                type: 'treemap',
                visibleMin: 300,
                label: {
                    show: true,
                    color: '#000',
                    formatter: '{b}'
                },
                upperLabel: {
                    show: true,
                    color: '#fff',
                    height: 40
                },
                itemStyle: {
                    borderColor: '#fff'
                },
                levels: getLevelOption(),
                data: [{
                    }, {
                    name: '事业部',            // Second tree
                    value: 15,
                    children: [{
                        name: '泰丰产业园',       // Son of first tree
                        value: 6,
                        }, {
                        name: 'KC',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '特种',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '国际',       // Second leaf of first tree
                        value: 12
                        }, {
                        name: '快运',       // Second leaf of first tree
                        value: 8
                        }, {
                        name: '同城',       // Second leaf of first tree
                        value: 14
                        }, {
                        name: '多式联运',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '冷运',       // Second leaf of first tree
                        value: 10
                        }, {
                        name: 'TS',       // Second leaf of first tree
                        value: 6
                    }]
                    }, {
                    name: '紧密公司',            // Second tree
                    value: 10,
                    children: [{
                        name: '物联云仓',       // Son of first tree
                        value: 6,
                        }, {
                        name: '丰网',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '顺启和（SPS）',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '顺丰运力（车队）',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '丰速',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '丰巢',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '正大富通',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '顺心捷达',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '双捷',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '新夏辉',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '丰修',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '顺捷丰达',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '餐北斗',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '顺和同信',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '大账房',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '凯乐士科技',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '中保华安',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '丰程',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '丰乐',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '驿加易',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '丰创',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '君润人力',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '盛海',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '丰E足食',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '丰翊',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '小驿科技',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '同城科技',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '丰图',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '易友通',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '数程科技',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '丰鸟',       // Second leaf of first tree
                        value: 6
                        }, {
                            name: '大当家',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: 'Flexport',       // Second leaf of first tree
                        value: 6
                    }]
                }]
            }
        ]
    });