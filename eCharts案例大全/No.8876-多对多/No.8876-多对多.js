var data = [{
        id: 2,
        name: "1MXecYXm4AEXq7Da35g8hoUKAqVmaJY6",
        symbolSize: 35,
        x: 1275.3333333333333,
        y: 1322.9179935574289
    },
    {
        id: 3,
        name: "1ioe3n0zugh9hK6Xz8iOVqyezWfjSGOwjK",
        symbolSize: 35,
        x: 1275.3333333333333,
        y: 1302.1337493129595
    },
    {
        id: 4,
        name: "1jMcFY8MZ3uxsm1eroU7J49tUhiUgb41Lh",
        symbolSize: 35,
        x: 1275.3333333333333,
        y: 1363.9533916256787
    },
    {
        id: 5,
        name: "1A78FgHLndWupeHC7fpLWT3aBkNwWFTAI2",
        symbolSize: 35,
        x: 1903,
        y: 1643.6797795831717
    },
    {
        id: 6,
        name: "1nvSiF2s3IWorPPkGXJbdUKoMFmYUoiNEh",
        symbolSize: 35,
        x: 1903,
        y: 1271.7750721942234
    },
    {
        id: 7,
        name: "uXbSRecCFVXWL637wekivs0L5NAVFsYEtC7ApnkDIOASrPty7GwElTvEdnCbXhee",
        symbolSize: 35,
        x: 1589.1666666666667,
        y: 1366.379504171947
    },
    {
        id: 8,
        name: "1MXecYXm4AEXq7Da35g8hoUKAqVmaJY6",
        symbolSize: 35,
        x: 1275.3333333333333,
        y: 1488.0337562461063
    },
    {
        id: 9,
        name: "1guf58wLJWsTvOMgxFIU03cu71FV9TNdNC",
        symbolSize: 35,
        x: 1275.3333333333333,
        y: 1327.1056103382684
    },
    {
        id: 10,
        name: "1XAQZ1kRyix5KDRzeVsNmwXZDoz6FMIv0G",
        symbolSize: 35,
        x: 1903,
        y: 1434.5427266817114
    },
    {
        id: 11,
        name: "zOxRDAWH2TIEaZOj84erwM4pbvp9jWn48iSe9omA58w0npzeUjKFQwSTYF9prUyr",
        symbolSize: 35,
        x: 1589.1666666666667,
        y: 1361.3937983491774
    }
]

var links = [{
        source: "1MXecYXm4AEXq7Da35g8hoUKAqVmaJY6",
        target: "uXbSRecCFVXWL637wekivs0L5NAVFsYEtC7ApnkDIOASrPty7GwElTvEdnCbXhee",
        value: 7465000000
    },
    {
        source: "1ioe3n0zugh9hK6Xz8iOVqyezWfjSGOwjK",
        target: "uXbSRecCFVXWL637wekivs0L5NAVFsYEtC7ApnkDIOASrPty7GwElTvEdnCbXhee",
        value: 5636000000
    },
    {
        source: "1jMcFY8MZ3uxsm1eroU7J49tUhiUgb41Lh",
        target: "uXbSRecCFVXWL637wekivs0L5NAVFsYEtC7ApnkDIOASrPty7GwElTvEdnCbXhee",
        value: 8211000000
    },
    {
        source: "uXbSRecCFVXWL637wekivs0L5NAVFsYEtC7ApnkDIOASrPty7GwElTvEdnCbXhee",
        target: "1A78FgHLndWupeHC7fpLWT3aBkNwWFTAI2",
        value: 68971517089.59
    },
    {
        source: "uXbSRecCFVXWL637wekivs0L5NAVFsYEtC7ApnkDIOASrPty7GwElTvEdnCbXhee",
        target: "1nvSiF2s3IWorPPkGXJbdUKoMFmYUoiNEh",
        value: 13101390618.410004
    },
    {
        source: "1MXecYXm4AEXq7Da35g8hoUKAqVmaJY6",
        target: "zOxRDAWH2TIEaZOj84erwM4pbvp9jWn48iSe9omA58w0npzeUjKFQwSTYF9prUyr",
        value: 3340000000
    },
    {
        source: "1guf58wLJWsTvOMgxFIU03cu71FV9TNdNC",
        target: "zOxRDAWH2TIEaZOj84erwM4pbvp9jWn48iSe9omA58w0npzeUjKFQwSTYF9prUyr",
        value: 1489000000
    },
    {
        source: "zOxRDAWH2TIEaZOj84erwM4pbvp9jWn48iSe9omA58w0npzeUjKFQwSTYF9prUyr",
        target: "1XAQZ1kRyix5KDRzeVsNmwXZDoz6FMIv0G",
        value: 79394399259
    }
]
option = {
    tooltip: {},
    legend: {
        orient: 'vertical',
        x: '10',
        y: '10',
        itemWdith: 35,
        itemHeight: 30,
        data: [{
            name: self.node,
            textStyle: {
                color: "#000"
            }
        }, {
            name: self.target,
            textStyle: {
                color: "#000"
            }
        }]
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    nodePadding: 35,
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: 30,
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {
                show: false,
                position: ['50%', '100%'],
                //         formatter:function(params){
                //             return params.data.id //此处为label转换
                //          }
            }
        },
        force: {
            repulsion: 1000
        },
        // categories: [
        //     {
        //         name:self.node,
        //     },
        //     {
        //         name:self.target, 
        //     }
        // ],
        edgeSymbolSize: [4, 30],
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 10
                },
                formatter: "{c}"
            }
        },
        data: data,
        links: links,
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0
            }
        }
    }]
};