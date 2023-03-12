
var list = [
        {
            name:'60-70',
            value:3
        },
        {
            name:'70-80',
            value:2
        },
        {
            name:'80-90',
            value:3
        },
        {
            name:'90-100',
            value:4
        },
         {
            name:'100以上',
            value:5
        }
    ]
var sum = 0;
 list.forEach((item,index)=>{
    sum+=item.value;
})
var seri = [];
function coup(i){
    console.log(i)
    if(i === 0){
        return 0;
    }else{
        var sum2 = 0;
        list.forEach((item,index)=>{
            if(index >= i) return;
            sum2+=item.value;
        })
        
        console.log(i,sum2,sum,(sum2/sum)*360)
        return (sum2/sum)*360
    }
    
}
list.forEach((item,index)=>{
    seri.push({
        name: item.name,
        type: 'pie',
        radius: [((index+1)*'6')+'%', ((index+1)*'6')+2.5+'%'],
        label: false,
        
        // startAngle: 24,
        startAngle: coup(index),
        clockWise: false, //顺时加载
        hoverAnimation: true,
        hoverOffset: 3,
        itemStyle:{
            normal: {
                label: {
                    show: true,
                    color: '#65D5FF',
                    fontSize: 18,
                },
                labelLine: {
                    //smooth: 0.2,
                    length: 80,
                    length2: 80
                },
            }
        },
        data: [{
                value: item.value,
                name: item.name,
                itemStyle: {
                    color:'#0DDCFB',
                    shadowColor:'rgba(0, 224, 255, 0.4)',
                    shadowBlur:24
                },
                label:{
                    show: true,
                    color: '#65D5FF',
                    fontSize: 16,
                    formatter: [
                         '{b| {b} }',
                          '{c| {c}}人',
                        '{d| {d}% }',
                       
                    ].join(' '),
                    rich: {
                        d: {
                        },
                        b: {
                        },
                    }
                    }
                
            },
            {
                value: sum,
                hoverAnimation: false, //鼠标移入变大
                itemStyle: {
                    normal: {
                        color: 'rgba(0, 151, 251, 0.19)',
                         shadowColor:'rgba(0, 224, 255, 0.4)',
                        shadowBlur:24,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        color: 'rgba(0, 151, 251, 0.09)'
                    }
                },
                labelLine:{
                    show:false
                },
                label:{
                    show:false
                }
            }

        ]
    })
})
option = {
    backgroundColor: '#002D54',
    textStyle: {
        fontSize: 16,
        color: '#40E7F4 '
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} : {c} ({d}%)"
    },
   
    series: seri
};