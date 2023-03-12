//------------------------------------引用请注明出处
var data1=[1210.94, 1230, 797.76, 1092.64, 1282.32, 1193.64, 993.92, 1032.38, 1129.38, 1263.48, 1220.94, 1059.93];
var data2=[994.94, 1025.28, 644.82, 989.83, 1073.98, 1042.42, 728.78, 1014.76, 1057.83, 1064.92, 1032.63, 1017.42];
var axisData=['0点','2点','4点','6点','8点','10点','12点','14点','16点','18点','20点','22点'];

var barData1=[];
var barData2=[];
for(var i=0;i<axisData.length;i++){
    barData1.push(Math.min(data1[i],data2[i]));
    barData2.push(Math.abs(data1[i]-data2[i]));
}
option = {
    backgroundColor: '#333',
    tooltip: {
        show:true,
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: 'cyan'
            }
        },
        formatter:function(params){
            var tooltipStr=
                '<p style="color:#fff">差值 : '+barData2[params[0].dataIndex].toFixed(2)+'</p>';
                
            return tooltipStr;
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
        min: 600
    },
    yAxis: {
        type: 'category',
        data: axisData,
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
            type:'bar',
            stack:'test',
            // barWidth:'10%',
            itemStyle:{
                normal:{
                    color:'rgba(0,0,0,0)'
                }
            },
            data:barData1,
            label:{
                show: true,
               position: 'insideRight',
               offset:[0, 10],
               fontSize:10,
               
               color: 'rgba(255,255,255,0.8)',
            }
            
        },
        {
            type:'bar',
            stack:'test',
            barWidth:4,
            itemStyle:{
                normal:{
                    color:function(params){
                        if(data1[params.dataIndex]>data2[params.dataIndex]){
                            return '#27d08a';
                        }else if(data1[params.dataIndex]<data2[params.dataIndex]){
                            return 'red';
                        }else{
                             return 'rgba(0,0,0,0)';
                        }
                    },
                    barBorderRadius:2
                }
            },
            label:{
                show: true,
               position: 'right',
               offset:[0, 10],
               fontSize:10,
               color: 'rgba(255,255,255,0.8)',
               formatter:function(params){
                   return barData2[params.dataIndex].toFixed(2)
               }
            },
            data:barData2,
            // tooltip:{
            //     show:false
            // }
            
        }
    
    ]
};