option = {
    title: {
        text: '各项任务数量统计',

    },
    tooltip: {
        trigger: "item",
    },
    legend: {
        data: []
    },

    toolbox: {
        show: false
    },
    calculable: false,

    series: [{
            name: '数量占比',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            center: ['28%', '70%'],
            radius: ['20%', '23%'],
            color: ['#915872', '#3077b7', '#9a8169', '#3f8797', '#5b8144', '#307889'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },

            },
            tooltip: {
                show: false,
            },

            data: [{
                    value: 3533,
                    name: ''
                },
                {
                    value: 3233,
                    name: ''
                },
                {
                    value: 3433,
                    name: ''
                },
                {
                    value: 3333,
                    name: ''
                },
                {
                    value: 3233,
                    name: ''
                },
                {
                    value: 3333,
                    name: ''
                },
            ]
        },
        {
            name: '数量占比',
            type: 'pie',
            center: ['28%', '70%'],
            radius: ['23%', '48%'],
            color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9', '#60a900', '#01949b', ' #f17677', '#d74e67', '#0092ff', '#eba954', '#21b6b9', '#60a900', '#01949b', '#f17677'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },

            },
            data: [{
                    value: 3533,
                    name: '新办'
                },
                {
                    value: 3233,
                    name: '变更'
                },
                {
                    value: 3433,
                    name: '延续'
                },
                {
                    value: 3333,
                    name: '补办'
                },
                {
                    value: 3233,
                    name: '注销'
                },
                {
                    value: 3333,
                    name: '旧证换新证'
                }
            ]
        }
    ]
};