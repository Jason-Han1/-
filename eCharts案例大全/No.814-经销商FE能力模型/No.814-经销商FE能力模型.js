option = {
    title: {
        text: '经销商FE能力模型',
    },
    radar: {
        indicator: [
            { name: 'FE基础', max: 5 },
            { name: 'Node全栈', max: 5 },
            { name: '建站', max: 5 },
            { name: '低代码', max: 5 },
            { name: '性能优化', max: 5 },
            { name: '交互设计', max: 5 },
            { name: '3D', max: 5 },
            { name: '可视化', max: 5 },
            { name: '字节基建', max: 5 },
            { name: '小程序', max: 5 },
            { name: '数据分析', max: 5 },
            { name: '大型活动预案', max: 5 },
            { name: '线上问题oncall', max: 5 },
            { name: '服务治理', max: 5 },
            { name: '前端架构', max: 5 },
            { name: 'CI流程', max: 5 },
            { name: '文档总结', max: 5 },
            { name: '沟通', max: 5 },
        ],
        center: ['50%', '50%'],
        radius: '68%',
    },

    series: [
        {
            type: 'radar',
            zlevel: 2,
            tooltip: {
                show: true,
            },
            lineStyle: {
                width: 1,
                opacity: 1,
            },
            areaStyle: {
                color: 'rgba(255, 204, 50, 0.2)',
            },
            symbolSize: 3,
            label: {
                show: true,
            },
            data: [
                {
                    label: {
                        position: 'outside',
                    },
                    value: [4.5, 3, 4, 4, 4, 0, 0, 3.5, 4, 4, 0, 0, 4, 0, 3, 4, 4, 4],
                },
                {
                    label: {
                        position: 'inside',
                    },
                    value: [3.78, 0, 3.75, 3.3, 3.5, 0, 0, 3.5, 3.25, 3, 0, 0, 3.375, 0, 1.5, 3.3, 3.3, 3.875],
                },
            ],
        },
        {
            type: 'sunburst',
            center: ['50%', '50%'],
            nodeClick: false,
            levels: [
                {},
                {
                    r0: '90%',
                    r: '100%',
                },
            ],
            sort: 'asc',
            data: [
                {
                    name: '知识',
                    value: 5,
                    label: {
                        position: 'inside',
                        rotate: 'tangential',
                    },
                },
                {
                    name: '经验',
                    value: 5,
                    label: {
                        position: 'inside',
                        rotate: 'tangential',
                    },
                },
            ],
        },
    ],
};
