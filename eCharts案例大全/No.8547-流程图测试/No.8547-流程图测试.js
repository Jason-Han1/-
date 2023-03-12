


option = {
    MinWidth:800,
    width: 1200,
    

    
    
    textStyle: {
        color: '#000'
    },
    series: [{
        type: 'graph',
        tooltip: {
            backgroundColor: 'skyblue',
            //formatter: "{b} <br/>{a} : {c} h "
        },
        layout: 'none',
        symbol: 'diamond',
        symbolSize: 150,
        roam: 'move',
        itemStyle: {
            normal: {
                color: '#1b9acf'
            }
        },
        
        

        
        
        

        label: {
            normal: {
                show: true,
                position: 'inside',
                //offset: [0,-60],//居上 20
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                    fontWeight: 'BOLD',
                },
                /**/
                formatter: function(para) {
                    if (para.name.substring(0, 1) == '_') {
                        return '';
                    }
                    
                    
                    //第一个判断条件是判断有5个字的
                    if (para.name == 'HHHHH' || para.name == 'YYYYY') {
                        return para.name.substring(0, 3) + '\n' + para.name.substring(3, 5);
                    } else if (para.name == '商家退货' || para.name == '库存锁定' || para.name == '零售仓库' || para.name == '清除隐私' || para.name == '用户退货' || para.name == '退货审核') {
                        return para.name.substring(0, 2) + '\n' + para.name.substring(2, 4);
                    } else if (para.name == 'x' || para.name == 'y') {
                        //转折点不显示
                        return '';
                    } else {
                        return para.name;
                    }
                }
                /**/
            }
        },
        edgeSymbol: ['none', 'arrow'],
        //edgeSymbolSize: [20, 20], 
        edgeLabel: {

            normal: {
                textStyle: {
                    fontSize: 18,
                    'padding': [0, 0, 0, 60],
                },



            }
        },
        //注意，所有节点的位置都是根据自己设置的x, y坐标来设置的
        data: [{
                name: '开始：招人',
                x: 0,
                y: 0,
                symbol: 'roundRect', //让节点为矩形显示
                symbolSize: 100, //节点的长和宽
                
            },
            {
                name: '区县支撑中心录入\n人员基础信息\n（中心主管）',
                x: 120,
                y: 0,
                symbol: 'rect',
            },
            {
                name: '中心负责人\n审核',
                x: 260,
                y: 0,
                value: 'YES',


            },
            {
                name: '市级管理部门\n审核（数量）',
                x: 400,
                y: 0,
                value: 'No',
            },
            {
                name: '市级服务部\n审核（数量）',
                x: 680,
                y: 0,
            },
            {
                name: '总经理审核',
                x: 600,
                y: 300,

            },
            {
                //这个节点是转折点
                name: '_no11',
                x: 120,
                y: 100,
                symbolSize: [1, 1],
                value: 'No',
            },

            {
                //这个节点是转折点
                name: '_no1',
                x: 260,
                y: 100,
                symbolSize: [1, 1],
            },


            {
                //这个节点是转折点
                name: '_nxxx',
                x: 120,
                y: 300,
                symbolSize: [1, 1],
                
                
                
                
                value: 'No'
            },

        ],
        // links: [],
        //这是点与点之间的连接关系
        links: [{
                source: '开始：招人',
                target: '区县支撑中心录入\n人员基础信息\n（中心主管）'
            },
            {
                source: '区县支撑中心录入\n人员基础信息\n（中心主管）',
                target: '中心负责人\n审核'
            },
            {
                source: '中心负责人\n审核',
                target: '市级管理部门\n审核（数量）',
                label: {
                    show: true,
                    edgeSymbol: ['none', 'arrow'],
                },
                edgeSymbol: ['none', 'arrow'],
            },
            {
                source: '总经理审核',
                target: '_nxxx', //x是第一个小转折点
                label: {
                    show: true
                },
            },
            {
                source: '_nxxx',
                target: '区县支撑中心录入\n人员基础信息\n（中心主管）'
            },
            {
                source: '中心负责人\n审核',
                target: '_no1',

            },
            {
                source: '_no1',
                target: '_no11',
                label: {
                    show: true
                },
            },
            {
                source: 'no11',
                target: '区县支撑中心录入\n人员基础信息\n（中心主管）',
            },


        ],
        //线条的颜色
        lineStyle: {
            normal: {
                opacity: 0.9,
                color: '#53B5EA',
                //type: 'dashed',
                width: 1,

            }
        }
    }]
};