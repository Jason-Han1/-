option = {
    color : ['#FFDC87','#FF976E'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: 0,
        right: 0,
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['基础施工','组塔施工','架线施工','附件安装','隧道施工','电缆敷设','其他'],
            
            axisLabel: {
            show: true,
            textStyle: {
                fontSize:24,
            },
            interval:0 ,  
             formatter:function(val){  
               return val.split("").join("\n");  
             }  
            
        }

        }
    ],
    yAxis : [
        {
             axisLine: {show:false},
             axisTick: {show:false},
            //  splitLine:{show:false},
            show : true,
             axisLabel: {
	                  color: '#298EF5',   //这里用参数代替了
	                  fontSize:18,
	                  
	                },
	       min:0,
	       max:100,
        }
    ],
    series : [
        {
            name:'三级',
            type:'bar',
            barGap:0,
            data:[26,32,45,44,56,62,52],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        fontSize: 16
                    },
                    shadowBlur: 80,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        },
        {
            name:'四级',
            type:'bar',
            data:[17,26,37,38,47,56,45],
             itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}'
                    },
                }
            },
           
        },
    ]
};
