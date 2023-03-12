var num = [100, 200, 300, 400, 600, 200, 300, 400, 500];

	big_num = 0;
	$.each(num, function(i, v) {
	    if (big_num < v) {
	        big_num = v;
	    }
	})

	/*最大数值值*/
	max_num = new Array();
	/*内阴影*/
	max_num_f = new Array();
	/*零值*/
	zero = new Array();
	/*城市*/
	city = ['天辰北斗', '江苏北斗', '黑龙江北斗', '世纪赢联', '河北信翔'];
	/*白条*/
	var white = new Array();

	$.each(num, function(i, v) {
	    max_num[i] = big_num + 100;
	    max_num_f[i] = big_num + 99;
	    zero[i] = 0;
	    white[i] = 19999;
	})
	option = {
	    backgroundColor:"#000",
	    grid: {
	        left: '5%',
	        top: '10%',
	        right: '0%',
	        bottom: '0%',
	        containLabel: true
	    },
	    xAxis: [{
	        show: false,
	    }],
	    yAxis: [{
	        axisTick: 'none',
	        axisLine: 'none',
	        offset: '100',
	        axisLabel: {
	            textStyle: {
	                color: '#ffffff',
	                fontSize: '14',
	                fontFamily:"SourceHanSansSC-Regular",
	                align:"left"
	            }
	        },
	        data: ['规模以上企业', '江苏北斗', '黑龙江北斗', '世纪赢联', '河北信翔','江苏北斗', '黑龙江北斗', '世纪赢联', '河北信翔'],
	    }, {
	        axisTick: 'none',
	        axisLine: 'none',
	        data: max_num_f
	    }, {
	        nameGap: '50',
	        nameTextStyle: {
	            color: '#fff',
	            fontSize: '16',
	        },
	        axisLine: {
	            lineStyle: {
	                color: 'rgba(0,0,0,0)'
	            }
	        },
	        data: [],
	    },
	      {  //右边的纵轴
            type: "category",
            inverse: true,
            boundaryGap: [0, 0],  //设置距离上边位置
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                inside: false,
                verticalAlign: "left",
                // position:"absolute",
                // rigth:20,
                // 位置 上右下左
                padding: [-7, 0, 2, 10],
                textStyle: {
                    fontFamily: 'SourceHanSansCN-Regular',
                    fontSize: 14,
                    lineHeight: 17,
                    letterSpacing: 0,
                    color: '#00EEFE'
                }
            },
            z: 4, 
            // 统计的总量 用纵坐标模拟
            data: ["10%","20%","30%","40%","50%","60%","70%","80%","90%",], //右边纵坐标的值
        }],
	    series: [{
	            name: '白框',
	            type: 'bar',
	            yAxisIndex: 1,
	            barGap: '10',
	            data: num,
	            barWidth: 8,
	            itemStyle: {
	                normal: {
	                    // color: function(params) {
	                    //     var num = myColor.length;
	                    //     console.log( myColor[params.dataIndex % num])
	                    //     return myColor[params.dataIndex % num]
	                    // },
	                   color : new echarts.graphic.LinearGradient(0, 0, 1, 0,//变化度
				        //三种由深及浅的颜色
				        [{
				            offset : 0,
				            color : 'rgba(3,89,120,0.8)'
				        },{
				            offset : 1,
				            color : 'rgba(1,194,202,1)'
				        }
				        ]),
	                    barBorderRadius: 10
	                }
	            },
	            z: 1
	        },
	        {
	            name: '外框',
	            type: 'bar',
	            yAxisIndex: 2,
	            barGap: '-100%',
	            data: max_num,
	            barWidth: 8,
	            itemStyle: {
	                normal: {
	                    color: 'rgba(5,82,108,0.5)',
	                    barBorderRadius: 10,
	                }
	            },
	            z: 0
	        }
	    ]
	}