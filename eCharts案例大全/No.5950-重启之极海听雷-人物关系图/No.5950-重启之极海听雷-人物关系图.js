var graphLinkData = [{
        source: "cq0",
        target: "cq1",
        name: "铁三角"
    },
    {
        source: "cq0",
        target: "cq2",
        name: "铁三角"
    },
    {
        source: "cq12",
        target: "cq1",
        name: " "
    },
    {
        source: "cq1",
        target: "cq0",
        name: " "
    },
    {
        source: "cq1",
        target: "cq2",
        name: "铁三角"
    },
    {
        source: "cq11",
        target: "cq2",
        name: "偶像"
    },

    {
        source: "cq0",
        target: "cq3",
        name: "叔侄(三叔)"
    },
    {
        source: "cq0",
        target: "cq4",
        name: "叔侄(二叔)"
    },
    {
        source: "cq0",
        target: "cq5",
        name: "朋友（沙海小反派，重启从良）"
    },
    {
        source: "cq0",
        target: "cq6",
        name: "师徒"
    },
    {
        source: "cq0",
        target: "cq7",
        name: "手下"
    },

    {
        source: "cq0",
        target: "cq10",
        name: "对立"
    },
    {
        source: "cq0",
        target: "cq11",
        name: "塑料队友"
    },
    {
        source: "cq0",
        target: "cq12",
        name: "坐地起价，吴邪请不起的男人"
    },

    {
        source: "cq1",
        target: "cq12",
        name: "网友"
    },

    {
        source: "cq2",
        target: "cq1",
        name: " "
    },
    {
        source: "cq2",
        target: "cq0",
        name: " "
    },
    {
        source: "cq9",
        target: "cq0",
        name: "偶像"
    },
]; // 关系链路数据
var graphData = [{
        id: "cq0",
        name: "吴邪",
        category: "吴邪",
        //   symbol:
        //     "image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=312359521,817471792&fm=11&gp=0.jpg",
    },
    {
        id: "cq1",
        name: "胖子",
        category: "胖子",
        //   symbol:
        // "image://https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2236788055,624300323&fm=11&gp=0.jpg",
    },
    {
        id: "cq2",
        name: "张起灵",
        category: "张起灵",
        //   symbol:
        // "image://https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2488652569,4158233387&fm=11&gp=0.jpg",
    },
    {
        id: "cq3",
        category: "吴三省",
        name: "吴三省-走失人口；无邪最想见的人；推动剧情走向",
        //   symbol: "rect",
    },
    {
        id: "cq4",
        name: "吴二白",
        category: "吴二白",
        //   symbol:
        // "image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=83495827,854532694&fm=26&gp=0.jpg",
    },
    {
        id: "cq5",
        name: "霍道夫",
        category: "霍道夫",
        //   symbol:
        // "image://https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2119132877,2420457045&fm=26&gp=0.jpg",
    },
    {
        id: "cq6",
        name: "黑瞎子",
        category: "黑瞎子",
        //   symbol:
        // "image://https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1788275041,1848609125&fm=26&gp=0.jpg",
    },
    {
        id: "cq7",
        name: "坎肩",
        category: "坎肩",
        //   symbol:
        // "image://https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1981847768,1450904294&fm=26&gp=0.jpg",
    },
    {
        id: "cq9",
        name: "白昊天",
        category: "白昊天",
        //   symbol:
        // "image://https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2733052228,2506727656&fm=26&gp=0.jpg",
    },
    {
        id: "cq10",
        name: "焦老板",
        category: "焦老板",
        //   symbol:
        // "image://https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2302265631,1580219535&fm=11&gp=0.jpg",
    },
    {
        id: "cq11",
        name: "刘丧",
        category: "刘丧",
        //   symbol:
        // "image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=82092270,3664467935&fm=26&gp=0.jpg",
    },
    {
        id: "cq12",
        name: "红顶水仙",
        category: "红顶水仙",
        //   symbol:
        // "image://https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3473145739,796882367&fm=11&gp=0.jpg",
    },
]; // 关系节点数据

