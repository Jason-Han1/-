
option = {
    title:{
        text: "广州大学数据分析",
        subtext: "外省比例及少数民族比例-Acring",
        left:"center"
    },
     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
        name: '少数民族占比',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
            normal: {
                position: 'outer'
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        data: [{
            'name': '土家族',
            'value': 30
        }, {
            'name': '回族',
            'value': 31
        }, {
            'name': '壮族',
            'value': 40
        }, {
            'name': '苗族',
            'value': 26
        }, {
            'name': '瑶族',
            'value': 12
        }, {
            'name': '京族',
            'value': 1
        }, {
            'name': '侗族',
            'value': 14
        }, {
            'name': '维吾尔族',
            'value': 16
        }, {
            'name': '彝族',
            'value': 6
        }, {
            'name': '满族',
            'value': 24
        }, {
            'name': '蒙古族',
            'value': 14
        }, {
            'name': '布依族',
            'value': 15
        }, {
            'name': '畲族',
            'value': 6
        }, {
            'name': '黎族',
            'value': 5
        }, {
            'name': '水族',
            'value': 1
        }, {
            'name': '傣族',
            'value': 2
        }, {
            'name': '朝鲜族',
            'value': 5
        }, {
            'name': '白族',
            'value': 2
        }, {
            'name': '毛难族',
            'value': 1
        }, {
            'name': '其他',
            'value': 1
        }, {
            'name': '东乡族',
            'value': 1
        }, {
            'name': '仡佬族',
            'value': 1
        }]
    }, {
        name: '外来省份占比',
        type: 'pie',
        radius: ['50%', '65%'],

        data: [{
            'name': '贵州',
            'value': 119
        }, {
            'name': '新疆',
            'value': 46
        }, {
            'name': '安徽',
            'value': 175
        }, {
            'name': '福建',
            'value': 57
        }, {
            'name': '河南',
            'value': 133
        }, {
            'name': '甘肃',
            'value': 139
        }, {
            'name': '重庆',
            'value': 53
        }, {
            'name': '云南',
            'value': 57
        }, {
            'name': '宁夏',
            'value': 42
        }, {
            'name': '湖南',
            'value': 213
        }, {
            'name': '山西',
            'value': 77
        }, {
            'name': '吉林',
            'value': 42
        }, {
            'name': '辽宁',
            'value': 31
        }, {
            'name': '内蒙古',
            'value': 32
        }, {
            'name': '河北',
            'value': 34
        }, {
            'name': '广西',
            'value': 67
        }, {
            'name': '海南',
            'value': 68
        }, {
            'name': '湖北',
            'value': 38
        }, {
            'name': '江西',
            'value': 85
        }, {
            'name': '四川',
            'value': 14
        }, {
            'name': '山东',
            'value': 1
        }, {
            'name': '内高班',
            'value': 15
        }, {
            'name': '香港',
            'value': 1
        }]
    }]
};