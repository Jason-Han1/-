option = {
    tooltip: {
        formatter: (params) => {
            let str = '';
            params.treePathInfo.forEach((item, index) => {
                if (index > 0 && index < params.treePathInfo.length - 1) {
                    str += item.name + '-';
                } else if (index !== 0) {
                    str += item.name + ':' + item.value;
                }
            });
            return str;
        },
    },
    title: {
        show: true,
        text: this.title,
        left: 'center',
        top: '20',
        textStyle: {
            fontSize: '22',
        },
    },
    color: [
        '#1B95E6',
        '#6674C4',
        '#FF95D2',
        '#6BBEAC',
        '#FACF5B',
        '#3DC0E4',
        '#0DCB74',

        '#8368D9',
        '#AF65BE',
        '#4C6471',
        '#1C436F',
        '#E57B88',
        '#F4B246',
        '#A77C56',
    ],
    series: {
        type: 'sunburst',
        data: [
            {
                name: '硕士',
                children: [
                    {
                        name: '全日制',
                        children: [
                            {
                                name: '学术型',
                                value: 11,
                            },
                            {
                                name: '专业型',
                                value: 44,
                            },
                        ],
                    },
                    {
                        name: '非全日制',
                        children: [
                            {
                                name: '专业型',
                                value: 66,
                            },
                        ],
                    },
                ],
            },
            {
                name: '博士',
                children: [
                    {
                        name: '全日制',
                        children: [
                            {
                                name: '学术型',
                                value: 22,
                            },
                        ],
                    },
                    {
                        name: '非全日制',
                        children: [
                            {
                                name: '学术型',
                                value: 33,
                            },
                            {
                                name: '专业型',
                                value: 55,
                            },
                        ],
                    },
                ],
            },
        ],
        radius: ['10%', '70%'],
        label: {
            rotate: 0,
        },
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 6,
            borderRadius: 6,
        },
        emphasis: {
            focus: 'ancestor',
        },
        levels: [
            {
                // 留给数据下钻点的空白配置
                itemStyle: {
                    color: '#fff',
                },

                radius: ['10%', '10%'],
            },
            {
                radius: ['10%', '35%'],
            },
            {
                radius: ['37%', '62%'],
                itemStyle:{
                     opacity:0.95
                }
               
            },
            {
                radius: ['64%', '70%'],

                label: {
                    position: 'outside',

                    distance: 12,
                },
                 itemStyle:{
                     opacity:0.9
                },
                downplay: {
                    label: {
                        opacity: 0.5,
                    },
                },
            },
        ],
    },
};
