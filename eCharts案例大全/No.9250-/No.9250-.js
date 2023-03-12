option = {
    
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
          formatter: function(params) { //数据单位格式化  
  	            var relVal = params[0].name; //x轴名称  
  	            relVal += "<div style='width:140px'>"
  	            for (var i = 0, l = params.length; i < l; i++) {
  	                if (params[i].value) {

  	                    relVal += "<span  style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" + params[i].color + ";'>" + '<span  style="display:block;padding-left:15px;margin-top:-4px">' + params[i].seriesName + ' : ' + params[i].value + '℃'+'</span>' + "</span>" + '<br>';
  	                }
  	            }
  	            relVal += "</div>"
  	            return relVal;
  	        }
  	     // "formatter": "供水流量: {c0} T/h<br />回水流量: {c1} T/h<br />万平米平方流量：{c2} T/W㎡"
    },
    legend: {
        data:['叠翠园','北岳北','御东学府','大同大学北','富力城一期','煤场院'],
        textStyle: {
  	            color: '#1bb4f6' //最下面提示文字的颜色
  	        },
        // right:'30'
    },
    dataZoom: [{
  	        type: 'slider',
  	        realtime: true,
  	        //移动端展示方式
  	        handleSize: '100%', //滑动条两侧的大小
  	         start: 0,
             end: 50,
  	    }],
   grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        height: '80%',
        containLabel: true
    },
        toolbox: {
        show: true,
        feature: {
            // dataZoom: {},
            // dataView: {readOnly: false},
                magicType: {type: ['line', 'bar','pie']},
            // restore: {},
            // saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        
        boundaryGap: false,
        data: ['10月1日','10月2日','10月3日','10月4日','10月5日','10月6日','10月7日'],
           axisPointer: {
            type: "shadow"
        },
    
         axisLabel: {
  	            textStyle: {
  	                color: '#00FF00' //X轴的字体颜色
  	            },
  	        },
  	        axisLine: {
  	            lineStyle: {
  	                color: '#63B8FF', //X轴的颜色
  	                width: 1.5, //X轴的粗细
  	            }
  	        },
    },
    yAxis: {
        type: 'value',
         axisLine: {
  	            lineStyle: {
  	                color: '#555555', //设置Y轴的颜色
  	                width: 3, //设置Y轴的粗细
  	            }
  	        },
  	           axisLabel: {
  	            show: true,
  	            textStyle: {
  	                color: '#00FF00' //Y轴的数据字体颜色
  	            },
  	        },
  	          splitLine: {
  	            show: true,
  	            lineStyle: {
  	                color: '#555555' //网格线的颜色
  	            }
  	        }
    },
    series: [
        {
            name:'叠翠园',
            type:'line',
             smooth:true, 
            data:[280, 192, 181, 174, 210, 280, 210],
            symbolSize:1
        },
        {
            name:'北岳北',
            type:'line',
             smooth:true, 
            data:[340, 382, 391, 334, 390, 390, 410],
            symbolSize:1
        },
        {
            name:'御东学府',
            type:'line',
             smooth:true, 
            data:[100, 132, 101, 154, 190, 130, 210],
            symbolSize:1
        },
        {
            name:'大同大学北',
            type:'line',
             smooth:true, 
            data:[240, 332, 301, 324, 380, 330, 320],
            symbolSize:1
        },
        {
            name:'富力城一期',
            type:'line',
             smooth:true, 
            data:[230, 312, 351, 321, 280, 350, 310],
            symbolSize:1
        },
        {
            name:'煤场院',
            type:'line',
             smooth:true, 
            data:[250, 382, 231, 344, 310, 70, 390],
            symbolSize:1
        }
    ]
};
  	autoFn(option.xAxis.data.length)
    function autoFn(leng){
             var that = this
            //轮播效果
            var currentIndex = -1
           
            //  let myChart = echarts.getInstanceByDom(document.getElementById("chart-panel"))
            var dataLen =leng

            that.timer = setInterval(() => {
                //  计时器增加
                that.ai++

                if (that.ai == dataLen) {
                    that.ai = 1
                }
                 console.log(dataLen)
                // 取消之前高亮的图形
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: currentIndex,
                })
                currentIndex = (currentIndex + 1) % dataLen
                // 高亮当前图形
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: currentIndex,
                })
                // 显示 tooltip
              myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: currentIndex,
                })
            }, 3000)
    }
