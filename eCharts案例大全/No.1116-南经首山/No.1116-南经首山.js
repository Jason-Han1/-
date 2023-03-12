option = {
    title: {
        text: '南经首山'
    },
    legend: {},
    series: [
        {
            type: 'graph', // 类型:关系图
            layout: 'force',
            legendHoverLink: true,
            symbolSize: 80,
            zoom: 0.5,
            force: {
                //initLayout: 'circular',
               
                //gravity: 1.2,
                repulsion: 1500,
                edgeLength: 20,
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: 10,
            draggable: true,
            legend: [
                { name: '郡国名' },
                { name: '山名' },
                { name: '水名' },
                { name: '谷野名' },
                { name: '草名' },
                { name: '木名' },
                { name: '鸟名' },
                { name: '兽名' },
                { name: '虫名' },
                { name: '鱼名' },
                { name: '矿物名' },
                { name: '食物名' },
                { name: '疾病名' },
                { name: '祭祀名' },
                { name: '存疑' },
            ],
            label: {
                show: true,
                position: 'inside',
                // color: 'inherit',
                // fontStyle:'oblique', // 字体风格
                fontFamily: 'Arial', //字体系列
                fontSize: 14,
                formatter: '{b}',
            },
            edgeLabel: {
                // show: true,
                position: 'middle',
                formatter: function (x) {
                    return x.data.name;
                },
                fontSize: 12,
            },
            roam: 'scale',
            // roma: true,
            categories: [
                { name: '郡国名' },
                { name: '山名' },
                { name: '水名' },
                { name: '谷野名' },
                { name: '草名' },
                { name: '木名' },
                { name: '鸟名' },
                { name: '兽名' },
                { name: '虫名' },
                { name: '鱼名' },
                { name: '矿物名' },
                { name: '食物名' },
                { name: '疾病名' },
                { name: '祭祀名' },
                { name: '存疑' },
            ],
            data: [
                { category: '山名', name: '䧿山' },
                { category: '山名', name: '招摇之山' },
                { category: '水名', name: '西海' },
                { category: '木名', name: '桂' },
                { category: '矿物名', name: '金' },
                { category: '矿物名', name: '玉' },
                { category: '草名', name: '韭' },
                { category: '草名', name: '祝馀' },
                { category: '疾病名', name: '饥' },
                { category: '木名', name: '榖' },
                { category: '木名', name: '迷榖' },
                { category: '疾病名', name: '迷' },
                { category: '兽名', name: '禺' },
                { category: '兽名', name: '狌狌' },
                { category: '水名', name: '丽麂之水' },
                { category: '存疑', name: '育沛' },
                { category: '疾病名', name: '瘕' },
                { category: '山名', name: '堂庭之山' },
                { category: '木名', name: '棪木' },
                { category: '兽名', name: '白猿' },
                { category: '矿物名', name: '水玉' },
                { category: '矿物名', name: '黄金' },
                { category: '山名', name: '猨翼之山' },
                { category: '矿物名', name: '白玉' },
                { category: '虫名', name: '蝮虫' },
                { category: '山名', name: '杻阳之山' },
                { category: '矿物名', name: '赤金' },
                { category: '矿物名', name: '白金' },
                { category: '兽名', name: '鹿蜀' },
                { category: '水名', name: '怪水' },
                { category: '水名', name: '宪翼之水' },
                { category: '鱼名', name: '玄龟' },
                { category: '鱼名', name: '旋龟' },
                { category: '疾病名', name: '聋' },
                { category: '山名', name: '柢山' },
                { category: '鱼名', name: '鯥' },
                { category: '疾病名', name: '肿疾' },
                { category: '兽名', name: '留牛' },
                { category: '兽名', name: '牛' },
                { category: '山名', name: '亶爰之山' },
                { category: '兽名', name: '类' },
                { category: '疾病名', name: '妒' },
                { category: '山名', name: '基山' },
                { category: '兽名', name: '猼訑' },
                { category: '鸟名', name: '[尚鸟] [付鸟]' },
                { category: '山名', name: '青丘之山' },
                { category: '矿物名', name: '青䨼' },
                { category: '兽名', name: '九尾' },
                { category: '疾病名', name: '蛊' },
                { category: '鸟名', name: '灌灌' },
                { category: '鸟名', name: '鸠' },
                { category: '疾病名', name: '惑' },
                { category: '水名', name: '英水' },
                { category: '水名', name: '即翼之泽' },
                { category: '鱼名', name: '赤鱬' },
                { category: '鸟名', name: '鸳鸯' },
                { category: '疾病名', name: '疥' },
                { category: '山名', name: '箕尾之山' },
                { category: '水名', name: '东海' },
                { category: '水名', name: '汸水' },
                { category: '水名', name: '淯' },
                { category: '祭祀名', name: '璋玉' },
                { category: '祭祀名', name: '瘗' },
                { category: '祭祀名', name: '糈' },
                { category: '祭祀名', name: '稌米' },
                { category: '祭祀名', name: '壁' },
                { category: '祭祀名', name: '稻米' },
                { category: '祭祀名', name: '白菅' },
                { category: '祭祀名', name: '席' },
            ],
            links: [
                {
                    source: '䧿山',
                    target: '招摇之山',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '西海',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '桂',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '金',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '玉',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '祝馀',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '迷榖',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '狌狌',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '丽麂之水',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '堂庭之山',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '璋玉',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '瘗',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '糈',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '稌米',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '白菅',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '席',
                    name: '关系',
                },
                {
                    source: '招摇之山',
                    target: '西海',
                    name: '关系',
                },
                {
                    source: '招摇之山',
                    target: '璋玉',
                    name: '关系',
                },
                {
                    source: '招摇之山',
                    target: '瘗',
                    name: '关系',
                },
                {
                    source: '招摇之山',
                    target: '糈',
                    name: '关系',
                },
                {
                    source: '招摇之山',
                    target: '稌米',
                    name: '关系',
                },
                {
                    source: '招摇之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '招摇之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '招摇之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '招摇之山',
                    target: '白菅',
                    name: '关系',
                },
                {
                    source: '招摇之山',
                    target: '席',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '猨翼之山',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '棪木',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '白猿',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '水玉',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '黄金',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '璋玉',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '瘗',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '糈',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '稌米',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '白菅',
                    name: '关系',
                },
                {
                    source: '堂庭之山',
                    target: '席',
                    name: '关系',
                },
                {
                    source: '猨翼之山',
                    target: '杻阳之山',
                    name: '关系',
                },
                {
                    source: '猨翼之山',
                    target: '白玉',
                    name: '关系',
                },
                {
                    source: '猨翼之山',
                    target: '蝮虫',
                    name: '关系',
                },
                {
                    source: '猨翼之山',
                    target: '璋玉',
                    name: '关系',
                },
                {
                    source: '猨翼之山',
                    target: '瘗',
                    name: '关系',
                },
                {
                    source: '猨翼之山',
                    target: '糈',
                    name: '关系',
                },
                {
                    source: '猨翼之山',
                    target: '稌米',
                    name: '关系',
                },
                {
                    source: '猨翼之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '猨翼之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '猨翼之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '猨翼之山',
                    target: '白菅',
                    name: '关系',
                },
                {
                    source: '猨翼之山',
                    target: '席',
                    name: '关系',
                },
                {
                    source: '杻阳之山',
                    target: '柢山',
                    name: '关系',
                },
                {
                    source: '杻阳之山',
                    target: '赤金',
                    name: '关系',
                },
                {
                    source: '杻阳之山',
                    target: '白金',
                    name: '关系',
                },

                {
                    source: '杻阳之山',
                    target: '鹿蜀',
                    name: '关系',
                },

                {
                    source: '杻阳之山',
                    target: '怪水',
                    name: '关系',
                },
                {
                    source: '玄龟',
                    target: '怪水',
                    name: '关系',
                },
                {
                    source: '玄龟',
                    target: '旋龟',
                    name: '关系',
                },
                {
                    source: '聋',
                    target: '旋龟',
                    name: '关系',
                },
                {
                    source: '宪翼之水',
                    target: '怪水',
                    name: '关系',
                },
                {
                    source: '杻阳之山',
                    target: '璋玉',
                    name: '关系',
                },
                {
                    source: '杻阳之山',
                    target: '瘗',
                    name: '关系',
                },
                {
                    source: '杻阳之山',
                    target: '糈',
                    name: '关系',
                },
                {
                    source: '杻阳之山',
                    target: '稌米',
                    name: '关系',
                },
                {
                    source: '杻阳之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '杻阳之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '杻阳之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '杻阳之山',
                    target: '白菅',
                    name: '关系',
                },
                {
                    source: '杻阳之山',
                    target: '席',
                    name: '关系',
                },
                {
                    source: '柢山',
                    target: '亶爰之山',
                    name: '关系',
                },
                {
                    source: '柢山',
                    target: '鯥',
                    name: '关系',
                },

                {
                    source: '柢山',
                    target: '璋玉',
                    name: '关系',
                },
                {
                    source: '柢山',
                    target: '瘗',
                    name: '关系',
                },
                {
                    source: '柢山',
                    target: '糈',
                    name: '关系',
                },
                {
                    source: '柢山',
                    target: '稌米',
                    name: '关系',
                },
                {
                    source: '柢山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '柢山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '柢山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '柢山',
                    target: '白菅',
                    name: '关系',
                },
                {
                    source: '柢山',
                    target: '席',
                    name: '关系',
                },
                {
                    source: '亶爰之山',
                    target: '基山',
                    name: '关系',
                },
                {
                    source: '亶爰之山',
                    target: '类',
                    name: '关系',
                },

                {
                    source: '亶爰之山',
                    target: '璋玉',
                    name: '关系',
                },
                {
                    source: '亶爰之山',
                    target: '瘗',
                    name: '关系',
                },
                {
                    source: '亶爰之山',
                    target: '糈',
                    name: '关系',
                },
                {
                    source: '亶爰之山',
                    target: '稌米',
                    name: '关系',
                },
                {
                    source: '亶爰之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '亶爰之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '亶爰之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '亶爰之山',
                    target: '白菅',
                    name: '关系',
                },
                {
                    source: '亶爰之山',
                    target: '席',
                    name: '关系',
                },
                {
                    source: '基山',
                    target: '青丘之山',
                    name: '关系',
                },
                {
                    source: '基山',
                    target: '玉',
                    name: '关系',
                },
                {
                    source: '基山',
                    target: '猼訑',
                    name: '关系',
                },
                {
                    source: '基山',
                    target: '[尚鸟] [付鸟]',
                    name: '关系',
                },

                {
                    source: '基山',
                    target: '璋玉',
                    name: '关系',
                },
                {
                    source: '基山',
                    target: '瘗',
                    name: '关系',
                },
                {
                    source: '基山',
                    target: '糈',
                    name: '关系',
                },
                {
                    source: '基山',
                    target: '稌米',
                    name: '关系',
                },
                {
                    source: '基山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '基山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '基山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '基山',
                    target: '白菅',
                    name: '关系',
                },
                {
                    source: '基山',
                    target: '席',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '箕尾之山',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '青䨼',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '九尾',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '灌灌',
                    name: '关系',
                },

                {
                    source: '青丘之山',
                    target: '英水',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '玉',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '璋玉',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '瘗',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '糈',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '稌米',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '白菅',
                    name: '关系',
                },
                {
                    source: '青丘之山',
                    target: '席',
                    name: '关系',
                },
                {
                    source: '箕尾之山',
                    target: '东海',
                    name: '关系',
                },
                {
                    source: '箕尾之山',
                    target: '璋玉',
                    name: '关系',
                },
                {
                    source: '箕尾之山',
                    target: '瘗',
                    name: '关系',
                },
                {
                    source: '箕尾之山',
                    target: '糈',
                    name: '关系',
                },
                {
                    source: '箕尾之山',
                    target: '稌米',
                    name: '关系',
                },
                {
                    source: '箕尾之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '箕尾之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '箕尾之山',
                    target: '壁',
                    name: '关系',
                },
                {
                    source: '箕尾之山',
                    target: '白菅',
                    name: '关系',
                },
                {
                    source: '箕尾之山',
                    target: '席',
                    name: '关系',
                },
                {
                    source: '韭',
                    target: '祝馀',
                    name: '关系',
                },
                {
                    source: '祝馀',
                    target: '饥',
                    name: '关系',
                },
                {
                    source: '榖',
                    target: '迷榖',
                    name: '关系',
                },
                {
                    source: '迷榖',
                    target: '迷',
                    name: '关系',
                },
                {
                    source: '禺',
                    target: '狌狌',
                    name: '关系',
                },
                {
                    source: '丽麂之水',
                    target: '育沛',
                    name: '关系',
                },
                {
                    source: '育沛',
                    target: '瘕',
                    name: '关系',
                },
                {
                    source: '鯥',
                    target: '肿疾',
                    name: '关系',
                },
                {
                    source: '鯥',
                    target: '留牛',
                    name: '关系',
                },
                {
                    source: '鯥',
                    target: '牛',
                    name: '关系',
                },
                {
                    source: '类',
                    target: '妒',
                    name: '关系',
                },
                {
                    source: '九尾',
                    target: '蛊',
                    name: '关系',
                },
                {
                    source: '灌灌',
                    target: '鸠',
                    name: '关系',
                },
                {
                    source: '灌灌',
                    target: '惑',
                    name: '关系',
                },
                {
                    source: '英水',
                    target: '即翼之泽',
                    name: '关系',
                },
                {
                    source: '英水',
                    target: '赤鱬',
                    name: '关系',
                },
                {
                    source: '赤鱬',
                    target: '鸳鸯',
                    name: '关系',
                },
                {
                    source: '赤鱬',
                    target: '疥',
                    name: '关系',
                },
                {
                    source: '汸水',
                    target: '白玉',
                    name: '关系',
                },
                {
                    source: '汸水',
                    target: '淯',
                    name: '关系',
                },
                {
                    source: '䧿山',
                    target: '稻米',
                    name: '关系',
                },
                {
                    source: '招摇之山',
                    target: '稻米',
                    name: '关系',
                },

                {
                    source: '堂庭之山',
                    target: '稻米',
                    name: '关系',
                },

                {
                    source: '猨翼之山',
                    target: '稻米',
                    name: '关系',
                },

                {
                    source: '杻阳之山',
                    target: '稻米',
                    name: '关系',
                },

                {
                    source: '柢山',
                    target: '稻米',
                    name: '关系',
                },

                {
                    source: '亶爰之山',
                    target: '稻米',
                    name: '关系',
                },

                {
                    source: '基山',
                    target: '稻米',
                    name: '关系',
                },

                {
                    source: '青丘之山',
                    target: '稻米',
                    name: '关系',
                },
                {
                    source: '箕尾之山',
                    target: '稻米',
                    name: '关系',
                },
            ],
        },
    ],
};
