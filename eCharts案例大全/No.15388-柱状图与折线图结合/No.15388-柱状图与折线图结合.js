option = {
    backgroundColor:'#020202',
   /* title: {
        text: 'Awesome Chart'
    },*/
    tooltip: {    
	//触发类型，默认（'item'）数据触发，可选为：'item' | 'axis'    
	trigger: 'axis'    
}, 
    xAxis: {
        data: ['墨脱县', '米林县', '察隅县', '巴宜区', '波密县', '工布达江县', '朗县'],
        axisLabel: {
            textStyle: {
                color: '#999999',
                //fontSize:'16'
            },
        }, 
    },
    yAxis: {
        axisLabel: {
            textStyle: {
                color: '#999999',
                //fontSize:'16'
            },
        },
    },
    series: [{
        type: 'bar',
        barWidth:'20%',
        data:[7000, 1200, 5000, 3000, 2000, 6000, 5600],
        color: ['#91c7ae'],
    },
    {
        type: 'line',
        data:[7000, 1200, 5000, 3000, 2000, 6000, 5600],
        symbolSize: 5,  //设置折现圆点的大小
        color: ['#d48265'],
    }]
};