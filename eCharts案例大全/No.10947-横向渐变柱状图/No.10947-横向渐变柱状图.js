var option = {
        color: ['#2adecf'],
        textStyle: {
            color: 'rgb(222,222,222)',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        dataRange: {
            show: false,
            min:0,
            max:10,
            calculable : false,
            color: ['#fff','#21feff','#008080'],
             y:'center',
        },
        grid: {
            left: '3%',
            right: '25%',
            bottom: '3%',
            top: '10%',
            containLabel: true
        },
        yAxis: [{
            data: [1,2,3,4,5,6,7,8,9],
            axisLine: {show: false},
            axisTick: {
                    show: false
                },
            splitLine: {show: false},
            axisLabel: {
                interval: 0,
            }
        }],
        xAxis: [
            {
                show:true,
                type: 'value',
                name: '',
                axisTick: {
                    show: false
                },
                axisLine: {show: false},
                splitLine: {show: true},
                axisLabel: {
                    show: true,
                    interval: 1000
                }
            }
        ],
        series: [
             {
                name: '',
                type: 'bar',
                barGap: '10%',
                barCategoryGap: '60%',
                itemStyle: {
                  normal:{
　　　　　　　　　　color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
　　　　　　　　　　　　　     [
　　　　　　　　　　　　　　       {offset: 0, color: '#175b8f'},
　　　　　　　　　　　　　　       {offset: 0.85, color: '#21feff'},
　　　　　　　　　　　　　　       {offset: 1, color: '#fff'}
　　　　　　　　　　　　　 ])
　　　　　　　　　} 
                },
                data: [11,26,32,42,51,63,71,83,91],
                zlevel: 11
            }
        ]
    }
