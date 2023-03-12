let seriesData = [
    {
        name:'2017',
        data: [200, 170, 240, 244, 200, -220, 210, 244, 200, -220]
    },
    {
        name:'2018',
        data: [320, 302, 341, -374, 390, -450, 420,320, 302, 341]
    },
    {
        name:'2019',
        data: [320, 302, -341, 374, 390, 450, 420,302, -341, 374,]
    },
]
 let colorList = [
    ['#FAD961','#F76B1C'],
    ['#51C0F8','#4D7CFE'],
    ['#00D6BE','#0096AF'],
]
let legendData = [];
let series = [];
let seriesItem = {
    name: '2017',
    type: 'bar',
    stack: '总量',
    barMaxWidth:11,
    label: {
        show: false,
    },
    showBackground: true,
    backgroundStyle: {
        color: 'rgba(243,246,253,0.9)'
    },
    data: [200, 170, 240, 244, 200, -220, 210]
}
seriesData.forEach((item,index)=>{
   legendData.push(item.name);

   let itemColor = colorList[index];
   let curColor = '';
   if(Array.isArray(itemColor)){
        curColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: colorList[index][0]
        }, {
            offset: 1,
            color:  colorList[index][1]
        }])
   }else{
     curColor = itemColor
   }
   let itemStyle = {
        normal: {
            color: curColor
        }
   }
   series.push({...seriesItem,...item,itemStyle})
})

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: legendData,
        bottom:'3%',
        itemWidth:12,
        itemHeight:8,
        textStyle:{
            color:'#8998AC',
            fontSize:12,
            padding:[0,0,-3,0]
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        top:'5%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        splitLine: {
            show:false
         },
         axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    yAxis: [
        {
            type: 'category',
            data: ['国民生产力', '土地资本投入产出比', '劳动人口构成', '国民资本能力', '城市商业资源', '城际轨交资源', '城市公共资源','土地商业资源禀赋','栅格交通到达成本','城市节点分布'],
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#D1D1D1',
                    width: 1 //这里是为了突出显示加上的
                }
            },
           
            axisLabel: {
                textStyle: {
                    color: '#2C3F58',
                    fontSize: 12
                }
            }
        }
    ],
    series
};