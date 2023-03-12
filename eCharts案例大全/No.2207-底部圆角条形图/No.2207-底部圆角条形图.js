option = {
    color: ['#C65FF9', '#FF704C', '#2872FC'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
          formatter: function (params) {
            //console.log(params)
            var tar = params[0];
            return  tar.name + ' : ' + tar.value;
        }
        
    },
    grid: {
	    	top: '18%',
	        left: '3%',
	        right: '4%',
	        bottom: '15%',
	        containLabel: true
	    },
   /* legend: {
        data: ['武汉'],
        //right: 10,
        top: 12,
        type: 'scroll',
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 16,
        // 因为柱子顶部和底部是通过 offset 跟柱子结合起来的，如果取消选中，柱子数量变化，又要重新计算 offset，为了简单点就直接禁掉了
        selectedMode: false,
    },*/
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
         axisLine: {
             
            lineStyle: {
                 type: 'dashed',
                color: 'red'
               // width: 1.2
            }
        },
        splitLine: {
	            lineStyle: {
	                type: 'dashed',
	                color: '#006C9D'
	            }
	        },
       
        
        axisLabel: {
            show:false,
            fontFamily:'PingFangSC-Regular',
            color: 'red',
            fontSize: 12,
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['当期','同期'],
        splitLine: {
	                lineStyle: {
	                    type: 'dashed',
	                    color: 'yellow'
	                }
	            },
	              axisTick: {
                show: false
            }
    },
    series: [
        {
            name: '当期',
            type: 'bar',
            barWidth: 24,
            barCategoryGap: 12,
            data: ['11.8651', '8.9385'],
              label: {
                show: true,
                position:'right',
                color: '#FFFFFF',
                fontSize: 18,
                formatter: function(param){
                    console.log(param)
                    return param.value+" 吨";
                }
            },
            itemStyle: {
　　　　　　　　　 // 柱体渐变色
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                        offset: 0,
                        color: '#086AFF',
                    },
                    {
                        offset: 1,
                        color: '#2AD8FA',
                    },
                ]),
                 normal: {
                              //柱形图圆角，初始化效果
                               barBorderRadius:[15,0,0,15]
                         }
            },
        },
        {
            name: '同期',
            type: 'pictorialBar',
            symbolSize: [6, 24],
            // 这个属性很重要，直接决定了顶部跟柱子是否契合
            symbolOffset: [2, 0.5],
            z: 12,
            itemStyle: { color: '#00CCFF' },
            symbolPosition: 'end',

            // 要给成武汉这两个柱子的值，这是圆柱顶部，值不给对高度会对不上
            data: ['11.8651', '8.9385'],
        }/*,
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [9, 24],
            symbolOffset: [-1, 0],
            borderRadius:[150,102,102,102],
            z: 12,
          //  itemStyle: { color: '086AFF' },
            itemStyle: {
                        //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                        color: '086AFF',
                         normal: {
                              //柱形图圆角，初始化效果
                               barBorderRadius:[150,102,102,102]
                         }
                    },
            symbolPosition: 'start',

　　　　　　　// 这个给成大于 0 的值就行，设置了 position，一定会在柱子底部展示
          data: [1,1],
        }*/
    ]
};
