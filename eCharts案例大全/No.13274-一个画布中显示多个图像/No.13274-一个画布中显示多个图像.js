var N_POINT = 20;
var grids = [];
var xAxes = [];
var yAxes = [];
var series = [];
var titles = [];
var count = 0;
var data = [];
var legends=[];
var colors=['#EE8262','#B5C334','#FCCE10','#E87C25','#B4EEB4',
                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                  '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0',
                  '#E87C25','#FCCE10','#C1232B','#B5C334','#72D871']
var easingFuncs=[
     {"name":'纽曼粉',"value": '纽曼粉',"xdata":['','','','','','','今天','','','','','','','','','','','','','','',''],"ydata":[6.82,6.57,7.21,6.79,6.67,6.61,6.62,6.76,6.80,6.85,6.94,7.09,6.88,6.89,6.81,7.26,6.97,7.23,7.23,7.31,7.40,7.19],"type":'line'},
{"name":'粉',"value": '粉',"xdata":['','','','','','','今天','','','','','','','','','','','','','','',''],"ydata":[6.82,6.57,7.21,6.79,6.67,6.61,6.62,6.76,6.80,6.85,6.94,7.09,6.88,6.89,6.81,7.26,6.97,7.23,7.23,7.31,7.40,7.19],"type":'line'},
{"name":'曼粉',"value": '曼粉',"xdata":['','','','','','','今天','','','','','','','','','','','','','','',''],"ydata":[6.82,6.57,7.21,6.79,6.67,6.61,6.62,6.76,6.80,6.85,6.94,7.09,6.88,6.89,6.81,7.26,6.97,7.23,7.23,7.31,7.40,7.19],"type":'line'},
{"name":'纽粉',"value": '曼粉',"xdata":['','','','','','','今天','','','','','','','','','','','','','','',''],"ydata":[6.82,6.57,7.21,6.79,6.67,6.61,6.62,6.76,6.80,6.85,6.94,7.09,6.88,6.89,6.81,7.26,6.97,7.23,7.23,7.31,7.40,7.19],"type":'line'},
{"name":'纽曼粉',"value": '纽曼粉',"xdata":['','','','','','','今天','','','','','','','','','','','','','','',''],"ydata":[6.82,6.57,7.21,6.79,6.67,6.61,6.62,6.76,6.80,6.85,6.94,7.09,6.88,6.89,6.81,7.26,6.97,7.23,7.23,7.31,7.40,7.19],"type":'line'},
{"name":'纽曼粉',"value": '纽曼粉',"xdata":['','','','','','','今天','','','','','','','','','','','','','','',''],"ydata":[6.82,6.57,7.21,6.79,6.67,6.61,6.62,6.76,6.80,6.85,6.94,7.09,6.88,6.89,6.81,7.26,6.97,7.23,7.23,7.31,7.40,7.19],"type":'line'},
{"name":'纽曼粉',"value": '纽曼粉',"xdata":['','','','','','','今天','','','','','','','','','','','','','','',''],"ydata":[6.82,6.57,7.21,6.79,6.67,6.61,6.62,6.76,6.80,6.85,6.94,7.09,6.88,6.89,6.81,7.26,6.97,7.23,7.23,7.31,7.40,7.19],"type":'line'},
{"name":'纽曼粉',"value": '纽曼粉',"xdata":['','','','','','','今天','','','','','','','','','','','','','','',''],"ydata":[6.82,6.57,7.21,6.79,6.67,6.61,6.62,6.76,6.80,6.85,6.94,7.09,6.88,6.89,6.81,7.26,6.97,7.23,7.23,7.31,7.40,7.19],"type":'line'},
{"name":'纽曼粉',"value": '纽曼粉',"xdata":['','','','','','','今天','','','','','','','','','','','','','','',''],"ydata":[6.82,6.57,7.21,6.79,6.67,6.61,6.62,6.76,6.80,6.85,6.94,7.09,6.88,6.89,6.81,7.26,6.97,7.23,7.23,7.31,7.40,7.19],"type":'line'},
];
echarts.util.each(easingFuncs, function (easingFunc, name) {
    grids.push({
        show: false,
        containLabel: false,
        borderWidth: 0,
        borderColor:'#fff'
    });
    xAxes.push({
        type: 'category',
        show: true,
        name:'日',
        nameGap:'1',
        nameTextStyle:{
        color:'#fff'
        },
        gridIndex: count,
        axisLabel:{
        show:false,
        interval:0,
        textStyle: {
    color:'#fff',
        fontSize:14
}
        //interval: '0'
        },
        axisTick:{
        show:false
        },
       
        data:easingFunc.xdata
               //data:[]
    });
    yAxes.push({
        type: 'value',
        show: false,
        scale:true,
        axisLabel:{
        show:false
        },
        splitLine:{
        show:true,
        lineStyle:{
        width:0.2
        }
        },
        nameGap:'1',
        axisTick:{
        show:false
        },
        name: easingFunc.name,
        nameTextStyle:{
        color:'#fff',
        fontSize:14
        },
        gridIndex: count
    });
    series.push({
        name: easingFunc.name,
        type:  easingFunc.type,
        xAxisIndex: count,
        yAxisIndex: count,
       data: easingFunc.ydata,
       // data:[],
        showSymbol: true,

        lineStyle:{
        normal:{
        color:colors[count],
        width:2
        }
        },
        animationEasing: easingFunc.name,
        animationDuration: 1000,
        markPoint : {
                data : [
                    { value : easingFunc.ydata[5], xAxis: 5, yAxis: easingFunc.ydata[7],symbolSize:50},
                    // { value : '短期', xAxis: 14, yAxis: easingFunc.ydata[14],symbolSize:20},
                    // { value : '长期', xAxis: 21, yAxis: easingFunc.ydata[21],symbolSize:20},
                ],
                itemStyle:{ 
                    normal:{
                    label:{ 
                            show: true, 
                            formatter:function (data) {
                 return data.value;
                 },    
                          } 
                    } 
                },
            }
    });
    titles.push({
                show:true,
        textAlign: 'center',
        text: easingFunc.value,
        textStyle: {
            fontSize: 16,
            color:'black',
            fontWeight: 'normal'
        }
    });
    count++;
});
//定位每个图形的位置
//定位每个图形的位置
		var columNumber = 3;
		var rowHeight = 160;
		var rowMargin = 5;
		echarts.util.each(grids, function (grid, idx) {
		    grid.left = ((idx % columNumber) * (100/columNumber)+3) + '%';
		    grid.top = (parseInt(idx / columNumber) * (rowHeight + 35) + 48) + 'px';
		    grid.width = (100 / columNumber -5) + '%';
		    grid.height = rowHeight + 'px';
		    console.log(idx,grid.left,grid.top,grid.width,grid.height)
		    titles[idx].left = parseFloat(grid.left) +parseFloat(grid.width) / 2+ '%';
		    titles[idx].top = parseFloat(grid.top)-20 + 'px';
		});
//var rowNumber =  Math.floor(Math.sqrt(count));
//echarts.util.each(grids, function (grid, idx) {
    //grid.left = ((idx % rowNumber) / rowNumber * 100+3) + '%';
    //grid.top = (Math.floor(idx / rowNumber) / rowNumber * 90+4) + '%';
    //grid.width = (1 / rowNumber * 92-5) + '%';
    //grid.height = (1 / rowNumber * 45) + '%';
    //titles[idx].left = parseFloat(grid.left) +parseFloat(grid.width) / 2+ '%';
    //titles[idx].top = parseFloat(grid.top)-3.5 + '%';
//});
   
option = {
        backgroundColor:'white',
title: titles,
tooltip: {
            trigger: 'axis',
            textStyle:{
                align:'left'
              },
            formatter: function(item) {
                return '点击查看详情';
            }
        },
    grid: grids,
    xAxis: xAxes,
    yAxis: yAxes,
    series: series
};
myChart.setOption(option);
myChart.on("click", function (param){
            console.log('hhhhhhhhh',param);
            //param.dataIndex+':'+option.series[0].data[param.dataIndex].name
            alert('1');
          });