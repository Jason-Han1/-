
var indicator = [{
        text: '识别',
        max: 5000,
    },
    {
        text: '图库',
        max: 5000
    },
    {
        text: '文章',
        max: 5000
    },
    {
        text: '鉴定',
        max: 5000
    },
    {
        text: '花记',
        max: 5000
    }
];
var dataArr = [{
        name:"该供电所指标值",
        value: [4000, 1000, 3600,4000, 5000],
         symbol: "none",
         lineStyle: {
                   normal:{
                       color:"rgba(2255,255,255,0)"
                   }
                },
        areaStyle: {
                normal: { // 单项区域填充样式
                    color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: '#08C9DB'
                        },
                        {
                            offset: 1,
                            color: '#21E1AE'
                        }
                    ],
                    false
                ),
                opacity:0.75, // 区域透明度
                    // 设置扇形的阴影
				shadowBlur: 12,
				shadowColor: 'rgba(77,214,189,0.5)',
				shadowOffsetX: 6,
				shadowOffsetY: 6
                }
            }
    },
    {   
        name:"指标阈值",
        value: [5000, 3000, 2600,3000, 4000],
        symbol: "none",
         lineStyle: {
                   normal:{
                       color:"rgba(2255,255,255,0)"
                   }
            
                },
        areaStyle: {
                normal: { // 单项区域填充样式
                    color: new echarts.graphic.LinearGradient(
                    1,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: '#41D7F3'
                        },
                        {
                            offset: 1,
                            color: '#3D9FFF'
                        }
                    ],
                    false
                ),
                    opacity:0.75, // 区域透明度
                    // 设置扇形的阴影
				shadowBlur: 12,
				shadowColor: 'rgba(137,201,255,0.50)',
				shadowOffsetX: 6,
				shadowOffsetY: 6
                }
            }
    }
];
option = {
    color: ['#22CF96','#3D7EFF'],
    backgroundColor:"#fff",
    legend:{
        show:true,
        data:['该供电所指标值','指标阈值'],
        x: 'center',
		y: 'bottom',
		icon:"circle",
		itemWidth: 8,
	    itemHeight: 8,
		bottom: 10,
        textStyle: {
            color: '#666666',
            fontSize:12
        },
    },
    radar: {
        name: {
            rich: {
                a: {
                    color: '#666',
                    fontSize:14,
                    fontFamily:'SourceHanSansSC-Regular',
                    align: 'center',
                    lineHeight: 27
                },
                b: {
                    color: '#1890FF',
                    align: 'center',
                    fontSize:16,
                    fontFamily:'SourceHanSansSC-Regular',
                    // padding: 2,
                    // borderRadius: 4
                   }
                },
                formatter: (a,b)=>{
                    return `{a|${a}}\n{b|78.32%}`
                }
        },
        indicator: indicator,
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: false
        },
        axisLine: { //指向外圈文本的分隔线样式
            show:false
        },
        splitLine: {
            lineStyle: {
                color: '#ddd', // 分隔线颜色
                width: 1, // 分隔线线宽
            }
        },
    },
    series: [{
        type: 'radar',
        symbolSize: 1,
        data: dataArr
    }]
};