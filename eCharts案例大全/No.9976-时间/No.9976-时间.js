 option = {
     backgroundColor:'rgba(0,0,0,.8)',
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            lineStyle: {
		                color: '#57617B'
		            }
		        }
		    },
		    grid: {
		        top:'20%',
		        bottom: '10%'
		    },
		    legend: {
		        show: true,
		        x: 'center',
		        y: '35',
		        itemGap: 20,
		        itemWidth: 24,
		        itemHeight: 15,
		        textStyle: {
		            color: '#96A1A7',
		            fontSize: 12
		        },
		        data: ['a', 'b']
		    },
		    xAxis: [{
		        type: 'category',
		        boundaryGap: false,
		        axisLine: {
		            lineStyle: {
		                color: 'rgba(63,92,122,1)'
		            }
		        },
		        axisLabel: {
		            margin: 10,
		            textStyle: {
		                color: "#8796AD",
		                fontSize: '20',
		            }
		        },
		        axisTick: {
		            show: false
		        },
		        data: [0.750833333,
		            2.518761574,
		            9.738761574,
		            11.0652662,
		            12.02103009,
		            16.85194444,
		            19.18333333,
		            22.65777778,
		            26.77480324,
		            31.64101852,
		        ],
		    }],
		    yAxis: [{
		        name: '×10ˉ³',
		        type: 'value',
		        axisTick: {
		            show: false
		        },
		        axisLine: {
		            lineStyle: {
		                width: 2,
		                color: 'rgba(63,92,122,1)'
		            }
		        },
		        axisLabel: {
		            textStyle: {
		                color: "#8796AD",
		                fontSize: '20',
		            }
		        },
		        splitLine: {
		            lineStyle: {
		                color: "rgba(63,92,122,0.7)",
		            }
		        }
		    }],
		    series: [{
		        name: 'a',
		        type: 'line',
		        smooth: false,
		        symbolSize: 12,
		        symbol: 'rect',
		        lineStyle: {
		            normal: {
		                type: 'dotted',
		                width: 2
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: 'rgba(2,137,219,1)'
		            }
		        },
		        data: [
		            0.000166534,
		            0.000212107,
		            0.000168847,
		            0.000043892,
		            0.000526373,
		            0.000169481,
		            0.000000373,
		            0.000015890,
		            0.000725239,
		            0.000085462
		        ]
		    }, {
		        name: 'c',
		        type: 'line',
		        smooth: false,
		        symbolSize: 0,
		        symbol: 'none',
		        lineStyle: {
		            normal: {
		                width: 2
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: 'rgba(190,9,18,1)'
		            }
		        },
		        data: [0.00219,
		            0.00219,
		            0.00219,
		            0.00219,
		            0.00219,
		            0.00219,
		            0.00219,
		            0.00219,
		            0.00219,
		            0.00219
		        ]
		    }, {
		        name: 'b',
		        type: 'line',
		        smooth: false,
		        symbolSize: 0,
		        symbol: 'none',
		        lineStyle: {
		            normal: {
		                width: 2
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: 'rgba(150,12,214,1)'
		            }
		        },
		        data: [0.000191291,
		            0.000191151,
		            0.000191026,
		            0.000190916,
		            0.000190822,
		            0.000190743,
		            0.00019068,
		            0.000190631,
		            0.000190598,
		            0.000190581
		        ]
		    }]
		
		}