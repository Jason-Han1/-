var data = [{
        name: '西藏',
        value: '10'
    },
    {
        name: '新疆',
        value: '25'
    },
    {
        name: '青海',
        value: '20'
    },
    {
        name: '宁夏',
        value: '66'
    },
    {
        name: '内蒙古',
        value: '35'
    },
    {
        name: '四川',
        value: '46'
    },
    {
        name: '云南',
        value: '85'
    },
    {
        name: '广西',
        value: '95'
    },
    {
        name: '广东',
        value: '101'
    },
    {
        name: '海南',
        value: '152'
    },
    {
        name: '甘肃',
        value: '132'
    },
    {
        name: '山西',
        value: '256'
    },
    {
        name: '陕西',
        value: '452'
    },
    {
        name: '湖南',
        value: '63'
    },
    {
        name: '湖北',
        value: '78'
    },
    {
        name: '河南',
        value: '96'
    },
    {
        name: '河北',
        value: '512'
    },
    {
        name: '江西',
        value: '45'
    },
    {
        name: '安徽',
        value: '63'
    },
    {
        name: '北京',
        value: '41'
    },
    {
        name: '辽宁',
        value: '85'
    },
    {
        name: '吉林',
        value: '78'
    },
    {
        name: '黑龙江',
        value: '203'
    },
    {
        name: '江苏',
        value: '123'
    },
    {
        name: '浙江',
        value: '9'
    },
    {
        name: '福建',
        value: '33'
    },
    {
        name: '台湾',
        value: '20'
    },
    {
        name: '贵州',
        value: '52'
    },
    {
        name: '重庆',
        value: '78'
    },
    {
        name: '山东',
        value: '96'
    },
    {
        name: '香港',
        value: '152'
    },
    {
        name: '上海',
        value: '135'
    },
    {
        name: '天津',
        value: '85'
    }
]
option = {
    title: {
        text: '测试map3D',
        x: 'left',
        top: "10",
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return params.name + ' : ' + params.value;
        }
    },
    visualMap: {
        type: 'continuous',
        show: false,
        min: 0,
        max: 220,
        text: '高低',
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        textStyle: {
            color: '#FFFF'
        }
    },
    series: [{
        type: 'map3D',
        map: 'china',
        label: {
            show: true,
            textStyle: {
                color: '#000', //地图初始化区域字体颜色
                fontSize: 12,
                opacity: 1,
                backgroundColor: 'rgba(0,23,11,0)'
            },
        },
        itemStyle: {
            normal: {
                borderColor: '#4084ab',
                borderWidth: 1
            },
            emphasis: {
                color: '#2AB8FF'
            }
        },
        data: data
    }]
};