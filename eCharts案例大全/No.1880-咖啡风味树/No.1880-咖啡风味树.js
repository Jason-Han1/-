var data = [
    {
        name: '咖啡风味树',
        children: [
            {
                name: '植物区系',
                itemStyle: { color: '#da0d68' },
                children: [
                    { name: '红茶', value: 1, itemStyle: { color: '#975e6d' } },
                    {
                        name: '花',
                        itemStyle: { color: '#e0719c' },
                        children: [
                            { name: '甘菊', value: 1, itemStyle: { color: '#f99e1c' } },
                            { name: '玫瑰', value: 1, itemStyle: { color: '#ef5a78' } },
                            { name: '茉莉花', value: 1, itemStyle: { color: '#f7f1bd' } },
                        ],
                    },
                ],
            },
            {
                name: '水果',
                itemStyle: { color: '#da1d23' },
                children: [
                    {
                        name: '浆果',
                        itemStyle: { color: '#dd4c51' },
                        children: [
                            { name: '黑莓', value: 1, itemStyle: { color: '#3e0317' } },
                            { name: '树莓', value: 1, itemStyle: { color: '#e62969' } },
                            { name: '蓝莓', value: 1, itemStyle: { color: '#6569b0' } },
                            { name: '草莓', value: 1, itemStyle: { color: '#ef2d36' } },
                        ],
                    },
                    {
                        name: '干果',
                        itemStyle: { color: '#c94a44' },
                        children: [
                            { name: '葡萄干', value: 1, itemStyle: { color: '#b53b54' } },
                            { name: '西梅干', value: 1, itemStyle: { color: '#a5446f' } },
                        ],
                    },
                    {
                        name: '其他水果',
                        itemStyle: { color: '#dd4c51' },
                        children: [
                            { name: '椰子', value: 1, itemStyle: { color: '#f2684b' } },
                            { name: '樱桃', value: 1, itemStyle: { color: '#e73451' } },
                            { name: '石榴', value: 1, itemStyle: { color: '#e65656' } },
                            { name: '菠萝', value: 1, itemStyle: { color: '#f89a1c' } },
                            { name: '葡萄', value: 1, itemStyle: { color: '#aeb92c' } },
                            { name: '苹果', value: 1, itemStyle: { color: '#4eb849' } },
                            { name: '桃子', value: 1, itemStyle: { color: '#f68a5c' } },
                            { name: '梨', value: 1, itemStyle: { color: '#baa635' } },
                        ],
                    },
                    {
                        name: '柑橘类水果',
                        itemStyle: { color: '#f7a128' },
                        children: [
                            { name: '葡萄柚', value: 1, itemStyle: { color: '#f26355' } },
                            { name: '橘子', value: 1, itemStyle: { color: '#e2631e' } },
                            { name: '柠檬', value: 1, itemStyle: { color: '#fde404' } },
                            { name: '酸橙', value: 1, itemStyle: { color: '#7eb138' } },
                        ],
                    },
                ],
            },
            {
                name: '酸类/发酵类',
                itemStyle: { color: '#ebb40f' },
                children: [
                    {
                        name: '酸类',
                        itemStyle: { color: '#e1c315' },
                        children: [
                            { name: '芳香酸', value: 1, itemStyle: { color: '#9ea718' } },
                            { name: '醋酸', value: 1, itemStyle: { color: '#94a76f' } },
                            { name: '丁酸', value: 1, itemStyle: { color: '#d0b24f' } },
                            { name: '异戊酸', value: 1, itemStyle: { color: '#8eb646' } },
                            { name: '柠檬酸', value: 1, itemStyle: { color: '#faef07' } },
                            { name: '苹果酸', value: 1, itemStyle: { color: '#c1ba07' } },
                        ],
                    },
                    {
                        name: '酒精饮料',
                        itemStyle: { color: '#b09733' },
                        children: [
                            { name: '葡萄酒', value: 1, itemStyle: { color: '#8f1c53' } },
                            { name: '威士忌', value: 1, itemStyle: { color: '#b34039' } },
                            { name: '发酵味', value: 1, itemStyle: { color: '#ba9232' } },
                            { name: '过熟的', value: 1, itemStyle: { color: '#8b6439' } },
                        ],
                    },
                ],
            },
            {
                name: '绿色/蔬菜',
                itemStyle: { color: '#187a2f' },
                children: [
                    { name: '橄榄油', value: 1, itemStyle: { color: '#a2b029' } },
                    { name: '生的/未加工', value: 1, itemStyle: { color: '#718933' } },
                    {
                        name: '绿色/蔬菜',
                        itemStyle: { color: '#3aa255' },
                        children: [
                            { name: '未成熟', value: 1, itemStyle: { color: '#a2bb2b' } },
                            { name: '豌豆荚', value: 1, itemStyle: { color: '#62aa3c' } },
                            { name: '新鲜的', value: 1, itemStyle: { color: '#03a653' } },
                            { name: '深绿色蔬菜', value: 1, itemStyle: { color: '#038549' } },
                            { name: '蔬菜', value: 1, itemStyle: { color: '#28b44b' } },
                            { name: '干草', value: 1, itemStyle: { color: '#a3a830' } },
                            { name: '草药', value: 1, itemStyle: { color: '#7ac141' } },
                        ],
                    },
                    { name: '大豆制品', value: 1, itemStyle: { color: '#5e9a80' } },
                ],
            },
            {
                name: '其他',
                itemStyle: { color: '#0aa3b5' },
                children: [
                    {
                        name: '纸张味/发霉',
                        itemStyle: { color: '#9db2b7' },
                        children: [
                            { name: '不新鲜的', value: 1, itemStyle: { color: '#8b8c90' } },
                            { name: '纸板味', value: 1, itemStyle: { color: '#beb276' } },
                            { name: '纸张味', value: 1, itemStyle: { color: '#fefef4' } },
                            { name: '木头味', value: 1, itemStyle: { color: '#744e03' } },
                            { name: '发霉/潮湿', value: 1, itemStyle: { color: '#a3a36f' } },
                            { name: '发霉/灰尘', value: 1, itemStyle: { color: '#c9b583' } },
                            { name: '发霉/泥土', value: 1, itemStyle: { color: '#978847' } },
                            { name: '动物味', value: 1, itemStyle: { color: '#9d977f' } },
                            { name: '肉汤味', value: 1, itemStyle: { color: '#cc7b6a' } },
                            { name: '苯酚味', value: 1, itemStyle: { color: '#db646a' } },
                        ],
                    },
                    {
                        name: '化学',
                        itemStyle: { color: '#76c0cb' },
                        children: [
                            { name: '苦味', value: 1, itemStyle: { color: '#80a89d' } },
                            { name: '咸味', value: 1, itemStyle: { color: '#def2fd' } },
                            { name: '药味', value: 1, itemStyle: { color: '#7a9bae' } },
                            { name: '石油', value: 1, itemStyle: { color: '#039fb8' } },
                            { name: '臭鼬', value: 1, itemStyle: { color: '#5e777b' } },
                            { name: '橡胶', value: 1, itemStyle: { color: '#120c0c' } },
                        ],
                    },
                ],
            },
            {
                name: '烘焙',
                itemStyle: { color: '#c94930' },
                children: [
                    { name: '像烟丝的', value: 1, itemStyle: { color: '#caa465' } },
                    { name: '烟草', value: 1, itemStyle: { color: '#dfbd7e' } },
                    {
                        name: '焦味',
                        itemStyle: { color: '#be8663' },
                        children: [
                            { name: '辛辣', value: 1, itemStyle: { color: '#b9a449' } },
                            { name: '像灰的', value: 1, itemStyle: { color: '#899893' } },
                            { name: '烟熏', value: 1, itemStyle: { color: '#a1743b' } },
                            { name: '烘焙', value: 1, itemStyle: { color: '#894810' } },
                        ],
                    },
                    {
                        name: '谷物',
                        itemStyle: { color: '#ddaf61' },
                        children: [
                            { name: '谷物', value: 1, itemStyle: { color: '#b7906f' } },
                            { name: '麦芽', value: 1, itemStyle: { color: '#eb9d5f' } },
                        ],
                    },
                ],
            },
            {
                name: '香料',
                itemStyle: { color: '#ad213e' },
                children: [
                    { name: '微辣苦味', value: 1, itemStyle: { color: '#794752' } },
                    { name: '胡椒', value: 1, itemStyle: { color: '#cc3d41' } },
                    {
                        name: '褐色香料',
                        itemStyle: { color: '#b14d57' },
                        children: [
                            { name: '茴香', value: 1, itemStyle: { color: '#c78936' } },
                            { name: '肉豆蔻', value: 1, itemStyle: { color: '#8c292c' } },
                            { name: '肉桂', value: 1, itemStyle: { color: '#e5762e' } },
                            { name: '丁香', value: 1, itemStyle: { color: '#a16c5a' } },
                        ],
                    },
                ],
            },
            {
                name: '坚果可可',
                itemStyle: { color: '#a87b64' },
                children: [
                    {
                        name: '坚果味',
                        itemStyle: { color: '#c78869' },
                        children: [
                            { name: '花生', value: 1, itemStyle: { color: '#d4ad12' } },
                            { name: '榛子', value: 1, itemStyle: { color: '#9d5433' } },
                            { name: '杏仁', value: 1, itemStyle: { color: '#c89f83' } },
                        ],
                    },
                    {
                        name: '可可',
                        itemStyle: { color: '#bb764c' },
                        children: [
                            { name: '巧克力', value: 1, itemStyle: { color: '#692a19' } },
                            { name: '黑巧克力', value: 1, itemStyle: { color: '#470604' } },
                        ],
                    },
                ],
            },
            {
                name: '甜味',
                itemStyle: { color: '#e65832' },
                children: [
                    {
                        name: '红糖',
                        itemStyle: { color: '#d45a59' },
                        children: [
                            { name: '糖浆', value: 1, itemStyle: { color: '#310d0f' } },
                            { name: '枫糖浆', value: 1, itemStyle: { color: '#ae341f' } },
                            { name: '焦糖', value: 1, itemStyle: { color: '#d78823' } },
                            { name: '蜂蜜', value: 1, itemStyle: { color: '#da5c1f' } },
                        ],
                    },
                    { name: '香草', value: 1, itemStyle: { color: '#f89a80' } },
                    { name: '香兰素', value: 1, itemStyle: { color: '#f37674' } },
                    { name: '整体甜', value: 1, itemStyle: { color: '#e75b68' } },
                    { name: '芳香甜', value: 1, itemStyle: { color: '#d0545f' } },
                ],
            },
        ],
    },
];

option = {
    title: {
        text: '咖啡风味树',
    },
    series: {
        top: '1%',
        left: '10%',
        bottom: '1%',
        right: '20%',
        type: 'tree',
        data: data,
        initialTreeDepth: 5,
        emphasis: {
            focus: 'ancestor',
        },
        label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9,
        },
        leaves: {
            label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left',
            },
        },
    },
};
