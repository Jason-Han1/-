option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['总费用', '房租', '水电费', '交通费', '伙食费', '日用品数']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 100, 300, 500, 300, 400]
        },
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
              barWidth:50,
             itemStyle: {
               color:'#658dff',
                barBorderRadius:10
            },
            data: [200,300, 300, 600, 900, 1300]
        },{
            name:"line",
            type:"line",
            lineStyle:{
              color:"#215fa3",
              width:2
            },
            itemStyle:{
              borderColor:"#215fa3"  
            },
            data:[100, 250, 450, 800, 750, 1100]
        }
    ]
};
