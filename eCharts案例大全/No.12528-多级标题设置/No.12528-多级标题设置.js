var option = {
    tooltip : {
        trigger: 'axis',
        formatter: function(params) {
            return params[0].marker+params[0].axisValue+"&nbsp;&nbsp;满意度"+params[0].value+"%";
        }
    },
    color: ['#5b9bd5'],
    xAxis : [
        {   
            axisLine: {
                lineStyle: {
                    color: '#c0c7cf'
                }
            },
            axisTick: {
                show: false
            },
            offset:0,
            axisLabel: {
                show: true,
                color:'#000',
            },
            type : 'category',
            data : ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine: {
                lineStyle: {
                    color: '#c0c7cf'
                }
            },
            axisLabel: {
                formatter: '{value}%',
                color: '#000',
                fontSize:16
            },
            axisTick: {
                show: false
            },
            splitLine:{
                show:false
            },
            min: 0,
            max: 100
        }
    ],
    series : [
        {
            name:'满意度',
            type:'line',
            data: [30,20,30,40,50,60,70,80,90,80,70,60]
        }
    ]
};