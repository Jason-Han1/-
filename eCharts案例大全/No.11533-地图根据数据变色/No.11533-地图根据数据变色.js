function randomData() {
    return Math.round(Math.random() * 1000);
}

option = {
    backgroundColor: '#19364F',
    tooltip: {
        trigger: 'item'
    },
    visualMap: {
        min: 0,
        max: 1000,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true, //是否显示拖拽用的手柄
        orient: 'horizontal', //拖拽用的手柄:水平/垂直
        //颜色范围
        inRange: {
            color: ['#4f7482', 'rgba(127,161,169,0.4)', '#f5f8fd']
        }
    },
    series: [{
        name: 'www',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#19364F', //默认地图块颜色
                borderColor: 'rgba(255,255,255,0.2)', //地图边线颜色
                borderWidth: 0.5, //地图边线粗细
            },
            emphasis: {
                areaColor: '#2B91B7' //鼠标悬停颜色
            }
        },
        data: [{
                name: '北京',
                value: 0
            },
            {
                name: '天津',
                value: randomData()
            },
            {
                name: '上海',
                value: randomData()
            },
            {
                name: '重庆',
                value: randomData()
            },
            {
                name: '河北',
                value: randomData()
            },
            {
                name: '河南',
                value: randomData()
            },
            {
                name: '云南',
                value: randomData()
            },
            {
                name: '辽宁',
                value: randomData()
            },
            {
                name: '黑龙江',
                value: randomData()
            },
            {
                name: '湖南',
                value: randomData()
            },
            {
                name: '安徽',
                value: randomData()
            },
            {
                name: '山东',
                value: randomData()
            },
            {
                name: '新疆',
                value: randomData()
            },
            {
                name: '江苏',
                value: randomData()
            },
            {
                name: '浙江',
                value: randomData()
            },
            {
                name: '江西',
                value: randomData()
            },
            {
                name: '湖北',
                value: randomData()
            },
            {
                name: '广西',
                value: randomData()
            },
            {
                name: '甘肃',
                value: randomData()
            },
            {
                name: '山西',
                value: randomData()
            },
            {
                name: '内蒙古',
                value: randomData()
            },
            {
                name: '陕西',
                value: randomData()
            },
            {
                name: '吉林',
                value: randomData()
            },
            {
                name: '福建',
                value: randomData()
            },
            {
                name: '贵州',
                value: randomData()
            },
            {
                name: '广东',
                value: randomData()
            },
            {
                name: '青海',
                value: randomData()
            },
            {
                name: '西藏',
                value: randomData()
            },
            {
                name: '四川',
                value: randomData()
            },
            {
                name: '宁夏',
                value: randomData()
            },
            {
                name: '海南',
                value: randomData()
            },
            {
                name: '台湾',
                value: randomData()
            },
            {
                name: '香港',
                value: randomData()
            },
            {
                name: '澳门',
                value: randomData()
            }
        ]
    }]
};