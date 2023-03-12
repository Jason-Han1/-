 option = {
            backgroundColor:"#000",
		     tooltip : {
		     	show:false,
		     //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
		        confine: true,
		        enterable: true, //鼠标是否可以移动到tooltip区域内
		     },
		    radar: {
		        // shape: 'circle',
		        shape:'polygon',
		        center: ['50%', '55%'],
        		radius: '50%',
		        splitNumber: 5, // 雷达图圈数设置
		        name: {
		            textStyle: {
		                color: '#838D9E',
		            },
		        },
		        // 设置雷达图中间射线的颜色
		        axisLine: {
		            lineStyle: {
		                color: '#5F65A9',
		                },
		        },
		        indicator: [
		        // {
		        //     name: '通信',
		        //     max: 30,
		        //     //若将此属性放在radar下，则每条indicator都会显示圈上的数值，放在这儿，只在通信这条indicator上显示
		        //     // axisLabel: {
		        //     //     show: true,
		        //     //     fontSize: 12,
		        //     //     color: '#838D9E',
		        //     //     showMaxLabel: false, //不显示最大值，即外圈不显示数字30
		        //     //     showMinLabel: false, //显示最小数字，即中心点显示0
		        //     // },
		        //     color:"#ffffff",
		        //     fontSize:14,

		        // },
		        { name: '零售', max: 30,},
		        { name: '电力', max: 30},
		        { name: '交通', max: 30},
		        { name: '食品', max: 30},
		        { name: '建筑', max: 30},
		        { name: '银行', max: 30},
		        { name: '汽车', max: 30},
		        { name: '电子工程', max: 30},

		        ],
		        name: {
                    rich: {
                        a: {
                            color: '#ffffff',
                            fontSize:14,
                            fontFamily:'SourceHanSansSC-Regular',
                            padding:[0,0,5,0]
                            // lineHeight: 20
                        },
                        b: {
                            color: '#009bff',
                            align: 'center',
                            fontSize:14,
                            fontFamily:'SourceHanSansSC-Regular',
                            // padding: 2,
                            // borderRadius: 4
                           }
                        },
                        formatter: (a,b)=>{
                            return `{b|999}\n{a|${a}}`
                        }
                },
		        
		        //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
		        splitArea : {
		            show : false,
		            areaStyle : {
		                color: 'rgba(255,0,0,0)', // 图表背景的颜色
		            },
		        },
		        splitLine : {
		            show : true,
		            lineStyle : {
		                width : 1,
		                color : '#5F65A9', // 设置网格的颜色
		            },
		        },
		    },
		    series: [{
		        name: '诉求类别：', // tooltip中的标题
		        type: 'radar', //表示是雷达图
		        symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
		        symbolSize: 0, // 拐点的大小

		        areaStyle: {
		            normal: {
		                width: 1,
		                opacity: 0.2,
		            },
		        },
		        data: [
		            {
		                value: [17, 24, 27, 29, 26, 16, 13, 17, 25],
		                name: '',
		                // 设置区域边框和区域的颜色
		                itemStyle: {
		                    normal: {
		                        color: 'rgba(0,155,255,1)',
		                        lineStyle: {
		                            color: 'rgba(0,155,255,1)',
		                        },
		                    },
		                }
		                
		            }
		          
		        ],
		    }],
		}