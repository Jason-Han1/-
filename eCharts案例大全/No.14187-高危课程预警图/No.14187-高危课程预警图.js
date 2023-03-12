app.title = '折柱混合';
var data1=[5, 15,8, 12, 25, 35, 13];
var data2=[20, 20, 20, 20, 20, 20, 20];
option = {
    backgroundColor: 'rgb(243,243,243)',
    color:['rgb(0,0,0)','rgb(0,0,0)'],

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
        data:['实际值','预警标准'],
        textStyle:{
            color:'#333',
        }
    },
    
    xAxis: [
        {
            type: 'category',
            name: '日期',
            data: ['1月22','1月23','1月24','1月25','1月26','1月27','1月28'],
            axisPointer: {
                type: 'shadow'
            },
            splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#555'
            },
        },
        
        
        axisLabel: {
                formatter: '{value} ',
                color: '#333'
            },
        
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '数量',
            min: 0,
            max: 50,
            interval: 10,
            axisLabel: {
                formatter: '{value} ',
                color: '#333'
            },
             splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#555'
            }
        }
        }
    ],
    series: [
        {
            name:'实际值',
            type:'bar',
            barWidth:30,
            itemStyle:{
                normal:{
                    color:function(item){
                        console.log(item)
                        //for(var i=0;i<data1.lefth;i++){
                            if(data1[item.dataIndex]>data2[item.dataIndex]){
                                return 'rgb(255,0,0)';
                            }
                            else{
                                return 'rgb(52,212,65)';
                            }
                        //}
                    }
                }},
            data:data1        
        },
        {
            name:'预警标准',
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
