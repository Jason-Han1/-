var uploadedDataURL = "/asset/get/s/data-1608805397629-qDNtLYUsw.json";

var chengdu = "/asset/get/s/data-1608805414643-bC9-iT_xM.json";

var bazhong = "/asset/get/s/data-1608805419924-zlRXjpy5v.json";

var abeizangzuqiangzuzizhizhou = "/asset/get/s/data-1608805423799-3HcZ3Ar58.json";

var dazhou = "/asset/get/s/data-1608805429204-1uwxLS0jX.json";

var deyang = "/asset/get/s/data-1608805432766-nb1OLVAFm.json";

var ganzizangzuzizhizhou = "/asset/get/s/data-1608805436921-b80bFxzlf.json";

var guangan = "/asset/get/s/data-1608805441224-I8GT2tE9i.json";

var guangyuan = "/asset/get/s/data-1608805444741-yM6q8qCHe.json";

var leshan = "/asset/get/s/data-1608805448531-621IU6In2.json";

var liangshanyizuzizhizhou = "/asset/get/s/data-1608805453357-vjoONf0d4.json";

var luzhou = "/asset/get/s/data-1608805457963-bc9AcbL88.json";

var meishan = "/asset/get/s/data-1608805463759-Onq3CQjMm.json";

var mianyang = "/asset/get/s/data-1608805470024-O1Bj_Us2L.json";

var zigong = "/asset/get/s/data-1608805480296-g4KY8b9e_.json";

var nanchong = "/asset/get/s/data-1608805496925-Ti7WllimY.json";

var neijiang = "/asset/get/s/data-1608805504026-2JdmDgxmp.json";

var panzhihua = "/asset/get/s/data-1608805507584-mGt85DC0S.json";

var suining = "/asset/get/s/data-1608805511550-xu1NgP4z6.json";

var yaan = "/asset/get/s/data-1608805514993-0LAltEmAa.json";

var yibin = "/asset/get/s/data-1608805521127-Llxil3AYH.json";

var ziyang = "/asset/get/s/data-1608805532650-fKmXtBmbo.json";


