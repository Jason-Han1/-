option = {
    series: [{
        name: 'Les Miserables',
        type: 'graph',
        layout: 'circular',
        data: [{
                "label": {
                    "show": true
                },
                "name": "周一"
            },
            {
                "label": {
                    "show": true
                },
                "name": "周二"
            },
            {
                "label": {
                    "show": true
                },
                "name": "周三"
            },
            {
                "label": {
                    "show": true
                },
                "name": "彭彭"
            }
        ],
        links: [{
                label: {
                    show: true,
                    formatter: '哥哥',
                    fontSize: 12
                },
                name: '哥哥',
                target: '周二',
                source: '周一'
            },
            {
                label: {
                    show: true,
                    formatter: '大弟',
                    fontSize: 12
                },
                name: '大弟',
                target: '周二',
                source: '周三'
            },
            {
                label: {
                    show: true,
                    formatter: '二弟',
                    fontSize: 12
                },
                name: '二弟',
                target: '周一',
                source: '周三'
            },
            {
                label: {
                    show: true,
                    formatter: '弟弟',
                    fontSize: 12
                },
                name: '弟弟',
                target: '周一',
                source: '周二'
            },
            {
                label: {
                    show: true,
                    formatter: '丈夫',
                    fontSize: 12
                },
                name: '丈夫',
                target: '周二',
                source: '彭彭'
            }
        ],
        roam: true,
        focusNodeAdjacency: true,
        label: {
            show: true
        },
        lineStyle: {
            color: 'source',
            width: 3,
        },
    }]
};