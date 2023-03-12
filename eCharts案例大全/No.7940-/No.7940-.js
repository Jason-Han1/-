option = {
    backgroundColor: '#ffffff', //整体背景色
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        backgroundColor: 'rgba(36,37,41,0.8);', // tooltip的背景色
        formatter:function(params){
            return params[0].name + params[0].seriesName+"：" + (params[0].value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')+"元";
        }
    },
    grid:{ //控制整体布局
      left:'0',
      right:'0',
      bottom:'0',
      top:'15%',
      containLabel:true
  },
    // x轴
    xAxis: {
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#DFE3E9', // x轴颜色
                width: 1 // 粗细
            },
        },
        axisLabel: {
            color: '#999999', // x轴刻度名称颜色
            interval:0,//代表显示所有x轴标签显示
            // rotate:45, //代表逆时针旋转45度
        }
    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLabel: {
            color: '#999999', // y轴刻度名称颜色
            formatter:function(value){
                var value;
                if(value >= 1000){
                    value = value/1000+'K';
                }else if(value <1000){
        			value = value;
        		}
        		return value;
            }
        },
        axisTick: { //y轴刻度线
            show: false
        },
        axisLine: { //y轴
            show: false
        },
    },
    series: [{
        name: '报销费用',
        type: 'bar',
        data: [59699, 20777, 36666, 10666, 10666, 20778, 20957, 30785, 45689, 60345, 39678, 38986],
        itemStyle: {
            normal: {
                color: '#4285F4' // 柱状图颜色
            }
        },
        barWidth : 12
    }]
}