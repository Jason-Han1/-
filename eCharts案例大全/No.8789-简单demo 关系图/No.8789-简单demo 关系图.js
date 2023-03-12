
option = {
    title: {
        text: '',
        x: 'center'
    },
    //—— 悬浮框 ——
    tooltip: {
        trigger: 'item',
        formatter: function(x) {
            return x.data.label; //设置提示框的内容和格式 节点和边都显示name属性
        },
    },
    legend: [{
        orient: 'vertical',
        x: 'left',
        y: '50px',
        itemWidth: 14,
        itemHeight: 14,
        data: [ //节点数据

            {
                name: 'stu7',
                icon: 'circle'
            },
            {
                name: 'stu8',
                icon: 'circle'
            }, {
                name: 'stu9',
                icon: 'circle'
            }, {
                name: 'stu10',
                icon: 'circle',

            }, {
                name: 'stu11',
                icon: 'circle'
            },

        ],
    }, ],
    toolbox: {
        show: true, //是否显示工具箱
        feature: {
            saveAsImage: true // 保存为图片，
        }
    },
    //—— 其他设置 ——
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'force', // 'circular' ,force
        symbolSize: 30, //图形的大小（示例中的圆的大小）
        roam: true, //鼠标缩放及平移
        focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点、节点的边和邻接节点
        label: {
            normal: {
                show: true, //控制非高亮时节点名称是否显示
                position: '',
                fontSize: 18,
                color: 'black'
            },
            emphasis: {
                show: true, //控制非高亮时节点名称是否显示
                position: 'right',
                fontSize: 16,
                color: 'black'
            },
        },
        force: {
            x: 'center',
            y: '50px',
            edgeLength: 180,
            //repulsion: 8000
        },
        //     edgeSymbol: ['circle', 'arrow'],//箭头
        //    edgeSymbolSize: [6, 10],
        edgeLabel: {
            normal: {
                show: false,
                textStyle: {
                    fontSize: 12
                },
                formatter: "{c}"
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: 14 //边节点显示的字体大小
                }
            },
        },


        data: [ //节点数据
            {
                name: 'stu7',
                label: '',
                draggable: true, //能否鼠标拖动
                category: 'stu7',
                symbolSize: 30,
                label: {
                    normal: {
                        show: true, //控制非高亮时节点名称是否显示
                        position: '',
                        fontSize: 35,
                        color: 'black',
                    },
                },
            }, {
                name: 'stu8',
                label: '',
                draggable: true, //能否鼠标拖动
               category: 'stu8',
                symbolSize: 5,
                label: {
                    normal: {
                        show: true, //控制非高亮时节点名称是否显示
                        position: 'right',
                        fontSize: 15,
                        color: 'black',
                    },
                },
            }, {
                name: 'stu9',
                label: '',
                draggable: true, //能否鼠标拖动
                category: 'stu9',
                symbolSize: 15,
                label: {
                    normal: {
                        show: true, //控制非高亮时节点名称是否显示
                        position: '',
                        fontSize: 20,
                        color: 'black',
                    },
                },
            }, {
                name: 'stu10',
                label: '',
                draggable: true, //能否鼠标拖动
                category: 'stu10',
                symbolSize: 60,
                label: {
                    normal: {
                        show: true, //控制非高亮时节点名称是否显示
                        position: '',
                        fontSize: 60,
                        color: 'black',
                    },
                },
            }, {
                name: 'stu11',
                label: '',
                draggable: true, //能否鼠标拖动
                category: 'stu11',
                symbolSize: 15,
                label: {
                    normal: {
                        show: true, //控制非高亮时节点名称是否显示
                        position: '',
                        fontSize: 20,
                        color: 'black',
                    },
                },
            },
        ],

			links: [    //连线数据
				{ 
                source:'stu7',
                target:'stu8',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:1,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.4', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu7',
                target:'stu9',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:8,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.6', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu7',
                target:'stu10',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:30,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.8', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu7',
                target:'stu11',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:8,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.6', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },			{ 
                source:'stu8',
                target:'stu7',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:1,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.4', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu8',
                target:'stu9',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:5,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.4', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu8',
                target:'stu10',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:10,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.6', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu8',
                target:'stu11',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:1,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.4', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },
						{ 
                source:'stu9',
                target:'stu7',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:8,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.4', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu9',
                target:'stu8',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:5,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.4', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu9',
                target:'stu10',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:10,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.6', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu9',
                target:'stu11',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:1,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.4', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },
						{ 
                source:'stu10',
                target:'stu7',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:30,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.8', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu10',
                target:'stu8',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:10,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.6', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu10',
                target:'stu9',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:10,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.6', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu10',
                target:'stu11',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:18,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.8', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },			{ 
                source:'stu11',
                target:'stu7',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:5,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.4', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu11',
                target:'stu8',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:1,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.4', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu11',
                target:'stu9',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:1,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.4', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },				{ 
                source:'stu11',
                target:'stu10',				
				value:'',
				label:'',								
                lineStyle: {
                normal: {
					show:true,
                    width:18,
					color:'source',
					curveness: 0.2,	
					type :'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
					opacity :'0.8', 
                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    },
                }
				
            },
			],

        categories: [ //节点数据			
            {
                name: 'stu7',
                icon: 'circle'
            },
            {
                name: 'stu8',
                icon: 'circle'
            }, {
                name: 'stu9',
                icon: 'circle'
            }, {
                name: 'stu10',
                icon: 'circle',

            }, {
                name: 'stu11',
                icon: 'circle'
            },

        ],



    }]
}; // 使用刚指定的配置项和数据显示图表。