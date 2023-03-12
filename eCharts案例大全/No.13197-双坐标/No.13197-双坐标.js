var colors = ['#94D352', '#00B2F7', '#0000FF','#FFFF00'];

option = {
    color: colors,
    backgroundColor:'#262D45',
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    grid: {
        right: '8%',
        bottom:'12%'
    },
    legend: {
        data:['line1','line2','line3','line4']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: false
            },
            axisLabel:{
                fontSize:12,
                interval:0,
                rotate:20,
                showMinLabel:true,
                showMaxLabel:true
            },
            axisLine: {
                lineStyle:{
                    color:'rgba(147,54,191,0.5)'
                }
            },
            tooltip:{
                backgroundColor:'rgba(0,0,255,0.5)'
            },
            data: ['one','two','three','four','five','six','seven','eight','nine','ten','D','Flex']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'UPH',
            min: 60.00,
            max: 240.00,
            position: 'right',
            axisLine: {
                lineStyle:{
                    color:colors[1]
                }
            },
            axisLabel: {
                formatter: '{value}'
            },
            splitLine: {
                show: false
            }
        },
        {
            type: 'value',
            name: 'CT/s',
            min: 12,
            max: 36,
            interval:6,
            position: 'left',
            axisLine: {
                lineStyle:{
                    color:colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}'
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [
        {
            name:'line1',
            type:'line',
            yAxisIndex: 0,
            data:[180, 185, 187, 181, 185, 189, 185, 189, 180, 187, 185, 189]
        },
        {
            name:'line2',
            type:'bar',
            yAxisIndex: 1,
            data:[20, 19, 17, 23, 25, 17, 13, 16, 26, 20, 16, 23]
        },
        {
            name:'line3',
            type:'line',
            yAxisIndex: 1,
            data:[20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
        },
        {
            name:'line4',
            type:'line',
            yAxisIndex: 1,
            data:[24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24]
        }
        
    ]
};
