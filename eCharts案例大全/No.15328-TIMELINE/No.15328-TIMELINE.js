
option = {
    title: {
        text: 'TIMELINE'
    },
    legend: {
        data: ['过期时间']
    },
    xAxis: {
        type: 'time'
    },

    yAxis: {

        data: ['one', 'two', 'three']

    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
             var res=params[0].name+"</br>"
               var date0=params[0].data;
               var date1=params[1].data;
               console.log(params[0])
                date0=date0.getFullYear()+"-"+(date0.getMonth()+1)+"-"+date0.getDate();
               date1=date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate();
    		   res+=params[0].seriesName+":"+date0+"</br>"
    		   res+=params[1].seriesName+":"+date1+"</br>"
            return res;
        }
    },
    series: [

        {
            name: '开始时间',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [
                new Date("2015/09/2"),
                new Date("2015/09/8"),
                new Date("2015/09/18"),
            ]
        },{
            name: '结束时间',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '#52b4f7',
                    barBorderRadius: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 20
                }
            },
            data: [
                new Date("2015/09/19"),
                new Date("2015/09/29"),
                new Date("2015/09/28"),
            ]
        }
    ]
};