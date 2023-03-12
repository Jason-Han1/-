option = {
    title: {
        text: '上古官二代',
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 60,
            roam: true,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 18
                    },
                }
            },
            force: {
                repulsion: 2000
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 18
                    },
                    formatter: "{c}"
                }
            },
            data: [ 
            {
                name: '神农',
            },
            {
                name: '伏羲',
            },
            
            ],
            links: [{
                source: '神农',
                target: '伏羲',
                value: '孙子',
             
            },
            ],

        }
    ]
};