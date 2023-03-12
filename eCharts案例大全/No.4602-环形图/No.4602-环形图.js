const data = [{
        name: '数据1',
        value: 36,
        rate: 12
    },
    {
        name: '数据2',
        value: 20,
        rate: 20
    },
    {
        name: '数据3',
        value: 16,
        rate: -40
    },
    {
        name: '数据4',
        value: 10,
        rate: -15
    },
    {
        name: '数据5',
        value: 9,
        rate: 12
    },
   
]
let fontSize=30;
let value="16,186,046";
let center=['35%', '50%'];
option = {
    backgroundColor:"#000",
    color:["#4ba771","#29a1e6","#2979e6 ","#5d46d3"],
    title: {
       
    },
    legend: {
        // selectedMode: false, // 取消图例上的点击事件
        type: 'plain',
        icon: 'rect',
        orient: 'vertical',
        right: '30%',
        top: '35%',
        align: 'left',
        itemGap: 15,
        itemWidth: 20, // 设置宽度
        itemHeight: 20, // 设置高度
        symbolKeepAspect: false,
        textStyle: {
            color: '#fff',
            rich: {
                name: {
                    verticalAlign: 'right',
                    align: 'left',
                    width: 35,
                    fontSize,
                    lineHeight:40
                },
                value: {
                    align: 'left',
                    width: 60,
                    fontSize:26,
                    color:"#f4f4f4"
                },
                count: {
                    align: 'left',
                    width: 80,
                   fontSize:26,
                    color:"#f4f4f4"
                },
                
            }
        },
        data: data.map(item => item.name),
        formatter: function(name) {
            let str = ``;
            // console.log("objData", objData)
            data.map((item, index) => {
                if (item.name == name) {
                    let per=(item.value/100)*100;
                    str = `{name|${name}}\n{value|${(item.value)}}{count|${per.toFixed(2)}%}`
                }
            })
            return str;
        },
        
    },
    series: [{
        name: '数量',
        type: 'pie',
        radius: ['40%', '55%'],
        center,
        data: data,
        label: {
            normal: {
                show: true,
                
                position: 'center',
                formatter: `{value|${value}}\n{text|总量}`,
                rich: {
                    text: {
                        align: 'center',
                        verticalAlign: 'middle',
                        padding: 8,
                        fontSize: 50,
                        color:"#fff",
                    },
                    value: {
                        align: 'center',
                        verticalAlign: 'middle',
                        fontSize: 50,
                        color:"#fff",
                    }
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '12'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        }
    }, {
            name: '',
            type: 'pie',
            startAngle: 80,
            radius: ['38%'],
            hoverAnimation: false,
               center,
            itemStyle: {
                color: 'rgba(66, 66, 66, 0)',
                borderWidth: 1,
                borderColor: '#fff',
            },
            data: [100],
        },{
            name: '',
            type: 'pie',
            startAngle: 80,
            radius: ['58%'],
            hoverAnimation: false,
               center,
            itemStyle: {
                color: 'rgba(66, 66, 66, 0)',
                borderWidth: 1,
                borderColor: '#fff',
            },
            
            data: [100],
        }]
};