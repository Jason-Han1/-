app.title = '坐标轴刻度与标签对齐';

option = {
    title:{
        x: 'center',
        text:'铁矿石贸易同比及预测'
    },
    legend:{
        selectedMode:'single',
        orient:'verical',
        top:45,
        right:20,
        data:['中国进口','全球出口','华南进口','华东进口','华中进口','澳洲出口','巴西出口','南非出口'],
    },
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'中国进口',
            type:'bar',
            barWidth: '30',
            color:'#AA65C9',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
        {
            name:'中国进口',
            type:'bar',
            color:'#CC4E60',
            barWidth: '30',
            data:[15, 56, 190, 384, 350, 300, 120]
        },
        {
            name:'全球出口',
            type:'bar',
            barWidth: '30',
            color:'#AA65C9',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
        {
            name:'全球出口',
            type:'bar',
            color:'#CC4E60',
            barWidth: '30',
            data:[15, 56, 190, 384, 350, 300, 120]
        },
        {
            name:'华南进口',
            type:'bar',
            barWidth: '30',
            color:'#AA65C9',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
        {
            name:'华南进口',
            type:'bar',
            color:'#CC4E60',
            barWidth: '30',
            data:[15, 56, 190, 384, 350, 300, 120]
        },
        {
            name:'华东进口',
            type:'bar',
            barWidth: '30',
            color:'#AA65C9',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
        {
            name:'华东进口',
            type:'bar',
            color:'#CC4E60',
            barWidth: '30',
            data:[15, 56, 190, 384, 350, 300, 120]
        },
        {
            name:'华中进口',
            type:'bar',
            barWidth: '30',
            color:'#AA65C9',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
        {
            name:'华中进口',
            type:'bar',
            color:'#CC4E60',
            barWidth: '30',
            data:[15, 56, 190, 384, 350, 300, 120]
        },
        {
            name:'巴西出口',
            type:'bar',
            barWidth: '30',
            color:'#AA65C9',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
        {
            name:'巴西出口',
            type:'bar',
            color:'#CC4E60',
            barWidth: '30',
            data:[15, 56, 190, 384, 350, 300, 120]
        },
        {
            name:'南非出口',
            type:'bar',
            barWidth: '30',
            color:'#AA65C9',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
        {
            name:'南非出口',
            type:'bar',
            color:'#CC4E60',
            barWidth: '30',
            data:[15, 56, 190, 384, 350, 300, 120]
        },
        {
            name:'澳洲出口',
            type:'bar',
            barWidth: '30',
            color:'#AA65C9',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
        {
            name:'澳洲出口',
            type:'bar',
            color:'#CC4E60',
            barWidth: '30',
            data:[15, 56, 190, 384, 350, 300, 120]
        }
        
    ]
};
