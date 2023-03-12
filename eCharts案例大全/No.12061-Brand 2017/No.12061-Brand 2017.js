option = {
    backgroundColor: '#000',
    title: {
        text: "Makeup 2017",
        top: "top",
        left: "center"
    },
    tooltip: {},

    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '招标倾向性分析',
        type: 'graph',
        layout: 'force',

        force: {
            repulsion: 500,
            edgeLength: 120
        },
        data: [
{category: 'LANCOME',name: 'LANCOME',value: 58,symbolSize: 58 },
{category: 'SEPHORA',name: 'SEPHORA',value: 47,symbolSize: 47 },
{category: 'GUERLAIN',name: 'GUERLAIN',value: 42,symbolSize: 42 },
{category: 'PTR',name: 'PTR',value: 35,symbolSize: 35 },
{category: 'KENZO',name: 'KENZO',value: 30,symbolSize: 30 },
{category: 'LANCASTER',name: 'LANCASTER',value: 29,symbolSize: 29 },
{category: 'LAUDER',name: 'LAUDER',value: 26,symbolSize: 26 },
{category: 'SKII',name: 'SKII',value: 16,symbolSize: 16 },
{category: 'WEI BEAUTY',name: 'WEI BEAUTY',value: 13,symbolSize: 13 },
{category: 'ESTHEDERM',name: 'ESTHEDERM',value: 9,symbolSize: 9 },
{category: 'DIOR',name: 'DIOR',value: 5,symbolSize: 5 }
],
        links: [
{source: 'LAUDER',target: 'LANCOME',value: 24},
{source: 'GUERLAIN',target: 'LANCOME',value: 22},
{source: 'SEPHORA',target: 'LANCOME',value: 26},
{source: 'SEPHORA',target: 'GUERLAIN',value: 29},
{source: 'SEPHORA',target: 'SKII',value: 22},
{source: 'LAUDER',target: 'GUERLAIN',value: 23},
{source: 'KENZO',target: 'LANCOME',value: 22},
{source: 'LAUDER',target: 'SEPHORA',value: 27},
{source: 'PTR',target: 'LANCOME',value: 24},
{source: 'LANCASTER',target: 'LANCOME',value: 26},
{source: 'KENZO',target: 'GUERLAIN',value: 29},
{source: 'PTR',target: 'GUERLAIN',value: 32},
{source: 'KENZO',target: 'SEPHORA',value: 34},
{source: 'PTR',target: 'SEPHORA',value: 37},
{source: 'LANCASTER',target: 'SEPHORA',value: 40},
{source: 'PTR',target: 'SKII',value: 22},
{source: 'PTR',target: 'KENZO',value: 42},
{source: 'LANCASTER',target: 'GUERLAIN',value: 31},
{source: 'WEI BEAUTY',target: 'LANCOME',value: 23},
{source: 'DIOR',target: 'LANCOME',value: 24},
{source: 'ESTHEDERM',target: 'LANCOME',value: 25},
{source: 'LANCASTER',target: 'KENZO',value: 42},
{source: 'LANCASTER',target: 'PTR',value: 47},
{source: 'LANCASTER',target: 'SKII',value: 21},
{source: 'WEI BEAUTY',target: 'SEPHORA',value: 37},
{source: 'PTR',target: 'LAUDER',value: 26},
{source: 'ESTHEDERM',target: 'GUERLAIN',value: 33},
{source: 'WEI BEAUTY',target: 'KENZO',value: 43}
],
        categories: [
{category: 'LANCOME',name: 'LANCOME',value: 58,symbolSize: 58 },
{category: 'SEPHORA',name: 'SEPHORA',value: 47,symbolSize: 47 },
{category: 'GUERLAIN',name: 'GUERLAIN',value: 42,symbolSize: 42 },
{category: 'PTR',name: 'PTR',value: 35,symbolSize: 35 },
{category: 'KENZO',name: 'KENZO',value: 30,symbolSize: 30 },
{category: 'LANCASTER',name: 'LANCASTER',value: 29,symbolSize: 29 },
{category: 'LAUDER',name: 'LAUDER',value: 26,symbolSize: 26 },
{category: 'SKII',name: 'SKII',value: 16,symbolSize: 16 },
{category: 'WEI BEAUTY',name: 'WEI BEAUTY',value: 13,symbolSize: 13 },
{category: 'ESTHEDERM',name: 'ESTHEDERM',value: 9,symbolSize: 9 },
{category: 'DIOR',name: 'DIOR',value: 5,symbolSize: 5 }
],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};