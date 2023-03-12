var sourceData = [{
        name: '期刊',
        nameValue: 40978133,
        valueUnit: "篇"
    },
    {
        name: '会议',
        nameValue: 3914782,
        valueUnit: "篇"
    },
    {
        name: '学位',
        nameValue: 335681,
        valueUnit: "篇"
    },
    {
        name: '核心期刊',
        nameValue: 10068573,
        valueUnit: "篇"
    },
    {
        name: 'EI和SCI期刊',
        nameValue: 2287863,
        valueUnit: "篇"
    },
    {
        name: '其他期刊',
        nameValue: 11533850,
        valueUnit: "篇"
    },
    {
        name: '会议论文',
        nameValue: 2192428,
        valueUnit: "篇"
    },
    {
        name: '学位论文',
        nameValue: 19145882,
        valueUnit: "篇"
    }
];
var sangjiColor = ['#f4ce92', '#f2b87e', '#C8B083', '#f4ce92', '#f4ce92', '#f4ce92', '#f2b87e', '#C8B083'];
var itemStyleSource = [];
for (let d = 0; d < sourceData.length; d++) {
    sourceData[d].itemStyle = {
        normal: {
            color: sangjiColor[d]
        }
    }
    itemStyleSource.push(sourceData[d]);
}

option = {
    backgroundColor: "#feefd7",
    series: [{
        type: 'sankey',
        layout: 'none',
        top: "12%",
        bottom: '21%',
        left: '3%',
        focusNodeAdjacency: 'allEdges',
        data: itemStyleSource,
        links: [{
                source: '期刊',
                target: '核心期刊',
                value: 9502106
            },
            {
                source: '期刊',
                target: 'EI和SCI期刊',
                value: 2175095
            },
            {
                source: '期刊',
                target: '其他期刊',
                value: 10631748
            },
            {
                source: '期刊',
                target: '会议论文',
                value: 2081742
            },
            {
                source: '期刊',
                target: '学位论文',
                value: 16587442
            },
            {
                source: '会议',
                target: '核心期刊',
                value: 531506
            },
            {
                source: '会议',
                target: 'EI和SCI期刊',
                value: 106706
            },
            {
                source: '会议',
                target: '其他期刊',
                value: 795454
            },
            {
                source: '会议',
                target: '会议论文',
                value: 94917
            },
            {
                source: '会议',
                target: '学位论文',
                value: 2386199
            },
            {
                source: '学位',
                target: '核心期刊',
                value: 34961
            },
            {
                source: '学位',
                target: 'EI和SCI期刊',
                value: 6062
            },
            {
                source: '学位',
                target: '其他期刊',
                value: 106648
            },
            {
                source: '学位',
                target: '会议论文',
                value: 15769
            },
            {
                source: '学位',
                target: '学位论文',
                value: 172241
            }
        ],
        label: {
            normal: {
                color: "#000",
                fontSize: 10,
                formatter: function(params, i) {
                    console.log(params);
                    return "{white|" + params.data.name + "}" + params.data.nameValue + " " + params.data.valueUnit;
                },
                rich: {
                    white: {
                        fontSize: 10,
                        padding: [0, 0, 0, 0]
                    }
                }
            }

        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0.5,
                opacity:0.7
                }
        },
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: 'transparent'
            }
        }
    }]
}