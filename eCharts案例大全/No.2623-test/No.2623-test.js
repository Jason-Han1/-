
data = [{
    name: '应完成任务',
    value: 4158
},{
    name: '执行中任务',
    value: 6024
},{
    name: '已完成任务',
    value: 7248
},{
    name: '逾期未完成任务',
    value: 6018
}]

let yaxisData = []
let countList = []
data.map(item=>{
    yaxisData.push(item.name)
    countList.push(item.value)
})
let max = Math.max(...countList)
console.log(max)

let xData = [];
let yData = [];

option = {
    backgroundColor:'#051145',
    grid:{
        left:'3%',
        right:'3%',
        top:'4%',
        bottom:'4%',
        containLabel:true
    },
    xAxis: {
        show: false,
        max: max,
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },

    },
    yAxis: [
        {
            type: 'category',
            // data: data,
            barWidth: 20,
            inverse: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle:{
                    color:'#C5DCFF',
                    fontSize:13
                }
            },
            data:yaxisData
        },
        {
            type: 'category',
            data:countList,
            inverse: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel:{
                formatter:number=>{
                    return `${number}个`
                },
                color:'#27F8F6',
                fontSize:16
            }
        }
    ],
    series: [
        {
            type: 'bar',
            data: data,
            barWidth: 6,
            barGap:'-100%',
            max:max,
            itemStyle: {
                normal: {
                    color: {
                        x:0,
                        y:0,
                        x2:1,
                        y2:0,
                        colorStops:[
                            {
                                offset:'0',
                                color:'#05327C'
                            },
                            {
                                offset:1,
                                color:'#03F3F7'
                            }
                        ]
                    },
                    borderRadius:[3,3,3,3]
                }
            },
            z: 12
        },
        {
            type: 'bar',
            data: data.map(item=>{
                return max
            }),
            barWidth: 6,
            max:max,
            itemStyle: {
                normal: {
                    color: 'rgba(0,48,80,0.3)',
                    borderRadius:[3,3,3,3]
                }
            },
            z: 1
        }
    ]
};