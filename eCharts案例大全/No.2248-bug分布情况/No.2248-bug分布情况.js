option = {
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        top: 'middle',
        left: 'right',
        data: [
            '首页',
            '数据推送',
            '信用审核',
            '信用发布',
            '信用公示',
            '信用管理',
            '应用管理',
            '评价设置',
            '医保回复',
            '政策发布',
            '试点管理',
            '系统管理',
            '基本信息',
            '首页',
            '管理',
            '消息',
            '我的',
            '分组反馈授权',
            '分组调整审核',
            '分组调整反馈',
            '单议病例申请',
            '拨付公示授权',
            '日常分组查询-审核',
            '月度预算管理',
            '首页',
            '病例校验分析',
            '大数据监控概况',
            '费用总额趋势分析',
            '医疗机构费用趋势分析',
            '专项管控病组分析',
            '医疗机构专项病组分析',
        ],
    },
    series: [
        {
            name: 'bug分布情况',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            label: {
                show: true,
                formatter: '{b}: {d}%',
            },
            data: [
                {
                    value: 1,
                    name: '分组反馈授权',
                },
                {
                    value: 1,
                    name: '分组调整审核',
                },
                {
                    value: 2,
                    name: '分组调整反馈',
                },
                {
                    value: 2,
                    name: '单议病例申请',
                },
                {
                    value: 1,
                    name: '拨付公示授权',
                },
                {
                    value: 1,
                    name: '日常分组查询-审核',
                },
                {
                    value: 1,
                    name: '月度预算管理',
                },
                {
                    value: 1,
                    name: '首页',
                },
                {
                    value: 1,
                    name: '病例校验分析',
                },
                {
                    value: 1,
                    name: '大数据监控概况',
                },
                {
                    value: 1,
                    name: '费用总额趋势分析',
                },
                {
                    value: 2,
                    name: '医疗机构费用趋势分析',
                },
                {
                    value: 1,
                    name: '专项管控病组分析',
                },
                {
                    value: 2,
                    name: '医疗机构专项病组分析',
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};
