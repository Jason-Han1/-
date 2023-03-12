option = {
    backgroundColor: '#404a59',
    title: {
        text: '阴阳师与王者荣耀贴吧用户区域分布',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['王者荣耀', '阴阳师']
    },
    visualMap: {
        min: 0,
        max: 100,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        inRange: {
            color: ['#50a3ba','#f1c40f', '#e67e22', '#d94e5d']
        },
        textStyle: {
            color: '#fff'
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
            name: '王者荣耀',
            type: 'map',
            mapType: 'china',
            roam: true,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                name: '北京',
                value: 6.8
            }, {
                name: '天津',
                value: 1.6
            }, {
                name: '上海',
                value: 4.7
            }, {
                name: '重庆',
                value: 2.5
            }, {
                name: '河北',
                value: 3.6
            }, {
                name: '河南',
                value: 4.5
            }, {
                name: '云南',
                value: 1.1
            }, {
                name: '辽宁',
                value: 3.1
            }, {
                name: '黑龙江',
                value: 2.1
            }, {
                name: '湖南',
                value: 2.9
            }, {
                name: '安徽',
                value: 2.9
            }, {
                name: '山东',
                value: 6.6
            }, {
                name: '新疆',
                value: 0.5
            }, {
                name: '江苏',
                value: 8.3
            }, {
                name: '浙江',
                value: 7.6
            }, {
                name: '江西',
                value: 2.3
            }, {
                name: '湖北',
                value: 3.6
            }, {
                name: '广西',
                value: 2.0
            }, {
                name: '甘肃',
                value: 0.6
            }, {
                name: '山西',
                value: 1.7
            }, {
                name: '内蒙古',
                value: 0.9
            }, {
                name: '陕西',
                value: 2.1
            }, {
                name: '吉林',
                value: 1.1
            }, {
                name: '福建',
                value: 4.4
            }, {
                name: '贵州',
                value: 1.0
            }, {
                name: '广东',
                value: 12.6
            }, {
                name: '青海',
                value: 0.1
            }, {
                name: '西藏',
                value: 0.2
            }, {
                name: '四川',
                value: 4.7
            }, {
                name: '宁夏',
                value: 0.3
            }, {
                name: '海南',
                value: 0.6
            }, {
                name: '台湾',
                value: 0.3
            }]
        }, {
            name: '阴阳师',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                name: '北京',
                value: 6.9
            }, {
                name: '天津',
                value: 1.8
            }, {
                name: '上海',
                value: 6.4
            }, {
                name: '重庆',
                value: 3.0
            }, {
                name: '河北',
                value: 2.4
            }, {
                name: '河南',
                value: 3.3
            }, {
                name: '云南',
                value: 1.5
            }, {
                name: '辽宁',
                value: 2.9
            }, {
                name: '黑龙江',
                value: 1.7
            }, {
                name: '湖南',
                value: 2.9
            }, {
                name: '安徽',
                value: 2.8
            }, {
                name: '山东',
                value: 5.2
            }, {
                name: '新疆',
                value: 0.5
            }, {
                name: '江苏',
                value: 9.1
            }, {
                name: '浙江',
                value: 8.4
            }, {
                name: '江西',
                value: 1.9
            }, {
                name: '湖北',
                value: 4.2
            }, {
                name: '广西',
                value: 2.7
            }, {
                name: '甘肃',
                value: 0.5
            }, {
                name: '山西',
                value: 1.1
            }, {
                name: '内蒙古',
                value: 0.8
            }, {
                name: '陕西',
                value: 2.0
            }, {
                name: '吉林',
                value: 1.1
            }, {
                name: '福建',
                value: 4.0
            }, {
                name: '贵州',
                value: 1.1
            }, {
                name: '广东',
                value: 11.4
            }, {
                name: '青海',
                value: 0.1
            }, {
                name: '西藏',
                value: 0.1
            }, {
                name: '四川',
                value: 5.8
            }, {
                name: '宁夏',
                value: 0.2
            }, {
                name: '海南',
                value: 0.6
            }, {
                name: '台湾',
                value: 0.2
            }]
        },

    ]
};