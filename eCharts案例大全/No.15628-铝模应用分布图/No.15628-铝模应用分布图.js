option = {
    title: {
        text: '铝模应用分布图',
        subtext: '直营租赁站',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['X91项目','悦居时代项目','青岛智慧城','济南海尔云世界天玺项目','洪城大市场','南昌万达K区','南昌万达M区']
    },
    visualMap: {
        min: 5000,
        max: 50000,
        left: 'left',
        top: 'bottom',
        text: ['大','小'],           
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
            name: 'X91项目',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '北京',value: 9100 },
                        ]
        },
        {
            name: '悦居时代项目',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '河北',value: 11600 },
                        ]
        },
        {
            name: '青岛智慧城',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '山东',value: 23280 },
                            ]
        },
        {
            name: '济南海尔云世界天玺项目',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show:false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '山东',value: 18410 },
                            ]
        },
         {
            name: '洪城大市场',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '江西',value:4550 },
                            ]
        },
          {
            name: '南昌万达M区',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '江西',value: 32000 },
                            ]
        },
          {
            name: '南昌万达K区',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '江西',value: 20593 },
                            ]
        },
    ]
};

