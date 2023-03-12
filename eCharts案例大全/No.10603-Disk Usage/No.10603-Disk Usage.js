myChart.showLoading();

var data = [
{name:'房屋及建筑物', value:20,
children:[
{name:'2121', value: 12},
{name: '21212', value: 12}
]},
{name:'土地及植物', value: 12},
{name: '仪器仪表', value: 12},
{name: '机电设备', value: 12},
{name: '电子设备', value: 14},
{name: '印刷机械', value: 15},
{name: '卫生医疗器械', value: 16},
{name: '文体设备', value: 18},
{name: '标本模型', value: 18},
{name: '文物及陈列品', value: 19},
{name: '图书', value: 21},
{name: '工具、量具', value: 22},
{name: '家具', value: 23},
{name: '行政办公设备', value: 24},
{name: '被服装具', value: 23},
{name: '牲畜', value: 24},
];
dsp(data);
function dsp(diskData) {
    myChart.hideLoading();

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
                        borderColor: '#777',
                        borderWidth: 0,
                        gapWidth: 1
                    }
                },
                upperLabel: {
                    normal: {
                        show: false
                    }
                }
            },
            {
                itemStyle: {
                    normal: {
                        borderColor: '#555',
                        borderWidth: 5,
                        gapWidth: 1
                    },
                    emphasis: {
                        borderColor: '#ddd'
                    }
                }
            },
            {
                colorSaturation: [0.35, 0.5],
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        gapWidth: 1,
                        borderColorSaturation: 0.6
                    }
                }
            }
        ];
    }

    myChart.setOption(option = {

        title: {
            text: 'Disk Usage',
            left: 'center'
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
                    '' + formatUtil.addCommas(value) + ' KB',
                ].join('');
            }
        },

        series: [
            {
                name:'Disk Usage',
                type:'treemap',
                visibleMin: 300,
                label: {
                    show: true,
                    formatter: '{b}'
                },
                upperLabel: {
                    normal: {
                        show: true,
                        height: 30
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff'
                    }
                },
                levels: getLevelOption(),
                data: data
            }
        ]
    });
}