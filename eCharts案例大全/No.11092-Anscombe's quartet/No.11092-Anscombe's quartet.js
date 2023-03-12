 function makeDataZoom(opt) {
		    return echarts.util.extend({
		        type: 'slider',
		        fillerColor: 'rgba(255,255,255,0.1)',
		        borderColor: '#777',
		        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
		        handleSize: '60%',
		        handleStyle: {
		            color: '#aaa'
		        },
		        textStyle: {
		            color: '#aaa'
		        },
		        filterMode: 'empty',
		        realtime: false
		    }, opt);
		}

        var dataAll = [
		    [
		        [10.0, 8.04],
		        [8.0, 6.95],
		        [13.0, 7.58],
		        [9.0, 8.81],
		        [11.0, 8.33],
		        [14.0, 9.96],
		        [6.0, 7.24],
		        [4.0, 4.26],
		        [12.0, 10.84],
		        [7.0, 4.82],
		        [5.0, 5.68]
		    ],
		    [
		        [30.0, 9.14],
		        [8.0, 8.14],
		        [13.0, 8.74],
		        [9.0, 8.77],
		        [11.0, 9.26],
		        [14.0, 8.10],
		        [6.0, 6.13],
		        [4.0, 3.10],
		        [12.0, 9.13],
		        [7.0, 7.26],
		        [5.0, 4.74]
		    ],
		    [
		        [10.0, 7.46],
		        [8.0, 6.77],
		        [13.0, 12.74],
		        [9.0, 7.11],
		        [11.0, 7.81],
		        [14.0, 8.84],
		        [6.0, 6.08],
		        [4.0, 5.39],
		        [12.0, 8.15],
		        [7.0, 6.42],
		        [5.0, 5.73]
		    ],
		    [
		        [8.0, 6.58],
		        [8.0, 5.76],
		        [8.0, 7.71],
		        [8.0, 8.84],
		        [8.0, 8.47],
		        [8.0, 7.04],
		        [8.0, 5.25],
		        [19.0, 12.50],
		        [8.0, 5.56],
		        [8.0, 7.91],
		        [8.0, 6.89]
		    ]
		];
		var gridWidth = '80%';
	    var gridHeight = '43%';
	    var gridHeight1 = 200;
	    var gridHeight2 = 400;
	    var gridLeft = 80;
	    var gridRight = 50;
	    var gridTop = 50;
	    var gridBottom = 80;

		var option = {
		    title: {
		        text: 'Anscombe\'s quartet',
		        x: 'center',
		        y: 0
		    },
		    axisPointer: {
	            show: true,
	            snap: true,
	            lineStyle: {
	                type: 'dashed'
	            },
	            label: {
	                show: true,
	                margin: 6,
	                backgroundColor: '#556',
	                textStyle: {
	                    color: '#fff'
	                }
	            },
	            link: {xAxisIndex: 'all'},
	        },
		    grid: [
		    	{x: 50, y: 50, width: gridWidth, height: gridHeight1, z: 2},
		        {x: 50, y: 50, width: gridWidth, height: gridHeight1, z: 1},
		        // {x2: '7%', y: '7%', width: '38%', height: '38%'},
		        {x: 50, y2: 50, width: gridWidth, height: gridHeight2},
		        // {x2: '7%', y2: '7%', width: '38%', height: '38%'}
		    ],
		    tooltip: {
		        formatter: 'Group {a}: ({c})'
		    },
		    xAxis: [
		    	{gridIndex: 0, min: 0, max: 20},
		        {gridIndex: 1, min: 0, max: 20},
		        // {gridIndex: 1, min: 0, max: 20},
		        {gridIndex: 2, min: 0, max: 20},
		        // {gridIndex: 3, min: 0, max: 20}
		    ],
		    yAxis: [
		    	{gridIndex: 0, min: 0, max: 15},
		        {gridIndex: 1, min: 0, max: 15},
		        // {gridIndex: 1, min: 0, max: 15},
		        {gridIndex: 2, min: 0, max: 15},
		        // {gridIndex: 3, min: 0, max: 15}
		    ],
		    graphic: [{
		    	type: 'group',
		    	left: 50,
		    	top: 320,
		    	children: [{
		    		type: 'line',
		    		id: 'line',
		    		// left: 10,
		    		// top: 10,
		    		z: 9999,
		    		shape: {
		    			x1: 0,
		    			y1: 0,
		    			x2: 1000,
		    			y2: 0
		    		},
		    		style: {
	                    fill: 'red',
	                    stroke: '#8EC9EB',
	                    lineWidth: 3,
	                    shadowBlur: 0,
	             
	                },
	                draggable: true,
                    ondrag: echarts.util.curry(lineDrag)  
		    	},
		    	// {
       //              type: 'rect',
       //              z: 9,
       //              id: 'rect',
       //              shape: {
       //                  x: 500,
       //                  y: -10,
       //                  width: 30,
       //                  height: 10
       //              },
       //              style: {
       //                  fill: '#929ABA',
       //                  stroke: '#929ABA',
       //                  lineWidth: 1,
       //                  shadowBlur: 0,                   
       //              },
       //              draggable: true,
       //              ondrag: echarts.util.curry(lineDrag)                    

       //          }
                ]
		    }],
		    series: [
		    	{
		            name: '0',
		            type: 'scatter',
		            xAxisIndex: 0,
		            yAxisIndex: 0,
		            data: dataAll[0],
		            markLine: markLineOpt
		        },
		        {
		            name: 'I',
		            type: 'scatter',
		            xAxisIndex: 1,
		            yAxisIndex: 1,
		            data: dataAll[1],
		            markLine: markLineOpt
		        },
		        {
		            name: 'III',
		            type: 'scatter',
		            xAxisIndex: 2,
		            yAxisIndex: 2,
		            data: dataAll[2],
		            markLine: markLineOpt
		        }
		    ],
		    dataZoom: [
	            makeDataZoom({
	                width: gridWidth,
	                height: 20,
	                left: gridLeft,
	                bottom: 10,
	                xAxisIndex: [0, 1]
	            }),
	            makeDataZoom({
	                orient: 'vertical',
	                width: 20,
	                height: gridHeight1,
	                right: 10,
	                top: gridTop,
	                yAxisIndex: [0, 0]
	            }),
	            makeDataZoom({
	                orient: 'vertical',
	                width: 20,
	                height: gridHeight2,
	                right: 10,
	                bottom: gridBottom,
	                yAxisIndex: [1, 1]
	            }),
	            makeDataZoom({
	                orient: 'vertical',
	                width: 20,
	                height: gridHeight2,
	                right: 10,
	                bottom: gridBottom,
	                yAxisIndex: [2, 2]
	            })
	        ]
		};

		var markLineOpt = {
		    animation: false,
		    label: {
		        normal: {
		            formatter: 'y = 0.5 * x + 3',
		            textStyle: {
		                align: 'right'
		            }
		        }
		    },
		    lineStyle: {
		        normal: {
		            type: 'solid'
		        }
		    },
		    tooltip: {
		        formatter: 'y = 0.5 * x + 3'
		    },
		    data: [[{
		        coord: [0, 3],
		        symbol: 'none'
		    }, {
		        coord: [20, 13],
		        symbol: 'none'
		    }]]
		};

        function lineDrag(event) {
        	// console.log(event);
        	console.log('event.target.position:' + event.target.position);
        	const position = event.target.transformCoordToGlobal(event.target.position[0], event.target.position[1]);
        	console.log('position:' + position);
        	option.graphic[0].left = 50;

        	if (position[1] > 100 && position[1] < 500) {
        		option.grid[0].height = position[1] - 70;
        		option.grid[1].height = position[1] - 70;
        		option.grid[2].height = 600 - position[1] + 70;
        		option.graphic[0].top = position[1];
    			myChart.setOption(option);
        	}
    		// option.grid[1].height = 800 - position[1] - 70;
    		// // var y = data.event.clientY;
    		// // option.grid[0].height = y - 50;
    		// option.grid[2].height = 800 - y - 120;
    		
        }