$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('四川', geoJson);

    var cityMap = {
        "成都市": chengdu,
        '巴中市': bazhong,
        "阿坝藏族羌族自治州": abeizangzuqiangzuzizhizhou,
        '达州市': dazhou,
        "德阳市": deyang,
        "甘孜藏族自治州": ganzizangzuzizhizhou,
        "广安市": guangan,
        "广元市": guangyuan,
        "乐山市": leshan,
        "凉山彝族自治州": liangshanyizuzizhizhou,
        "泸州市": luzhou,
        "眉山市": meishan,
        "绵阳市": mianyang,
        "自贡市": zigong,
        "南充市": nanchong,
        "内江市": neijiang,
        "攀枝花市": panzhihua,
        "遂宁市": suining,
        "雅安市": yaan,
        "宜宾市": yibin,
        "资阳市": ziyang
    };

    var gdGeoCoordMap = {
        '成都市': [104.074470, 30.582973],
        '巴中市': [106.753669, 31.858809],
        "阿坝藏族羌族自治州": [102.221374, 31.899792],
        '达州市': [107.502262, 31.209484],
        "德阳市": [104.398651, 31.127991],
        "甘孜藏族自治州": [101.963815, 30.050663],
        "广安市": [106.633369, 30.456398],
        "广元市": [105.829757, 32.433668],
        "乐山市": [103.761263, 29.582024],
        "凉山彝族自治州": [102.258746, 27.886762],
        "泸州市": [105.443348, 28.889138],
        "眉山市": [103.831788, 30.048318],
        "绵阳市": [104.741722, 31.46402],
        "自贡市": [106.754457, 31.875833],
        "南充市": [106.082974, 30.795281],
        "内江市": [105.066138, 29.58708],
        "攀枝花市": [101.716007, 26.580446],
        "遂宁市": [105.571331, 30.513311],
        "雅安市": [103.001033, 29.987722],
        "宜宾市": [104.630825, 28.760189],
        "资阳市": [104.641917, 30.122211]
    };
    var gdDatas = [
        [{
            name: '成都市',
            value: 10
        }],
        [{
            name: '巴中市',
            value: 0
        }],
        [{
            name: '阿坝藏族羌族自治州',
            value: 0
        }],
        [{
            name: '达州市',
            value: 0
        }],
        [{
            name: '德阳市',
            value: 1.3
        }],
        [{
            name: '甘孜藏族自治州',
            value: 0.2
        }],
        [{
            name: '广安市',
            value: 0.4
        }],
        [{
            name: '广元市',
            value: 0.6
        }],
        [{
            name: '乐山市',
            value: 0.8
        }],
        [{
            name: '凉山彝族自治州',
            value: 0.4
        }],
        [{
            name: '泸州市',
            value: 0.8
        }],
        [{
            name: '眉山市',
            value: 0.2
        }],
        [{
            name: '绵阳市',
            value: 1.3
        }],
        [{
            name: '自贡市',
            value: 0
        }],
        [{
            name: '南充市',
            value: 0
        }],
        [{
            name: '内江市',
            value: 0
        }],
        [{
            name: '攀枝花市',
            value: 0
        }],
        [{
            name: '遂宁市',
            value: 0
        }],
        [{
            name: '雅安市',
            value: 0
        }],
        [{
            name: '宜宾市',
            value: 0
        }],
        [{
            name: '资阳市',
            value: 0.8
        }]
    ];

    var chengdudata = [{
            name: "西南航空港供水工程有限公司",
            value: [103.985729, 30.575615, 0.5],
        },
        {
            name: "成都市自来水公司营业厅",
            value: [104.048065, 30.649955, 1],
        },
        {
            name: "成都环境集团成都市自来水有限责任公司",
            value: [104.121099, 30.66154, 1],
        },
        {
            name: "岷江自来水厂",
            value: [104.070298, 30.516974, 0.1],
        },
        {
            name: "成都环境集团成都供水",
            value: [104.121154, 30.660801, 0.4],
        },
        {
            name: "成都市新都区自来水公司",
            value: [104.147077, 30.782706, 1],
        },
        {
            name: "大丰自来水营业大厅",
            value: [104.064175, 30.779358, 1.4],
        },
        {
            name: "成都市自来水有限责任公司",
            value: [103.963652, 30.744603, 0.7],
        },
        {
            name: "成都市岷江自来水厂工会",
            value: [103.986176, 30.550281, 0.1],
        },
        {
            name: "成都自来水有限责任公司",
            value: [103.892669, 30.818518, 0.5],
        },
        {
            name: "温江区自来水公司",
            value: [103.846965, 30.71171, 2],
        },
        {
            name: "成都环境集团成都供水",
            value: [104.051191, 30.669935, 0.9],
        },
        {
            name: "成都市自来水有限责任公司(白马寺)",
            value: [104.074779, 30.687311, 2],
        },
        {
            name: "黄龙溪景观供水站",
            value: [103.972932, 30.326578, 2],
        },
        {
            name: "四川省彭州市自来水有限公司",
            value: [103.940401, 30.994183, 0.4],
        },

    ]

    var bazhongdata = [{
            name: "圣泉水务有限公司",
            value: [106.770895, 31.864548, 0.5],
        },
        {
            name: "板庙供水站",
            value: [107.228612, 31.546389, 1],
        },
        {
            name: "平昌县鸿源水务集团",
            value: [107.096648, 31.569831, 1],
        },
        {
            name: "圣泉水务有限公司(财务广场)",
            value: [106.781738, 31.860592, 0.1],
        },
        {
            name: "平昌供水",
            value: [107.115326, 31.567849, 0.4],
        },
        {
            name: "三江镇供水站",
            value: [106.789858, 31.763912, 1],
        },
        {
            name: "南江县大河供水站",
            value: [106.941115, 32.201356, 1.4],
        },
        {
            name: "通江县沙溪供水站",
            value: [107.445477, 32.112782, 0.7],
        },
        {
            name: "平昌县水利电力局驷马供水站",
            value: [107.040342, 31.74208, 0.1],
        },

    ]

    var abeizangzuqiangzuzizhizhoudata = [{
            name: "水费收费厅",
            value: [102.369536, 31.00466, 0.5],
        },

    ]

    var dazhoudata = [{
            name: "宣汉县自来水公司",
            value: [107.728177, 31.364667, 0.5],
        },
        {
            name: "渠县供水排水总公司",
            value: [106.978483, 30.851644, 1],
        },
        {
            name: "渠县供水排水总公司东城收费处",
            value: [106.989102, 30.846225, 1],
        },
        {
            name: "渠县供水排水总公司",
            value: [106.98882, 30.846385, 0.1],
        },
        {
            name: "四川万源川投水务公司",
            value: [108.043578, 32.076235, 0.4],
        },
        {
            name: "云鹤山泉普光供水点",
            value: [107.773803, 31.538428, 1],
        },
        {
            name: "渠县清溪场水务站",
            value: [106.824128, 30.895938, 1.4],
        },
        {
            name: "达县云门水务投资有限责任公司",
            value: [107.5218, 31.198689, 0.7],
        },
        {
            name: "渠县乡镇供水公司龙凤供水站",
            value: [106.76218, 30.944628, 0.1],
        },
        {
            name: "李渡供水站",
            value: [106.973431, 30.780289, 0.5],
        },
        {
            name: "眉山市彭山碧水源久安水务有限公司",
            value: [107.512364, 31.207551, 2],
        },
        {
            name: "渠县乡镇供水公司宋家供水站",
            value: [106.706527, 30.89738, 0.9],
        },
        {
            name: "人民公园水务集团总公司",
            value: [107.515905, 31.22391, 2],
        },
        {
            name: "万源市石清山泉水厂",
            value: [108.033162, 32.064329, 2],
        },

    ]

    var deyangdata = [{
            name: "德阳市自来水公司",
            value: [104.400729, 31.146769, 0.5],
        },
        {
            name: "广汉市自来水公司",
            value: [104.282574, 30.992475, 1],
        },
        {
            name: "绵竹自来水公司",
            value: [104.207652, 31.354965, 1],
        },
        {
            name: "中江县自来水公司",
            value: [104.687647, 31.041673, 0.1],
        },
        {
            name: "广汉兴鑫水务有限责任公司",
            value: [104.27843, 30.969481, 0.4],
        },
        {
            name: "和兴自来水公司",
            value: [104.353618, 30.97445, 1],
        },
        {
            name: "中江县水务局南干站",
            value: [104.68812, 31.024875, 1.4],
        },
        {
            name: "三水自来水公司",
            value: [104.34494, 30.931828, 0.7],
        },
        {
            name: "中江县水务局广福站",
            value: [104.942531, 30.758207, 0.1],
        },

    ]

    var ganzizangzuzizhizhoudata = [{
            name: "德格县自来水公司收费处",
            value: [98.586932, 31.812486, 0.5],
        },
        {
            name: "自来水收费室",
            value: [101.9669, 30.047087, 1],
        },
    ]

    var guangandata = [{
            name: "爱众水务",
            value: [106.63161, 30.461486, 0.5],
        },
        {
            name: "广安县恒升供水站",
            value: [106.780174, 30.694807, 1],
        },
        {
            name: "华蓥爱众水务公司",
            value: [106.791741, 30.403966, 1],
        },
        {
            name: "武胜县立新天然气有限责任公司",
            value: [106.297389, 30.341554, 0.1],
        },
        {
            name: "白庙供水站客户服务中心",
            value: [106.371991, 30.546518, 0.4],
        },
        {
            name: "四川广安爱众股份有限公司",
            value: [106.648555, 30.477553, 1],
        },
        {
            name: "爱自来水公司",
            value: [106.45252, 30.543344, 1.4],
        },

    ]

    var guangyuandata = [{
            name: "旺苍县自来水公司营业大厅",
            value: [106.305746, 32.235057, 0.5],
        },
        {
            name: "剑阁县城北自来水站",
            value: [105.468793, 32.052853, 1],
        },
        {
            name: "广元市上西自来水有限责任公司",
            value: [105.832843, 32.458013, 1],
        },
        {
            name: "苍溪县乡镇供水总站元坝供水站",
            value: [106.067066, 31.824713, 0.1],
        },
        {
            name: "广元供水",
            value: [105.828591, 32.437231, 0.4],
        },
        {
            name: "四川省苍溪县乡镇供水总站",
            value: [105.938909, 31.740044, 1],
        },
        {
            name: "剑门关景区-景区供水站",
            value: [105.589515, 32.23553, 1.4],
        },
        {
            name: "国光供水站",
            value: [105.423009, 31.730407, 0.7],
        },
        {
            name: "自来水公司净水厂",
            value: [106.317961, 32.251991, 0.1],
        },
        {
            name: "昭化供水站",
            value: [105.721817, 32.338252, 0.5],
        },
        {
            name: "青川县洁康水务公司营业厅",
            value: [105.246264, 32.592526, 2],
        },
        {
            name: "广元市供排水集团有限公司",
            value: [105.845697, 32.435324, 0.9],
        },

    ]

    var leshandata = [{
            name: "乐山市自来水有限责任公司",
            value: [103.759627, 29.604271, 0.5],
        },
        {
            name: "乐山市苏稽自来水有限公司",
            value: [103.675222, 29.593137, 1],
        },
        {
            name: "中阳水务收费大厅",
            value: [103.561998, 29.430704, 1],
        },
        {
            name: "乐山电力自来水公司营业厅",
            value: [103.772257, 29.568198, 0.1],
        },
        {
            name: "马边供水服务中心",
            value: [103.552908, 28.836772, 0.4],
        },
        {
            name: "犍为县河东供排水有限公司",
            value: [103.962284, 29.316898, 1],
        },
        {
            name: "井研供水",
            value: [103.869265, 29.66641, 1.4],
        },

    ]

    var liangshanyizuzizhizhoudata = [{
            name: "昭觉县自来水有限责任公司",
            value: [102.846535, 28.018125, 0.5],
        },
        {
            name: "西昌市供排水总公司",
            value: [102.225909, 27.908214, 1],
        },
        {
            name: "会理县自来水有限责任公司",
            value: [102.248924, 26.661108, 1],
        },
        {
            name: "会东县自来水有限责任公司",
            value: [102.585636, 26.642259, 0.1],
        },
        {
            name: "盐源县自来水公司",
            value: [101.517673, 27.42693, 0.4],
        },
        {
            name: "越西县自来水公司",
            value: [102.514634, 28.643587, 1],
        },
        {
            name: "盐源县自来水公司安装维修服务处",
            value: [101.517487, 27.426881, 1.4],
        },
        {
            name: "西昌城市供水加压站",
            value: [102.268452, 27.875676, 0.7],
        },
        {
            name: "喜德县城市供水",
            value: [102.418785, 28.311736, 0.1],
        },
        {
            name: "盐源县水务投资",
            value: [101.516417, 27.427195, 0.5],
        },
        {
            name: "冕宁县自来水有限公司",
            value: [102.170789, 28.556269, 2],
        },
        {
            name: "雷波县自来水公司",
            value: [103.573989, 28.267291, 0.9],
        },

    ]

    var luzhoudata = [{
            name: "叙永县自来水有限公司",
            value: [105.443575, 28.167707, 0.5],
        },
        {
            name: "兴泸水务",
            value: [105.459998, 28.997579, 1],
        },
        {
            name: "兴泸水务集团城东营业所",
            value: [105.48113, 28.933931, 1],
        },
        {
            name: "北控水务",
            value: [105.51326, 28.866972, 0.1],
        },
        {
            name: "后山供水站",
            value: [105.509351, 27.995046, 0.4],
        },
        {
            name: "双沙供水站",
            value: [105.75961, 27.835942, 1],
        },
        {
            name: "兴泸水务",
            value: [105.295842, 28.920206, 1.4],
        },
        {
            name: "四川省水电集团合江营业厅",
            value: [105.838759, 28.816621, 0.7],
        },

    ]

    var meishandata = [{
            name: "眉山市自来水公司",
            value: [103.84757, 30.054524, 0.5],
        },
        {
            name: "眉山市供排水总公司",
            value: [103.847629, 30.055034, 1],
        },
        {
            name: "眉山市供排水总公司南门营业厅",
            value: [103.834501, 30.040429, 1],
        },
        {
            name: "仁寿县清水供水站",
            value: [104.05117, 30.203763, 0.1],
        },
        {
            name: "满井供水站",
            value: [104.155098, 29.932664, 0.4],
        },
        {
            name: "眉山市供排水总公司尚义营业厅",
            value: [103.766566, 30.101209, 1],
        },
        {
            name: "禄加自来水有限公司",
            value: [104.374825, 29.823697, 1.4],
        },
        {
            name: "眉山首创水务有限公司",
            value: [103.823842, 30.202835, 0.7],
        },

    ]

    var mianyangdata = [{
            name: "绵阳水务",
            value: [104.762587, 31.469405, 0.5],
        },
        {
            name: "高新供水公司客户服务大厅",
            value: [104.681207, 31.468824, 1],
        },
        {
            name: "绵阳水务集团客户服务中心",
            value: [104.762527, 31.468687, 1],
        },
        {
            name: "绵阳市武引游仙区自来水公司",
            value: [104.779499, 31.505187, 0.1],
        },
        {
            name: "绵阳市水务集团古泉供水加压站",
            value: [104.689252, 31.445607, 0.4],
        },
        {
            name: "绵阳市游仙武引水务有限公司",
            value: [104.779578, 31.505219, 1],
        },
        {
            name: "安州区新盛供水有限公司营业厅",
            value: [104.556754, 31.547512, 1.4],
        },
        {
            name: "绵阳市泓泉水务有限责任公司",
            value: [104.725467, 31.572697, 0.7],
        },
        {
            name: "新安供水",
            value: [104.891012, 31.797522, 0.1],
        },
        {
            name: "绵阳市仙海自来水有限公司",
            value: [104.771559, 31.496873, 0.5],
        },
        {
            name: "绵阳市广汇实业有限公司矿泉水厂",
            value: [104.643901, 31.348886, 2],
        },
        {
            name: "江油市天一自来水有限责任公司",
            value: [104.770198, 31.779016, 0.9],
        },
        {
            name: "绵阳水务集团(",
            value: [104.740736, 31.500617, 2],
        },

    ]

    var zigongdata = [{
            name: "富洲水务集团",
            value: [104.993937, 29.185824, 0.5],
        },
        {
            name: "四川川投水务集团荣县天然公司",
            value: [104.434916, 29.462491, 1],
        },
        {
            name: "自贡市中天水务有限公司",
            value: [104.789683, 29.332572, 1],
        },
        {
            name: "自贡水务集团",
            value: [104.785214, 29.351918, 0.1],
        },
        {
            name: "自贡荣威水务有限责任公司",
            value: [104.763241, 29.334321, 0.4],
        },
        {
            name: "自贡市宏发自来水有限公司",
            value: [104.619759, 29.399939, 1],
        },
        {
            name: "自贡水务集团客户服务中心",
            value: [104.785196, 29.352009, 1.4],
        },

    ]

    var nanchongdata = [{
            name: "福康供水",
            value: [106.074661, 31.364405, 0.5],
        },
        {
            name: "城乡水务",
            value: [106.048221, 31.376453, 1],
        },
        {
            name: "南充水务投资(集团)有限公司",
            value: [106.116596, 30.793782, 1],
        },
        {
            name: "蓬安县自来水公司",
            value: [106.426558, 31.036111, 0.1],
        },
        {
            name: "营山县供水公司(东城营业厅)",
            value: [106.578568, 31.080306, 0.4],
        },
        {
            name: "南充康源水务(集团)",
            value: [106.086548, 30.808506, 1],
        },
        {
            name: "蓬安县自来水公司",
            value: [106.418355, 31.03323, 1.4],
        },
        {
            name: "南部县城乡水务有限公司",
            value: [106.237645, 31.369098, 0.7],
        },
        {
            name: "南充水务投资(集团)",
            value: [106.086462, 30.80845, 0.1],
        },
        {
            name: "仪陇县方州自来水公司",
            value: [106.411334, 31.517981, 0.5],
        },
        {
            name: "西充县泓源水务发展有限公司",
            value: [105.892945, 31.001825, 2],
        },
        {
            name: "先锋镇自来水供应站",
            value: [106.301828, 31.632196, 0.9],
        },
        {
            name: "大禹水务",
            value: [106.01913, 30.779503, 2],
        },
        {
            name: "達安县自来水公司",
            value: [106.418472, 31.033408, 2],
        },
        {
            name: "南充市嘉陵区建华自来水有限公司",
            value: [106.078436, 30.583659, 0.4],
        },
        {
            name: "蓬安县自来水公司(收费处)",
            value: [106.443305, 30.978103, 0.6],
        },
        {
            name: "康源水务",
            value: [106.069024, 30.881744, 2],
        },
        {
            name: "康源水务集团有限责任公司",
            value: [106.086548, 30.808551, 2],
        },
        {
            name: "充县供排水公司多扶营业所",
            value: [105.98748, 30.966222, 0.2],
        },

    ]

    var neijiangdata = [{
            name: "内江市水务有限责任公司",
            value: [105.061782, 29.586968, 0.5],
        },
        {
            name: "隆昌自来水公司",
            value: [105.274489, 29.345196, 1],
        },
        {
            name: "隆昌市自来水公司营业大厅",
            value: [105.301186, 29.342394, 1],
        },
        {
            name: "内江市水务有限责任公司",
            value: [105.063844, 29.602921, 0.1],
        },
        {
            name: "内江市水务有限责任公司",
            value: [105.083087, 29.607718, 0.4],
        },

    ]

    var panzhihuadata = [{
            name: "水务检测中心",
            value: [101.714269, 26.580511, 0.5],
        },
        {
            name: "四川省盐边县自来水公司",
            value: [101.85532, 26.689322, 1],
        },
        {
            name: "河门口水厂营业厅",
            value: [101.626765, 26.604868, 1],
        },
        {
            name: "仙女山泉水厂",
            value: [101.778506, 26.391039, 0.4],
        },

    ]

    var suiningdata = [{
            name: "遂宁川能水务",
            value: [105.59687, 30.527237, 0.5],
        },
        {
            name: "兰林自来水有限公司",
            value: [105.600233, 30.496494, 1],
        },
        {
            name: "川投水务",
            value: [105.258871, 30.589132, 1],
        },
        {
            name: "四川川投水务集团射洪股份有限公司",
            value: [105.377316, 30.873578, 0.1],
        },
        {
            name: "遂宁中鹏水务有限公司",
            value: [105.613167, 30.519055, 0.4],
        },
        {
            name: "遂宁市明星水务设计",
            value: [105.587836, 30.508843, 1],
        },
        {
            name: "川投水务集团射洪有限责任公司",
            value: [105.387564, 30.864477, 1.4],
        },

    ]

    var yaandata = [{
            name: "雅安市名山区水务投资有限公司",
            value: [103.111756, 30.082586, 0.5],
        },
        {
            name: "雅安市供排水公司",
            value: [103.009289, 29.997752, 1],
        },
        {
            name: "营销科农村供水站",
            value: [102.853934, 29.802134, 1],
        },
        {
            name: "雅安市名山区民源水业有限公司",
            value: [103.121125, 30.095171, 0.1],
        },
        {
            name: "红豆相思谷山泉水厂",
            value: [103.018995, 30.092518, 0.4],
        },
        {
            name: "保障供水",
            value: [102.360954, 29.236523, 1],
        },
        {
            name: "天全县供排水公司收费大厅",
            value: [102.773689, 30.06103, 1.4],
        },

    ]

    var yibindata = [{
            name: "高县自来水公司",
            value: [104.573793, 28.400884, 0.5],
        },
        {
            name: "牛角岩内口岩自来水收费站",
            value: [104.901521, 28.807443, 1],
        },
        {
            name: "长宁县自来水公司",
            value: [104.924741, 28.584154, 1],
        },
        {
            name: "南溪区供水排水有限公司",
            value: [104.985389, 28.841822, 0.1],
        },
        {
            name: "水泵变频二次供水",
            value: [104.621286, 28.768316, 0.4],
        },
        {
            name: "叙州区天泉供水有限责任公司",
            value: [104.555427, 28.715064, 1],
        },
        {
            name: "宜宾临港自来水有限公司",
            value: [104.671663, 28.778368, 1.4],
        },
        {
            name: "宜江水务公司",
            value: [104.352697, 28.838388, 0.7],
        },
        {
            name: "筠连县自来水有限责任公司",
            value: [104.508615, 28.162064, 0.1],
        },
        {
            name: "珙县巡场自来水有限责任公司",
            value: [104.715183, 28.460582, 0.5],
        },
        {
            name: "珙县自来水公司",
            value: [104.791557, 28.387379, 2],
        },
        {
            name: "宜宾市南溪区源聚乡镇供水有限公司",
            value: [104.985306, 28.841872, 0.9],
        },
        {
            name: "高县月江镇福溪供水站",
            value: [104.691792, 28.671781, 2],
        },
        {
            name: "长宁县中水水务有限责任公司",
            value: [104.919493, 28.583029, 2],
        },
        {
            name: "筠连县自来水公司",
            value: [104.518683, 28.176173, 0.4],
        },
        {
            name: "宜宾东园自来水有限公司",
            value: [104.515277, 28.78098, 0.6],
        },
        {
            name: "宜宾市清源水务有限公司",
            value: [104.631679, 28.777817, 2],
        },
        {
            name: "宜宾市龙禹水务投资有限责任公司",
            value: [104.604594, 28.778374, 2],
        },
        {
            name: "李端供水站",
            value: [104.86753, 28.599703, 0.2],
        },
        {
            name: "宜宾僰乡源山泉水厂",
            value: [104.842896, 28.264081, 0.6],
        },

    ]

    var ziyangdata = [{
            name: "简阳市水务投资发展有限公司",
            value: [104.548195, 30.420931, 0.5],
        },
        {
            name: "安岳县自来水公司",
            value: [105.355745, 30.112751, 1],
        },
        {
            name: "安岳县柠都自来水有限责任公司",
            value: [105.346023, 30.105334, 1],
        },
        {
            name: "资阳市水务燃气有限责任公司",
            value: [104.640231, 30.146645, 0.1],
        },
        {
            name: "禾丰供水",
            value: [104.719883, 30.425408, 0.4],
        },
        {
            name: "资阳海天水务有限公司",
            value: [104.643489, 30.135611, 1],
        },

    ]

    var opt = {
        bgColor: '#013954', // 画布背景色
        mapName: '四川', // 地图名
        goDown: true, // 是否下钻
        // 下钻回调
        callback: function(name, option, instance) {
            console.log(name, option, instance);
            if (name == '四川') {
                option.series[0].data = convertData(gdDatas);
                option.series[1].data = gdDatas.map(function(dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: gdGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                });
                myChart.setOption(option, true);
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "成都市") {
                option.series[0].data = convertData1(chengdudata);
                option.series[1].data = chengdudata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "巴中市") {
                option.series[0].data = convertData1(bazhongdata);
                option.series[1].data = bazhongdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "阿坝藏族羌族自治州") {
                option.series[0].data = convertData1(abeizangzuqiangzuzizhizhoudata);
                option.series[1].data = abeizangzuqiangzuzizhizhoudata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "达州市") {
                option.series[0].data = convertData1(dazhoudata);
                option.series[1].data = dazhoudata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "德阳市") {
                option.series[0].data = convertData1(deyangdata);
                option.series[1].data = deyangdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "甘孜藏族自治州") {
                option.series[0].data = convertData1(ganzizangzuzizhizhoudata);
                option.series[1].data = ganzizangzuzizhizhoudata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "广安市") {
                option.series[0].data = convertData1(guangandata);
                option.series[1].data = guangandata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "广元市") {
                option.series[0].data = convertData1(guangyuandata);
                option.series[1].data = guangyuandata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "乐山市") {
                option.series[0].data = convertData1(leshandata);
                option.series[1].data = leshandata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "凉山彝族自治州") {
                option.series[0].data = convertData1(liangshanyizuzizhizhoudata);
                option.series[1].data = liangshanyizuzizhizhoudata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "泸州市") {
                option.series[0].data = convertData1(luzhoudata);
                option.series[1].data = luzhoudata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "眉山市") {
                option.series[0].data = convertData1(meishandata);
                option.series[1].data = meishandata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "绵阳市") {
                option.series[0].data = convertData1(mianyangdata);
                option.series[1].data = mianyangdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "自贡市") {
                option.series[0].data = convertData1(zigongdata);
                option.series[1].data = zigongdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "南充市") {
                option.series[0].data = convertData1(nanchongdata);
                option.series[1].data = nanchongdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "内江市") {
                option.series[0].data = convertData1(neijiangdata);
                option.series[1].data = neijiangdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "攀枝花市") {
                option.series[0].data = convertData1(panzhihuadata);
                option.series[1].data = panzhihuadata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "遂宁市") {
                option.series[0].data = convertData1(suiningdata);
                option.series[1].data = suiningdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "雅安市") {
                option.series[0].data = convertData1(yaandata);
                option.series[1].data = yaandata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "宜宾市") {
                option.series[0].data = convertData1(yibindata);
                option.series[1].data = yibindata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == '资阳市') {
                option.series[0].data = convertData1(ziyangdata);
                option.series[1].data = ziyangdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            }
        },
        // 数据展示            	
        data: []
    };


    var levelColorMap = { // level颜色
        '1': '#f44336',
        '2': '#fc9700',
        '3': '#ffde00',
        '4': '#00eaff'
    };

    var defaultOpt = {
        mapName: 'china', // 地图展示
        goDown: false, // 是否下钻
        bgColor: '#013954', // 画布背景色
        activeArea: [], // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function(name, option, instance) {}
    };
    if (opt) {
        opt1 = $.extend(defaultOpt, opt);
    }

    // 层级索引
    var name = [opt1.mapName];
    var idx = 0;
    var pos = { //层级位置
        leftPlus: 55,
        leftCur: 50,
        left: 10,
        top: 10
    };

    var line = [ //箭头
        [0, 0],
        [8, 11],
        [0, 22]
    ];

    // style样式
    var style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: '#eee',
        lineColor: 'rgba(147, 235, 248, .8)'
    };


    var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption: function(i, o, n) {
            console.log(i)
            console.log(o)
            console.log(n)
            var breadcrumb = this.createBreadcrumb(n);

            var j = name.indexOf(n);
            var l = o.graphic.length;
            if (j < 0) {
                console.log('jinru1')
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 195;
                o.graphic[0].children[1].shape.x2 = 195;
                if (o.graphic.length > 2) {
                    for (var x = 0; x < opt1.data.length; x++) {
                        if (n === opt1.data[x].name + '市') {
                            o.series[0].data = handleEvents.initSeriesData(opt1.data[x].data);
                            break;
                        } else o.series[0].data = [];
                    }
                }
                name.push(n);
                idx++;
            } else {
                console.log('jinru2', j)
                o.graphic.splice(j + 2, l);
                if (o.graphic.length <= 2) {
                    o.graphic[0].children[0].shape.x2 = 85;
                    o.graphic[0].children[1].shape.x2 = 85;
                    o.series[0].data = handleEvents.initSeriesData(gdDatas);
                }
                name.splice(j + 1, l);
                idx = j;
                pos.leftCur -= pos.leftPlus * (l - j - 1);
            }

            o.geo.map = n;
            o.geo.zoom = 1;
            i.clear();
            i.setOption(o);
            this.zoomAnimation();
            opt1.callback(n, o, i);
        },

        /**
         * name 地图名
         **/
        createBreadcrumb: function(name) {
            var cityToPinyin = {
                "成都市": "chengdu",
                '巴中市': "bazhong",
                '阿坝藏族羌族自治州市': "abeizangzuqiangzuzizhizhou",
                '达州市': "dazhou",
                "德阳市": "deyang",
                "甘孜藏族自治州市": "ganzizangzuzizhizhou",
                "广安市": "guangan",
                "广元市": "guangyuan",
                "乐山市": "leshan",
                "凉山彝族自治州市": "liangshanyizuzizhizhou",
                "泸州市": "luzhou",
                "眉山市": "meishan",
                "绵阳市": "mianyang",
                "自贡市": "zigong",
                "南充市": "nanchong",
                "内江市": "neijiang",
                "攀枝花市": "panzhihua",
                "遂宁市": "suining",
                "雅安市": "yaan",
                "宜宾市": "yibin",
                "资阳市": "ziyang"
            };
            var breadcrumb = {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus,
                top: pos.top + 3,
                children: [{
                    type: 'polyline',
                    left: -90,
                    top: -5,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: '#fff',
                        key: name,
                    },
                    onclick: function() {
                        var name = this.style.key;
                        handleEvents.resetOption(myChart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 'middle',
                    style: {
                        text: name,
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function() {
                        var name = this.style.text;
                        handleEvents.resetOption(myChart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 10,
                    style: {

                        name: name,
                        text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        // console.log(this.style);
                        var name = this.style.name;
                        handleEvents.resetOption(myChart, option, name);
                    }
                }]
            }

            pos.leftCur += pos.leftPlus;

            return breadcrumb;
        },

        // 设置effectscatter
        initSeriesData: function(data) {
            console.log(data, '22222222222')
            var temp = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = gdGeoCoordMap[data[i].name];
                if (geoCoord) {
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value, data[i].level)
                    });
                }
            }
            return temp;
        },

        zoomAnimation: function() {
            var count = null;
            var zoom = function(per) {
                if (!count) count = per;
                count = count + per;
                // console.log(per,count);
                myChart.setOption({
                    geo: {
                        zoom: count
                    }
                });
                if (count < 1) window.requestAnimationFrame(function() {
                    zoom(0.2);
                });
            };
            window.requestAnimationFrame(function() {
                zoom(0.2);
            });
        }
    };

    var convertData = function(data) {

        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var name = dataItem[0].name
            var fromCoord = gdGeoCoordMap[dataItem[0].name];
            var toCoord = [104.07754,30.582248]; //被攻击点坐标
            if (fromCoord && toCoord) {
                res.push([{
                    name: name,
                    coord: fromCoord,
                    value: dataItem[0].value
                }, {
                    coord: toCoord,
                }]);
            }
        }
        return res;
    };

    var convertData1 = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var name = dataItem.name
            var fromCoord = data[0].value.slice(0, 2)
            var toCoord = dataItem.value.slice(0, 2)
            if (fromCoord && toCoord) {
                res.push([{
                    name: name,
                    coord: fromCoord,
                    value: dataItem.value[2],
                }, {
                    coord: toCoord,
                }]);
            }
        }
        return res;
    };

    var series = [];
    [
        ['成都市', gdDatas]
    ].forEach(function(item, i) {
        console.log(item)
        series.push({
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 3, //箭头指向速度，值越小速度越快
                    trailLength: 0.7, //特效尾迹长度[0,1]值越大，尾迹越长重
                    color: '#fff', //箭头图标
                    symbolSize: 3, //图标大小
                },
                lineStyle: {
                    normal: {
                        width: 0.1, //尾迹线条宽度
                        opacity: 0.2, //尾迹线条透明度
                        curveness: 0.3 //尾迹线条曲直度
                    }
                },
                data: convertData(item[1])
            }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: { //涟漪特效
                    period: 4, //动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 4 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                    normal: {
                        show: false,
                        position: 'right', //显示位置
                        offset: [5, 0], //偏移设置
                        formatter: function(params) { //圆环显示文字
                            return params.data.name;
                        },
                        fontSize: 19
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: 'circle',
                symbolSize: function(val) {
                    return 10 + val[2] * 0; //圆环大小
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: '#f00'
                    }
                },
                data: item[1].map(function(dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: gdGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                }),
            },
            //被攻击点
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        //offset:[5, 0],
                        color: '#0f0',
                        formatter: '{b}',
                        textStyle: {
                            color: "#0f0"
                        }
                    },
                    emphasis: {
                        show: false,
                        color: "#f60"
                    }
                },
                // symbol: 'pin',
                // symbolSize: 50,
                // data: [{
                //     name: item[0],
                //     value: gdGeoCoordMap[item[0]].concat([10]),
                // }],
            }
        );
    });









    option = {
            "tooltip": {
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0)',
                formatter: function(item) {
                    console.log(item, 'item!!!!')
                    if (item.componentSubType === 'lines') {
                        var tipHtml1 = '';
                        tipHtml1 = '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                            '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' + item.data.name + '</div>' +
                            '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                            '<span style="font-size:18px;font-weight:bold;">' + '总测试设备：' + item.data.value + ' ' + '</span>' +
                            '</div>' + '</div>';
                        return tipHtml1;
                    } else if (item.componentSubType === 'effectScatter') {
                        var tipHtml2 = '';
                        tipHtml2 = '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                            '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' + item.data.name + '</div>' +
                            '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                            '<span style="font-size:18px;font-weight:bold;">' + '总测试设备：' + item.data.value[2] + ' ' + '</span>' +
                            '</div>' + '</div>';
                        return tipHtml2;
                    } else if (item.componentSubType === 'scatter') {
                        var tipHtml3 = '';
                        tipHtml3 = '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                            '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' + item.data.name + '</div>' +
                            '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                            '<span style="font-size:18px;font-weight:bold;">' + '总测试设备：' + item.data.value[2] + ' ' + '</span>' +
                            '</div>' + '</div>';
                        return tipHtml3;
                    }
                }
            },
            backgroundColor: "#013954",
            "graphic": [{
                type: 'group',
                left: pos.left,
                top: pos.top - 4,
                children: [{
                    type: 'line',
                    left: 0,
                    top: -20,
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 85,
                        y2: 0
                    },
                    style: {
                        stroke: style.lineColor,
                    }
                }, {
                    type: 'line',
                    left: 0,
                    top: 20,
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 85,
                        y2: 0
                    },
                    style: {
                        stroke: style.lineColor,
                    }
                }]
            }, {
                id: name[idx],
                type: 'group',
                left: pos.left + 2,
                top: pos.top,
                children: [{
                    type: 'polyline',
                    left: 90,
                    top: -12,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: 'transparent',
                        key: name[0]
                    },
                    onclick: function() {
                        var name = this.style.key;
                        console.log(name, '111111')
                        handleEvents.resetOption(myChart, option, name);
                    }
                }, {
                    type: 'text',
                    left: 0,
                    top: 'middle',
                    style: {
                        text: name[0] === '四川' ? '四川省' : name[0],
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function() {
                        handleEvents.resetOption(myChart, option, '四川');
                    }
                }, {
                    type: 'text',
                    left: 0,
                    top: 10,
                    style: {
                        text: 'SICHUAN',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        handleEvents.resetOption(myChart, option, '四川');
                    }
                }]
            }],
            visualMap: { //图例值控制
                min: 0,
                max: 1,
                calculable: true,
                show: false,
                color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
                textStyle: {
                    color: '#fff'
                }
            },
            "geo": {
                "map": "四川",
                "layoutCenter": ["55%", "50%"],
                "layoutSize": "109%",
                "label": {
                    "normal": {
                        "show": true,
                        "textStyle": {
                            "color": '#fff'
                        }
                    },
                    "emphasis": {
                        "textStyle": {
                            "color": '#fff'
                        }
                    }
                },
                "roam": true, //是否允许缩放
                "mapLocation": {
                    "width": "110%",
                    "height": "97%"
                },

                "itemStyle": {
                    "normal": {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    "emphasis": {
                        itemStyle: {
                            areaColor: '#FFD181',
                            borderColor: '#404a59',
                            borderWidth: 1
                        }
                    }
                }
            },
            series: series
        },
        myChart.setOption(option);
    myChart.on('click', function(params) {
        console.log(params)
        var _self = this;
        if (cityMap[params.name]) {
            var url = cityMap[params.name];
            $.get(url, function(response) {
                //console.log(response, 'res');
                curGeoJson = response;
                echarts.registerMap(params.name, response);
                handleEvents.resetOption(_self, option, params.name);
            });
        }
    });
});