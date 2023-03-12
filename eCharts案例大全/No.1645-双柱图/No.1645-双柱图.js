var name = ['平石头','印钞石','西刘庄','黑林沟','顾家台','青羊沟'];
var type = ['旧房','搬迁','旧房','搬迁','搬迁','搬迁'];
var value = [0.33,-0.13,0.43,-0.34,0.55,-0.62];

var data1 = [];
var data2 = [];

name.forEach((item,index)=>{
    if(value[index] > 0){
        data1.push({
            name:name[index],
            type:type[index],
            value:value[index]
        })
        data2.push({
            name:name[index],
            type:type[index],
            value:''
        })
    }else{
        data1.push({
            name:name[index],
            type:type[index],
            value:''
        })
        data2.push({
            name:name[index],
            type:type[index],
            value:value[index]
        })
    }
})

console.log(data1,data2)
var option = {
    baseOption: {
        backgroundColor: '#08093f',
        timeline: {

            show: false,
            top: 0,
            data: []
        },
        grid: [
            // 左边柱子
            {
                show: false,
                left: '5%',
                top: '10%',
                bottom: '5%',
                containLabel: true,
                width: '40%'
            },
            // 中间年龄
            {
                show: false,
                left: '51%',
                top: '10%',
                bottom: '8%',
                width: '0%'
            },
            // 右边柱子
            {
                show: false,
                right: '5%',
                top: '10%',
                bottom: '5%',
                containLabel: true,
                width: '40%'
            }
        ],
        xAxis: [{
                name:'\n\n(%)',
                nameLocation:'start',
                nameTextStyle:{
                    color:'#a8d5fe',  
                    fontSize:14
                },
                type: 'value',
                // inverse: true,
                min:-1,
                max:0,
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#273E76'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: '#a8d5fe',
                    fontSize:14
                },
                splitLine: {
                    show: true,
                    lineStyle:{
                        color:'#273E76'
                    }
                }
            },
            {
                gridIndex: 1,
                show: false
            },
            {
                name:'\n\n(%)',
                nameTextStyle:{
                    color:'#a8d5fe',
                    fontSize:14
                },
                gridIndex: 2,
                max:1,
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#273E76'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: '#a8d5fe',
                    fontSize:14
                },
                splitLine: {
                    show: true,
                    lineStyle:{
                        color:'#273E76'
                    }
                }
            }
        ],
        yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: name
            },
            {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'center',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        align: 'center',
                        color: '#00eaff',
                        fontSize: 15
                    }
                },
                data: name
            },
            {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: name
            }
        ],
        legend:{
                        show:true,
                        top:'3%',
                        itemWidth:12,
                        itemHeight:12,
                        textStyle:{
                            fontSize:14,
                            color:'#a8d5fe'
                        }
                    },
        series: []
    },
    options: [{
        series: [
            {
                name: '旧房',
                type: 'bar',
                color:'#0980F8',
                xAxisIndex: 0,
                yAxisIndex: 0,
                barWidth: 17,
                itemStyle: {
                    normal: {
                        color: (params)=>{
                            if(params.data.type === '旧房'){
                                return '#F8B209'
                            }else{
                                return '#0980F8'
                            }
                        }
                    }
                },
                data: data2
            },
            {
                name: '搬迁',
                type: 'bar',
                color:'#F8B209',
                xAxisIndex: 2,
                yAxisIndex: 2,
                barWidth: 17,
                itemStyle: {
                    normal: {
                        color: (params)=>{
                            if(params.data.type === '旧房'){
                                return '#F8B209'
                            }else{
                                return '#0980F8'
                            }
                        }
                    }
                },
                data: data1
            }
        ]
    }]
}