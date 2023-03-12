option = {
    backgroundColor: '#fff',
    color: ['#38b4ee', "#00BFFF", "#FF00FF", "#ffffff", "#000000"],
    legend: {
        data: ['1', '2', '3', '4', '5', '6']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    title: {
        text: '视频服务组满意度趋势表',
        subtext: '2017年9月—2018年9月',
        "left": "center",
        y: "10",
        subtextStyle: {
            color:'#000',
            fontSize:'14',
            fontWeight:'bold'
             
            },
        textStyle: {
            color: '#000'
        }
    },
    tooltip: {
        trigger: 'axis',
        formatter:'{c}%'　　
    },


    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle:{
                color:'#000',
                
                fontWeight:'bold'
                
            }
        },
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: ['#000'],
                type: 'solid'
            }
        },
        data: [' 2017年9月', ' 2017年10月', ' 2017年11月', ' 2017年12月', ' 2018年1月', ' 2018年2月', ' 2018年3月', ' 2018年4月', ' 2018年5月', ' 2018年6月', ' 2018年7月', ' 2018年8月', ' 2018年9月']
    },
    yAxis: {
        min: 90,
        max: 100,
        interval: 1,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            //    onZero:false
        },
        axisLabel: {
            formatter: '{value} %',
            textStyle:{
                color:'#000',
                
                fontWeight:'bold'
                
            }
        },
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: ['#000'],
                type: 'solid'
            }
        }
    },
    series: [{
        name: '剩余额度',
        type: 'line',
        smooth: true,
        symbolSize: 12,
        color: ["#FF0000"],
        data: ['99.59', '99.62', '99.18', '99.68', '99.65', '99.52', '99.53', '99.66', '99.50', '99.48', '99.49', '99.49', '99.31'],
        label: {
            normal: {
                show: false,
                position: 'top' ,//值显示
               　　
            }
        }

    }]
};