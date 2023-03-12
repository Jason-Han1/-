var testData = [
    {
    value: 9422,
    children: [
        {
            name:"公众聚集场所",
            value:40,
        },
        {
            name:"学校、医院、养老院、疗养院、托儿所、幼儿园",
            value:20
        },
        {
            name:"国家机关",
            value:10
        },
        {
            name:"广播、电视和邮政、通信枢纽",
            value:10
        },
        {
            name:"公共图书馆、展览馆、博物馆、档案馆以及具有火灾危险性的文物保护单位",
            value:80
        },
        {
            name:"易燃易爆化学物品的生产、充装、存储、供应、销售单位",
            value:10
        },
        {
            name:"劳动密集型生产、加工企业",
            value:10
        },
        {
            name:"广播、电视和邮政、通信枢纽",
            value:10
        },
        {
            name:"重要科研单位",
            value:45,
            // children:[
            //     {name:"主卧",value:25},
            //     {name:"次卧",value:20}
            // ]
        }
    ]
    }]
    var color = [
    "#6F3FE1",
    "#5781FD",
    "#4DB1CB",
    "#3EBD7C",
    "#F7A925",
    "#bda29a",
    "#ca8622",
    "#749f83",
    "#6e7074",
    "#546570",
    "#c4ccd3"
];
    
    var bsLine = [];
var bsLineV = {};
for (var key in testData) {
    bsLine.push(testData[key].name);
    bsLineV[testData[key].name] = testData[key].value;
}
var sbsLineV = Object.keys(bsLineV).sort(function(a, b) {
    return -(bsLineV[a] - bsLineV[b]);
});
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
            color: color,
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#fff',
                    gapWidth: 2
                }
            }
        },
        {
            //colorSaturation: [0.35, 0.6],
            colorAlpha: [1, 0.5],
            upperLabel: {
                normal: {
                    color: '#555555',
                    show: true,
                    height: 30
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#EFEFEF',
                    gapWidth: 1
                },
                emphasis: {
                    borderColor: '#ccc'
                }
            }
        }
        ];
    }

    option = {
        title:{
            text:"数据分布"
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c}"
            // formatter: function (info) {
            //     debugger
            //     var value = info.value;
            //     var treePathInfo = info.treePathInfo;
            //     var treePath = [];

            //     for (var i = 1; i < treePathInfo.length; i++) {
            //         treePath.push(treePathInfo[i].name);
            //     }

            //     return [
            //         '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath) + '</div>',
            //         '数量: ' + formatUtil.addCommas(value),
            //     ].join('');
            // }
        },

        series: [
            {
                name:'',
                type:'treemap',
                visibleMin: 300,
                breadcrumb: {
                    show: false
                },
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
    }
    
    myChart.setOption(option, true);
    
    
    
    // 点击事件
myChart.on("click", function(param) {
    console.log(param)
    debugger
    var selectedItem = param.name;
    //alert(selectedItem);
    // for (var key in dtlData) {
    //     if (dtlData[key].name === selectedItem) {
    //         for (var ki in sbsLineV) {
    //             if (sbsLineV[ki] === selectedItem) {
    //                 bsColor = color[ki]
    //             }
    //         }
    //         series12.levels[1].color = [bsColor]
    //         series12.data = [dtlData[key]]
    //         option.series = [series11, series12]
    //         myChart.setOption(option, true);
    //     }
    // }

    if (bsLine.indexOf(selectedItem) < 0) {
        myChart.setOption(option, true);
    }
});