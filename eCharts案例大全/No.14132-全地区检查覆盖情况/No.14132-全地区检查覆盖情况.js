option = {
    backgroundColor:'#ffffff',
    title : {
        text: '全地区检查覆盖情况',
        subtext: '2017年'
    },
    tooltip : {
        formatter: "{a} <br/>{b} = {c}%"
    },
    series: [{
        name: '覆盖率计算公式=（检查主体数/提供主体数）*100%',
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "80%",
        //splitNumber: 3,
        center: ["50%", "65%"],
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                color: [[0.3, '#C23531'],[0.7, '#63869e'],[1, '#91c7a1']]
            }
        },
       /* axisTick: {
            show: true
        },*/
        /*axisLabel: {
            show: true
        },
        splitLine: {
            show: true
        },*/
       /* pointer: {
            width: "3%",
            length: '90%',
            color: "black"
        },*/
        //修改指标
       itemStyle: {
            normal: {
                //color: "rgba(255, 255, 255, 0.8)",
                shadowBlur: 10
            }
        },
        detail: {formatter:'{value}%'},
        data: [{value: 45, name: '覆盖率'}]
    }]
}

/*setInterval(function () {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
},2000);*/
