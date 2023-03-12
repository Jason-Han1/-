
var testData = [
    {
        name: '已租\n\n62%',
        itemStyle: {
            color: '#C2C2D9',
        },
        value: 62,
    },
      {
        name: '已售\n\n31.5%',
        itemStyle: {
            color: ' #FFBCA7',
        },
        value: 31.5,
    },
    {
        value: 10,
        children: [
            {
                name: '自用\n\n25.5%',
                itemStyle: {
                    color: '#FEDF9A',
                },

                value: 25.5,
            },
        ],
    },
    {
        value: 4,
        children: [
            {
                name: '空置\n\n3.5%',
                itemStyle: {
                    color: '#FFDDD3',
                },
                value:3.5,
            },
        ],
    },
  
];



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
                    gapWidth: 5
                }
            }
        },
        {
            colorSaturation: [0.3, 0.5],
            itemStyle: {
                normal: {
                    gapWidth: 5,
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
                '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('')) + '</div>',
                '占比: ' + formatUtil.addCommas(value) + ' %',
            ].join('');
        }
    },

    series: [{
        name: '信用分类',
        type: 'treemap',
        roam: false,
        nodeClick:false,
        width: 600,
        height: 300,
       breadcrumb:{
            show:false
        },
        label: {

            show: true,
            formatter: '{b}',
            fontSize: 14

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