var xAxisData = ['海口', '三亚', '儋州', '五指山', '琼海', '万宁', '东方', '定安', '屯昌', '澄迈','临高','白沙'];
var legendData= ['2015','2016','2017'];

var serieData = [];
var metaDate = [
    [120, 140, 100, 120, 300, 230, 130, 170,140, 120, 300, 230],
    [200, 120, 300, 200, 170, 300, 200, 180,200, 190, 300, 200],
    [100,200, 140, 300, 200, 180, 100, 300, 230, 130, 100 ,300,]
]


for(var v=0; v < legendData.length ; v++){
    var serie = {
        name:legendData[v],
        type: 'line',
        smooth: true,
        symbol:"circle",
        symbolSize: 3,
        data: metaDate[v]
    };
    serieData.push(serie)
}
var colors = ["#FE7271","#FFF000","#01FFC8","#00DDF8","#6474FF"];
var option = {
    backgroundColor: '#0C193B',
    legend: {
    	show:true,
    	left:"right",
    	data:legendData,
    	y:"5%",
        itemWidth:18,
        itemHeight:12,
        textStyle:{
            color:"#fff"
        },
    },
    color:colors,
    grid: {
        left: '2%',
        top:"12%",
        bottom: "5%",
        right:"5%",
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : { 
            type : 'shadow'
        }
    },
    xAxis: [
        {   
            type: 'category',
            axisLine: { 
                show: true,
                lineStyle:{ 
                    color:'#6173A3'
                }
            },
            axisLabel:{
                interval:0,
                textStyle:{
                    color:'#9ea7c4',
                    fontSize:14
                }
            },
            axisTick : {
                show: false
            },
            data:xAxisData,
        },
    ],
    yAxis: [
        {   
            name: '单位：亿元',
            nameTextStyle: {
                color: '#fff'  
            },
            axisTick : {
                show: false
            },
            splitLine: {
                show:false
            },
            axisLabel:{
                textStyle:{
                    color:'#9ea7c4',
                    fontSize:14
                }
            },
            axisLine: { 
                show: true,
                lineStyle:{ 
                    color:'#6173A3'
                }
            },
        },
    ],
    series:serieData
};