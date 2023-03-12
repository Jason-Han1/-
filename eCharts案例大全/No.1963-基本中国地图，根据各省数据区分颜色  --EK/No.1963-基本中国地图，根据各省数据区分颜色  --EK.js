var data = [
    {
        name: '北京',
        selected: false,
        value: 4500000,
    },
    {
        name: '天津',
        selected: false,
        value: 5000000,
    },
    {
        name: '上海',
        selected: false,
        value: 5000000,
    },
    {
        name: '重庆',
        selected: false,
        value: 5548400,
    },
    {
        name: '河北',
        selected: false,
        value: 5881100,
    },
    {
        name: '河南',
        selected: false,
        value: 5985000,
    },
    {
        name: '云南',
        selected: false,
        value: 5488100,
    },
    {
        name: '辽宁',
        selected: false,
        value: 5794150,
    },
    {
        name: '黑龙江',
        selected: false,
        value: 5154800,
    },
    {
        name: '湖南',
        selected: false,
        value: 5105440,
    },
    {
        name: '安徽',
        selected: false,
        value: 5115450,
    },
    {
        name: '山东',
        selected: false,
        value: 5485150,
    },
    {
        name: '新疆',
        selected: false,
        value: 5548780,
    },
    {
        name: '江苏',
        selected: false,
        value: 7856000,
    },
    {
        name: '浙江',
        selected: false,
        value: 8043000,
    },
    {
        name: '江西',
        selected: false,
        value: 5488400,
    },
    {
        name: '湖北',
        selected: false,
        value: 5481100,
    },
    {
        name: '广西',
        selected: false,
        value: 5500000,
    },
    {
        name: '甘肃',
        selected: false,
        value: 5488100,
    },
    {
        name: '山西',
        selected: false,
        value: 4584150,
    },
    {
        name: '内蒙古',
        selected: false,
        value: 3568400,
    },
    {
        name: '陕西',
        selected: false,
        value: 3848810,
    },
    {
        name: '吉林',
        selected: false,
        value: 5545480,
    },
    {
        name: '福建',
        selected: false,
        value: 4545510,
    },
    {
        name: '贵州',
        selected: false,
        value: 5544510,
    },
    {
        name: '广东',
        selected: false,
        value: 14974000,
    },
    {
        name: '青海',
        selected: false,
        value: 5854440,
    },
    {
        name: '西藏',
        selected: false,
        value: 5445510,
    },
    {
        name: '四川',
        selected: false,
        value: 6972000,
    },
    {
        name: '宁夏',
        selected: false,
        value: 5684510,
    },
    {
        name: '海南',
        selected: false,
        value: 512640,
    },
    {
        name: '台湾',
        selected: false,
        value: 4448450,
    },
    {
        name: '香港',
        selected: false,
        value: 4154870,
    },
    {
        name: '澳门',
        selected: false,
        value: 4454580,
    },
]; //各省地图颜色数据依赖value

option = {
    backgroundColor: '#142452',
    tooltip: {
        trigger: 'item',
    },
    // 游标
    visualMap: {
        // orient: 'horizontal', //横置
        type: 'continuous',
        itemWidth: 16,
        itemHeight: 120,
        text: ['高', '低'],
        showLabel: true,
        seriesIndex: [0],
        min: 4000000,
        max: 10000000,
        calculable: true, //开启游标
        left: 50,
        bottom: 30,
        inRange: {
            color: ['#8ED861', '#85CE4E', '#EED000', '#EEAE00', '#209FA9', '#F5903D', '#EE8C00', '#EE3B3B'],
        },
        textStyle: {
            color: '#ffffff',
            fontSize: 12,
        },
    },

    legend: {
        orient: 'vertical',
        top: 'right',
        left: 'bottom',
        data: ['已完成', '进行中', '未完成'],
        textStyle: {
            //图例文字的样式
            color: '#00FFFF',
            fontSize: 12,
        },
    },

    geo: {
        map: 'china',
        roam: false, //开关可移动可放大
    },

    series: [
        {
            name: '飞信消息发送量',
            type: 'map',
            mapType: 'china',
            showLegendSymbol: false, //去掉指示点
            itemStyle: {
                normal: {
                    borderWidth: 1, //区域边框宽度
                    borderColor: '#00a6dc', //区域边框颜色
                    areaColor: '#224E7F', //区域颜色
                    label: {
                        show: false, //是否显示各省名称
                        textStyle: {
                            color: '#ff5500', //显示各省名称颜色
                        },
                    },
                },
                emphasis: {
                    areaColor: '#f0690f', //区域颜色，鼠标悬停颜色
                    label: {
                        show: true, //鼠标悬浮时是否显示各省名称
                        textStyle: {
                            color: '#fdf1f6', //鼠标悬浮时显示各省名称的颜色
                        },
                    },
                },
            },
            data: data,
        },
    ],
};
