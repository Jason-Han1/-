option = {
		    tooltip: {
		        trigger: 'axis',
		    },
		    legend: {
		        color: '#90979c',
		        data: ['折线1', '折线2','折线3','折线4','折线5']
		    },
		    grid: {
		        top: '15%',
		        left: '10%',
		        right: '5%',
		        bottom: '15%',
		        // containLabel: true
		    },
		    xAxis: [{
		        type: 'category',
		        axisLabel: {
		            color: '#FFFFF',
		            width:100
		        },
		        splitLine: {
		            show: false
		        },
		        boundaryGap: false,
		        data: ["06-21","06-22","06-23","06-24","06-25","06-26","06-27",
		        "06-28","06-29","06-30","-07-01","07-02","07-03","07-04"]//this.$moment(data.times).format("HH-mm") ,
		
		    }],
		
		    yAxis: [{
		        type: 'value',
		        min: 5000,
		        splitNumber: 4,
		        splitLine: {
		            show: true,
		            lineStyle: {
		                color: '#FFFFF',
		                opacity:0.20
		            }
		        },
		        axisLine: {
		            show: true,
		        },
		        axisLabel: {
		            show: true,
		            margin: 20,
		            textStyle: {
		                color: '#FFFFF',
		
		            },
		        },
		        axisTick: {
		            show: false,
		        },
		    },{
		        type: 'value',
		        min: 0.00,
		        max: 1.00,
		        position: "right",
		        splitNumber: 4,
		        splitLine: {
		            show: true,
		            lineStyle: {
		                color: '#FFFFF',
		                opacity:0.20
		            }
		        },
		        axisLine: {
		            show: true,
		        },
		        axisLabel: {
		            show: true,
		            textStyle: {
		                color: '#FFFFF',
		
		            },
		        },
		        axisTick: {
		            show: false,
		        },
		    }],
		    series: [
		        {
		            name:'折线1',
		            type: 'line',
		            showAllSymbol: true,
		            symbol: 'circle',
		            lineStyle: {
		                normal: {
		                    color: "#FF2B2B",
		                },
		            },
		            label: {
		                position: 'top',
		                textStyle: {
		                    color: '#FF2B2B',
		                }
		            },
		            itemStyle: {
		                color: "#FF2B2B",
		                borderColor: "#FF2B2B",
		                borderWidth: 2,
		            },
		            data: [24105,24834,24231,24231,24821,24821,24821,22327,23331,23331,23331,24331,24331,24331]//data.values
		        },
		        {
		            name:'折线2',
		            type: 'line',
		            showAllSymbol: true,
		            symbol: 'circle',
		            smooth:false,
		            lineStyle: {
		                normal: {
		                    color: "#335A89",
		                    type: 'dotted'
		                },
		            },
		            label: {
		                position: 'top',
		                textStyle: {
		                    color: '#335A89',
		                }
		            },
		            itemStyle: {
		                color: "#335A89",
		                borderColor: "#335A89",
		                borderWidth: 2,
		            },
		            data: [12231,9356,13356,10421,14342,12121,18232,11235,17342,12345,16273,8947,16998,14893]//data.values
		        },
		        {
		            name:'折线3',
		            type: 'line',
		            showAllSymbol: true,
		            symbol: 'circle',
		            lineStyle: {
		                normal: {
		                    color: "#000000",
		                },
		            },
		            label: {
		                position: 'top',
		                textStyle: {
		                    color: '#000000',
		                }
		            },
		            itemStyle: {
		                color: "#000000",
		                borderColor: "#000000",
		                borderWidth: 2,
		            },
		            data: [24234,24834,25200,25200,25200,25992,25992,25992,25992,25992,26983,26983,26983,26983]//data.values
		        },
		        {
		            name:'折线4',
		            type: 'line',
		            showAllSymbol: true,
		            symbol: 'circle',
		            lineStyle: {
		                normal: {
		                    color: "#FFCA2B",
		                },
		            },
		            label: {
		                position: 'top',
		                textStyle: {
		                    color: '#FFCA2B',
		                }
		            },
		            itemStyle: {
		                color: "#FFCA2B",
		                borderColor: "#FFCA2B",
		                borderWidth: 2,
		            },
		            data: [24231,24231,24231,24231,24821,24821,24821,25284,25284,25284,25898,25898,25898,25898]//data.values
		        },
		        {
		            name:'折线5',
		            type: 'line',
		            showAllSymbol: true,
		            symbol: 'circle',
		            lineStyle: {
		                normal: {
		                    color: "#7AB4DE",
		                },
		            },
		            label: {
		                position: 'top',
		                textStyle: {
		                    color: '#7AB4DE',
		                }
		            },
		            itemStyle: {
		                color: "#7AB4DE",
		                borderColor: "#7AB4DE",
		                borderWidth: 2,
		            },
		            areaStyle: {
		                normal: {
		                    color: '#7AB4DE',
		                }
		            },
		            data: [15352,12235,14643,11514,13251,10873,16863,12983,24374,19062,26787,16392,20342,12232]//data.values
		        }
		    ]
		};