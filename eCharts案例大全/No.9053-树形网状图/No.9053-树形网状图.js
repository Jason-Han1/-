	var data = {
    name: "信息化业务",
    symbolSize: 100,
    value:'' ,
    itemStyle: {
        normal: {
            
                 color:{
                      type: 'radial',
                    r: 0.9,
                    colorStops: [{
                        offset: 0,
                        color: '#0c1746'
                    }, {
                        offset: 1,
                        color: '#54f7ff'
                    }]
                },
            
           borderColor: 'none',
        }
    },
    label: {
        normal: {
            show: true,
            position: 'inside',
            // verticalAlign: 'middle',
            // align: 'center',
            color: 'black',
            formatter: function(params) {
                return params.data.name + '\n ' + params.data.value
            },
            
        }
    },
    children: [
        {
            name: "精细化管理",
            value:'',
            symbolSize: 60,
            lineStyle: {
                // color: '#fe9944',
            },
            itemStyle: {
                normal: {
                    color: '#F099B7',
                    borderColor: '#F099B7',
                }
            },
            children: [{
                    name: "EMP2.0",
                    children:[
                    {name:'生产经营管理子系统'},
                    {name:'采购管理子系统'},
                    {name:'项目管理子系统'},
                  ]
                    
                }
            ],
        },
        {
            name: "数字化转型",
            value:'',
            symbolSize: 60,
            lineStyle: {
                // color: '#59B1F3',
            },
            itemStyle: {
                normal: {
                    color: '#59B1F3',
                    borderColor: '#59B1F3',
                }
            },
            children: [{
                name: "理论体系",
                children:[
                    {name:'数据生态与应用生态理论'},
                    {name:'数字化交付理论'},
                    {name:'数据资产管理理论'},
                    {name:'数字孪生体构建理论'},
                  ]
               
            },
            {
                name: "标准体系",
                 children:[
                    {name:'油气田地面工程数字化交付标准'},
                    {name:'油气田地面工程数字化交付技术规定'},
                    {name:'数据资产管理与运营数据标准'},
                  ]
               
            },
            {
                name: "工具体系",
                 children:[
                    {name:'三维轻量化引擎'},
                    {name:'标准数仓'},
                    {name:'数据交付中台'},
                    {name:'数据管理平台'},
                    {name:'数据采集'},
                  ]
               
            },
            {
                name: "工程实践",
                children:[
                    {name:'四线数字化压气站'},
                    {name:'长宁50亿数字化气田'},
                    {name:'浙江油田太阳——大寨数字化气田'},
                    {name:'萧山-义务数字化管道'},
                  ]
               
            }],
        },
        {
            name: "全球业务协同",
            value:'',
            symbolSize: 60,
            lineStyle: {
                // color: '#4dc585',
            },
            orient: {
                symbolSize: 100,
                symbol: 'circle',
            },

            label: {
                normal: {
                    show: true,
                    position: 'center',
                    verticalAlign: 'large',
                    align: 'center',
                    color: 'red'
                    
                }
            },
            children: [{
					name: "资源云发布",
					 children: [{
					name: "软件云",
                },
                {
					name: "知识云",
				
				
                },
                {
					name: "数据云",
				
                },

            ],
					
                },
                {
					name: "协同设计",
					 children: [{
					name: "PDCS",
                },
                {
					name: "文档协同",
				
				
                }
               
            ],
				
				
                },
                {
					name: "协同EPC",
					children: [{
					name: "协同建造平台",
                },
                {
					name: "数据资产管理平台",
                }

            ],

				
                },

            ],
        },

    ],
};



function formatterHover(params){
                    return params.data.name + '\n '

}


myChart.setOption(option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
         enterable:true,//鼠标是否可进入提示框浮层中
          formatter:formatterHover,//修改鼠标悬停显示的内容

    },
    series: [{
        type: 'tree',
        initialTreeDepth: 0,
        layout: 'radial',
        data: [data],
        draggable:false,
        top: '10%',
        left: '10%',
        bottom: '10%',
        right: '10%',

        symbolSize: 40,
        symbol: 'circle',

        label: {
            normal: {
                position: 'bottom',
                verticalAlign: 'middle',
                align: 'center',
                     textStyle: { //标签的字体样式
                    color: 'black', //字体颜色
                    fontStyle: 'normal', //文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                    fontWeight: '400', //'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                    fontFamily: 'sans-serif', //文字的字体系列
                    fontSize: 12, //字体大小
                },
                formatter: function(params) {
                    // return params.data.name + '\n' + params.data.value
                },
            }
        },
 
        lineStyle: {
            curveness: 0,
        },
        itemStyle: {
            normal: {
				shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.8)',
                shadowOffsetY: 10,
                // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                //     offset: 0,
                //     color: 'rgb(129, 227, 238)'
                // }, {
                //     offset: 1,
                //     color: 'rgb(25, 183, 207)'
                // }]),
                color:{
                      type: 'radial',
                    r: 0.9,
                    colorStops: [{
                        offset: 0,
                        color: '#0c1746'
                    }, {
                        offset: 1,
                        color: '#54f7ff'
                    }]
                },
            //   borderColor: '#54f7ff',
                //   borderType: 'solid', //图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
                borderColor:'none', //设置图形边框为淡金色,透明度为0.4
                // borderWidth: 2, //图形的描边线宽。为 0 时无描边。
                opacity: 1
            }
            
        },
        leaves: {
            label: {
                normal: {
                    position: 'bottom',
                    verticalAlign: 'middle',
                    align: 'center',
                       
                    formatter: function(params) {
                        // return params.data.name + '\n' + params.data.value
                    },
                }
            },

            // itemStyle: {
            //     normal: {
            //         color: {
            //             type: 'radial',
            //             x: 0.5,
            //             y: 0.5,
            //             r: 0.5,
            //             colorStops: [{
            //                 offset: 0,
            //                 color: 'red' // 0% 处的颜色
            //             }, {
            //                 offset: 1,
            //                 color: 'blue' // 100% 处的颜色
            //             }],
            //             globalCoord: false // 缺省为 false
            //         }
            //     }
            // },
        },


    }]
});
