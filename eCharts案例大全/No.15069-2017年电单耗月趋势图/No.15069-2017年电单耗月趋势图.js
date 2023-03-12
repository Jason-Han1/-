app.title = '折柱混合';
var data1=[155.77, 156.93,87.58, 123.2, 225.6, 176.7, 135.6];
var data2=[175, 175, 175, 175, 175, 175, 175];
option = {
    color:['#059500','#E43D4F'],
    title:{
        text:'2017年电单耗月趋势图'
    },
    tooltip: {
        
        trigger: 'axis',
        
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['实际值','目标值']
    },
    xAxis: [
        {
            type: 'category',
            name: '月份',
            data: ['1月','2月','3月','4月','5月','6月','7月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '耗量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name:'实际值',
            type:'bar',
            barWidth:20,
            itemStyle:{
                normal:{
                    color:function(item){
                        console.log(item)
                        //for(var i=0;i<data1.lefth;i++){
                            if(data1[item.dataIndex]>data2[item.dataIndex]){
                                return '#E43D4F';
                            }
                            else{
                                return '#CE9D40';
                            }
                        //}
                    }
                }},
            data:data1        
        },
        {
            name:'目标值',
            type:'line',
            data:data2,
            itemStyle:{
                normal:{
                    color:'#E43D4F'
                }
                
            }
                
        }
    ]
};
