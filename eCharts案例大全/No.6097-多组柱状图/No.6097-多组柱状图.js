var data=[{name:'天津分公司', value:[{name:'在线功率',value:50},{name:'热备功率',value:80},{name:'冷备功率',value:90}]},
        {name:'深圳分公司',value:[{name:'在线功率',value:50},{name:'热备功率',value:80},{name:'冷备功率',value:90}]},
        {name:'上海分公司', value:[{name:'在线功率',value:50},{name:'热备功率',value:80},{name:'冷备功率',value:90}]},
        {name:'湛江分公司',value:[{name:'在线功率',value:50},{name:'热备功率',value:80},{name:'冷备功率',value:90}]}]
var  category=['在线功率','热备功率','冷备功率'];

var color= [['#5472d3','#009afe'],['#0c4db2','#02b88f'],['#c50010','#fc4250'],['#009afe','#03b890'] ];
var grid=[];
var xAxis = [];
var yAxis = [];
var series = [];
data.map(function(e,i){
    var datas=[];
    var xAxisIndex= i;
    var yAxisIndex= i;
    var gridIndex=i;
    var  category=[];
     e.value.map(function(v,j){
       category.push(v.name)
       datas.push({
           value:v.value,
           name:v.name,
           itemStyle: {
               label: {
                   show: false,
               },
               labelLine: {
                   show: false
               },
               normal: {
                   color: {
                       type: 'linear',
                       x: 0,
                       y: 0,
                       x2: 1,
                       y2: 0,
                       colorStops: [{
                           offset: 0, color: color[j][0] // 0% 处的颜色
                       }, {
                           offset: 1, color: color[j][1] // 100% 处的颜色
                       }],
                       global: false // 缺省为 false
                   },
               }

           },
       })
   });
    grid.push({
        left: 5,
        right: 0,
        height:100/data.length-10+'%',
        top: 100/data.length*i+5+'%',
    });
    xAxis.push({
        type: 'value',
        gridIndex:gridIndex,
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        },
    });
    yAxis.push({
        type: 'category',
        data: category,
        inverse:true,
        gridIndex:gridIndex,
        name: e.name,
        nameGap :0,
        nameLocation:'start',
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            align:'left'
        },
        axisLine: {
            show:false
        },
        axisTick: {
            show:false
        },
        axisLabel: {
            show:false
        },
    });
    series.push({
        name: e.name,
        type: 'bar',
        label: {
            show: false
        },
        xAxisIndex:xAxisIndex,
        yAxisIndex:yAxisIndex,
        data: datas
    });
});

var option = {
    backgroundColor:'#000a39',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{a}'+'</br>'+'{b}'+'\n: '+'{c}',
    },
    grid: grid,
    xAxis: xAxis,
    yAxis: yAxis,
    series: series
};