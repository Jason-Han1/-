// 线不连贯
let data = [{
    name: '其他支出',
    value: 465
}, {
    name: '用餐支出',
    value: 800
}, {
    name: '用水支出',
    value: 585
}, {
    name: '用电支出',
    value: 648
}]
let colorList = ['#00FCFD', '#1F6EFF', '#3E82FF', '#8BF39A'];




let xData = []
let yData = []
let outLineData = []
data.map((item, index) => {
    xData.push(item.name);
    yData.push({
        itemStyle: {
            normal: {
                color: colorList[index],
            },

        },
        value: item.value,
        name: item.name,
    })
})
option = {
    backgroundColor: '#00070B',
    xAxis: {
        data: xData,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        axisLine: {
            show: false
        }
    },
    series: [{

            type: 'pie',
            radius: ['30%', '60%'],
            center: ["50%", "50%"],
            itemStyle: {
                color: "#00070B",
                borderColor:'#00070B',
                borderWidth:5
            },
            labelLine: {
                normal: {
                    length: 40,
                    length2: 0,
                    lineStyle:{
                        color:'transparent'
                    }
                }
            },
            label: {
                normal: {
                    formatter: params => {
                        // return '{hr|}'
                        console.log(params)
                        return `{cir|●}\n{name|}{value|${params.name}}\n{price|${params.value}元}\n{percent|${params.percent}%}\n{hr|————————————————}`
                    },
                    rich: {
                        value:{
                            color:'#C3F0FF',
                            padding:[-24,5,0,5]
                        },
                        price:{
                            color:'#00BAFF',
                            padding:[-12,110,0,110]
                        },
                        percent:{
                            color:'#00BAFF',
                            padding:[7,165,0,165]
                        },
                        hr:{
                            padding:[-0,0,0,0],
                            height:1,
                        },
                        cir:{
                            fontSize:20,
                            opacity:1,
                            padding:[-63,-10,0,-10]
                        },
                        bdbt:{
                            borderColor:'t',
                            borderWidth:0.5
                        }
                    },
                }
            },
            data: yData,
            z: -1
        },
    ]
};