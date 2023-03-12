data = {
    "name": "余杭区: 50675",
    "children": [{
        "id": 102,
        "name": "高端制造:4631",
        "children": [{
            "id": 10203,
            "name": "其他:2402"
        }, {
            "id": 10202,
            "name": "货摊纺织、服装及鞋零售:351"
        }, {
            "id": 10201,
            "name": "技能培训、教育辅助及其他教育:1878"
        }]
    }, {
        "id": 106,
        "name": "金融服务:1559",
        "children": [{
            "id": 10603,
            "name": "其他:19"
        }, {
            "id": 10602,
            "name": "控股公司服务:27"
        }, {
            "id": 10601,
            "name": "投资与资产管理:1513"
        }]
    }, {
        "id": 107,
        "name": "生物健康:1435",
        "children": [{
            "id": 10703,
            "name": "其他:745"
        }, {
            "id": 10701,
            "name": "医学研究和试验发展:353"
        }, {
            "id": 10702,
            "name": "生物技术推广服务:337"
        }]
    }, {
        "id": 103,
        "name": "时尚行业:5057",
        "children": [{
            "id": 10302,
            "name": "服装零售:1758"
        }, {
            "id": 10301,
            "name": "服装批发:2805"
        }, {
            "id": 10303,
            "name": "其他:494"
        }]
    }, {
        "id": 104,
        "name": "旅游休闲:953",
        "children": [{
            "id": 10403,
            "name": "其他:560"
        }, {
            "id": 10402,
            "name": "其他食品零售:172"
        }, {
            "id": 10401,
            "name": "其他未列明餐饮业:221"
        }]
    }, {
        "id": 105,
        "name": "文化创意:4131",
        "children": [{
            "id": 10503,
            "name": "其他:1448"
        }, {
            "id": 10502,
            "name": "其他技术推广服务:1174"
        }, {
            "id": 10501,
            "name": "其他体育:1509"
        }]
    }, {
        "id": 101,
        "name": "数字经济:32909",
        "children": [{
            "id": 10101,
            "name": "其他科技推广和应用服务业:18181"
        }, {
            "id": 10102,
            "name": "其他未列明信息技术服务业:8817"
        }, {
            "id": 10103,
            "name": "其他:5911"
        }]
    }]
};
console.log(data)

option = {
    series: [{
        type: 'tree',
        name: 'tree2',
        data: [data],
        top: '10%',
        bottom: '10%',
        right: '25%',
        left: '7%',
        symbolSize: 8,
        symbol: 'circle',
        // 展开发的层级数
        initialTreeDepth: 10,
        itemStyle: {
            color: '#9D85FB',
            borderColor: '#9D85FB',
        },
        label: {
            normal: {
                position: 'bottom',
                verticalAlign: 'middle',
                align: 'center',
            },
        },
        // 线的样式
        lineStyle: {
            color: '#9D85FB',
            curveness: '0.5',
        },
        leaves: {
            label: {
                normal: {
                    // 叶子节点字的样式
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left',
                },
            },
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750,
    }, ],
};