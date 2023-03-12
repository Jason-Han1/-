option = {
    title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['2018','2019']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'value',
        axisLabel: {
            formatter: function(param){
                console.log(param);
                return parseInt(param/60) + ":" + param % 60;
            }
        }
    },
    yAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['0M','10MM','50MM','100MM','150MM','200MM','250MM']
       
    },
    series: [
        {
            name:'2018',
            type:'line',
            data:[0,16, 157, 481, 1206],
            label:{
                show:true,
                position:'right',
                formatter:function(param){
                     console.log(param);
                       return parseInt(param.value/60) + ":" + param.value % 60;
                }
            }
            
        },
        {
            name:'2019',
            type:'line',
            data:[0,10, 125, 360, 1008,1200],
             label:{
                show:true,
                position:'left',
                formatter:function(param){
                     console.log(param);
                       return parseInt(param.value/60) + ":" + param.value % 60;
                }
            }
        }
    ]
};
