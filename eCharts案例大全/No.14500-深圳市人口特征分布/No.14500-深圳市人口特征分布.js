option = {
    title: {
        text: "深圳市人口特征分布",
        subtext: "",
        left: "center",
        textStyle: {
            color: "#333333",
            fontSize: 18
        },
    },

    backgroundColor: new echarts.graphic.RadialGradient(0, 0, 1, [{
        offset: 0,
        color: '#ffffff'
    }, {
        offset: 1,
        color: '#ffffff'
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
            value: 15,
            name: '0-18岁'
        }, {
            value: 20,
            name: '18-35岁'
        }, {
            value: 19,
            name: '35-50岁'
        }, {
            value: 17,
            name: '50-65岁'
        }, {
            value: 9,
            name: '>65岁'
        }]
    }, {
        name: '学历分布',
        type: 'pie',
        radius: ['32%', '60%'],
        label: {
            normal: {
                position: 'inner'
            }
        },
        data: [{
            value: 13.66,
            name: '小学及以下'
        }, {
            value: 15.9,
            name: '初中'
        }, {
            value: 18,
            name: '高中及中专'
        }, {
            value: 20,
            name: '大专'
        }, {
            value: 18,
            name: '本科'
        }, {
            value: 13,
            name: '硕士'
        }, {
            value: 6,
            name: '博士及以上'
        }]
    }, {
        name: '职业分布',
        type: 'pie',
        radius: ['62%', '70%'],
        label: {
            normal: {
                position: 'outer'
            }
        },
        data: [{
            value: 12,
            name: '其它'
        }, {
            value: 38,
            name: '资讯'
        }, {
            value: 18,
            name: '体育'
        }, {
            value: 18,
            name: '军人'
        }, {
            value: 19,
            name: '治安人员'
        }, {
            value: 28,
            name: '家庭管理'
        }, {
            value: 50,
            name: '服务业'
        }, {
            value: 40,
            name: '金融业'
        }, {
            value: 69,
            name: '商业'
        }, {
            value: 26,
            name: '公共事业'
        }, {
            value: 9,
            name: '宗教'
        }, {
            value: 35,
            name: '文教'
        }, {
            value: 47,
            name: '娱乐业'
        }, {
            value: 38,
            name: '卫生'
        }, {
            value: 36,
            name: '新闻、出版、广告业'
        }, {
            value: 39,
            name: '制造业'
        }, {
            value: 22,
            name: '建筑工程业（土木工程）'
        }, {
            value: 40,
            name: '餐旅业'
        }, {
            value: 37,
            name: '交通运输业'
        }, {
            value: 10,
            name: '矿业、采石业'
        }, {
            value: 7,
            name: '木材、森林业'
        }, {
            value: 14,
            name: '渔业'
        }, {
            value: 8,
            name: '农牧业'
        }, {
            value: 30,
            name: '一般职业'
        }]
    }]
};