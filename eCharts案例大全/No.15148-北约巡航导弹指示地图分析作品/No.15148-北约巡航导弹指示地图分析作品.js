var hours = [ '1a', '2a', '3a', '4a', '5a', '6a',
   
];
var days = ['Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday'
];


var data3 = [
    
    

   

    
    [2, 1, 3],
    [2, 2, 3],
    [2, 3, 3],
    [2, 4, 3],
  

   
    [3, 1, 3],
    [3, 2, 4],
    [3, 3, 3],
    [3, 4, 4],
  

   

   
    [5, 1, 6],
    [5, 2, 3],
    [5, 3, 3],
    [5, 4, 4],
   
];

var data2=[
    {   dawei:"123",
        name: '数据1',
        value: [0, 3, 4],
    },
    {   dawei:"123",
        name: '数据1',
        value: [0, 0, 5],
    },
    {   dawei:"123",
        name: '数据1',
        value: [0, 5, 3],
    }, 
    {   dawei:"123",
        name: '数据1',
        value: [3, 5, 3],
    }
    
]

var data0=[
   
    [0, 1, 0],
    [0, 2, 0],
    [0, 4, 0],
    
    [1, 0, 0],
    [1, 1, 0],
    [1, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [1, 5, 0],

    [2, 0, 0],
    [2, 5, 0],
    [3, 0, 0],
    
    [4, 0, 0],
    [4, 1, 0],
    [4, 2, 0],
    [4, 3, 0],
    [4, 4, 0],
    [4, 5, 0],
    
    [5, 0, 0],
    [5, 5, 0],
    
]

var data=["越南\n90730000",
          "尼泊尔\n28174724",
          "柬埔寨\n90730000",
          "新加坡\n90730000",
          "文莱达鲁萨兰国\n90730000",
          "马尔代夫\n90730000",
          "不丹\n90730000",
          
        //   ["印度尼西亚\n90730000"],
        //   ["马来西亚\n90730000"],
        //   ["泰国\n90730000"],
        //   ["缅甸\n90730000"],
        //   ["斯里兰卡\n90730000"],
          
        //   ["巴基斯坦\n90730000"],
        //   ["孟加拉国\n90730000"],
        //   ["菲律宾\n90730000"],
];
option = {
    tooltip: {},
    visualMap: {
        itemHeight:0,
        max: 20,
        inRange: {
            // color: ['#29383D','#313695']
        }
    },
    xAxis3D: {
        type: 'category',
        data: hours,
        name:' ',
        axisTick:{
            show:false
        },
        axisLabel:{
            show:false
        },
        splitLine:{
            show:false
        },
        
    },
    yAxis3D: {
        type: 'category',
        data: days,
        name:' ',
        axisTick:{
            show:false
        },
        axisLabel:{
            show:false
        },
        splitLine:{
            show:false
        }
        
    },
    zAxis3D: {
        type: 'category',
        name:' ',
        axisTick:{
            show:false
        },
        axisLabel:{
            show:false
        },
        splitLine:{
            show:false
        },
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        }
    },
    grid3D: {
        boxWidth: 150,
        boxDepth: 150,
        boxHeight:50,
        light: {
            main: {
                intensity: 1.2
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [
        {
          type:'bar3D',
          data: data2.map(function(item) {
            return {
                value: [item['value'][1], item['value'][0], item['value'][2]]
            }
          }),
          shading:'color',
          itemStyle:{
            color:'#01A1DB',
            opacity:0.8
          },
          label:{
              show:true,
              distance:5,
              formatter:({
                // 传入的原始数据项
                data,
                // 数据在传入的 data 数组中的 index
                dataIndex,
                seriesIndex
            })=>(data["value"])  
        //       formatter:data2.map(function(item) {
        //     return 
        //         "ddd"
            
        //   }),
          
          }
        },
        {
        type: 'bar3D',
        data: data3.map(function(item) {
            return {
                value: [item[1], item[0], item[2]]
            }
        }),
        shading: 'color',

        label: {
            show: true,
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },

        itemStyle: {
            color:'#787878',
            opacity: 0.8
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }
        },
        {
        type:'bar3D',
          data: data0.map(function(item) {
            return {
                value: [item[1], item[0], item[2]]
            }
          }),
          shading:'color',
          itemStyle:{
            color:'#D9D9D9',
            opacity:0.8
          },    
            
            
            
            
        }
    
    
    ]
}