myChart.showLoading();


var data2 = [{
    name: "治安管理工作",
    label: {
        normal: {
            backgroundColor: '#725bb8'
        }
    },
    children: [{
        name: "娱乐场所治安管理",
        children: [{
            name: "娱乐场所治安管理工作"
        }]
    }, {
        name: "安保工作",
        children: [{
            name: "输油气管道安保工作"
        }, {
            name: "校园安保工作"
        }, {
            name: "节假日、重大活动、大型群众性活动安保和敏感期社会面管控工作"
        }]
    }, {
        name: "精神病人管控工作",
        children: [{
            name: "精神病人肇事肇祸案事件"
        }]
    }, {
        name: "物流寄递业",
        children: [{
            name: "物流寄递业治安管理工作"
        }]
    }, {
        name: "推进基层基础工作创新",
        children: [{
            name: "加强派出所建设"
        }]
    }, {
        name: "地网建设工作",
        children: [{
            name: "加强二轮电动车防盗登记备案装置安装工作"
        }]
    }, {
        name: "无人机管理",
        children: [{
            name: "加强无人机管理"
        }]
    }, {
        name: "加强社会面巡逻防控",
        children: [{
            name: "武装联勤巡逻"
        }]
    }]
}];

myChart.hideLoading();

myChart.setOption(option = {
    backgroundColor: '#02246d',
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    legend: {
        top: '2%',
        left: '3%',
        bottom: '2%',
        orient: 'radial',
        data: [{
            name: '治安管理工作',
            icon: 'rectangle'
        },{
            name: '危爆物品管理工作',
            icon: 'rectangle'
        }],
        selected:{
            '治安管理工作':true,
            '危爆物品管理工作':false
        },
        textStyle:{
            color:'#fff'
        }
    },
    series: [{
            type: 'tree',
            name: '治安管理工作',
            data: data2,
            top: '1%',
            right: '50%',
            symbolSize: 1,
            initialTreeDepth: 10,
            label: {
                normal: {
                    position: 'center',
                    verticalAlign: 'middle',
                    align: 'left',
                    backgroundColor: '#7049f0',
                    color: '#fff',
                    padding: 3,
                    formatter: [
                        '{box|{b}}'
                    ].join('\n'),
                    rich: {
                        box: {
                            height: 30,
                            color: '#fff',
                            padding: [0, 5],
                            align: 'center'
                        }
                    }
                }
            },
            leaves: {
                label: {
                    normal: {
                        position: 'center',
                        verticalAlign: 'middle',
                        align: 'left',
                        backgroundColor: '#c44eff',
                        formatter: [
                            '{box|{b}}'
                        ].join('\n'),
                        rich: {
                            box: {
                                height: 18,
                                color: '#fff',
                                padding: [0, 5],
                                align: 'center'
                            }
                        }
                    }
                }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        },
        {
            type: 'tree',
            name: '危爆物品管理工作',
            data: data2,
            top: '1%',
            right: '50%',
            symbolSize: 1,
            initialTreeDepth: 10,
            label: {
                normal: {
                    position: 'center',
                    verticalAlign: 'middle',
                    align: 'left',
                    backgroundColor: '#7049f0',
                    color: '#fff',
                    padding: 3,
                    formatter: [
                        '{box|{b}}'
                    ].join('\n'),
                    rich: {
                        box: {
                            height: 30,
                            color: '#fff',
                            padding: [0, 5],
                            align: 'center'
                        }
                    }
                }
            },
            leaves: {
                label: {
                    normal: {
                        position: 'center',
                        verticalAlign: 'middle',
                        align: 'left',
                        backgroundColor: '#c44eff',
                        formatter: [
                            '{box|{b}}'
                        ].join('\n'),
                        rich: {
                            box: {
                                height: 18,
                                color: '#fff',
                                padding: [0, 5],
                                align: 'center'
                            }
                        }
                    }
                }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
});
myChart.on('legendselectchanged', function (params) {
    // 获取点击图例的选中状态
    var isSelected = params.selected[params.name];
    // 在控制台中打印
    console.log((isSelected ? '选中了' : '取消选中了') + '图例' + params.name);
    // 打印所有图例的状态
    console.log(params.selected);
})