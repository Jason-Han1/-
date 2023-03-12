var testData = [
    {
        name: "赞扬",
         itemStyle: {
            color: '#fb6207',
        },
        value: 51.52,
        
    },
    {
        name: "恐惧",
         itemStyle: {
            color: '#cfb7a8',
        },
        value: 9.51
    }, {
        name: "愤怒",
         itemStyle: {
            color: '#434343',
   },
        
                
        value: 0.5
    },
    {
        name: "悲伤",
         itemStyle: {
            color: '#999999',
        },
        value: 4.04
    },
    {
        name: "惊奇",
         itemStyle: {
            color: '#666666',
        },
        value: 0.96
    }, {
        name: "喜悦",
         itemStyle: {
            color: '#ffc39f',
        },
        value: 13.39
    },
    {
        name: "厌恶",
         itemStyle: {
            color: '#f7965c',
        },
        value: 20.08

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
        text: ""
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
        name: '情绪表达',
        type: 'treemap',
        roam : false,
        label: {
      
            show: true,
            formatter: '{b}',
            fontSize: 17
                                
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