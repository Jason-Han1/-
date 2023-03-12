option = {
            tooltip : {
            trigger: 'item',
            formatter: "{b}"
        },
        series : [
            {
                type:'treemap',
				width:'80%',
				height:'80%',
                roam:false,
                nodeClick:false,
                levels:[{
	                itemStyle: {
	                    normal: {
	                        gapWidth:1
	                    }
	                }
                }],
                breadcrumb:{
                	show:false
                },
                label:{
                	normal:{
                		show:true,
                		position:[10,10]
                	}
                },
                itemStyle: {
                    normal: {
                        show: true,
                        textStyle:{
                        	color:'#fff',
                        	fontSize:16,
                        },
                        borderWidth: 1,
                        borderColor: '#fff'
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                data:[
                    {
                        value: 1149,
                        children: [{
					        name: '到位\n\n279(外招)',
					        value:279,
					        itemStyle: {
					            normal: {
					                color: '#80cbc4'
					            }
					        }
					    }, {
					        name: '已签约未到位\n\n840(外招)',
					        value: 840,
					        itemStyle: {
					            normal: {
					                color: '#80cbc4'
					            }
					        }
					    }, {
					        name: '剩余需求\n\n280(外招)',
					        value: 280,
					        itemStyle: {
					            normal: {
					                color: '#80cbc4'
					            }
					        }
					    },{
					        name: '到位\n\n30(内招)',
					        value: 30,
					        itemStyle: {
					            normal: {
					                color: '#80cbc4'
					            }
					        }
					   					    }]
                    },
                    {
                        value: 951,
                        children: [{
					        name: '到位\n\n424(外招)',
					        value: 424,
					        itemStyle: {
					            normal: {
					                color: '#82dae6'
					            }
					        }
					    }, {
					        name: '已签约未到位\n\n577(外招)',
					        value: 577,
					        itemStyle: {
					            normal: {
					                color: '#82dae6'
					            }
					        }
					    }, {
					        name: '到位\n\n37(品牌数量)',
					        value: 37,
					        itemStyle: {
					            normal: {
					                color: '#82dae6'
					            }
					        }
					    }]
                    },
                    {
                        value: 83,
                        children: [{
					        name: '到位\n\n8(外招)\n',
					        value: 8,
					        itemStyle: {
					            normal: {
					                color: '#88e186'
					            }
					        }
					    }, {
					        name: '已签约未到位\n\n2(外招)',
					        value: 2,
					        itemStyle: {
					            normal: {
					                color: '#88e186'
					            }
					        }
					     }, {
					        name: '剩余需求\n\n63(外招)',
					        value: 63,
					        itemStyle: {
					            normal: {
					                color: '#88e186'
					            }
					        }
					    },{
					        name: '到位\n\n10(内招)',
					        value: 10,
					        itemStyle: {
					            normal: {
					                color: '#88e186'
					            }
					        }
					   					    }]
                    },
					 
                                     ]
            }
        ]
    }; 