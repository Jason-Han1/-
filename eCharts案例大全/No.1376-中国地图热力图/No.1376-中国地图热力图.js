    /**
     * git 地址 ：https://github.com/FunArtisanPai/china-echarts-distpicker.git
     * 该地图不是跟高德地图一样精准，如果地图精准度要求高，请移步
     * 账号里面的code全部用的是adcode  区域行政代码
     **/


    var provinces = {
        '上海': '/asset/get/s/data-1594958113307-cxRUVth12.json',
        '河北': '/asset/get/s/data-1594957443106-mUbmYqE_T.json',
        '山西': '/asset/get/s/data-1594957766868-uxxAlaOQg.json',
        '内蒙古': '/asset/get/s/data-1594957676205-3QrKkEs35.json',
        '辽宁': '/asset/get/s/data-1594957651717-Gpv1HF9L3.json',
        '吉林': '/asset/get/s/data-1594957628423-QcNxuZC4W.json',
        '黑龙江': '/asset/get/s/data-1594957464890-ReTKD9z2j.json',
        '江苏': '/asset/get/s/data-1594957547861-KHdRNauVp.json',
        '浙江': '/asset/get/s/data-1594957975764-hU_4mjjCM.json',
        '安徽': '/asset/get/s/data-1594956457905-qkfohCrdY.json',
        '福建': '/asset/get/s/data-1594957317412-_IqC6cGfe.json',
        '江西': '/asset/get/s/data-1594957574860-XllJ4xelw.json',
        '山东': '/asset/get/s/data-1594957742389-8f6xMmJyc.json',
        '河南': '/asset/get/s/data-1594957480524-SL6qHJ-Fq.json',
        '湖北': '/asset/get/s/data-1594957504930-HOA-bJ-4Z.json',
        '湖南': '/asset/get/s/data-1594957530163-LdNpZfmvz.json',
        '广东': '/asset/get/s/data-1594957374153-nlVvqecih.json',
        '广西': '/asset/get/s/data-1594957389111-PYkaJMOc7.json',
        '海南': '/asset/get/s/data-1594957424894-jIDqZ7UZi.json',
        '四川': '/asset/get/s/data-1594957804051-2CAptA9LX.json',
        '贵州': '/asset/get/s/data-1594957404398-tHnBWFTJS.json',
        '云南': '/asset/get/s/data-1594957958466-t8sorr-Eh.json',
        '西藏': '/asset/get/s/data-1594957940133-OoVRveNig.json',
        '陕西': '/asset/get/s/data-1594957786745-Q7bywuAwG.json',
        '甘肃': '/asset/get/s/data-1594957335316-fAoKcplcm.json',
        '青海': '/asset/get/s/data-1594957718199-FGvYekca9.json',
        '宁夏': '/asset/get/s/data-1594957693688-bKgaSBp5A.json',
        '新疆': '/asset/get/s/data-1594957899456-0opYrqO1x.json',
        '北京': '/asset/get/s/data-1594956490489-Sr9M4AyTs.json',
        '天津': '/asset/get/s/data-1594957840497-nj8mwSNuj.json',
        '重庆': '/asset/get/s/data-1594957282133-TKWoEZjqH.json',
        '香港': '/asset/get/s/data-1594957863764-lSsoVf8U2.json',
        '澳门': '/asset/get/s/data-1594956484374-Els_HG1wo.json',
        '台湾': '/asset/get/s/data-1594957826344-_a_9jgYdN.json'
    };

    loadMap('/asset/get/s/data-1594956060000-wzSYdj4lt.json', 'china')

    /**
     * 省数据
     **/
    var item = [{
            "code": 110000,
            "area": "北京",
            "number": randomData()
        },
        {
            "code": 120000,
            "area": "天津",
            "number": randomData()
        },
        {
            "code": 130000,
            "area": "河北",
            "number": randomData()
        },
        {
            "code": 140000,
            "area": "山西",
            "number": randomData()
        },
        {
            "code": 150000,
            "area": "内蒙古",
            "number": randomData()
        },
        {
            "code": 210000,
            "area": "辽宁",
            "number": randomData()
        },
        {
            "code": 220000,
            "area": "吉林",
            "number": randomData()
        },
        {
            "code": 230000,
            "area": "黑龙江",
            "number": randomData()
        },
        {
            "code": 310000,
            "area": "上海",
            "number": randomData()
        },
        {
            "code": 320000,
            "area": "江苏",
            "number": randomData()
        },
        {
            "code": 330000,
            "area": "浙江",
            "number": randomData()
        },
        {
            "code": 340000,
            "area": "安徽",
            "number": randomData()
        },
        {
            "code": 350000,
            "area": "福建",
            "number": randomData()
        },
        {
            "code": 360000,
            "area": "江西",
            "number": randomData()
        },
        {
            "code": 370000,
            "area": "山东",
            "number": randomData()
        },
        {
            "code": 410000,
            "area": "河南",
            "number": randomData()
        },
        {
            "code": 420000,
            "area": "湖北",
            "number": randomData()
        },
        {
            "code": 430000,
            "area": "湖南",
            "number": randomData()
        },
        {
            "code": 440000,
            "area": "广东",
            "number": randomData()
        },
        {
            "code": 450000,
            "area": "广西",
            "number": randomData()
        },
        {
            "code": 460000,
            "area": "海南",
            "number": randomData()
        },
        {
            "code": 500000,
            "area": "重庆",
            "number": randomData()
        },
        {
            "code": 510000,
            "area": "四川",
            "number": randomData()
        },
        {
            "code": 520000,
            "area": "贵州",
            "number": randomData()
        },
        {
            "code": 530000,
            "area": "云南",
            "number": randomData()
        },
        {
            "code": 540000,
            "area": "西藏",
            "number": randomData()
        },
        {
            "code": 610000,
            "area": "陕西",
            "number": randomData()
        },
        {
            "code": 620000,
            "area": "甘肃",
            "number": randomData()
        },
        {
            "code": 630000,
            "area": "青海",
            "number": randomData()
        },
        {
            "code": 640000,
            "area": "宁夏",
            "number": randomData()
        },
        {
            "code": 650000,
            "area": "新疆",
            "number": randomData()
        },
        {
            "code": 710000,
            "area": "台湾",
            "number": randomData()
        },
        {
            "code": 810000,
            "area": "香港",
            "number": randomData()
        },
        {
            "code": 820000,
            "area": "澳门",
            "number": randomData()
        }
    ]
    /**
     * 你可以自定义字段，
     **/
    item.map(function(i) {
        i.name = i.area;
        i.value = i.number;
        return i
    });

    function randomData() {
        return Math.round(Math.random() * 5000);
    }

    function loadMap(mapCode, name) {
        $.get(mapCode, function(data) {
            if (data) {
                echarts.registerMap(name, data);
                var option = {
                    title: {
                        text: '',
                        left: 'center',
                    },
                    /**
                     * 你可以自定义样式
                     **/
                    tooltip: {
                        formatter: function(params) {
                            return params.name + '<br>' + '视频数:' + params.data.number + '<br>';
                        }

                    },
                    visualMap: {
                        min: 0,
                        max: 7000,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],
                        calculable: true,
                        // seriesIndex: [1],
                        inRange: {
                            color: ['white', 'red']
                        },
                        show: true
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            saveAsImage: {
                                pixelRatio: 4
                            }
                        }
                    },
                    series: [{
                        type: 'map',
                        mapType: name,
                        selectedMode: 'false', //是否允许选中多个区域
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        // zoom: 1, //当前视角的缩放比例
                        // roam: true, //是否开启平游或缩放
                        // scaleLimit: { //滚轮缩放的极限控制
                        //     min: 1,
                        //     max: 2
                        // },
                        data: item
                    }]
                };
                myChart.setOption(option);
            } else {
                alert('无法加载该地图')
            }
        });
    }
    
    