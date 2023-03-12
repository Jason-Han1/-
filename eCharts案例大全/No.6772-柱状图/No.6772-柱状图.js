option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '30%',
        containLabel: true
    },
    
    xAxis: [
        {
            type: 'category',
            data: ['进口食品','文具区', '电子产品', '饮料', '水果', '饰品', ],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white',  //更改坐标轴文字颜色
                    fontSize : 14      //更改坐标轴文字大小
                }
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            max:100, //Y轴最大值 不写的话自动调节
            axisLabel:{
                formatter:'{value} %',
                show: true,
                textStyle: {
                    color: 'white',  //更改坐标轴文字颜色
                    fontSize : 14      //更改坐标轴文字大小
                }
            }
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '15%',
            data: [81, 68, 80, 88, 96, 79],
            itemStyle: {
                emphasis: {
                    barBorderRadius: 7
                },
                normal: {
                    barBorderRadius: 7,
                    label: {
                       show: true,		//开启显示
                       formatter: '{c} %',
                       position: 'top',	//在上方显示
                       textStyle: {	    //数值样式
                           color: 'white',
                           fontSize: 16
                       }
                   }
                }
            }
        }
    ]
};