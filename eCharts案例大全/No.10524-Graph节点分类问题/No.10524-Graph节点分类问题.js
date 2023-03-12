option = {
        legend: [{
            data: ['Java工程师', 'Python工程师', 'Web工程师'],
            top: '40px'
        }],
        series: [{
                    type: 'graph',
                    tooltip: {
                        show: false
                    },
                    animationDurationUpdate: function(idx) {
                        // 越往后的数据延迟越大
                        return idx * 100;
                    },
                    animationEasingUpdate: 'bounceIn',

                    categories: [{
                            name: 'Java工程师'
                        },
                        {
                            name: 'Python工程师'
                        },
                        {
                            name: 'Web工程师'
                        }
                    ],

                    layout: 'force',
                    force: {
                        repulsion: 200,
                        edgeLength: 10
                    },
                    label: {
                        normal: {
                            show: true
                        }
                    },

                    data: [{
                            id: 0,
                            name: '设计模式',
                            category: 'Java工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 1,
                            name: 'spring',
                            category: 'Java工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 2,
                            name: '框架',
                            category: 'Java工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 3,
                            name: 'mysql',
                            category: 'Java工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 4,
                            name: 'mongodb',
                            category: 'Java工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 5,
                            name: 'ajax',
                            category: 'Java工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 6,
                            name: 'python',
                            category: 'Python工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 7,
                            name: 'linux',
                            category: 'Python工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 8,
                            name: 'flask',
                            category: 'Python工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 9,
                            name: 'django',
                            category: 'Python工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 10,
                            name: 'mongodb',
                            category: 'Python工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 11,
                            name: 'mysql',
                            category: 'Python工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 12,
                            name: 'html',
                            category: 'Web工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 13,
                            name: 'web前端',
                            category: 'Web工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 14,
                            name: 'css',
                            category: 'Web工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 15,
                            name: 'javascript',
                            category: 'Web工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                        {
                            id: 16,
                            name: 'java',
                            category: 'Java工程师',
                            symbolSize: 80,
                            draggable: true
                        },
                    ]
                }]
};