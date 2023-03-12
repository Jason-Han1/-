options = [{
        backgroundColor: "#ffffff",
        color: ["#0093D7", "#04A9F5", "#4FC8FF", "#81DBFF"],
        title: {
            text: '某专业毕业去向分布',
            textStyle: {
                color: '#666',
                fontSize: '22',
            },
            x: 'center',
            y: "70%",
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {

            orient: 'vertical',
            left: '85%',
            y: '62%',
            data: ['北京', '上海', '深圳', '杭州']
        },
        series: [{
            label: {
                normal: {
                    fontSize: 18
                }
            },
            name: '某专业毕业去向分布',
            type: 'pie',
            radius: '45%',
            center: ['50%', '45%'],
            data: [{
                    value: 45,
                    name: '北京'
                }, {
                    value: 30,
                    name: '上海'
                }, {
                    value: 17,
                    name: '深圳'
                }, {
                    value: 8,
                    name: '杭州'
                },

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 2, 2, 0.3)'
                }
            }
        }]
    }, {
        backgroundColor: "#ffffff",
        color: ["#0093D7", "#04A9F5", "#4FC8FF", "#81DBFF"],
        title: {
            text: '某专业毕业去向分布',
            textStyle: {
                color: '#666666',
                fontSize: '22',
            },
            x: 'center',
            y: "70%",
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {

            orient: 'vertical',
            left: '85%',
            y: '62%',
            data: ['北京', '上海', '深圳', '杭州']
        },
        series: [{
            label: {
                normal: {
                    fontSize: 18
                }
            },
            name: '某专业毕业去向分布',
            type: 'pie',
            radius: '45%',
            center: ['50%', '45%'],
            data: [{
                    value: 17,
                    name: '深圳'
                }, {
                    value: 45,
                    name: '北京'
                }, {
                    value: 8,
                    name: '杭州'
                }, {
                    value: 30,
                    name: '上海'
                },

                {
                    value: 8,
                    name: '杭州'
                },

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 2, 2, 0.3)'
                }
            }
        }]
    },

];