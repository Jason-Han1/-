option = {
    title: {
        text: '贵州茅台关系图'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 20
                }
            }
        },
        data: [{
            name: '贵州茅台',
            x: 300,
            y: 300
        }, {
            name: '子公司',
            x: 400,
            y: 300
        }, {
            name: '贵州茅台酒销售有限公司',
            x: 600,
            y: 100
        }, {
            name: '贵州茅台酒巴黎贸易有限公司',
            x: 600,
            y: 150
        }, {
            name: '贵州赖茅酒业有限公司',
            x: 600,
            y: 200
        }, {
            name: '贵州茅台酱香酒营销有限公司',
            x: 600,
            y: 250
        }, {
            name: '北京友谊使者商贸有限公司',
            x: 600,
            y: 300
        }, {
            name: '贵州茅台酒进出口有限责任公司',
            x: 600,
            y: 350
        }, {
            name: '贵州茅台集团财务有限公司',
            x: 600,
            y: 400
        }, {
            name: '国酒茅台定制营销(贵州)有限公司',
            x: 600,
            y: 450
        }, {
            name: '控股股东',
            x: 200,
            y: 300
        }, {
            name: '中国贵州茅台酒厂(集团)有限责任公司',
            x: 120,
            y: 350
        }],
        // links: [],
        links: [{

            source: '贵州茅台',
            target: '子公司',
            lineStyle: {
                normal: {
                    curveness: 0.2
                }
            }
        }, {
            source: '贵州茅台',
            target: '控股股东',
            lineStyle: {
                normal: {
                    curveness: 0.2
                }
            }
        }, {
            source: '子公司',
            target: '贵州茅台酒销售有限公司'
        }, {
            source: '子公司',
            target: '贵州茅台酒巴黎贸易有限公司'
        }, {
            source: '子公司',
            target: '贵州赖茅酒业有限公司'
        }, {
            source: '子公司',
            target: '贵州茅台酱香酒营销有限公司'
        }, {
            source: '子公司',
            target: '北京友谊使者商贸有限公司'
        }, {
            source: '子公司',
            target: '贵州茅台酒进出口有限责任公司'
        }, {
            source: '子公司',
            target: '贵州茅台集团财务有限公司'
        }, {
            source: '子公司',
            target: '国酒茅台定制营销(贵州)有限公司'
        }, {
            source: '控股股东',
            target: '中国贵州茅台酒厂(集团)有限责任公司'
        }],
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    }]
};