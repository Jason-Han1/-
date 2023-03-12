option = {
    silent: true,
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {
                show: true,
                pixelRatio: 5,
            }
        }

    },
    series: {
        radius: ['15%', '80%'],
        type: 'sunburst',
        sort: null,
        highlightPolicy: 'ancestor',
        data: [{
                value: 6,
                name: '制度效益\n(40%)',
                // label:{
                //     show:true,
                //     formatter:'{a}{d}'
                // },
                children: [{
                        value: 3,
                        name: '家庭农场(20%)',
                        children: [{
                            value: 1.5,
                            name: '家庭农场利润(10%)',
                        }, {
                            name: '家庭农场收入(10%)',
                            value: 1.5
                        }, ]
                    }, {
                        value: 1.5,
                        name: '企业(10%)',
                        children: [{
                                value: 0.75,
                                name: '企业利润(5%)',
                            },
                            {
                                name: '企业收入(5%)',
                                value: 0.75
                            },
                        ]
                    },
                    {
                        value: 1.5,
                        name: '合作规模(10%)',
                        children: [{
                                value: 0.75,
                                name: '家庭农场数量(5%)',
                            },
                            {
                                name: '家庭农场产值(5%)',
                                value: 0.75
                            },
                        ]
                    }
                ]
            },
            {
                value: 6,
                name: '能力培养\n(40%)',
                // label:{
                //     show:true,
                //     formatter:'{a}{d}'
                // },
                children: [{
                        value: 3,
                        name: '融资能力(20%)',
                        children: [{
                            value: 1.5,
                            name: '家庭农场利润(10%)',
                        }, {
                            name: '家庭农场收入(10%)',
                            value: 1.5
                        }, ]
                    }, {
                        value: 1.5,
                        name: '信息获取(10%)',
                        children: [{
                                value: 0.75,
                                name: '企业利润(5%)',
                            },
                            {
                                name: '企业收入(5%)',
                                value: 0.75
                            },
                        ]
                    },
                    {
                        value: 1.5,
                        name: '专业知识(10%)',
                        children: [{
                                value: 0.75,
                                name: '家庭农场数量(5%)',
                            },
                            {
                                name: '家庭农场产值(5%)',
                                value: 0.75
                            },
                        ]
                    }
                ]
            }, {
                value: 3,
                name: '治理水平\n(20%)',
                // label:{
                //     show:true,
                //     formatter:'{a}{d}'
                // },
                children: [{
                        value: 1.5,
                        name: '利益分配(10%)',
                        children: [{
                            value: 0.75,
                            name: '二次分配占比(5%)',
                        }, {
                            name: '分配满意度(5%)',
                            value: 0.75
                        }, ]
                    }, {
                        value: 0.75,
                        name: '交易成本(5%)',
                        children: [{
                                value: 0.375,
                                name: '企业利润(5%)',
                            },
                            {
                                name: '企业收入(5%)',
                                value: 0.375
                            },
                        ]
                    },
                    {
                        value: 0.75,
                        name: '风险保障(5%)',
                        children: [{
                                value: 0.375,
                                name: '保险金额(5%)',
                            },
                            {
                                name: '风险保障金(5%)',
                                value: 0.375
                            },
                        ]
                    }
                ]
            }
        ],
        // label: {
        //     color: '#fff',
        //     textBorderColor: '#666',
        //     textBorderWidth: 2,
        //     borderColor: '#999',
        //     borderWidth: 1,
        //     formatter: function (param) {
        //         var depth = param.treePathInfo.length;
        //         if (depth === 2) {
        //             return 'radial';
        //         }
        //         else if (depth === 3) {
        //             return 'tangential';
        //         }
        //         else if (depth === 4) {
        //             return '0';
        //         }
        //     }
        // },
        levels: [{}, {
                r0: '0%',
                r: '29%',
                itemStyle: {
                    color: '#ccc',
                    // opacity:1

                    borderColor: 'black',
                    borderWidth: 2,
                },
                label: {
                    rotate: 'radial',
                    color: 'black',
                    fontSize: 16,

                }
            },
            {
                r0: '30%',
                r: '59%',
                itemStyle: {
                    color: '#ccc',
                    // opacity:1
                    borderColor: 'black',
                    borderWidth: 2,
                },
                label: {
                    rotate: 'radial',
                    color: 'black',
                    fontSize: 14,
                }
            },
            {
                r0: '60%',
                r: '90%',
                itemStyle: {
                    color: '#ccc',
                    // opacity:1
                    borderColor: 'black',
                    borderWidth: 2,
                },
                label: {
                    rotate: 'radial',
                    color: 'black',
                    fontSize: 14,
                    // rotate: 'tangential'
                }
            },
            {
                itemStyle: {
                    color: '#ccc'
                },
                label: {
                    rotate: 'radial',
                    position: 'top'
                }
            },

        ]
    }
};