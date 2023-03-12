    var top = 40,
	  left = 70,
	  right = 18,
	  bottom = 30;
    var minX =  '',
      maxX = '',
      minY = '',
      maxY =  '';
	 var xName = '风扇转速',
	 yName = '温度',
	 text = 'CPU风扇',
	 xUnit = '℃',
	 yUnit = '%';
	var symbolSize = 30;
	 var list = [
		    [10, 20],
		    [30, 40],
		    [60, 70],
		    [100, 90]
		];
	var maxVal = 0
    var _data = list.map(item => {
      return item[0]
    })
    _data.sort((a, b) => b - a)
    if (_data.length > 0) {
      maxVal = _data[0]
    }
option = {
      title: {
        text: text,
        x: 'left',
        textStyle: {
          color: '#333',
          fontWeight: 400,
          fontSize: 14
        }
      },
      tooltip: {
        triggerOn: 'none',
        // trigger: 'axis',
        backgroundColor: '#39404D',
        borderColor: 'rgba(234, 247, 255, 0.3)',
        textStyle: {
          color: '#EAF7FF',
          fontSize: 13

        },
        borderRadius: 'none',
        formatter(params) {
          return params.data[0].toFixed(0) + xUnit + ' ' + '/' + ' ' + params.data[1].toFixed(0) + yUnit
        },
        padding: [
          4, // 上
          8, // 右
          4, // 下
          8 // 左
        ]
      },
      grid: {
        top: top+'px',
        left: left+ 'px',
        right: right+'px',
        bottom: bottom+'px',
      },
      xAxis: {
        min: 0,
        max: maxVal,
        // interval: maxVal,
        type: 'value',
        name: xName,
        nameLocation: 'start',
        // nameGap: 20,
        axisLabel: {
          showMaxLable: true, // 显示最大值
          showMinLable: false, // 显示最小值
          formatter(value) {
            if (value !== maxVal) {
              return ''
            }
            return value + xUnit // 格式时间显示方式
          }
        },
        splitLine: {
          // 网格线
          lineStyle: {
            type: 'dashed', // 设置网格线类型 dotted：虚线   solid:实线
            width: 0.5,
            color: '#39404D'
          },
          show: true // 隐藏或显示
        },
        axisLine: { onZero: false }
      },
      yAxis: {
        min: 0,
        max: 100,
        type: 'value',
        name: yName,
        nameLocation: 'start',
        // nameGap: 20,
        axisLine: { onZero: false },
        axisLabel: {
          color: 'rgba(234, 247, 255, 0.4)',
          showMaxLable: true, // 显示最大值
          showMinLable: false, // 显示最小值
          formatter(value) {
            if (value === 0) {
              return ''
            }
            return value + yUnit // 格式时间显示方式
          }
        },
        splitLine: {
          // 网格线
          lineStyle: {
            type: 'dashed', // 设置网格线类型 dotted：虚线   solid:实线
            width: 0.5,
            color: '#39404D'
          },
          show: true // 隐藏或显示
        }
      },
      dataZoom: {
        show: false
      },
      series: [
        {
          id: 'a',
          type: 'line',
          smooth: true,
        //   symbol: this.symbol,
          symbolSize: 30,
          data: list,

          legendHoverLink: false,
          emphasis: {
            scale: false
          },
         
          areaStyle: {
            normal: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(234, 247, 255, 0.3)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(234, 247, 255, 0)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            }
          }
        }
      ]
    }
setTimeout(function () {
    // Add shadow circles (which is not visible) to enable drag.
    myChart.setOption({
      graphic: echarts.util.map(list, (dataItem, dataIndex) => {
        const that = this // 因为ondrag函数必须在回调内使用this.position获取实时坐标，此处必须用that替换this
        return {
          type: 'circle',
          shape: {
            // 圆点的半径。
            r: symbolSize / 2
          },
          position: myChart.convertToPixel('grid', dataItem),
          invisible: true,
          draggable: true,
          z: 100,
          ondrag: function(dx, dy) {
			  // 临界值判断并处理
				if (this.y > maxY) {
					 this.y = maxY-1
				} else if (this.y < minY) {
					this.y = minY+1
				}
				if (this.x > maxX) {
					 this.x = maxX-1
				} else if (this.x < minX) {
					this.x = minX-1
				}
				onPointDragging(dataIndex, [this.x, this.y])
		  },
          onmousemove: function() {
            showTooltip(dataIndex)
          },
          onmousedown: function() {
			// 鼠标按下时获取当前远点 上一个及下一个原点位置 并计算出最大和最小x、y轴运动范围
			let pre = null
			if(list[dataIndex - 1]){
				pre = myChart.convertToPixel('grid', list[dataIndex - 1]) // 得到上一个圆点原始位置
			}
			let next = null
			if(list[dataIndex + 1]){
				next = myChart.convertToPixel('grid', list[dataIndex + 1]) // 得到下一个圆点原始位置
			}
			let cur = myChart.convertToPixel('grid', list[dataIndex]) // 得到当前圆点原始位置
			var x1 = 0,y1 = 0,x2 = 0,y2 = 0;
            if (pre) {
              x1 = pre[0]
              y1 = pre[1]
            } else {
				if(next){
					if(cur[1]>next[1]){ //当前圆点在下一个点的左下方
						x1 = left+1
						y1 = myChart.getHeight()-bottom
					}else{
						x1 = left+1
						y1 = next[1]
					}
				}else{
					x1 = myChart.getWidth()-(right+1)
					y1 = myChart.getHeight()-bottom
				}
              
            }
            if (next) {
             x2 = next[0]
             y2 = next[1]
            } else {
				if(pre){
					if(cur[1]>pre[1]){ //当前圆点在下一个点的右下方
						x2 = myChart.getWidth()-(right+1)
						y2 = myChart.getHeight()-bottom
					}else{
						x2 = myChart.getWidth()-(right+1)
						y2 = top
					}
				}else{
					x1 = myChart.getWidth()-(right+1)
					y1 = myChart.getHeight()-bottom
				}
            }
			
			
			if(x1>=x2){
				minX = x2
			    maxX = x1
			}else{
				minX = x1
			    maxX = x2
			}
			if(y1>=y2){
				minY = y2
				maxY = y1
			}else{
				minY = y1
				maxY = y2
			}
          },
          onmouseout: function() {
            hideTooltip(dataIndex)
          }
        }
      })
    })
}, 0);

 function showTooltip(dataIndex) {
     myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
      })
    }
    function hideTooltip(dataIndex) {
      myChart.dispatchAction({
        type: 'hideTip'
      })
    }
function onPointDragging(dataIndex, pos) {
		let postion = myChart.convertFromPixel('grid', pos)
		  list[dataIndex][0] = postion[0]
		  list[dataIndex][1] = postion[1]
      // Update data
     myChart.setOption({
        series: [{
          id: 'a',
          data: list
        }]
      })
    }

