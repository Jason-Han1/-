option = {
    title:{
        text:'牛鼻闪闪的仪表盘',
        left:'center',
        top:20
    },
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show:false,
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            radius:'70%',
            startAngle:225,
            endAngle:-45,
            clockwise:true,
            min:0,
            max:100,
            splitNumber:10,
            center:['50%','50%'],
            pointer:{
                show:true,
                length:'70%',
                width:10
            },
            axisLine:{
                show:false,
                lineStyle:{
                    width:30,
                    color:[[0.2, '#34d160'], [0.8, '#ff6c00'], [1, '#f92e30']],
                }
            },
            detail: {
                show:true,
                formatter:'{value}%',
                offsetCenter:['4%','10%'],
                fontSize:90,
                color:'#fff',
            },
            title:{
                show:true,
                offsetCenter:['1%','70%'],
                color:'blue',
                fontSize:40
            },
            data: [
                {
                    name: '幸福指数',
                    value: 50,     
                }
            ]
        }
    ]
};

/*setInterval(function () {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
},2000);*/
