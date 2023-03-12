var option = {
    backgroundColor: '#F8F8F8',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        backgroundColor: 'rgba(36,37,41,0.8);',
        formatter:function(params){
            return params[0].name + params[0].seriesName+"：" + (params[0].value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')+"元";
        }
    },
     grid:{
        left:'0',
        right:'4%',
        bottom:'0',
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
                color: '#d9d9d9', // 颜色
                width: 1 // 粗细
            }
        },
        axisLabel: {
            color: 'rgba(0,0,0,0.65)',
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
            color: 'rgba(0,0,0,0.65)',
            // formatter:'{value}K'
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
        markLine: {
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    lineStyle: {
                        type: 'dash',
                        color: '#22B77D ',
                        width: 2,
                    },
                    label:{
                        formatter:'同事平均报销\n{c}元',
                        position:'middle',
                        textStyle:{
                            fontSize:12,
                        }
                    },
                },
               
            },
            data: [{
                yAxis:50907

            }]
        },
        itemStyle: {
            normal: {
                color: '#4285F4'
            }
        },
    }]
};
