	var total = {
             value: '200',
             name: '主机(台)'
         }
	
	// 图表渲染参数开始
	option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{b} : {d}%"
	    },
	     title: [{
                text: total.value + '\n' + total.name,
                left: '50%',
                top: 'center',
                textAlign: 'center',
                textBaseline: 'middle',
                textStyle: {
                    color: '#000',
                    fontWeight: 'normal',
                    fontSize: 25
                }
            }
            // , {
            //     text: total.name,
            //     left: '50%',
            //     top: 'center',
            //     textAlign: 'center',
            //     textBaseline: 'middle',
            //     textStyle: {
            //         color: '#B3B3B3',
            //         fontWeight: 'normal',
            //         fontSize: 13
            //     }
            // }
            ],
	    legend: [{
	            icon: "square",
	            orient: 'vertical',
	            left: '900',
	            top: 'center',
	            itemGap: 18,
	            padding: 15,
	            textStyle: {
	                "color": "#000",
	                padding: [0, 0, 0, -5],
	            },
	            data: ['其他分类', '信息监控', '章', '警', '自危害', '攻击入侵']
	        },
	        {
	            icon: "square",
	            orient: 'vertical',
	            left: 'right',
	            top: 'center',
	            itemGap: 18,
	            padding: 15,
	            textStyle: {
	                "color": "#000",
	                padding: [0, -80, 0, -50],
	            },
	            data: ['认证授权', '网络访问', '操作记录', '安全预警', '信息刺探', '恶意代码']
	        }
	    ],
	    series: [{

	        type: 'pie',
	        radius: ['45%', '60%'],
	        center: ['50%', '50%'],

	        label: {
	            normal: {
	                show: true,
	                formatter: '{b} : {c}%'
	            }
	        },
	        labelLine: {
	            normal: {
	                show: true,
	                length2: 10
	            }
	        },
	        data: [{
	                value: 70,
	                name: '其他分类',
	                itemStyle: {
	                    normal: {
	                        color: '#7EC0EE'
	                    }
	                }
	            }, {
	                value: 5,
	                itemStyle: {
	                    normal: {
	                        color: '#ffffff'
	                    }
	                }
	            },
	            {
	                value: 100,
	                name: '信息监控',
	                itemStyle: {
	                    normal: {
	                        color: '#9ACD32'
	                    }
	                }
	            }, {
	                value: 5,
	                itemStyle: {
	                    normal: {
	                        color: '#ffffff'
	                    }
	                }
	            },
	            {
	                value: 270,
	                name: '章',
	                itemStyle: {
	                    normal: {
	                        color: '#FFB90F'
	                    }
	                }
	            }, {
	                value: 5,
	                itemStyle: {
	                    normal: {
	                        color: '#ffffff'
	                    }
	                }
	            },
	            {
	                value: 90,
	                name: '警',
	                itemStyle: {
	                    normal: {
	                        color: '#FF8C69'
	                    }
	                }
	            }, {
	                value: 5,
	                itemStyle: {
	                    normal: {
	                        color: '#ffffff'
	                    }
	                }
	            },
	            {
	                value: 120,
	                name: '自危害',
	                itemStyle: {
	                    normal: {
	                        color: '#AB82FF'
	                    }
	                }
	            }, {
	                value: 5,
	                itemStyle: {
	                    normal: {
	                        color: '#ffffff'
	                    }
	                }
	            },
	            {
	                value: 110,
	                name: '攻击入侵',
	                itemStyle: {
	                    normal: {
	                        color: '#8899AA'
	                    }
	                }
	            }, {
	                value: 5,
	                itemStyle: {
	                    normal: {
	                        color: '#ffffff'
	                    }
	                }
	            },
	            {
	                value: 140,
	                name: '认证授权',
	                itemStyle: {
	                    normal: {
	                        color: '#7FFFD4'
	                    }
	                }
	            }, {
	                value: 5,
	                itemStyle: {
	                    normal: {
	                        color: '#ffffff'
	                    }
	                }
	            },
	            {
	                value: 130,
	                name: '网络访问',
	                itemStyle: {
	                    normal: {
	                        color: '#EE30A7'
	                    }
	                }
	            }, {
	                value: 5,
	                itemStyle: {
	                    normal: {
	                        color: '#ffffff'
	                    }
	                }
	            },
	            {
	                value: 170,
	                name: '操作记录',
	                itemStyle: {
	                    normal: {
	                        color: '#EE9A00'
	                    }
	                }
	            }, {
	                value: 5,
	                itemStyle: {
	                    normal: {
	                        color: '#ffffff'
	                    }
	                }
	            },
	            {
	                value: 150,
	                name: '安全预警',
	                itemStyle: {
	                    normal: {
	                        color: '#8B5A00'
	                    }
	                }
	            }, {
	                value: 5,
	                itemStyle: {
	                    normal: {
	                        color: '#ffffff'
	                    }
	                }
	            },
	            {
	                value: 70,
	                name: '信息刺探',
	                itemStyle: {
	                    normal: {
	                        color: '#8B4789'
	                    }
	                }
	            }, {
	                value: 5,
	                itemStyle: {
	                    normal: {
	                        color: '#ffffff'
	                    }
	                }
	            },
	            {
	                value: 60,
	                name: '恶意代码',
	                itemStyle: {
	                    normal: {
	                        color: '#A9A9A9'
	                    }
	                }
	            }, {
	                value: 5,
	                itemStyle: {
	                    normal: {
	                        color: '#ffffff'
	                    }
	                }
	            }
	        ],
	        itemStyle: {
	            emphasis: {
	                shadowBlur: 10,
	                shadowOffsetX: 0,
	                shadowColor: 'rgba(0, 0, 0, 0.5)'
	            }
	        }
	    }]
	};