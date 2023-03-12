option = {
    title: {
        text: '图片处理业务交互图',
    },
    color:['#000000','#ff0000'],
    legend: {
        show: true,
        top: 5,
        data: [ 
            {
                name:'状态',
                icon:'rect'
            },
            {
                name:'接口',
                icon:'circle'
            }],
        icon: "circle",
        selected: {
            '接口': true
        }
    },
    /*graphic:[
        {
            type:'rect',
            shape:{
                x:220,
                y:150,
                width:120,
                height:40
            },
            style:{
                fill:'rgba(0,0,0,0)',
                stroke:'#ff0033',
                lineWidth:1
            }
        }
    ],*/
    series: [{
        type: 'graph',
        /*layout:'force',*/
        focusNodeAdjacency: true,
        roam: true,
        /*force: {
                repulsion: 100
            },*/
        edgeSymbol: ['circle', 'arrow'],
        edgeLabel: {
            normal: {
                show: true,
                formatter: "{c}"
            }
        },
        categories:[{name:'状态'},{name:'接口'}],
        data: [{
                name: '待售房源',
                x: 0,
                y: -600,
                value: '待售房源',
                symbol: 'path://M 318 135 L 268 135 L 243 92 L 268 49 L 317 48 L 342 91 Z',
                symbolSize: [120, 40],
                symbolOffset: [0, 0],
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderColor: '#333',
                        borderWidth: 2
                    }
                },
                label: {
                    show: true,
                    color: '#000'
                }
            },
            {
                name: '上传图片',
                x: 0,
                y: -300,
                value: '上传图片',
                symbol: 'rect',
                symbolSize: [100, 40],
                symbolOffset: [0, 0],
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderColor: '#333',
                        borderWidth: 2,

                    }
                },
                label: {
                    show: true,
                    color: '#000'
                }
            },
            {
                name: '图片状态',
                x: 0,
                y: 0,
                value: '图片状态',
                category:0,
                symbolSize: [100, 40],
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderColor: '#333',
                        borderWidth: 2
                    }
                },
                label: {
                    show: true,
                    color: '#000'
                },
                symbol: 'circle',
            },
            {
                name: '楼盘字典',
                x: -300,
                y: -300,
                value: '楼盘字典',
                category:1,
                symbol: 'rect',
                symbolSize: [120, 40],
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderColor: '#333',
                        borderWidth: 2
                    }
                },
                label: {
                    show: true,
                    color: '#000'
                }
            }
        ],
        links: [{
                source: '待售房源',
                target: '上传图片',
                value: '包含',
                lineStyle: {
                    color: '#000',
                    width: 1,
                    type: 'solid'
                }
            },
            {
                source: '上传图片',
                target: '图片状态',
                value: '更新',
                category:0,
                lineStyle: {
                    color: '#000',
                    width: 1,
                    type: 'dashed'
                },
                symbol: ['circle', 'arrow'],
                symbolSize: [10, 10]
            },
            {
                source: '上传图片',
                target: '楼盘字典',
                value: '同步',
                category:1,
                lineStyle: {
                    color: '#ff0000',
                    width: 1,
                    type: 'dotted'
                }
            }
        ]
    }]
};