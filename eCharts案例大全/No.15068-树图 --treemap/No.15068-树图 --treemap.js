var struct_colors = [
    '#ed6f6d', '#f3765d', '#f77a57', '#f98866', '#f99579',
    '#ff9f3b', '#f0a732', '#e6a840', '#e9b253', '#ebbb66',
    '#78b7e8', '#59b1f3', '#66bbf5', '#6ec3f2', '#75cae2',
    '#70cccc', '#5dc4c4', '#4dbebd', '#4cc1a7', '#4fca96',
    '#4cc686'
];

var info2 = {
    'children': [{
        'value': 2,
        'name': '一级结构',
        'manage': 'liang-01',
    }, {
        'value': 42,
        'name': 'fds-------test--------------------------yy----',
        'manage': 'liang-01',
    }, {
        'children': [{
            'name': '二级组织结构-1',
            'value': 20,
            'manage': 'liang-01',
        }, {
            'name': '二级组织结构-2',
            'value': 20,
            'manage': 'liang-01',
        }, {

            'children': [{
                'name': '三级-1',
                'value': 10,
                'manage': 'liang-01',
            }, {
                'name': '三级-2',
                'value': 20,
                'manage': 'liang-01',
            }],
            'name': '二级-03',
            'manage': 'liang-02',
        }],
        'name': 'has children',
        'manage': 'liang-01',
    }, {
        'name': 'fds no children',
        'value': 100,
        'manage': 'liang-01',
        // 'color': struct_colors[index],
    }]
};
var structs_datas = [];
var formatUtil = echarts.format;

function format_struct_data(children, structs_datas) {
    // 添加每个单位的颜色
    for (var prop in children) {
        var index = Math.floor(Math.random() * 20);
        var tmp = {
            itemStyle: {
                normal: {
                    color: struct_colors[index]
                }
            },
            name: children[prop].name,
            manage: children[prop].manage,
            value: children[prop].value,
            children: []
        }
        format_struct_data(children[prop].children, tmp.children);
        if(tmp.children.length === 0){
            delete tmp.children;
        }
        structs_datas.push(tmp);
        // return structs_datas;

    }

}

function showMenu(param) {
    // 可在此处添加右击操作内容
    console.log('showMenu==============', param);
    var event = param.event;
    var pageX = event.offsetX;
    var pageY = event.offsetY;
    console.log('showMenu========', pageX, pageY);

}
format_struct_data(info2.children, structs_datas);
myChart.setOption(option = {
    title: {
        text: '树图构建组织结构',
        subtext: '2017/07 by liang',
        left: 'leafDepth'
    },
    tooltip: {
        formatter: function(info) {
            // console.log('tool------', info);
            var value = info.value;
            var name = info.name;

            return [
                '<h4>' + name + '</h4>',
                '<p> 资产数量：' + value + '</p>',
            ].join('');
        }
    },

    series: [{
        name: 'org',
        type: 'treemap',
        visibleMin: 300,
        // data: format_struct_data(info2.children, structs_datas),
        data: structs_datas,
        leafDepth: 1,
        label: {
            normal: {
                show: true,
                position: 'insideTopLeft',
                formatter: function(a) {
                    console.log('formatter==label=======', a);
                    return a.name + "\n\n资产数量 : " + a.data.value + "\n管理员 ： " + a.data.manage;
                    // return [
                    //     '<div><h1>' + a.name + '</h1></div>',
                    //     '<div><p>' + a.value + '</></div>',
                    // ].join('');
                },
                textStyle: {
                    // color: '',  label的字体颜色
                    fontSize: '14',
                    fontWeight: 'bold'
                }
            },
            // emphasis: {
            //     show: true,
            //     position: 'insideTopLeft',
            //     formatter: function(a) {
            //         console.log('formatter===label======', a);
            //         return a.name + "\n\n" + "资产数量 : " + a.data.value + "\n等级得分";
            //     },
            //     textStyle: {
            //         fontSize: '14',
            //         fontWeight: 'bold'
            //     }
            // }
        },
        levels: [{
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    gapWidth: 2
                }
            }
        }, {
            itemStyle: {
                normal: {
                    gapWidth: 2
                }
            }
        }, {
            // colorSaturation: [0.35, 0.5],
            itemStyle: {
                normal: {
                    gapWidth: 2,
                    // borderColorSaturation: 0.6
                }
            }
        }],
        breadcrumb: {
            show: true,
            // "height": 22,
            left: "10%",
            top: "93%",
            emptyItemWidth: 25,
            itemStyle: {
                normal: {
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.7)",
                    borderWidth: 1,
                    shadowColor: "rgba(150,150,150,1)",
                    shadowBlur: 3,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    textStyle: {
                        color: "#000",
                        fontWeight: 'bold'
                    }
                },
                emphasis: {
                    textStyle: {}
                }
            }
        },
    }]
});

document.oncontextmenu = function() {
    return false;
};
myChart.on('contextmenu', showMenu);