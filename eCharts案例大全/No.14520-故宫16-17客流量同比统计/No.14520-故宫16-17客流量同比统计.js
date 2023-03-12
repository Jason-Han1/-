//------------------------------------引用请注明出处
var data1=[260, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122];
var data2=[120, 110, 125, 145, 122, 165, 122, 260, 182, 191, 134, 150];
var axisData=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];

var barData1=[];
var barData2=[];
for(var i=0;i<axisData.length;i++){
    barData1.push(Math.min(data1[i],data2[i]));
    barData2.push(Math.abs(data1[i]-data2[i]));
}


option = {
    backgroundColor: '#333',
    title: {
        text: '故宫16-17客流量同比统计',
        subtext:'作者:花自飘凌水自流',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            color: '#F1F1F3'
        },
        subtextStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: '#F1F1F3'
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: 'cyan'
            }
        },
        formatter:function(params){
            console.log(params);
            var tooltipStr=
                '<p>2016年 : '+data1[params[0].dataIndex]+' 千人/次</p>'+
                '<p>2017年 : '+data2[params[0].dataIndex]+' 千人/次</p>'+
                '<p>差值 : '+barData2[params[0].dataIndex]+' 千人/次</p>';
                
            return tooltipStr;
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['2017', '2016',],
        right: '4%',
        top: '10%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '15%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel:{
            textStyle:{
                color:'#fff'
            }
        },
        data: axisData
    },
    yAxis: {
        type: 'value',
        name: '客流量（千人/次）',
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#fff',
                fontSize: 14,
            }
        },
        splitLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    series: [
        {
            name: '2017',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)',
                    borderColor: 'rgba(137,189,2,0.27)',
                    borderWidth: 8
    
                }
            },
            data: data1
        }, 
        {
            name: '2016',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 8
    
                }
            },
            data: data2
        }, 
    
        // bar图
        {
            type:'bar',
            stack:'test',
            // barWidth:'10%',
            itemStyle:{
                normal:{
                    color:'rgba(0,0,0,0)'
                }
            },
            data:barData1,
            tooltip:{
                show:false
            }
            
        },
        {
            type:'bar',
            stack:'test',
            barWidth:4,
            itemStyle:{
                normal:{
                    color:function(params){
                        // console.log(params);
                        if(data1[params.dataIndex]>data2[params.dataIndex]){
                            return 'green';
                        }else if(data1[params.dataIndex]<data2[params.dataIndex]){
                            return 'red';
                        }else{
                             return 'rgba(0,0,0,0)';
                        }
                    },
                    barBorderRadius:2
                }
            },
            data:barData2,
            tooltip:{
                show:false
            }
            
        }
    
    ]
};