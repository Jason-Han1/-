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
            text: 'GAP产品功能进展概览',
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
                    'Disk Usage: ' + formatUtil.addCommas(value) + ' KB',
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
                    height: 20
                },
                itemStyle: {
                    borderColor: '#fff'
                },
                levels: getLevelOption(),
                data: [{
                    name: '轴网',
                    value: 4,
                    children: [{
                        name: '直线轴网',       // First leaf of first tree
                        value: 4
                        }, {
                        name: '弧形轴网',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '单根轴线',       // Second leaf of first tree
                        value: 6
                    }]
                    }, {
                    name: '柱',            // Second tree
                    value: 3,
                    children: [{
                        name: '创建柱',       // Son of first tree
                        value: 20,
                        }, {
                        name: '柱齐墙边',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '墙齐柱边',       // Second leaf of first tree
                        value: 6
                    }]
                    }, {
                    name: '墙体',            // Second tree
                    value: 10,
                    children: [{
                        name: '绘制墙体',       // Son of first tree
                        value: 20,
                        }, {
                        name: '墙体倒角',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '墙体连接',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '墙体打断',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '饰面创建',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '墙体附着',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '墙体分离',       // Second leaf of first tree
                        value: 6
                    }]
                    }, {
                    name: '幕墙',            // Second tree
                    value: 7,
                    children: [{
                        name: '绘制幕墙',       // Son of first tree
                        value: 20,
                        }, {
                        name: '幕墙网格',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '幕墙竖梃',       // Second leaf of first tree
                        value: 6
                    }]
                    }, {
                    name: '女儿墙',            // Second tree
                    value: 3,
                    children: [{
                        name: '绘制女儿墙',       // Son of first tree
                        value: 20,
                        }, {
                        name: '编辑女儿墙',       // Second leaf of first tree
                        value: 6
                    }]
                    }, {
                    name: '门窗',            // Second tree
                    value: 8,
                    children: [{
                        name: '插入门',       // Son of first tree
                        value: 20,
                        }, {
                        name: '插入窗',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '门窗翻转',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '门窗编号',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '常规门窗构件库',       // Second leaf of first tree
                        value: 6
                    }]
                    }, {
                    name: '楼板',            // Second tree
                    value: 6,
                    children: [{
                        name: '绘制楼板',       // Son of first tree
                        value: 20,
                        }, {
                        name: '楼板编辑',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '楼板分割',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '楼板合并',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '楼板升降',       // Second leaf of first tree
                        value: 6
                    }]
                    }, {
                    name: '楼电梯',            // Second tree
                    value: 3,
                    children: [{
                        name: '直段楼梯',       // Son of first tree
                        value: 20,
                        }, {
                        name: '自由绘制',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '剪刀楼梯',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '双跑楼梯',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '布置扶梯',       // Second leaf of first tree
                        value: 6
                        }, {
                        name: '布置电梯间',       // Second leaf of first tree
                        value: 6
                    }]
                }]
            }
        ]
    });