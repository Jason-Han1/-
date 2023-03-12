var testData = [
        {
            name:"汇总",
            value:50,
            children:[
                {name:"汇总当日计划",value:45.7/(47.5+29.5)},
                {name:"汇总当日实际",value:29.5/(47.5+29.5)}
            ]
        },
        {
            name:"1.5MW",
            value:50*((10+6)/(47.5+29.5)),
            children:[
                {name:"1.5MW当日计划",value:10/((10+6)/(47.5+29.5))},
                {name:"1.5MW当日实际",value:6/((10+6)/(47.5+29.5))}
            ]
        },
        {
            name:"2MW",
            value:50*((7.2+3.5)/(47.5+29.5)),
            children:[
                {name:"2MW当日计划",value:7.2/(47.5+29.5)},
                {name:"2MW当日实际",value:3.5/(47.5+29.5)}
            ]
        },
        {
            name:"2.XMW",
            value:50*((12+11)/(47.5+29.5)),
            children:[
                {name:"2.XMW当日计划",value:12/(47.5+29.5)},
                {name:"2.XMW当日实际",value:11/(47.5+29.5)}
            ]
        },
        {
            name:"2.5MW汇总",
            value:50*((7.5+5)/(47.5+29.5)),
            children:[
                {name:"2.5MW当日计划",value:7.5/(47.5+29.5)},
                {name:"2.5MW当日实际",value:5/(47.5+29.5)}
            ]
        },
        {
            name:"3SMW汇总",
            value:50*((9+4)/(47.5+29.5)),
            children:[
                {name:"3SMW当日计划",value:9/(47.5+29.5)},
                {name:"3SMW当日实际",value:4/(47.5+29.5)}
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
            text:"风电完成对比"
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
                name:'风电完成对比',
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