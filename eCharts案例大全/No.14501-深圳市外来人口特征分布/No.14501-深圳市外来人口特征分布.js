option = {
    title: {
        text: "深圳市外来人口特征分布",
        subtext: "",
        left: "center",
        textStyle: {
            color: "#fff",
            fontSize: 18
        },
    },

    backgroundColor: new echarts.graphic.RadialGradient(0, 0, 1, [{
        offset: 0,
        color: '#174b78'
    }, {
        offset: 1,
        color: '#174b78'
    }]),
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
        name: '年龄分布',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 5,
            name: '0-18岁'
        }, {
            value: 13,
            name: '18-35岁'
        }, {
            value: 19,
            name: '35-50岁'
        }, {
            value: 17,
            name: '50-65岁'
        }, {
            value: 3,
            name: '>65岁'
        }]
    }, {
        name: '居住原因',
        type: 'pie',
        radius: ['32%', '60%'],
        label: {
            normal: {
                position: 'inner'
            }
        },
        data: [{
            value: 7.66,
            name: '学习培训'
        }, {
            value: 69.9,
            name: '务工经商'
        }, {
            value: 11,
            name: '随迁家属'
        }, {
            value: 7.5,
            name: '投亲靠友'
        }, {
            value: 6.64,
            name: '工作调动'
        }, {
            value: 5.92,
            name: '婚姻嫁娶'
        }, {
            value: 2.67,
            name: '拆迁搬家'
        }, {
            value: 2.15,
            name: '寄挂户口'
        }, {
            value: 3.54,
            name: '其他'
        }]
    }, {
        name: '来源分布',
        type: 'pie',
        radius: ['62%', '70%'],
        label: {
            normal: {
                position: 'outer'
            }
        },
        data: [{
            value: 12,
            name: '黑龙江'
        }, {
            value: 11,
            name: '吉林'
        }, {
            value: 22,
            name: '辽宁'
        }, {
            value: 20,
            name: '河北'
        }, {
            value: 89,
            name: '河南'
        }, {
            value: 31,
            name: '山东'
        }, {
            value: 11,
            name: '山西'
        }, {
            value: 25,
            name: '安徽'
        }, {
            value: 69,
            name: '江西'
        }, {
            value: 18,
            name: '江苏'
        }, {
            value: 22,
            name: '浙江'
        }, {
            value: 35,
            name: '福建'
        }, {
            value: 20,
            name: '台湾'
        }, {
            value: 89,
            name: '广东'
        }, {
            value: 49,
            name: '湖南'
        }, {
            value: 39,
            name: '湖北'
        }, {
            value: 46,
            name: '海南'
        }, {
            value: 29,
            name: '云南'
        }, {
            value: 38,
            name: '贵州'
        }, {
            value: 28,
            name: '四川'
        }, {
            value: 7,
            name: '青海'
        }, {
            value: 8,
            name: '甘肃'
        }, {
            value: 8,
            name: '陕西'
        }, {
            value: 10,
            name: '内蒙古'
        }, {
            value: 7,
            name: '新疆'
        }, {
            value: 45,
            name: '广西'
        }, {
            value: 10,
            name: '宁夏'
        }, {
            value: 4,
            name: '西藏'
        }, {
            value: 10,
            name: '北京'
        }, {
            value: 12,
            name: '天津'
        }, {
            value: 12,
            name: '上海'
        } ,{
            value: 29,
            name: '重庆'
        }]
    }]
};