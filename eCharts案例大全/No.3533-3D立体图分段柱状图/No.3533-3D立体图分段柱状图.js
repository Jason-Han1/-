let barData1=[100,101,81]
let barData2=[220,182,191]
let barData3=[150,80,40]

let pictorialBar=[]
let pictorialBar2=[]
for(let i=0;i< barData1.length;i++){
    pictorialBar.push(barData1[i]+barData2[i])
    pictorialBar2.push(barData1[i]+barData2[i]+barData3[i])
}

option = {
    title: {
        text: '3D立体图分段柱状图',
        x: 'center'
    },

    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
    },
    xAxis: {
     
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
            margin: 20, //刻度标签与轴线之间的距离。
        },

    },
    yAxis: {
           data: ["入职", "离职", "培训"],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eee',
                type: 'solid'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
             margin:20,
            textStyle: {
                color: '#888',
                fontSize:20,
                
            },
        }
    },
    series: [
        // 第一个底
        {//三个最低下的圆片
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [15, 50],
            "symbolOffset": [-7, 0],
            "z": 12,
              itemStyle: {//lenged文本
                color: '#0093a8',
            },
            
            "data":barData1
        }, 
        
        
        //下半截柱状图
        {
            name: '2020',
            type: 'bar',
            barWidth: 50,
            barGap: '-100%',
            itemStyle: {//lenged文本
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                       "color": "rgba(19,204,204,0.8)"
                    },
                    {
                        offset: 1,
                         "color": "rgba(19,204,204,0.8)"
                    }
                ])
            },
           
            data: barData1
        }, 
        
        
        
         // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20 
        { // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20 
            type: 'bar',
            barWidth: 50,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
                color: 'transparent'
            },
            data: barData1
        },
        
         {
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [20, 50],
            "symbolOffset": [ 7 , 0],
             "symbolPosition": "end",
            "z": 12,
             itemStyle: {//lenged文本
                color:'#00ffff',
            },
            "data": barData1
        },
        
        

       
        
        {
            name: '2019',
            type: 'bar',
            barWidth: 50,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
                // barBorderRadius: 20, 
                color: "rgba(253,69,0,0.7)"
            },
            //上班截开始
            data: barData2
        },
                {
            "name": "", //头部
            "type": "pictorialBar",
            "symbolSize": [20, 50],
            "symbolOffset": [ 7 , 0 ],
             "symbolPosition": "end",
            
            "z": 12,
                itemStyle: {//lenged文本
                color: '#fd4500'
            },
            "data": pictorialBar
        },
        
        
         {
            name: '2019',
            type: 'bar',
            barWidth: 50,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
                // barBorderRadius: 20, 
                color:"rgba(153,153,153,0.8)"
            },
            //上班截开始
            data: barData3
        },
         {
            "name": "", //头部
            "type": "pictorialBar",
            "symbolSize": [15, 50],
            "symbolOffset": [7,0],
             "symbolPosition": "end",
            
            "z": 12,
                itemStyle: {//lenged文本
                color:"#999999"
            },
            "data": pictorialBar2
        },
        
        
        
        
      
        
        
        
        


    ]
};