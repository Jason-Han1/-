option = {
    title: {
        text: '',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'item'
    },

    dataRange: {
        min: 0,
        max: 4000,
        x: 'left',
        y: 'bottom',

        text: ['高', '低'], // 文本，默认为数值文本
        calculable: false,

        splitNumber: 0,


        color: ['orangered', 'gold', 'yellow', 'green', 'lightgreen', 'lightgrey']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            dataZoom: {
                show: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series: [{
        name: 'Number',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle: {
            normal: {
                label: {
                    show: true
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: [{
            "name": "上海",
            "value": "706"
        }, {
            "name": "云南",
            "value": "336"
        }, {
            "name": "内蒙古",
            "value": "544"
        }, {
            "name": "北京",
            "value": "696"
        }, {
            "name": "台湾",
            "value": "3"
        }, {
            "name": "吉林",
            "value": "252"
        }, {
            "name": "四川",
            "value": "843"
        }, {
            "name": "天津",
            "value": "1094"
        }, {
            "name": "宁夏",
            "value": "66"
        }, {
            "name": "安徽",
            "value": "1350"
        }, {
            "name": "山东",
            "value": "1133"
        }, {
            "name": "山西",
            "value": "1131"
        }, {
            "name": "广东",
            "value": "7647"
        }, {
            "name": "广西",
            "value": "474"
        }, {
            "name": "新疆",
            "value": "86"
        }, {
            "name": "江苏",
            "value": "4744"
        }, {
            "name": "江西",
            "value": "832"
        }, {
            "name": "河北",
            "value": "1571"
        }, {
            "name": "河南",
            "value": "1144"
        }, {
            "name": "浙江",
            "value": "2477"
        }, {
            "name": "海南",
            "value": "493"
        }, {
            "name": "湖北",
            "value": "989"
        }, {
            "name": "湖南",
            "value": "1714"
        }, {
            "name": "澳门",
            "value": "7"
        }, {
            "name": "甘肃",
            "value": "44"
        }, {
            "name": "福建",
            "value": "1424"
        }, {
            "name": "西藏",
            "value": "4"
        }, {
            "name": "贵州",
            "value": "1151"
        }, {
            "name": "辽宁",
            "value": "611"
        }, {
            "name": "重庆",
            "value": "250"
        }, {
            "name": "陕西",
            "value": "630"
        }, {
            "name": "青海",
            "value": "16"
        }, {
            "name": "香港",
            "value": "15"
        }, {
            "name": "黑龙江",
            "value": "202"
        }]

    }, ]
};