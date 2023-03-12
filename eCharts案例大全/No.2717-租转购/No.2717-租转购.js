var hazards = [
   {name: '租-滨江区'},
{name: '租-富阳区'},
{name: '租-拱墅区'},
{name: '租-临安市'},
{name: '租-临平区'},
{name: '租-钱塘区'},
{name: '租-上城区'},
{name: '租-西湖区'},
{name: '租-萧山区'},
{name: '租-余杭区'},
{name: '购-滨江区 '},
{name: '购-富阳区 '},
{name: '购-拱墅区 '},
{name: '购-临安市 '},
{name: '购-临平区 '},
{name: '购-钱塘区 '},
{name: '购-上城区 '},
{name: '购-西湖区 '},
{name: '购-萧山区 '},
{name: '购-余杭区 '},



];
var chains = [
    {source: '租-滨江区',target: '购-滨江区 ',value: 48},
{source: '租-滨江区',target: '购-富阳区 ',value: 1},
{source: '租-滨江区',target: '购-拱墅区 ',value: 5},
{source: '租-滨江区',target: '购-临安市 ',value: 1},
{source: '租-滨江区',target: '购-临平区 ',value: 4},
{source: '租-滨江区',target: '购-钱塘区 ',value: 1},
{source: '租-滨江区',target: '购-上城区 ',value: 11},
{source: '租-滨江区',target: '购-西湖区 ',value: 5},
{source: '租-滨江区',target: '购-萧山区 ',value: 37},
{source: '租-滨江区',target: '购-余杭区 ',value: 8},
{source: '租-富阳区',target: '购-富阳区 ',value: 7},
{source: '租-拱墅区',target: '购-滨江区 ',value: 7},
{source: '租-拱墅区',target: '购-拱墅区 ',value: 133},
{source: '租-拱墅区',target: '购-临安市 ',value: 4},
{source: '租-拱墅区',target: '购-临平区 ',value: 16},
{source: '租-拱墅区',target: '购-钱塘区 ',value: 3},
{source: '租-拱墅区',target: '购-上城区 ',value: 43},
{source: '租-拱墅区',target: '购-西湖区 ',value: 28},
{source: '租-拱墅区',target: '购-萧山区 ',value: 8},
{source: '租-拱墅区',target: '购-余杭区 ',value: 46},
{source: '租-临安市',target: '购-拱墅区 ',value: 1},
{source: '租-临安市',target: '购-临安市 ',value: 14},
{source: '租-临安市',target: '购-上城区 ',value: 1},
{source: '租-临安市',target: '购-萧山区 ',value: 1},
{source: '租-临平区',target: '购-滨江区 ',value: 1},
{source: '租-临平区',target: '购-拱墅区 ',value: 6},
{source: '租-临平区',target: '购-临安市 ',value: 1},
{source: '租-临平区',target: '购-临平区 ',value: 106},
{source: '租-临平区',target: '购-钱塘区 ',value: 2},
{source: '租-临平区',target: '购-上城区 ',value: 4},
{source: '租-临平区',target: '购-西湖区 ',value: 1},
{source: '租-临平区',target: '购-萧山区 ',value: 3},
{source: '租-临平区',target: '购-余杭区 ',value: 7},
{source: '租-钱塘区',target: '购-滨江区 ',value: 1},
{source: '租-钱塘区',target: '购-临安市 ',value: 1},
{source: '租-钱塘区',target: '购-临平区 ',value: 12},
{source: '租-钱塘区',target: '购-钱塘区 ',value: 62},
{source: '租-钱塘区',target: '购-上城区 ',value: 6},
{source: '租-钱塘区',target: '购-西湖区 ',value: 2},
{source: '租-钱塘区',target: '购-萧山区 ',value: 1},
{source: '租-钱塘区',target: '购-余杭区 ',value: 1},
{source: '租-上城区',target: '购-滨江区 ',value: 10},
{source: '租-上城区',target: '购-拱墅区 ',value: 44},
{source: '租-上城区',target: '购-临安市 ',value: 4},
{source: '租-上城区',target: '购-临平区 ',value: 17},
{source: '租-上城区',target: '购-钱塘区 ',value: 13},
{source: '租-上城区',target: '购-上城区 ',value: 172},
{source: '租-上城区',target: '购-西湖区 ',value: 11},
{source: '租-上城区',target: '购-萧山区 ',value: 22},
{source: '租-上城区',target: '购-余杭区 ',value: 10},
{source: '租-西湖区',target: '购-滨江区 ',value: 8},
{source: '租-西湖区',target: '购-富阳区 ',value: 5},
{source: '租-西湖区',target: '购-拱墅区 ',value: 58},
{source: '租-西湖区',target: '购-临安市 ',value: 6},
{source: '租-西湖区',target: '购-临平区 ',value: 8},
{source: '租-西湖区',target: '购-钱塘区 ',value: 3},
{source: '租-西湖区',target: '购-上城区 ',value: 21},
{source: '租-西湖区',target: '购-西湖区 ',value: 167},
{source: '租-西湖区',target: '购-萧山区 ',value: 6},
{source: '租-西湖区',target: '购-余杭区 ',value: 112},
{source: '租-萧山区',target: '购-滨江区 ',value: 7},
{source: '租-萧山区',target: '购-拱墅区 ',value: 7},
{source: '租-萧山区',target: '购-临平区 ',value: 4},
{source: '租-萧山区',target: '购-钱塘区 ',value: 3},
{source: '租-萧山区',target: '购-上城区 ',value: 13},
{source: '租-萧山区',target: '购-西湖区 ',value: 3},
{source: '租-萧山区',target: '购-萧山区 ',value: 74},
{source: '租-萧山区',target: '购-余杭区 ',value: 7},
{source: '租-余杭区',target: '购-滨江区 ',value: 2},
{source: '租-余杭区',target: '购-富阳区 ',value: 1},
{source: '租-余杭区',target: '购-拱墅区 ',value: 25},
{source: '租-余杭区',target: '购-临安市 ',value: 18},
{source: '租-余杭区',target: '购-临平区 ',value: 10},
{source: '租-余杭区',target: '购-上城区 ',value: 9},
{source: '租-余杭区',target: '购-西湖区 ',value: 43},
{source: '租-余杭区',target: '购-萧山区 ',value: 3},
{source: '租-余杭区',target: '购-余杭区 ',value: 228},


];
// 设置图中每个节点的大小及其他属性
hazards.forEach(function (node) {
    node.symbolSize = node.value / 500;
    node.label = {
        normal: {
            show: node.name,
        },
    };
});
// 设置连接线的宽度及其他属性
chains.forEach(function (chains) {
    chains.lineStyle = {
        normal: {
            width: chains.value / 25,
            opacity: 0.5,
        },
    };
});
option = {
    // animationDurationUpdate: 1500,
    // animationEasingUpdate: 'quinticInOut',
    series: [
        {
            name: 'hazards Interaction',
            type: 'graph', //设置图形类别 关系图
            layout: 'circular',
            circular: {
                // 设置环形布局是否旋转标签
                rotateLabel: true,
            },
            data: hazards,
            links: chains,
            roam: true,
            label: {
                normal: {
                    fontSize:20,
                    position: 'right',
                    formatter: '{b}',
                },
            },
            itemStyle: {
                normal: {
                    color: '#0f3475',
                },
            },
            lineStyle: {
                
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 1,
                                color: '#008000',
                            },
                            {
                                offset: 0,
                                color: '#FF4500',
                            },
                        ],
                        globalCoord: false,
                    },
                    curveness: 0.3,
                    opacity: 0.2,
                },
            },
        },
    ],
};
