option = {
			backgroundColor: '#000928',
			title: {
        text: '各年级课堂互动情况分析',
        
        textAlign: "center",
        left: "15%",
        textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight: '400'
        }
    },
		    color: ['#3D91F7', '#61BE67'],
		    tooltip: {},
		    legend: {
		        show: true,
		        icon: "circle",
		        bottom: 30,
		        center: 0,
		        itemWidth: 14,
		        itemHeight: 14,
		        itemGap: 21,
		        orient: "horizontal",
		        data: ['a', 'b'],
		        textStyle: {
		            fontSize: '70%',
		            color: '#8C8C8C'
		        },
		    },
		    
		    radar: {
		        // shape: 'circle',
		    	radius:'80%',
		    	triggerEvent: true,
		        name: {
		            textStyle: {
		                color: '#fff',
		                fontSize:'20',
		                borderRadius: 3,
		                padding: [3, 5]
		            }
		        },
		        nameGap:'2',
		        indicator: [{//[4300, 10000, 28000, 35000, 50000, 19000, 21000]
		             name: '展示', max: 100},
		            {name: '汇报', max: 100},
		            {name: '指令', max: 100 },
		            {name: '提醒', max: 100},
		            {name: '其他',max: 100}
		        ],
		        splitArea: {
		            areaStyle: {
		            	 color: [
		                         'rgba(222,134,85, 0.1)', 'rgba(222,134,85, 0.2)',
		                         'rgba(222,134,85, 0.4)', 'rgba(222,134,85, 0.6)',
		                         'rgba(222,134,85, 0.8)', 'rgba(222,134,85, 1)'
		                     ].reverse()
		            }
		        },
		        // axisLabel:{//展示刻度
		        //     show: true
		        // },
		        axisLine: { //指向外圈文本的分隔线样式
		            lineStyle: {
		                color: 'rgba(0,0,0,0)'
		            }
		        },
		        splitLine: {
		            lineStyle: {
		            	width:2,
		                color: [
		                    'rgba(224,134,82, 0.1)', 'rgba(224,134,82, 0.2)',
		                    'rgba(224,134,82, 0.4)', 'rgba(224,134,82, 0.6)',
		                    'rgba(224,134,82, 0.8)', 'rgba(224,134,82, 1)'
		                ].reverse()
		            }
		        },

		    },

		    series: [{
		        name: '高一',
		        type: 'radar',
		        //areaStyle: {normal: {}},
		        areaStyle: {
                    normal: {
                        color: 'rgba(252,211,3, 0.3)'
                    }
                },
                symbolSize: 0,
                lineStyle: {
                    normal: {
                        color: 'rgba(252,211,3, 1)',
                        width: 1
                    }
                },
		        data: [{
		                value: [43, 90, 80, 53, 78, 89, 77],
		                name: '人数',
		               


		            }
		        ]
		    },{
		        name: '高二',
		        type: 'radar',
		        //areaStyle: {normal: {}},
		        areaStyle: {
                    normal: {
                        color: 'rgba(255,292,203, 0.3)'
                    }
                },
                symbolSize: 0,
                lineStyle: {
                    normal: {
                        color: 'rgba(255,292,203, 1)',
                        width: 1
                    }
                },
		        data: [{
		                value: [50, 44, 56, 69, 43, 77, 90],
		                name: '因素',
		               


		            }
		        ]
		    },,{
		        name: '高三',
		        type: 'radar',
		        //areaStyle: {normal: {}},
		        areaStyle: {
                    normal: {
                        color: 'rgba(0,255,0, 0.3)'
                    }
                },
                symbolSize: 0,
                lineStyle: {
                    normal: {
                        color: 'rgba(0,255,0, 1)',
                        width: 1
                    }
                },
		        data: [{
		                value: [67, 80, 92, 94, 69, 77, 45],
		                name: '因素',
		               


		            }
		        ]
		    }]
}