var colors=['#ae81b2','#889fc4', '#ee94b0', '#c6cef5', '#ea5e6f', '#c0acf9', '#b1d882', '#f38b97', '#ffc969', '#57bbf7'];
option = {
    grid:{
        containLabel:true,
        top:'15%'
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed',
            }
        },
        axisLine:{
            lineStyle:{
                color:'#dedede'
            }
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            color:'black'
        }
    },
    yAxis: {
        data: ['语文', '数学', '英语', '物理', '化学', '生物','语文', '数学', '英语', '物理'],
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        }
    },
    series: [{
        type: 'bar',
        barWidth:'50%',
        label:{
            normal: {
                show: true,
                textBorderWidth: 2,
                formatter:function(params){
                    return 'aaa';
                }
            }
        },
        itemStyle:{
            normal:{
                barBorderRadius:[0,50,50,0],
                color: function(params) {
                    var num = colors.length;
                    return colors[params.dataIndex % num]
                }
            }
        },
        data:[20, 30, 50, 80, 100, 300,500, 800, 1000, 1100]
    }]
};