myChart.showLoading();


var data2 = {
    "name": "省核心交换机",
    "children": [{
        name: 'XX市核心',
        "children": [

            {
                "name": "BRAS001",
                "children": [{
                    "name": "下联口001",
                    itemStyle: {
                        normal: {
                            color: {
                                image: 'image://http://img.ph.126.net/wIjj_obvlVrnFJuHG5eAvA==/1509550300099644221.jpg', // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
                                repeat: 'no-repeat' // 是否平铺, 可以是 'repeat-x', 'repeat-y', 'no-repeat'
                            },
                            borderColor: '#000',
                            borderWidth: 1,
                            borderType: 'solid',
                        }
                    },
                    "children": [{
                            "name": "OLT上联口837",

                            "children": [{
                                "name": "OLT001",
                                "children": [{
                                    "name": "PON口001",

                                    "children": [{
                                        "name": "ONU001",
                                        "value": 2105,
                                        children:[{name:'stb7376464764847'}]
                                    }, {
                                        "name": "ONU002",
                                        "value": 1316,
                                        children:[{name:'stb7376464764847'}]
                                    }, {
                                        "name": "ONU003",
                                        "value": 3151,
                                        children:[{name:'stb7376464764847'}]
                                    }]
                                },{
                                    "name": "PON口002",

                                    "children": [{
                                        "name": "ONU001",
                                        "value": 2105,
                                        children:[{name:'stb7376464764847'}]
                                    }, {
                                        "name": "ONU002",
                                        "value": 1316,
                                        children:[{name:'stb7376464764847'}]
                                    }, {
                                        "name": "ONU003",
                                        "value": 3151,
                                        children:[{name:'stb7376464764847'}]
                                    }]
                                }],
                            }]
                        },


                    ]
                }]
            }
        ]
    }, {
        "name": "省中心CDN"
    }, ]
};

myChart.hideLoading();

myChart.setOption(option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [{
            name: 'tree1',
            icon: 'rectangle'
        }, {
            name: 'tree2',
            icon: 'rectangle'
        }],
        borderColor: '#c23531'
    },
    series: [

        {
            type: 'tree',
            name: 'tree2',
            data: [data2],

            top: '20%',
            //left: '5%',
            bottom: '22%',
            right: '18%',

            symbolSize: 20,
            initialTreeDepth: 10,
            label: {
                normal: {
                    position: 'bottom',
                    //verticalAlign: 'middle',
                    align: 'center'
                }
            },

            /* leaves: {
                 label: {
                     normal: {
                         position: 'right',
                         verticalAlign: 'middle',
                         align: 'left'
                     }
                 }
             },*/

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
});