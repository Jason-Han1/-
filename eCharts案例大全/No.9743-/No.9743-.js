var initData = 0;

var seriesData = [{
    name: '北京',
    value: initData
}, {
    name: '天津',
    value: initData
}, {
    name: '上海',
    value: initData
}, {
    name: '重庆',
    value: initData
}, {
    name: '河北',
    value: initData
}, {
    name: '河南',
    value: initData
}, {
    name: '云南',
    value: initData
}, {
    name: '辽宁',
    value: initData
}, {
    name: '黑龙江',
    value: initData
}, {
    name: '湖南',
    value: initData
}, {
    name: '安徽',
    value: initData
}, {
    name: '山东',
    value: initData
}, {
    name: '新疆',
    value: initData
}, {
    name: '江苏',
    value: initData
}, {
    name: '浙江',
    value: initData
}, {
    name: '江西',
    value: initData
}, {
    name: '湖北',
    value: initData
}, {
    name: '广西',
    value: initData
}, {
    name: '甘肃',
    value: initData
}, {
    name: '山西',
    value: initData
}, {
    name: '内蒙古',
    value: initData
}, {
    name: '陕西',
    value: initData
}, {
    name: '吉林',
    value: initData
}, {
    name: '福建',
    value: initData
}, {
    name: '贵州',
    value: initData
}, {
    name: '广东',
    value: initData
}, {
    name: '青海',
    value: initData
}, {
    name: '西藏',
    value: initData
}, {
    name: '四川',
    value: initData
}, {
    name: '宁夏',
    value: '450'
}, {
    name: '海南',
    value: '350'
}, {
    name: '台湾',
    value: '250'
}, {
    name: '香港',
    value: '150'
}, {
    name: '澳门',
    value: '50'
}];

// for (var i = 0; i < data.length; i++) {
//     for (var j = 0; j < seriesData.length; j++) {
//         if (data[i].V00 === seriesData[j].name) {
//             seriesData[j].value = data[i].V02;
//         }
//     }
// }

var option = {
    visualMap: {
        type: "piecewise",
        show: false,
        pieces: [{max: 100},
            {min: 100, max: 300},
            {min: 300}],
        inRange: {
            color: ['#1ab22a', '#b2230c', '#b118b2']
        }
    },
    series: {
        type: 'map3D',
        map: 'china',
        roam: true,
        itemStyle: {
            // areaColor: '#0c72b2',
            opacity: 1,
            borderWidth: 0.8,
            borderColor: 'rgb(62,215,213)'
        },
        label: {
            formatter: '{b}\n接口数量：{c}',
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            show: true,
            label: {
                show: true,
                textStyle: {
                    color: '#f4f8fc',
                    fontSize: 18,
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            },

        },
        data: seriesData
    },

};