option = {
    title : {
        text: '终端统计',
        subtext: '日志分析数据，仅供参考',
        x:'center',
        y:'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24
        },
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a}:{b}<br/>访问量:{c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['Windows','Mac','Android','Iphone','Wp'],
    },
    series : [
        {
            name: '终端类型',
            type: 'pie',
            selectedMode: 'single',
            center: ['50%', '50%'],
            radius: ['25%', '58%'],
            color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],
            data: [{name:'Windows',value:250},{name:'Mac',value:100},{name:'Android',value:110},{name:'Iphone',value:150},{name:'Wp',value:50}],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                    label:{
                        show:true,
                        formatter: '{b}:{d}%',
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: 16
                        },
                    }
                }
            }
        }
    ]
};

// function genData(count) {
    
// }
