option = {
    grid: {
        containLabel: true,
        left: 20
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisTick:{
            show:false
        },
        axisLine:{
            lineStyle:{
                color:"#83bff9"
            }
        },
        data: ['X向振动', 'Y向振动', 'Z向震动']
    },

    yAxis: {
        name:"结束时间",
        type: 'time',
        splitLine: {
            show: false
        },
        axisTick:{
            show:false
        },
        axisLine:{
            lineStyle:{
                color:"#83bff9"
            }
        }

    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var res = params[0].name + "</br>"
            var date0 = params[0].data;
            var date1 = params[1].data;
            date0 = date0.getFullYear() + "-" + (date0.getMonth() + 1) + "-" + date0.getDate();
            date1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate();
            res += params[0].seriesName + "~" + params[1].seriesName + ":</br>" + date0 + "~" + date1 + "</br>"
            return res;
        }
    },
    series: [

        {
            name: '开始时间',
            type: 'bar',
            stack: 'test1',
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [
                new Date("2015/09/2"),
                new Date("2015/09/15"),
                new Date("2015/09/15"),
                new Date("2015/10/03"),
                new Date("2015/10/04"),
                new Date("2015/10/05"),
                new Date("2015/10/06")
            ]
        },
        {
            name: '结束时间',
            type: 'bar',
            stack: 'test1',
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: '#ffb434'
                }
            },
            data: [
                new Date("2015/09/12"),
                new Date("2015/09/20"),
                new Date("2015/09/25"),
                new Date("2015/10/05"),
                new Date("2015/10/07"),
                new Date("2015/10/09"),
                new Date("2015/10/12")
            ]
        }
    ]
}