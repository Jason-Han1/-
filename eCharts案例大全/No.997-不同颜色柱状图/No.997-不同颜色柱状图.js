// 立体柱状图

const colors = [
    {
        type: "linear",
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#E7821E"
            },
            {
                offset: 1,
                color: "#FFAF4A"
            }
        ]
    },
    {
        type: "linear",
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#56AB80"
            },
          
            {
                offset: 1,
                color: "#60D298"
            }
        ]
    },
    {
        type: "linear",
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#4570C6"
            },
          
            {
                offset: 1,
                color: "#96B9FF"
            }
        ]
    },
    {
        type: "linear",
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#0D7CC7"
            },
            {
                offset: 1,
                color: "#6BCFFA"
            }
        ]
    },
    {
        type: "linear",
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#008E30"
            },
            {
                offset: 1,
                color: "#3BD44B"
            }
        ]
    },
    {
        type: "linear",
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#289DF5"
            },
            {
                offset: 1,
                color: "#17E9FD"
            }
        ]
    },
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#4FC3B2"
            },
            {
                offset: 1,
                color: "#5AD1BD"
            }
        ]
    }
];
// const barWidth = 30;
var xData = ["本科", "大专", "硕士", "MBA", "其他"]
var dataList = [200,234,432,343,222]
var data = dataList.map((item,index) =>{
    return  {
                    value: item,
                    itemStyle: {
                        normal: {
                            color: colors[index]
                        }
                    }
                }
})
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: "item"
    },
    xAxis: {
        data: xData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle:{
                type:'dashed',
            color:'#BFBFBF'
            }
        },
        splitLine:{
            show:false
        },
        
        axisLabel: {
            color: "#BFBFBF",
            fontSize: 12
        }
    },
    yAxis: {
        show: true,
          axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
                splitLine:{
            show:false
        },
         axisLabel: {
            color: "#BFBFBF",
            fontSize: 12
        }
        
    },
    grid: {
        left: '5%',
        right: '5%',
        top:'5%',
        bottom: '5%',
    },
    series: [{
            z: 1,
            type: "bar",
            barWidth: 12,
            data:data
        },

    ]
}