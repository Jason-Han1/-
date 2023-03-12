function randomData() {
    return Math.round(Math.random() * 1000);
}
option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var arr = [];
            for (var j = 0; j < 4; j++) {
                var oa = option.series[j].data;
                for (var i = 0; i < oa.length; i++) {
                    if (oa[i] && params.data && params.data.name == oa[i].name && oa[i].name.value != 'undefined') {
                        arr.push({
                            seriesName: option.series[j].name,
                            name: oa[i].name,
                            value: oa[i].value
                        });
                    }

                }
                if (j == 3 && arr != 'null' && arr.length != 0) {
                    var str = arr[0].name + "<br>";
                    for (var k = 0; k < arr.length; k++) {
                        str += arr[k].seriesName + ':' + arr[k].value + "<br>";
                    }
                    if (k == arr.length) {
                        return str;
                    }
                }

            }

        }

    },
    visualMap: {
        textStyle: {
            color: '#fff'
        },
        min: 0,
        max: 2000,
        left: 'left',
        top: 'bottom',
        text: ['最高销售量', '最低销售量'], // 文本，默认为数值文本
        calculable: false,
        color: ['#0000F8', '#33F4FA']
    },
    series: [{
        name: '双色球',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle: {
            emphasis: {
                areaColor: 'red'
            }

        },
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        data: [{
            name: '北京',
            value: randomData()
        }, {
            name: '天津',
            value: randomData()
        }, {
            name: '上海',
            value: randomData()
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
        }]
    }, {
        name: '七乐彩',
        type: 'map',
        mapType: 'china',
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        data: [{
            name: '北京',
            value: randomData()
        }, {
            name: '天津',
            value: randomData()
        }, {
            name: '上海',
            value: randomData()
        }, {
            name: '重庆',
            value: randomData()
        }, {
            name: '河北',
            value: randomData()
        }, {
            name: '安徽',
            value: randomData()
        }, {
            name: '新疆',
            value: randomData()
        }, {
            name: '浙江',
            value: randomData()
        }, {
            name: '江西',
            value: randomData()
        }, {
            name: '山西',
            value: randomData()
        }, {
            name: '内蒙古',
            value: randomData()
        }, {
            name: '吉林',
            value: randomData()
        }, {
            name: '福建',
            value: randomData()
        }, {
            name: '广东',
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
            name: '香港',
            value: randomData()
        }, {
            name: '澳门',
            value: randomData()
        }]
    }, {
        name: '3D',
        type: 'map',
        mapType: 'china',
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        data: [{
            name: '北京',
            value: randomData()
        }, {
            name: '天津',
            value: randomData()
        }, {
            name: '上海',
            value: randomData()
        }, {
            name: '广东',
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
        }]
    }, {
        name: '即开奖',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        data: [{
            name: '北京',
            value: randomData()
        }, {
            name: '天津',
            value: randomData()
        }, {
            name: '上海',
            value: randomData()
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
        }]
    }]
};