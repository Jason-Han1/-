option = {
    backgroundColor:'#009afc',
    color:['#50FFEE','#85FF50','#C9D72D','#AAB9FF','#F693FF','#A6D2C3','#51dcff','#ff716d','#a5ff48','#ffa255'],
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:20
        }
    },
    legend: {
        textStyle:{
          color:'#fff',
          fontSize:16
        },
        data: ['大工业用电', '普通工业', '非工业','商业', '趸售', '居民生活','非居民', '农业生产', '农业排灌', '其它用电']
    },
    grid: {
        top:'10%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        tooltip: {
            axisPointer: {
                label: {
                    show: false ,
                    fontSize:20,
                }
            }
        },
        containLabel: true
    },
    xAxis: [
        {  show:true,
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'white',
                    width:1
                }
            },
            axisTick: {
                show :true,
                length:0,
                alignWithLabel: true
            },
            axisLabel:{
                show:true,
                margin:15,
                fontSize:25
            },
            data: ['广东','广西','云南','贵州','海南','深圳']
        }]
    ,
    yAxis: [
    {   
        show:true,
        name:'万只',
        nameTextStyle:{
            fontSize:'17',
            padding: [0, 50, 10, 0]
        } ,
        axisLine:{
            lineStyle:{
                color:'white',
                width:0
            }
        },
        axisTick: {
            show :false,
            alignWithLabel: true
        },
        axisLabel:{
            show:true,
            fontSize:25
        },
        splitLine: {
            show: true ,
            lineStyle: {
            color: 'white',
            type: 'dashed'}
            },
        type: 'value'
    }
    ],
    series: [
        {
            name: '大工业用电',
            type: 'line',
            barWidth:'20',
            stack: '用电类别',
            areaStyle: {},
            smooth: true,
            label:{
                show:true,
                fontSize: 16
            },
            data: [16,25,13,17,19,26]
        },
        {
            name: '普通工业',
            type: 'line',
            stack: '用电类别',
            areaStyle: {},
            smooth: true,
            label:{
                show:true,
                fontSize: 16
            },
            data: [13,70,32,15,20,11]
        },
        {
            name: '非工业',
            type: 'line',
            stack: '用电类别',
            areaStyle: {},
            smooth: true,
            label:{
                show:true,
                fontSize: 16
            },
            data: [25,30,60,40,10,70]
        },
        {
            name: '商业',
            type: 'line',
            stack: '用电类别',
            areaStyle: {},
            smooth: true,
            label:{
                show:true,
                fontSize: 16
            },
            data: [12,20,30,20,30,20]
        },
        {
            name: '趸售',
            type: 'line',
            stack: '用电类别',
            areaStyle: {},
            smooth: true,
            label:{
                show:true,
                fontSize: 16
            },
            data: [21,20,30,20,30,20]
        },
        {
            name: '居民生活',
            type: 'line',
            stack: '用电类别',
            areaStyle: {},
            smooth: true,
            label:{
                show:true,
                fontSize: 16
            },
            data: [15,20,30,20,30,20]
        },
        {
            name: '非居民',
            type: 'line',
            stack: '用电类别',
            areaStyle: {},
            smooth: true,
            label:{
                show:true,
                fontSize: 16
            },
            data: [31,20,30,20,30,20]
        },
        {
            name: '农业生产',
            type: 'line',
            stack: '用电类别',
            areaStyle: {},
            smooth: true,
            label:{
                show:true,
                fontSize: 16
            },
            data: [25,20,30,20,30,20]
        },
        {
            name: '农业排灌',
            type: 'line',
            stack: '用电类别',
            areaStyle: {},
            smooth: true,
            label:{
                show:true,
                fontSize: 16
            },
            data: [21,20,30,20,30,20]
        },
        {
            name: '其它用电',
            type: 'line',
            stack: '用电类别',
            areaStyle: {},
            smooth: true,
            label:{
                show:true,
                fontSize: 16
            },
            data: [12,20,30,20,30,20]
        }
    ]
}
