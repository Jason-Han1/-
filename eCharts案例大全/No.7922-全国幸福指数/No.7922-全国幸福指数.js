function randomData() {
    return Math.round(Math.random() * 100);
}

//数据格式如下,中文名称要一致,value为数字类型,字符串的数字也可以
var mapData = [{
    name: '北京',
    value: 121
}, {
    name: '天津',
    value: 20.22222
}, {
    name: '上海',
    value: '99'
}, {
    name: '重庆',
    value: randomData()
}, {
    name: '河北',
    value: randomData()
}, {
    name: '河南',
    value: randomData()
}, {
    name: '云南',
    value: randomData()
}, {
    name: '辽宁',
    value: randomData()
}, {
    name: '黑龙江',
    value: randomData()
}, {
    name: '湖南',
    value: randomData()
}, {
    name: '安徽',
    value: randomData()
}, {
    name: '山东',
    value: randomData()
}, {
    name: '新疆',
    value: randomData()
}, {
    name: '江苏',
    value: randomData()
}, {
    name: '浙江',
    value: randomData()
}, {
    name: '江西',
    value: randomData()
}, {
    name: '湖北',
    value: randomData()
}, {
    name: '广西',
    value: randomData()
}, {
    name: '甘肃',
    value: randomData()
}, {
    name: '山西',
    value: randomData()
}, {
    name: '内蒙古',
    value: randomData()
}, {
    name: '陕西',
    value: randomData()
}, {
    name: '吉林',
    value: randomData()
}, {
    name: '福建',
    value: randomData()
}, {
    name: '贵州',
    value: randomData()
}, {
    name: '广东',
    value: randomData()
}, {
    name: '青海',
    value: randomData()
}, {
    name: '西藏',
    value: randomData()
}, {
    name: '四川',
    value: randomData()
}, {
    name: '宁夏',
    value: randomData()
}, {
    name: '海南',
    value: randomData()
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
        text: '全国幸福指数',
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
            return `${name}:<br>幸福指数:${value} `
        }

    },

    visualMap: {
        min: 0,
        max: 100,
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