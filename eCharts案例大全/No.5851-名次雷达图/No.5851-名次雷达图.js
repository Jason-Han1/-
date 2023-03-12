option = {
			backgroundColor: '#000928',
			title: {
        text: '名次雷达图',
        
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
		             name: '语文', max: 100},
		            {name: '数学', max: 100},
		            {name: '英语', max: 100 },
		            {name: '政治', max: 100},
		            {name: '历史',max: 100},
		            {name: '地理',max: 100},
		            {name: '生物',max: 100},
		            {name: '物理',max: 100},
		            {name: '化学',max: 100}
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
		        name: '个人名次',
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
		                value: [43, 90, 80, 53, 78, 89, 77,56,66],
		                name: '个人名次',
		               


		            }
		        ]
		    },{
		        name: '平均分名次',
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
		                value: [50, 44, 56, 69, 43, 77, 90,88,56],
		                name: '平均分名次',
		               


		            }
		        ]
		    }]
}