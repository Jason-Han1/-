option = {
    backgroundColor:"#111c4e",
    title:{
        text:'TOP 10  OLT下行PON口量',
        left:'center',
        textStyle:{
            color:'#d3e0fa'
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            
            type : 'shadow'        
        }
    },
    legend: {
        data:['OLT下行PON口量'],
        right:10,
        textStyle:{
            color:'#d3e0fa'
        },
        top:25
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
                {
                    type : 'value',
                    axisLabel:{
                    interval:0,
                    color:'#d3e0fa'
                    },
                    splitLine:{
                        show:false
                    },
                    axisLine: {
                    show: false
                    },
                    axisTick: {
                        show: false
                    }
                }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['周一','周二','周三','周四','周五','周六','周日'],
            axisLabel:{
                interval:0,
                color:'#d3e0fa'
            },
            axisTick: {
                show:false
            },
            splitLine:{
                show:false
            },
            axisLine: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: [ 'rgba(250,250,250,0.05)','rgba(250,250,250,0.0)']
                }
            }
        }
    ],
    series : [
        {
            name:'OLT下行PON口量',
            type:'bar',
            stack: '总量',
            data:[320, 302, 341, 374, 390, 450, 420],
            barWidth: '50%',
        itemStyle:{
                    normal: {
                        color:'#a9a6da',
                        barBorderRadius: 20
                }
            }
            
        }
    ]
};
