option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		   
		    series: [
		        {
		            name:'累计数据',
		            type:'pie',
		            radius: ['60%', '70%'],
		            clockwise:false,
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {
		                    value:type == 1?data.totalMeanLeft:data.totalSdLeft,
		                    name:'',
		                    itemStyle:{
		                        normal:{
		                            color:'#fff'
		                        }
		                    },
		                },
		                {
		                    value:type == 1?data.totalMean:data.totalSd,
		                    name:'累计数据',
		                    itemStyle:{
		                        normal:{
		                            color:'#94e0b7'
		                        }
		                    },
		                }
		            ]
		        },
		        {
		            name:'质控图',
		            type:'pie',
		            radius: ['40%', '50%'],
		            clockwise:false,
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {
		                    value:type == 1?data.qcMeanLeft:data.qcSdLeft,
		                    name:'',
		                    itemStyle:{
		                        normal:{
		                            color:'#fff'
		                        }
		                    },
		                },
		                {
		                    value:type == 1?data.qcMean:data.qcSd,
		                    name:'质控图',
		                    itemStyle:{
		                        normal:{
		                            color:'#76bedf'
		                        }
		                    },
		                }
		            ]
		        },
		        {
		            name:'所有数据',
		            type:'pie',
		            radius: ['20%', '30%'],
		            clockwise:false,
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {
		                    value:type == 1?data.allMeanLeft:data.allSdLeft,
		                    name:'',
		                    itemStyle:{
		                        normal:{
		                            color:'#fff'
		                        }
		                    },
		                },
		                {
		                    value:type == 1?data.allMean:data.allSd,
		                    name:'所有数据',
		                    itemStyle:{
		                        normal:{
		                            color:'#4b94dc'
		                        }
		                    },
		                }
		            ]
		        }
		    ]
		};