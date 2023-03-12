option = {
            title: {
                text: 'Ins and Outs',
                subtext:'United States merchandise',
                itemGap:20,
                left:'2%',
                textStyle:{
                    fontSize:32
                },
                subtextStyle:{
                    color:'#3A4750',
                    fontSize:17
                }
            },
            backgroundColor:'#CDDDE6',
            dataZoom:{
                show:false
            },
            grid: [
                {show:true,
                  x: '7%',
                  y: '25%',
                  width: '38%',
                  borderWidth:70,
                  borderColor:'#B9D0DD',
                  backgroundColor:'#B9D0DD',
                  height: '58%'},
                {show:true,
                  x2: '7%',
                  y: '25%',
                  width: '38%',
                  borderWidth:70,
                  borderColor:'#B9D0DD',
                  backgroundColor:'#B9D0DD',
                  height: '58%'}
            ],
            tooltip : {
            },
            legend: {
                right:'3%',
                top:'6%',
                orient:'vertical',
                data:['Canada and Mexico','Latin America','','Europe','China','','Japan','Other Asia','','Rest of the world']
            },
            xAxis: [
                {
                  gridIndex:0,
                  z:2,
                  splitLine:{
                    show:false
                  },
                  axisTick:{
                    show:false
                  },
                  axisLine:{
                    lineStyle:{
                      width:3
                    }
                  },
                  data: [ '1963', '73', '83', '93', '2003', '11']},
                {
                  gridIndex:1,
                  z:2,
                  splitLine:{
                    show:false
                  },
                  axisTick:{
                    show:false
                  },
                  axisLine:{
                    lineStyle:{
                      width:3
                    }
                  },
                  data:['1963', '73', '83', '93', '2003', '11']}
            ],
            yAxis: [
              {
                gridIndex:0,
                z:2,
                axisTick:{
                  show:false
                },
                axisLine:{
                  show:false
                },
                splitLine:{
                  lineStyle:{
                    color:'#E8ECF1',
                    width:3
                  }
                },
                position:'right',
                min:0,
                max:100},
              {
                gridIndex:1,
                z:2,
                axisTick:{
                  show:false
                },
                axisLine:{
                  show:false
                },
                splitLine:{
                  lineStyle:{
                    color:'#E8ECF1',
                    width:3
                  }
                },
                position:'right',
                min:0,
                max:100}
                /*splitLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    show:false
                }*/
            ],
            series: [{//ins
                name: 'Canada and Mexico',
                type: 'bar',
                xAxisIndex:0,
                yAxisIndex:0,
                itemStyle:{
                  	normal:{
                  		color:'#5E92A7',
                  	}
                  },
                stack:1,
                barCategoryGap:'30%',
                data: [ 24, 25, 22, 25, 32, 35]
            },
            {
                name: 'Latin America',
                type: 'bar',
                xAxisIndex:0,
                yAxisIndex:0,
                itemStyle:{
                  	normal:{
                  		color:'#00516D',
                  	}
                  },
                stack:1,
                barCategoryGap:'30%',
                data: [ 15, 12, 10, 10, 10, 15]
            },
            {
                name: 'Europe',
                type: 'bar',
                xAxisIndex:0,
                yAxisIndex:0,
                itemStyle:{
                  	normal:{
                  		color:'#00A4DC',
                  	}
                  },
                stack:1,
                barCategoryGap:'30%',
                data: [ 35, 32, 27, 22, 22, 20]
            },
            {
                name: 'China',
                type: 'bar',
                xAxisIndex:0,
                yAxisIndex:0,
                itemStyle:{
                  	normal:{
                  		color:'#F15940',
                  	}
                  },
                stack:1,
                barCategoryGap:'30%',
                data: [ 0, 0, 2, 2, 4, 8]
            },
            {
                name: 'Japan',
                type: 'bar',
                xAxisIndex:0,
                yAxisIndex:0,
                itemStyle:{
                  	normal:{
                  		color:'#EDA288',
                  	}
                  },
                stack:1,
                barCategoryGap:'30%',
                data: [ 8, 10, 9, 9, 6, 4]
            },
            {
                name: 'Other Asia',
                type: 'bar',
                xAxisIndex:0,
                yAxisIndex:0,
                itemStyle:{
                  	normal:{
                  		color:'#DBBFA6',
                  	}
                  },
                stack:1,
                barCategoryGap:'30%',
                data: [ 10, 10, 13, 13, 14, 15]
            },
            {
                name: 'Rest of the world',
                type: 'bar',
                xAxisIndex:0,
                yAxisIndex:0,
                itemStyle:{
                  	normal:{
                  		color:'#A8A9AD',
                  	}
                  },
                stack:1,
                barCategoryGap:'30%',
                data: [ 8, 11, 17, 19, 12, 3]
            },
            //outs
            {
                name: 'Canada and Mexico',
                type: 'bar',
                xAxisIndex:1,
                yAxisIndex:1,
                itemStyle:{
                    normal:{
                      color:'#5E92A7',
                    }
                  },
                stack:2,
                barCategoryGap:'30%',
                data: [ 24, 26, 24, 24, 23, 24]
            },
            {
                name: 'Latin America',
                type: 'bar',
                xAxisIndex:1,
                yAxisIndex:1,
                itemStyle:{
                    normal:{
                      color:'#00516D',
                    }
                  },
                stack:2,
                barCategoryGap:'30%',
                data: [ 20, 14, 14, 12, 12, 14]
            },
            {
                name: 'Europe',
                type: 'bar',
                xAxisIndex:1,
                yAxisIndex:1,
                itemStyle:{
                    normal:{
                      color:'#00A4DC',
                    }
                  },
                stack:2,
                barCategoryGap:'30%',
                data: [ 23, 24, 20, 20, 20, 18]
            },
            {
                name: 'China',
                type: 'bar',
                xAxisIndex:1,
                yAxisIndex:1,
                itemStyle:{
                    normal:{
                      color:'#F15940',
                    }
                  },
                stack:2,
                barCategoryGap:'30%',
                data: [ 0, 0, 1, 5, 10, 20]
            },
            {
                name: 'Japan',
                type: 'bar',
                xAxisIndex:1,
                yAxisIndex:1,
                itemStyle:{
                    normal:{
                      color:'#EDA288',
                    }
                  },
                stack:2,
                barCategoryGap:'30%',
                data: [ 8, 10, 12, 15, 6, 6]
            },
            {
                name: 'Other Asia',
                type: 'bar',
                xAxisIndex:1,
                yAxisIndex:1,
                itemStyle:{
                    normal:{
                      color:'#DBBFA6',
                    }
                  },
                stack:2,
                barCategoryGap:'30%',
                data: [10, 12, 15, 15, 14, 10]
            },
            {
                name: 'Rest of the world',
                type: 'bar',
                xAxisIndex:1,
                yAxisIndex:1,
                itemStyle:{
                    normal:{
                      color:'#A8A9AD',
                    }
                  },
                stack:2,
                barCategoryGap:'30%',
                data: [15, 14, 14, 9, 15, 8]
            }],

        };
