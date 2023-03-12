

function randomData() {
    return Math.round(Math.random() * 100);
}

//数据格式如下,中文名称要一致,value为数字类型,字符串的数字也可以
var mapData = [{
    name: '北京',
    value: 2154
}, {
    name: '天津',
    value: 1562
}, {
    name: '上海',
    value: 2428
}, {
    name: '重庆',
    value: 3124
}, {
    name: '河北',
    value: 7592
}, {
    name: '河南',
    value: 9640
}, {
    name: '云南',
    value: 4858
}, {
    name: '辽宁',
    value: 4352
}, {
    name: '黑龙江',
    value: 3751
}, {
    name: '湖南',
    value: 6918
}, {
    name: '安徽',
    value: 6366
}, {
    name: '山东',
    value: 10070
}, {
    name: '新疆',
    value: 2523
}, {
    name: '江苏',
    value: 8070
}, {
    name: '浙江',
    value: 5850
}, {
    name: '江西',
    value: 4666
}, {
    name: '湖北',
    value: 5927
}, {
    name: '广西',
    value: 4960
}, {
    name: '甘肃',
    value: 2647
}, {
    name: '山西',
    value: 3729
}, {
    name: '内蒙古',
    value: 2540
}, {
    name: '陕西',
    value: 3876
}, {
    name: '吉林',
    value: 2691
}, {
    name: '福建',
    value: 3973
}, {
    name: '贵州',
    value: 3623
}, {
    name: '广东',
    value: 11521
}, {
    name: '青海',
    value: 608
}, {
    name: '西藏',
    value: 351
}, {
    name: '四川',
    value: 8375
}, {
    name: '宁夏',
    value: 695
}, {
    name: '海南',
    value: 945
}, {
    name: '台湾',
    value: randomData()
}, {
    name: '香港',
    value: randomData()
}, {
    name: '澳门',
    value: randomData()
}, {
    name: '南海诸岛',
    value: '666'
}]



myChart.setOption({
    series: [{
        type: 'map',
        map: 'china'
    }]
});



option = {


    title: {
        text: '各省年末常住人口数（万人）',
        subtext: '',
        itemGap: 30,
        left: 'center',
        textStyle: {
            color: '#000',

            fontStyle: 'normal',

            fontWeight: 'bold',

            fontSize: 30
        },

        subtextStyle: {


            color: '#58d9df',

            fontStyle: 'normal',

            fontWeight: 'bold',

            fontSize: 16


        }
    },

    tooltip: {
        trigger: 'item',
        formatter: function(e) {
            console.log(e)
            var name = e.name ? e.name : '获取中';
            var value = e.value ? e.value : '暂无数据'
            return `${name}:<br>各省年末常住人口数（万人）:${value} `
        }

    },

    visualMap: {
        min: 0,
        max: 10000,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        inRange: {
            color: ['#ffffff', '#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
        }
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },


    geo: {
        map: 'china',
        zoom: 1.2,
        label: {
            normal: {

                show: true,
                color: '#c1c4c8'
            },
            emphasis: {
                show: false,
                color: '#292929'
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#fbfbfb',
                borderColor: '#b9b4b7'

            },
            emphasis: {
                areaColor: '#05ff09'
            }
        }
    },
    series: [{
        type: 'map',
        mapType: 'china',
        geoIndex: 0,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        data: mapData
    }]
};


myChart.setOption(option);

