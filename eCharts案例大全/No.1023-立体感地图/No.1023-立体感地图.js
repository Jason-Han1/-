var dataList = [
    {
        name: '南海诸岛',
        value: 1,
    },
    {
        name: '北京',
        value: 111,
    },
    {
        name: '天津',
        value: 1,
    },
    {
        name: '上海',
        value: 1,
    },
    {
        name: '重庆',
        value:1,
    },
    {
        name: '河北',
        value: 658,
    },
    {
        name: '河南',
        value: 68,
    },
    {
        name: '云南',
        value: 1,
    },
    {
        name: '辽宁',
        value: 1,
    },
    {
        name: '黑龙江',
        value: 1,
    },
    {
        name: '湖南',
        value: 1,
    },
    {
        name: '安徽',
        value: 65,
    },
    {
        name: '山东',
        value: 102,
    },
    {
        name: '新疆',
        value: 1,
    },
    {
        name: '江苏',
        value: 112,
    },
    {
        name: '浙江',
        value: 25,
    },
    {
        name: '江西',
        value: 36,
    },
    {
        name: '湖北',
        value: 36,
    },
    {
        name: '广西',
        value: 1,
    },
    {
        name: '甘肃',
        value: 1,
    },
    {
        name: '山西',
        value: 1,
    },
    {
        name: '内蒙古',
        value: 654,
    },
    {
        name: '陕西',
        value: 1,
    },
    {
        name: '吉林',
        value: 1,
    },
    {
        name: '福建',
        value: 1,
    },
    {
        name: '贵州',
        value: 1,
    },
    {
        name: '广东',
        value: 260,
    },
    {
        name: '青海',
        value: 1,
    },
    {
        name: '西藏',
        value: 1,
    },
    {
        name: '四川',
        value: 1,
    },
    {
        name: '宁夏',
        value: 1,
    },
    {
        name: '海南',
        value: 1,
    },
    {
        name: '台湾',
        value: 0,
    },
    {
        name: '香港',
        value: 1,
    },
    {
        name: '澳门',
        value: 1,
    },
];
option = {
    title: {
        show: false,
        top: 20,
        text: '入驻企业分布图',
        subtext: '',
        x: 'center',
        textStyle: {
            color: '#fff',
            fontWeight: 400,
            fontSize: 24,
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var value = params.value;
            return params.name + ' : ' + value + '家';
        },
    },
    visualMap: {
        min: 0,
        max: 1000,
        left: 26,
        // top: 400,
        bottom: 0,
        showLabel: !0,
        // text: ["高", "低"],
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
        pieces: [
            // {
            //   lte: 1000,
            //   gte: 500,
            //   label: "入驻企业 ≥ 500家",
            //   color: "#03E1FA",
            // },
            {
                // lte: 499,
                gte: 101,
                label: '100家以上',
                color: 'rgb(148,20,30)',
            },
            {
                lte: 100,
                gte: 1,
                label: '100家以下',
                color: '#FA6176',
            },
            {
                value: 0,
                label: '未使用',
                // color: "rgba(216,79,90,0.2)",
                // color: "rgba(214,192,195,1)",
                color: 'rgba(214,192,195,1)',
            },
        ],
        show: true,
    },
    geo: [
        {
            type: 'map',
            map: 'china',
            zlevel: 0,
            zoom: 1, 
            aspectScale: 0.96,
            layoutCenter: ['50%', '50.2%'],
            layoutSize: '100%',
            roam: false,
            silent: true,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(229,32,71,1)',
                    shadowColor: 'rgba(195,26,59,0.9)',
                    borderWidth: 5,
                    shadowOffsetY: 0,
                    shadowBlur: 50,
                    areaColor: 'rgba(5,21,35,0.1)',
                },
            },
        },
        {
            type: 'map',
            map: 'china',
            zlevel: -1,
            zoom: 1, 
            aspectScale: 0.96,
            layoutCenter: ['50%', '51.4%'],
            layoutSize: '100%',
            roam: false,
            silent: true,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(170,34,49,1)',
                    shadowColor: 'rgba(195,26,59,0.5)',
                    shadowOffsetY: 0,
                    shadowBlur: 25,
                    areaColor: 'rgba(5,21,35,0.1)',
                },
            },
        },
        {
            type: 'map',
            map: 'china',
            zlevel: -2,
            zoom: 1, 
            aspectScale: 0.96,
            layoutCenter: ['50%', '52.8%'],
            layoutSize: '100%',
            roam: false,
            silent: true,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(170,34,49,1)',
                    shadowColor: 'rgba(195,26,59,0.5)',
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    areaColor: 'rgba(5,21,35,0.1)',
                },
            },
        },
        {
            type: 'map',
            map: 'china',
            zlevel: -3,
            zoom: 1, 
            aspectScale: 0.96,
            layoutCenter: ['50%', '54.2%'],
            layoutSize: '100%',
            roam: false,
            silent: true,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(170,34,49,1)',
                    shadowColor: 'rgba(195,26,59,0.8)',
                    shadowOffsetY: 0,
                    shadowBlur: 15,
                    areaColor: 'rgba(5,21,35,0.1)',
                },
            },
        },
    ],
    series: [
        {
            type: 'map',
            mapType: 'china',
            aspectScale: 0.96,
            layoutCenter: ['50%', '50%'], 
            layoutSize: '100%',
            zoom: 1, 
            roam: false, 
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(183,185,14)',
                    },
                },
            },
            itemStyle: {
                normal: {
                    areaColor: 'rgba(250,97,118,1)',
                    borderColor: 'rgba(255,255,255,1)',
                    borderWidth: 2,
                },
                emphasis: {
                    // areaColor: '#ff8800',
                    areaColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#3f15d6', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#d243cd', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    borderColor: 'red',
                    label: {
                        show: true,
                        color: '#fff',
                    },
                },
            },
            data: dataList,
        },
    ],
};
