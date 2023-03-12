data = [
    {
        name:'高水平专业群建设',
        value:100
    },
    {
        name:'特色项目建设',
        value:100
    },
    {
        name:'高水平学校建设',
        value:100
    },
    {
        name:'高水平教学质量建设',
        value:100
    }
]
function _pie3() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "#113C70",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    return dataArr

}
let newData = []
let sum = 0;
data.map(item=>{
    sum+=item['value']
})
data.map(item=>{
    newData = [...newData,item,{value:sum/100}]
})

let color = [
    '#41EFFF',
    'transparent',
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                offset:0,
                color:'#76ED5A'
            },
            {
                offset:1,
                color:'#07DFA5'
            }
        ]
    },
    'transparent',
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                offset:0,
                color:'#0E51F3'
            },
            {
                offset:1,
                color:'#088EFF'
            }
        ]
    },
    'transparent',
    {
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorStops:[
            {
                offset:0,
                color:'#FB416D'
            },
            {
                offset:1,
                color:'#C400AB'
            }
        ]
    },
    'transparent',
]
let pieData = [];

for(let i = 0 ; i < 100 ; i++ ){
    pieData.push(1)
}

option = {
    color:color,
    series: [
        {
            type: 'gauge',
            center:['50%','50%'],
            radius:'70%',
            startAngle:0,
            endAngle:360,
            axisLabel:{
                show:false
            },
            splitLine:{
                show:false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#03F3F7' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#05327C' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    width: 2
                },
                length: 8,
                splitNumber: 5
            },
        },
        {
            type: 'pie',
            data:newData,
            center: ['50%','50%'],
            radius: ['30%','45%'],
            itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#66799D',
                    padding: [0, -100, 0, -100],
                    fontSize: 13,
                    formatter: function(params) {
                     
                        if (params.name !== '') {
                            return '{percent|' + params.value + '%}\n{cir|●}\n{name|' + params.name + '}';
                        } else {
                            return '';
                        }
                    },
                    rich: {
                        name: {
                            color: "#CAE7FF",
                            fontSize: 13,
                            align: 'center'
                        },
                        percent: {
                            color: "#31C2FF",
                            fontSize: 16,
                            align: 'center'
                        },
                        cir: {
                            fontSize: 10,
                            opacity: 1,
                            // align: 'left'
                            padding:[0, 92, 0, 92]
                        }
                    }
                },
                labelLine: {
                    length:27,
                    length2: 70,
                    show: true,
                    color: '#00ffff'
                }
            }
        },
            name: '',
            hoverAnimation: false,
        },
        {
            type: 'pie',
            center:['50%','50%'],
            radius: ['23%','23.5%'],
            labelLine:{
                show:false
            },
            label:{
                show:false
            },
            data:_pie3()
        },
        {
            type: 'pie',
            center:['50%','50%'],
            radius: ['17%','17.5%'],
            labelLine:{
                show:false
            },
            itemStyle:{
                color:'#184F81'  
            },
            label:{
                show:false
            },
            data:[1]
        },
        {
            type: 'pie',
            center:['50%','50%'],
            radius: ['10%','10.5%'],
            itemStyle:{
                color:'#184F81'  
            },
            labelLine:{
                show:false
            },
            label:{
                show:false
            },
            data:[1]
        }
    ]
};
