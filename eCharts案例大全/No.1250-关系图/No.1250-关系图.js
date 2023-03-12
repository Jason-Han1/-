var categories = [{ name: '户主' }, { name: '家庭' }, { name: '信息' }, { name: '红色亮光代表问题人员' }];
var datalist = [
        {
            name: '徐世明',
            symbolSize: 100,
            itemStyle: {
                normal: {
                    borderColor: '#FFFFFF',
                    borderWidth: 9,
                    shadowBlur: 20,
                    shadowColor: '#FF0000',
                    color: '#EEF2FF',
                },
            },
        },
        {
            name: '房产信息',
            itemStyle: {
                normal: {
                    borderColor: '#FFFFFF',
                    borderWidth: 9,
                    shadowBlur: 20,
                    shadowColor: '#04f2a7',
                    color: '#EEF2FF',
                },
            },
        },
        {
            name: '社保信息',
            itemStyle: {
                normal: {
                    borderColor: '#FFFFFF',
                    borderWidth: 9,
                    shadowBlur: 20,
                    shadowColor: '#04f2a7',
                    color: '#EEF2FF',
                },
            },
        },
        {
            name: '企业信息',
            itemStyle: {
                normal: {
                    borderColor: '#FFFFFF',
                    borderWidth: 9,
                    shadowBlur: 20,
                    shadowColor: '#04f2a7',
                    color: '#EEF2FF',
                },
            },
        },
        {
            name: '车辆信息',
            itemStyle: {
                normal: {
                    borderColor: '#FFFFFF',
                    borderWidth: 9,
                    shadowBlur: 20,
                    shadowColor: '#04f2a7',
                    color: '#EEF2FF',
                },
            },
        },
        {
            name: '工作信息',
            itemStyle: {
                normal: {
                    borderColor: '#FFFFFF',
                    borderWidth: 9,
                    shadowBlur: 20,
                    shadowColor: '#04f2a7',
                    color: '#EEF2FF',
                },
            },
        },
        {
            name: '李思思',
            itemStyle: {
                normal: {
                    borderColor: '#FFFFFF',
                    borderWidth: 9,
                    shadowBlur: 20,
                    shadowColor: '#BAA6FF',
                    color: '#EEF2FF',
                },
            },
        },
         {
            name: '王小二',
            itemStyle: {
                normal: {
                    borderColor: '#FFFFFF',
                    borderWidth: 9,
                    shadowBlur: 20,
                    shadowColor: '#BAA6FF',
                    color: '#EEF2FF',
                },
            },
        },
    ];
var lisksList =  [];
for(var i = 0; i < datalist.length;i++){
     lisksList.push({ source: 0,target: i+1});
}
    option = {
        backgroundColor: '#FFF',
        grid: {
            left: '10%',
            top: 80,
            right: '10%',
            bottom: 60,
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        color: ['#CDD9FF', '#BAA6FF', '#3AD3B8', '#E95252'],
        legend: [
            {
                icon: 'circle',
                itemWidth: 16,
                itemHeight: 16,
                align: 'left',
                x: '10%',
                // selectedMode: 'single',
                data: categories.map(function (a) {
                    return a.name;
                }),
                textStyle: {
                    fontSize: 14,
                    fontFamily: 'PingFangSC-Regular, PingFang SC',
                    fontWeight: 400,
                    color: '#0D1134',
                    lineHeight: 20,
                },
            },
        ],
        series: [
            {
                type: 'graph',
                layout: 'force',
                force: {
                    repulsion: 1000,
                    edgeLength: 140,
                    layoutAnimation: true,
                },
                symbolSize: 80,
                //nodeScaleRatio: 1, //图标大小是否随鼠标滚动而变
                roam: false, //缩放
                draggable: false, //节点是否可以拖拽
                focusNodeAdjacency: false, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
                edgeSymbol: ['circle', 'arrow'], //线2头标记
                edgeSymbolSize: [0, 0],
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        fontSize: 14,
                        fontFamily: 'PingFangSC-Regular, PingFang SC',
                        fontWeight: 400,
                        color: '#0D1134',
                        lineHeight: 20,
                    },
                },
                edgeLabel: {
                    normal: {
                        show: false,
                        textStyle: {
                            fontSize: 12,
                            color: '#fff',
                        },
                        formatter: '{c}',
                    },
                },
                lineStyle: {
                    normal: {
                        width: 2,
                        color: '#EEF2FF',
                    },
                },
                symbolKeepAspect: false,
                data: datalist,
                links: lisksList,
                categories: categories,
            },
        ],
    };
