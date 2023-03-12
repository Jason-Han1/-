// 左上角
let xdata =[768,860,1678]
// 右上角
let xdata2 =[668,760,1578]
// 左下角
let xdata3 =[568,660,1478]
// 右下角
let xdata4 =[480,560,1378]
let ydata=["本校值","全省均值","全国均值"]
let colorList = [
    {
        type:'linear',
        colorStops:[
            {
                offset:0,
                color:'#70F3C2'
            },
            {
                offset:1,
                color:'#48D69E'
            }
        ]
    },
    {
        type:'linear',
        colorStops:[
            {
                offset:0,
                color:'#FEAD5A'
            },
            {
                offset:1,
                color:'#FFD18C'
            }
        ]
    },
    {
        type:'linear',
        colorStops:[
            {
                offset:0,
                color:'#5998FF'
            },
            {
                offset:1,
                color:'#5CC0FF'
            }
        ]
    }
]
let newxdata=[],newxdata2=[],newxdata3=[],newxdata4=[]
xdata.map((item,index)=>{
    newxdata.push({
        value:item,
        itemStyle:{
               barBorderRadius: [0, 4, 4, 0], // 圆角（左上、右上、右下、左下）
               color:colorList[index]
        }
    })
 })
 xdata2.map((item,index)=>{
    newxdata2.push({
        value:item,
        itemStyle:{
               barBorderRadius: [0, 4, 4, 0], // 圆角（左上、右上、右下、左下）
               color:colorList[index]
        }
    })
 })
  xdata3.map((item,index)=>{
    newxdata3.push({
        value:item,
        itemStyle:{
               barBorderRadius: [0, 4, 4, 0], // 圆角（左上、右上、右下、左下）
               color:colorList[index]
        }
    })
 })
   xdata4.map((item,index)=>{
    newxdata4.push({
        value:item,
        itemStyle:{
               barBorderRadius: [0, 4, 4, 0], // 圆角（左上、右上、右下、左下）
               color:colorList[index]
        }
    })
 })
option = {
    backgroundColor: '#00043A',
    tooltip: {
        trigger: 'axis',
        show: false,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        show:false
    },
    grid: [
          {
            left: '10%',
            width: '35%',
            top: '10%',
            bottom: '50%',
            right:'3%',
            containLabel: true,
        },
        {
            left: '60%',
            width: '35%',
            top: '10%',
            bottom: '50%',
            right:'10%',
            containLabel: true,
        },
        {
            left: '10%',
            width: '35%',
            top: '55%',
            bottom: '10%',
            right:'3%',
            containLabel: true,
        },
        {
            left: '60%',
            width: '35%',
            top: '55%',
            bottom: '10%',
            right:'3%',
            containLabel: true,
        },
    ],
    xAxis: [{
     show:false,
    gridIndex: 0,
    type: 'value',
    },
    {
    show:false,
    gridIndex: 1,
    },
    {
    show:false,
    gridIndex: 2,
    },
    {
    show:false,
    gridIndex: 3,
    }
    ],
    yAxis: [{
        gridIndex:0,
        splitLine: {
            show: false
        },
        axisLine: { //y轴
            show: true,
            lineStyle:{
                color:"#31C2FF"
            }
        },
        type: 'category',
        axisTick: {
            show: false
        },
        inverse: true,
        data: ydata,
        axisLabel: {
            color: '#CAEEFF',
            fontSize: 12,
        }
    },
    {
         gridIndex:1,
        splitLine: {
            show: false
        },
        axisLine: { //y轴
            show: true,
            lineStyle:{
                color:"#31C2FF"
            }
        },
        type: 'category',
        axisTick: {
            show: false
        },
        inverse: true,
        data: ydata,
        axisLabel: {
            color: '#CAEEFF',
            fontSize: 12,
        }
    },
    {
         gridIndex:2,
        splitLine: {
            show: false
        },
        axisLine: { //y轴
            show: true,
            lineStyle:{
                color:"#31C2FF"
            }
        },
        type: 'category',
        axisTick: {
            show: false
        },
        inverse: true,
        data: ydata,
        axisLabel: {
            color: '#CAEEFF',
            fontSize: 12,
        }
    },
    {
         gridIndex:3,
        splitLine: {
            show: false
        },
        axisLine: { //y轴
            show: true,
            lineStyle:{
                color:"#31C2FF"
            }
        },
        type: 'category',
        axisTick: {
            show: false
        },
        inverse: true,
        data: ydata,
        axisLabel: {
            color: '#CAEEFF',
            fontSize: 12,
        }
    }
    ],
    series: [{
        name: '',
        type: 'bar',
         xAxisIndex: 0,
         yAxisIndex: 0,
        barWidth: 24, // 柱子宽度
        label: {
            show: true,
            position: 'right', // 位置
            color: '#FFFFFF',
            fontSize: 12,
            distance: 3, // 距离
			formatter: '{c} ' // 这里是数据展示的时候显示的数据
        }, // 柱子上方的数值
        // itemStyle: {
        //     barBorderRadius: [0, 4, 4, 0], // 圆角（左上、右上、右下、左下）
        //         color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
        //             offset: 0,
        //             color: '#5CCFFF'
        //         }, {
        //             offset: 1,
        //             color: '#4C8EFA' 
        //         }], false), // 渐变
        // },
        data:newxdata
    },
    {
        name: '',
        type: 'bar',
         xAxisIndex: 1,
         yAxisIndex: 1,
        barWidth: 24, // 柱子宽度
        label: {
            show: true,
            position: 'right', // 位置
            color: '#FFFFFF',
            fontSize: 12,
            distance: 3, // 距离
			formatter: '{c} ' // 这里是数据展示的时候显示的数据
        }, // 柱子上方的数值
        data:newxdata2
    },{
        name: '',
        type: 'bar',
        barWidth: 24, // 柱子宽度
         xAxisIndex: 2,
         yAxisIndex: 2,
        label: {
            show: true,
            position: 'right', // 位置
            color: '#FFFFFF',
            fontSize: 12,
            distance: 3, // 距离
			formatter: '{c} ' // 这里是数据展示的时候显示的数据
        }, // 柱子上方的数值
        data:newxdata3
    },{
        name: '',
        type: 'bar',
        barWidth: 24, // 柱子宽度
         xAxisIndex: 3,
         yAxisIndex: 3,
        label: {
            show: true,
            position: 'right', // 位置
            color: '#FFFFFF',
            fontSize: 12,
            distance: 3, // 距离
			formatter: '{c} ' // 这里是数据展示的时候显示的数据
        }, // 柱子上方的数值
        data:newxdata4
    },
    ]
};