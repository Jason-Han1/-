option = {
            backgroundColor:"#000",
		      series: [
		        {
		        color:["#2ca7f9", "#fec101", "#b5b8cd ", "#ff6226","#f60000","#2cc78f"],
		        name: '访问来源',
		        type: 'pie',
		        clockWise: true, //顺时加载
		        radius: ['10%', '40%'],
		        avoidLabelOverlap: false,
		        labelLine: {
		            normal: {
		                show: true,
		                length: 10, // 第一段线 长度
		                length2: 50, // 第二段线 长度
		                align: 'right',
		                lineStyle: {
			            	type:"dashed",
							// color: 'rgba(255, 255, 255, 0.3)'
						}
		            },

		            emphasis: {
		                show: true
		            }
		        },
		   itemStyle:{
		            normal:{
		                //控制引导线上文字颜色和位置,此处a是显示文字区域，b做一个小圆圈在引导线尾部显示
		                label:{
		                    show:true,
		                    //a和b来识别不同的文字区域
		                    formatter:[
		                        '{a|{d}% {b}}',//引导线上面文字
		                        '{c|}' //引导线下面文字
		                    ].join('\n'), //用\n来换行
		                    rich:{
		                        a:{
		                            left:20,
		                            padding:[0,-50,-20,-40]
		                         },
		                         b:{
		                         	// padding:[5,-50,-20,-40]
		                         },
		                        c:{
		                            height:5,
		                            width:5,
		                            lineHeight: 5,
		                            // marginTop:-20,
		                            marginBottom: -25,
		                            padding:[0,-5],
		                            borderRadius:5,
		                            backgroundColor:'red',
		                         }
		                    },
		                }
		            }
		        },
		        data:[
		            {"name": "业务1", "value": 25},
		            {"name": "业务2","value": 15},
		            {"name": "业务3","value": 10}],
		         roseType: 'radius'
		      }
		    ]
		}