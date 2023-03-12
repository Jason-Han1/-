const coutryAlias = {
    'Afghanistan': '阿富汗',
    'Angola': '安哥拉',
    'Albania': '阿尔巴尼亚',
    'United Arab Emirates': '阿联酋',
    'Argentina': '阿根廷',
    'Armenia': '亚美尼亚',
    'Australia': '澳大利亚',
    'Austria': '奥地利',
    'Azerbaijan': '阿塞拜疆',
    'Burundi': '布隆迪',
    'Belgium': '比利时',
    'Benin': '贝宁',
    'Burkina Faso': '布基纳法索',
    'Bangladesh': '孟加拉国',
    'Bulgaria': '保加利亚',
    'The Bahamas': '巴哈马',
    'Bosnia and Herzegovina': '波黑',
    'Belarus': '白俄罗斯',
    'Belize': '伯利兹',
    'Bolivia': '玻利维亚',
    'Brazil': '巴西',
    'Brunei': '文莱',
    'Bhutan': '不丹',
    'Botswana': '博茨瓦纳',
    'Central African Republic': '中非共和国',
    'Canada': '加拿大',
    'Switzerland': '瑞士',
    'Chile': '智利',
    'China': '中国',
    'Ivory Coast': '象牙海岸',
    'Cameroon': '喀麦隆',
    'Democratic Republic of the Congo': '刚果金',
    'Republic of the Congo': '刚果共和国',
    'Colombia': '哥伦比亚',
    'Costa Rica': '哥斯达黎加',
    'Cuba': '古巴',
    'Northern Cyprus': '北塞浦路斯',
    'Cyprus': '塞浦路斯',
    'Czech Republic': '捷克共和国',
    'Germany': '德国',
    'Djibouti': '吉布提',
    'Dominican Republic': '多米尼加共和国',
    'Algeria': '阿尔及尼亚',
    'Ecuador': '厄瓜多尔',
    'Egypt': '埃及',
    'Eritrea': '厄立特里亚',
    'Spain': '西班牙',
    'Estonia': '爱沙尼亚',
    'Ethiopia': '埃塞俄比亚',
    'Finland': '芬兰',
    'Fiji': '斐济',
    'Gabon': '加蓬',
    'Georgia': '格鲁吉亚',
    'Ghana': '加纳',
    'Guinea': '几内亚',
    'Gambia': '冈比亚',
    'Guinea Bissau': '几内亚比绍',
    'Equatorial Guinea': '赤道几内亚',
    'Greece': '希腊',
    'Denmark': '丹麦',
    'Guatemala': '危地马拉',
    'Guyana': '圭亚那',
    'Honduras': '洪都拉斯',
    'Croatia': '克罗地亚',
    'Haiti': '海地',
    'Hungary': '匈牙利',
    'Indonesia': '印度尼西亚',
    'India': '印度',
    'Ireland': '爱尔兰',
    'Iran': '伊朗',
    'Iraq': '伊拉克',
    'Iceland': '冰岛',
    'Italy': '意大利',
    'Jamaica': '牙买加',
    'Jordan': '约旦',
    'Japan': '日本',
    'Kashmir': '克什米尔',
    'Kazakhstan': '哈萨克斯坦',
    'Kenya': '肯尼亚',
    'Kyrgyzstan': '吉尔吉斯坦',
    'Cambodia': '柬埔寨',
    'South Korea': '韩国',
    'Kosovo': '科索沃',
    'Kuwait': '科威特',
    'Laos': '老挝',
    'Lebanon': '黎巴嫩',
    'Liberia': '利比里亚',
    'Libya': '利比亚',
    'Sri Lanka': '斯里兰卡',
    'Lesotho': '莱索托',
    'Lithuania': '立陶宛',
    'Luxembourg': '卢森堡',
    'Latvia': '拉脱维亚',
    'Morocco': '摩洛哥',
    'Moldova': '摩尔多瓦',
    'Madagascar': '马达加斯加',
    'Mexico': '墨西哥',
    'Macedonia': '马其顿',
    'Mali': '马里',
    'Myanmar': '缅甸',
    'Montenegro': '黑山',
    'Mongolia': '蒙古',
    'Mozambique': '莫桑比克',
    'Mauritania': '毛里塔尼亚',
    'Malawi': '马拉维',
    'Malaysia': '马来西亚',
    'Namibia': '纳米比亚',
    'France': '法国',
    'Niger': '尼日尔',
    'Nigeria': '尼日利亚',
    'Nicaragua': '尼加拉瓜',
    'Netherlands': '荷兰',
    'Norway': '挪威',
    'Nepal': '尼泊尔',
    'New Zealand': '新西兰',
    'Oman': '阿曼',
    'Pakistan': '巴基斯坦',
    'Panama': '巴拿马',
    'Peru': '秘鲁',
    'Philippines': '菲律宾',
    'Papua New Guinea': '巴布亚新几内亚',
    'Poland': '波兰',
    'North Korea': '朝鲜',
    'Portugal': '葡萄牙',
    'Paraguay': '巴拉圭',
    'Israel': '以色列',
    'Qatar': '卡塔尔',
    'Romania': '罗马尼亚',
    'Russia': '俄罗斯',
    'Rwanda': '卢旺达',
    'Western Sahara': '西撒哈拉',
    'Saudi Arabia': '沙特阿拉伯',
    'Sudan': '苏丹',
    'South Sudan': '南苏丹',
    'Senegal': '塞内加尔',
    'United Kingdom': '英国',
    'Solomon Islands': '所罗门群岛',
    'Sierra Leone': '塞拉利昂',
    'El Salvador': '塞尔瓦多',
    'Somaliland': '索马里蓝',
    'Somalia': '索马里',
    'Republic of Serbia': '塞尔维亚',
    'Suriname': '苏里南',
    'Slovakia': '斯洛伐克',
    'Slovenia': '斯洛文尼亚',
    'Sweden': '瑞典',
    'Swaziland': '瑞士',
    'Syria': '叙利亚',
    'Chad': '乍得',
    'Togo': '多哥',
    'Thailand': '泰国',
    'Tajikistan': '塔吉克斯坦',
    'Turkmenistan': '土库曼斯坦',
    'East Timor': '东帝汶',
    'Trinidad and Tobago': '特立尼达和多巴哥',
    'Tunisia': '突尼斯',
    'Turkey': '土耳其',
    'United Republic of Tanzania': '坦桑尼亚',
    'Uganda': '乌干达',
    'Ukraine': '乌克兰',
    'Uruguay': '乌拉圭',
    'United States of America': '美国',
    'Uzbekistan': '乌兹别克斯坦',
    'Venezuela': '委内瑞拉',
    'Vietnam': '越南',
    'Vanuatu': '瓦努阿图',
    'Yemen': '也门',
    'South Africa': '南非',
    'Zambia': '赞比亚',
    'Zimbabwe': '津巴布韦'
}
    let canvas = document.createElement('canvas')
    let mapChart = echarts.init(canvas, null, {
        width: 4096,
        height: 2048
    })

    let pOp = {
        geo: {
            //map: 'china',
            map: 'world',
            label: {
                show: false,// 地图省份的显示或者隐藏
                color: "#fff",
                fontSize: 28,
                fontFamily: 'Microsoft YaHei',
            },
            emphasis: { //当鼠标放上去  地区区域是否显示名称
                label: {
                    show: true,
                    textStyle: {
                        color: '#fdfffd',// 省份的文字
                    }
                }
            },
            itemStyle: {
                //areaColor: 'transparent',// 区域的颜色
				color: 'transparent',// 区域的颜色
                borderColor: 'rgba(255,255,255,0.6)',
                emphasis: {
                    //areaColor: 'rgba(255,255,255,0.2)'
					color: 'rgba(255,255,255,0.2)'
                },
                borderWidth: 1,
            },
            nameMap: coutryAlias,// 世界地图的中文坐标
            regions: [
                {
                    name: '南海诸岛',
                    itemStyle: {
                        opacity: 1
                    },
                    label: {
                        show: true,
                        color: '#fff'
                    },
                }
            ],
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            boundingCoords: [
                [-180, 90],
                [180, -90]
            ]
        },
        series: [
            //涟漪
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 20,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    show: true,
                    position: 'right',
                    fontSize: 8,
                    formatter: (params => {
                        return params.name
                    })
                },
                itemStyle: {
                    normal: {
                        color: '#03ffff'
                    }
                },
                data: [{
                    name: '重庆',
                    value: [83.059716, 39.494287],
                }, {
                    name: '重庆2',
                    value: [104.547759, 40.062111],
                }]
            },
        ],

    }
    mapChart.setOption(pOp)
    option = {
        visualMap: [{
            type: 'continuous',
            show:false,
            text: ['bar3D'],
            calculable: true,
            max: 300,
            inRange: {
                color: ['#00f6ff',]
            }
        }],
        tooltip: {
            trigger: 'item',
            formatter(params) {
                return params.name
            }
        },
        globe: {
            baseTexture: 'https://cdn.jsdelivr.net/gh/SHJ33/examples@master/bg1.png',
            //heightTexture: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data-gl/asset/bathymetry_bw_composite_4k.jpg',
            displacementScale: 0.07,
            shading: 'color',// 着色效果
            light: { // 光照阴影
                ambient: {
                    intensity: 1
                },
                main: { // 主光源
                    intensity: 0,
                    shadow: false
                },
            },
            // 这个是中国地图的视角
            // viewControl: {
            //     projection: 'perspective',
            //     autoRotateSpeed: 5,// 自转速度
            //     // alpha: 0,//视角的方向。
            //     // beta: 10,//左右旋转的角度。
            //     center: [15, 50, 0],// 视角
            //     targetCoord: [116.826801, 0],
            //     autoRotate: false,// 自动旋转
            //     autoRotateAfterStill: 10,//鼠标静止操作后恢复自动旋转的时间间隔
            //     distance: 20, // 视距
            //     rotateSensitivity: 1,//1可以旋转,0不能旋转
            //     zoomSensitivity: 1,//无法缩放
            // },
            viewControl: {
                center: [0, 0, 0],
                alpha: 30,
                beta: 160,
                autoRotate: false,
                autoRotateAfterStill: 10,
                distance: 140,
                autoRotateSpeed: 4,
            },
            postEffectL: {
                enable: false,
            },
            layers: [{
                type: 'blend',
                texture: mapChart
            }]
        },
        series: [
            {
                name: 'lines3D',// 3D攻击线
                type: 'lines3D',
                globeIndex:1,
                zlevel: 10,
                coordinateSystem: 'globe',
                effect: {
                    show: true,
                    trailWidth: 4,
                    trailOpacity: 1,
                    trailLength: 0.2,
                    constantSpeed: null
                },
                blendMode: 'lighter',
                lineStyle: {
                    color: '#0087f4',
                    width: 2,
                    opacity: 0.5
                },
                // silent: true,
                data: [
                    {
                        coords: [
                            [91.049892, 29.670971],
                            [121.51585, 31.23045]
                        ], value: 20, name: '数据值1'
                    }, {
                        coords: [
                            [91.049892, 29.670971],
                            [21.827762, 39.062555]
                        ], value: 20, name: '数据值2'
                    },
                    {
                        coords: [
                            [113.01339, 30.710328],
                            [121.51585, 31.23045]
                        ], value: 40,name:'数据值3'
                    },
                    {
                        coords: [
                            [102.894877, 29.944241],
                            [121.51585, 31.23045]
                        ], value: 20,name:'数据值4'
                    },
                    {
                        coords: [
                            [91.049892, 29.670971,],
                            [106.868693, 29.204436,]
                        ], value: 60,name:'数据值5'
                    },
                ],
            },
            //柱状图
            {
                name: 'bar3D1',
                type: "bar3D",
                coordinateSystem: 'globe',
                barSize: 2, //柱子粗细
                shading: 'lambert',
                opacity: 1,
                zlevel: 10,
                bevelSize: 0.3,
                label: {
                    show: false,
                    formatter: (parmas)=>{
                        return parmas.name
                    }
                },
                emphasis: {
                    label: false
                },
                minHeight:1,
                itemStyle: {
                    color: '#00f6ff',
                    opacity: 1
                },
                data: [
                    //设置空的一个最小值,最大值
                    {
                        name: "",
                        value: [0,0,0],
                        itemStyle:{
                            opacity:0,
                        }
                    },
                    {
                        name: "",
                        value: [0, 0, 1000],
                        itemStyle:{
                            opacity:0,
                        }
                    },
                    {
                        name: "海门3",
                        "value": [104.547759, 40.062111, 1],
                    },
                    {
                        name: "海门4",
                        "value": [123.429736,45.795987, 1]
                    },
                    {
                        name: "海门5",
                        "value": [120.429736,45.795987, 1]
                    }
                ]
            },
        ]
    }