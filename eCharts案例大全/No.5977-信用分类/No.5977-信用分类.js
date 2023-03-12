
var testData = [{
        name: "A",
        itemStyle: {
            color: '#aaff56',
        },
        value: 797,

    },
    {
        name: "B",
        itemStyle: {
            color: '#007fff',
        },
        value: 49256
    }, {
        name: "C",
        itemStyle: {
            color: '#f4b733',
        },

        value: 7138
    },
    {
        name: "D",
        itemStyle: {
            color: '#ff5656',
        },
        value: 1159
    },
    {
        name: "未达评定标准",
        itemStyle: {
            color: '#b2b2b2',
        },
        value: 23976
    }
]



var formatUtil = echarts.format;

function getLevelOption() {
    return [{
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    gapWidth: 5
                }
            }
        },
        {
            itemStyle: {
                normal: {
                    gapWidth: 1
                }
            }
        },
        {
            colorSaturation: [0.3, 0.5],
            itemStyle: {
                normal: {
                    gapWidth: 1,
                    borderColorSaturation: 0.6
                }
            }
        }
    ];
}

myChart.setOption(option = {
    title: {
        text: "信用分类"
    },
    tooltip: {
        formatter: function(info) {
            var value = info.value;
            var treePathInfo = info.treePathInfo;
            var treePath = [];

            for (var i = 1; i < treePathInfo.length; i++) {
                treePath.push(treePathInfo[i].name);
            }

            return [
                '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
                '占比: ' + formatUtil.addCommas(value) + ' %',
            ].join('');
        }
    },

    series: [{
        name: '信用分类',
        type: 'treemap',
        roam: false,
        label: {

            show: true,
            formatter: '{b}',
            fontSize: 28

        },


        itemStyle: {
            normal: {
                borderColor: '#fff'

            }
        },
        levels: getLevelOption(),

        data: testData

    }]
});