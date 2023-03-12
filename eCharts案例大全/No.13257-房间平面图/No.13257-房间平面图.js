var testData = [
        {
            name:"书房",
            value:40,
        },
        {
            name:"客厅",
            value:20
        },
        {
            name:"厨房",
            value:10
        },
        {
            name:"卫生间",
            value:10
        },
        {
            name:"房间",
            value:45,
            children:[
                {name:"主卧",value:25},
                {name:"次卧",value:20}
            ]
        }
    ]
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
                colorSaturation: [0.35, 0.5],
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
        title:{
            text:"房间平面图"
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
                    '面积: ' + formatUtil.addCommas(value) + ' m²',
                ].join('');
            }
        },

        series: [
            {
                name:'平面图',
                type:'treemap',
                visibleMin: 300,
                label: {
                    show: true,
                    formatter: '{b}'
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff'
                    }
                },
                levels: getLevelOption(),
                data: testData
            }
        ]
    });