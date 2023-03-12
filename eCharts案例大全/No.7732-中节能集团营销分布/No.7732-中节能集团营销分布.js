option = {
    title: {
        text: '中节能集团营销分布',
        subtext: '翠微路支行',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['光伏发电','垃圾发电','污水处理','风力发电']
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '光伏发电',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[

                {name: '河北',value: 1,subtext:'贷款余额XX亿元'},
                {name: '安徽',value: 1},
                {name: '山东',value: 3 },
                {name: '新疆',value: 3 },
                {name: '江苏',value: 1 },
                {name: '宁夏',value: 1 },
                {name: '浙江',value: 1 }

            ]
        },
        {
            name: '垃圾发电',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '河北',value: 2 },
                {name: '山东',value: 1 },
                {name: '河南',value: 1 },
                {name: '陕西',value: 2 }, 
                {name: '四川',value: 1 },
                {name: '贵州',value: 1 }
            ]
        },
        {
            name: '风力发电',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '湖北',value: 1 },
            ]
        },
        {
            name: '污水处理',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '贵州',value: 1 },
                {name: '深圳',value: 1}
            ]
        }
    ]
};