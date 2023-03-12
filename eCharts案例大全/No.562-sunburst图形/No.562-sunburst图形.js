let color = ['#da0d68', '#da1d23', '#ebb40f'];
data = [
    {
        name: '学员',
        value: 4,
        children: [
            {
                name: '干部人事',
                value: 1,
                children: [
                    {
                        name: '公民出入境管理',
                        value: 1,
                        children: [
                            {
                                name: '法令法规和条令规章',
                                value: 1,
                                children: [
                                    {
                                        name: '信息科技和出入境管理信息技术',
                                        value: 1,
                                        children: [
                                            {
                                                name: '法令法规和条令规章',
                                                value: 1,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: '公民出入境管理',
                value: 1,
                children: [
                    {
                        name: '警务技能战术',
                        value: 0.7,
                        children: [
                            {
                                name: '边防检查管理',
                                value: 0.7,
                                children: [
                                    {
                                        name: '网络安全',
                                        value: 0.35,
                                        children: [
                                            {
                                                name: '警务技能战术',
                                                value: 0.35,
                                            },
                                        ],
                                    },
                                    {
                                        name: '边防检查管理',
                                        value: 0.35,
                                        children: [
                                            {
                                                name: '边防检查管理',
                                                value: 0.35,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: '舆情引导',
                        value: 0.3,
                        children: [
                            {
                                name: '网络安全',
                                value: 0.3,
                                children: [
                                    {
                                        name: '法律法规和禁令规章',
                                        value: 0.3,
                                        children: [
                                            {
                                                name: '科技信息应用',
                                                value: 0.3,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: '法律法规和条令规章',
                value: 1,
                children: [
                    {
                        name: '信息科技和出入境管理信息技术',
                        value: 1,
                        children: [
                            {
                                name: '科技信息应用',
                                value: 0.5,
                                children: [
                                    {
                                        name: '警务技能战术',
                                        value: 0.5,
                                        children: [
                                            {
                                                name: '移民事务服务',
                                                value: 0.5,
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: '移民事务服务',
                                value: 0.5,
                                children: [
                                    {
                                        name: '公民出入境管理',
                                        value: 0.5,
                                        children: [
                                            {
                                                name: '网络安全',
                                                value: 0.5,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: '机关委员',
                value: 1,
                children: [
                    {
                        name: '移民事务服务',
                        value: 1,
                        children: [
                            {
                                name: '信息科技和出入境管理信息技术',
                                value: 1,
                                children: [
                                    {
                                        name: '外国人管理',
                                        value: 1,
                                        children: [
                                            {
                                                name: '公共科目',
                                                value: 0.5,
                                            },
                                            {
                                                name: '保密工作',
                                                value: 0.5,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
option = {
    tooltip: {
        show: true,
        formatter: (params) => {
            return params.name;
        },
    },
    color: color,
    title: {
        text: '教学体系',
        top: 20,
        left: 0,
        textStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            color: '#14374B',
        },
    },
    legend: {
        //type:'scroll',
        show: true,
        bottom: 20,
        x: 'center',
        // data: ['干部人事']
    },
    series: {
        type: 'sunburst',
        data: data,
        radius: ['20%', '40%'],
        center: ['50%', '50%'],
        sort: undefined,
        emphasis: {
            focus: 'ancestor',
        },
        label: {
            rotate: 'tangential',
            color: '#fff',
            formatter: (params) => {
                if (params.name.length > 4) {
                    return params.name.substring(0, 4) + '...';
                } else {
                    return params.name;
                }
            },
        },
        levels: [
            {},
            {
                r0: '0%',
                r: '20%',
                itemStyle: {
                    color: '#fff',
                },
                label: {
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: 24,
                    padding: [0, 0, 40, 0],
                },
            },
            {
                r0: '20%',
                r: '36%',
                itemStyle: {
                    color: '#5FC2FF',
                },
            },
            {
                r0: '36%',
                r: '51%',
                itemStyle: {
                    color: '#667ADD',
                },
            },
            {
                r0: '51%',
                r: '67%',
                itemStyle: {
                    // borderWidth: 0,
                    color: '#FFC701',
                },
            },
            {
                r0: '67%',
                r: '83%',
                itemStyle: {
                    // borderWidth: 0,
                    color: '#FF8E06',
                },
            },
            {
                r0: '83%',
                r: '100%',
                itemStyle: {
                    color: '#4475C2',
                },
            },
        ],
    },
};