option = {
    title: {
        text: '重启之极海听雷-人物关系图'
    },
    tooltip: {
        show: false,
        formatter: function(params) {},
        textStyle: {
            align: "left",
        },
    },
    legend: {
        show: true,
        data: [{
                name: "吴邪",
            },
            {
                name: "胖子",
            },
            {
                name: "张起灵",
            },
            {
                name: "吴二白",
            },
            {
                name: "吴三省",
            },
            {
                name: "霍道夫",
            },
            {
                name: "黑瞎子",
            },
            {
                name: "坎肩",
            },
            {
                name: "薛五",
            },
            {
                name: "白昊天",
            },
            {
                name: "焦老板",
            },
            {
                name: "刘丧",
            },
            {
                name: "红顶水仙",
            },
        ],
    },
    toolbox: {
        // 显示工具箱
        show: true,
        position: [10, 10],
        feature: {
            mark: {
                show: true,
            },
            // 保存为图片
            saveAsImage: {
                show: true,
                name: "重启之极海听雷-人物关系图谱",
                title: "保存",
            },
        },
    },
    series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 58,
        draggable: true,
        roam: true,
        focusNodeAdjacency: true,
        edgeSymbol: ['', 'arrow'],
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 20
                },
                formatter(x) {
                    return x.data.name;
                }
            }
        },
        label: {
            show: true
        },
        force: {
            repulsion: 2000,
            edgeLength: 500
        },
        data: graphData,
        links: graphLinkData,
        categories: [{
                name: "吴邪",
                itemStyle: {
                    normal: {
                        color: "#c23531",
                    },
                },
            },
            {
                name: "胖子",
                itemStyle: {
                    normal: {
                        color: "#2f4554",
                    },
                },
            },
            {
                name: "张起灵",
                itemStyle: {
                    normal: {
                        color: "#61a0a8",
                    },
                },
            },
            {
                name: "吴二白",
                itemStyle: {
                    normal: {
                        color: "#d48265",
                    },
                },
            },
            {
                name: "吴三省",
                itemStyle: {
                    normal: {
                        color: "#91c7ae",
                    },
                },
            },
            {
                name: "霍道夫",
                itemStyle: {
                    normal: {
                        color: "#749f83",
                    },
                },
            },
            {
                name: "黑瞎子",
                itemStyle: {
                    normal: {
                        color: "#ca8622",
                    },
                },
            },
            {
                name: "坎肩",
                itemStyle: {
                    normal: {
                        color: "#bda29a",
                    },
                },
            },
            {
                name: "薛五",
                itemStyle: {
                    normal: {
                        color: "#6e7074",
                    },
                },
            },
            {
                name: "白昊天",
                itemStyle: {
                    normal: {
                        color: "#546570",
                    },
                },
            },
            {
                name: "焦老板",
                itemStyle: {
                    normal: {
                        color: "#c4ccd3",
                    },
                },
            },
            {
                name: "刘丧",
                itemStyle: {
                    normal: {
                        color: "#ebdc87",
                    },
                },
            },
            {
                name: "红顶水仙",
                itemStyle: {
                    normal: {
                        color: "#c26565",
                    },
                },
            },
        ],

        itemStyle: {
            color: "#fff",
        },
        label: {
            normal: {
                show: true,
                textStyle: {
                    //标签的字体样式
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "bolder",
                    fontFamily: "sans-serif",
                    fontSize: 12,
                },
            },
        },
        lineStyle: {
            normal: {
                color: "#f9f9f9",
                width: 1.5,
                type: "solid",
                curveness: 0,
                opacity: 0.6,
            },
            emphasis: {
                //高亮状态
                width: "2",
                color: "#000",
                type: "solid",
                curveness: 0,
                opacity: 1,
            },
        },
    }]
}