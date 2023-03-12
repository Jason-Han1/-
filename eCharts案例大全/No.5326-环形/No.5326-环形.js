var trafficWay = [{
		    name: '火车',
		    value: 20
		},{
		    name: '飞机',
		    value: 10
		}];

		var data = [];
		var color=['#00EDFF','#FFE954'];
		for (var i = 0; i < trafficWay.length; i++) {
		    data.push({
		        value: trafficWay[i].value,
		        name: trafficWay[i].name,
		        // itemStyle: {
		        // 	show:false,
		        //     normal: {
		        //         borderWidth: 5,
		        //         shadowBlur: 20,
		        //         borderColor:color[i],
		        //         shadowColor: color[i]
		        //     }
		        // }
		    }, {
		        value: 0.5,
		        name: '',
		        itemStyle: {
		            normal: {
		                label: {
		                    show: false
		                },
		                labelLine: {
		                    show: false
		                },
		                color: 'rgba(0, 0, 0, 0)',
		                borderColor: 'rgba(0, 0, 0, 0)',
		                borderWidth: 0
		            }
				}
		    });
		}
		var seriesOption = [{
		    name: '',
		    type: 'pie',
		    clockWise: false,
		    radius: [160, 178],
		    hoverAnimation: true,
		    label: {
                normal: {
                    position: 'inner',
                    show : false
                }
            },
		
		    data: data
		}];
		option = {
		    backgroundColor:"#000",
			grid: {
                left: '3%',
                right: '10%',
                bottom: '3%',
                top:"25%",
                containLabel: true
            },
		    color : color,
		    // title: {
		    //     text: '交通方式',
		    //     top: '48%',
		    //     textAlign: "center",
		    //     left: "49%",
		    //     textStyle: {
		    //         color: '#fff',
		    //         fontSize: 22,
		    //         fontWeight: '400'
		    //     }
		    // },
		   graphic: [
                    {
                        type: 'group',
                        top: 'middle',
                        left: 'center',
                        id: 'data',
                        children: [
                            {
                                type: 'text',
                                id: 'current',
                                top:'middle',
                                style: {
                                    text: "21680",
                                    font: 'bolder 26px "SourceHanSansCN-Regular", sans-serif',
                                    fill: '#ffffff',
                                    lineHeight:28,
                                    textAlign: 'center'
                                }
                            }, 
                            {
                                type: 'text',
                                id: 'all',
                                top: 15,
                                style: {
                                    text:"评价总数",
                                    font: 'bolder 18px "SourceHanSansCN-Regular", sans-serif',
                                    fill: '#ffffff',
                                    lineHeight:28,
                                    textAlign: 'center'
                                }
                            }
                        ]
                    }
                ],
		    // tooltip: {
		    //     show: false
		    // },
		    legend: {
		    	show:false,
		        icon: "circle",
		        orient: 'horizontal',
		        // x: 'left',
		        data:['火车','飞机'],
		        right: 340,
		        bottom: 150,
		        align: 'right',
		        textStyle: {
		          color: "#fff"
		        },
		        itemGap: 20
		    },
		    toolbox: {
		        show: false
		    },
		    series: seriesOption
		}

        // var index=0;
        // myChart.dispatchAction({
        //   type: 'highlight',
        //   seriesIndex: 0,
        //   dataIndex: 0
        // });
        // myChart.on("mouseover", function(e) {
        //   if (e.dataIndex != index) {
        //     myChart.dispatchAction({
        //       type: "downplay",
        //       seriesIndex: 0,
        //       dataIndex: index
        //     });
        //   }
        // });
        // myChart.on("mouseout", function(e) {
        //   index = e.dataIndex;
        //   myChart.dispatchAction({
        //     type: "highlight",
        //     seriesIndex: 0,
        //     dataIndex: e.dataIndex
        //   });
        // });