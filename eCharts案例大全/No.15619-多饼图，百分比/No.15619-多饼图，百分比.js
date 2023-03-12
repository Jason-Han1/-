var  data=[
                
                {name:'第一批次',value:123},
                {value:234, name:'二批次未到货金额'},
              
                {value:1048, name:'一批次未到货金额'},
                {value:251, name:'一批次到货金额'}
            ];
            
function series(){
    return [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            center :['30%','30%'],
            label: {
                normal: {
                    position: 'inner',
                    formatter:"{b} ({d}%)"
                }
                
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                
                {value:679, name:'第二批次'},
                {value:1548, name:'第一批次'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '50%'],
            center:['30%','30%'],
            label:{
                normal:{
                position:'inside',
                formatter:"{b} ({c})"
                }
            },
            data:data
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['0', '30%'],
            center:['75%','30%'],
            label:{
                normal:{
                position:'outside',
                formatter:"{b} ({c})"
                }
            },
            data:data
        },
         {
            name:'访问来源',
            type:'pie',
            radius: ['20%', '22%'],
            center:['15%','75%'],
            label:{
                normal:{
                position:'center',
                textStyle:{
                color:'#c23531',
               fontSize:30
                },
                formatter:'{b}'
                // formatter:function(p){
                //     console.log(p.dataIndex);
                //     if(p.dataIndex==0){
                //     return p.name+'\n'+p.value*100+'%';
                //     }else{
                //         return '';
                //     }
                // }
                }
            },
            data:[{
        name:'占有率',        
        value: 0.6,
        itemStyle: {
            normal: {
                color: '#f2c967',
                shadowBlur: 10,
                shadowColor: '#f2c967'
            }
        }
    }, {
        name:'60%',
        value: 0.4,
        itemStyle: {
            normal: {
              //  color: 'transparent'
              color:'#d4d0c7'
            }
        }
    }]
        },
         {
            name:'访问来源',
            type:'pie',
            radius: ['20%', '22%'],
            center:['40%','75%'],
            label:{
                normal:{
                position:'center',
                textStyle:{
                color:'#c23531',
               fontSize:30
                },
                formatter:'{b}'
                // formatter:function(p){
                //     console.log(p.dataIndex);
                //     if(p.dataIndex==0){
                //     return p.name+'\n'+p.value*100+'%';
                //     }else{
                //         return '';
                //     }
                // }
                }
            },
            data:[{
        name:'占有率',        
        value: 0.75
        /*itemStyle: {
            normal: {
                color: '#f2c967',
                shadowBlur: 10,
                shadowColor: '#f2c967'
            }
        }*/
    }, {
        name:'75%',
        value: 0.25,
        itemStyle: {
            normal: {
              //  color: 'transparent'
              color:'#d4d0c7'
            }
        }
    }]
        },{
            name:'访问来源',
            type:'pie',
            radius: ['20%', '22%'],
            center:['60%','75%'],
            label:{
                normal:{
                position:'center',
                textStyle:{
                color:'#c23531',
               fontSize:30
                },
                formatter:'{b}'
                // formatter:function(p){
                //     console.log(p.dataIndex);
                //     if(p.dataIndex==0){
                //     return p.name+'\n'+p.value*100+'%';
                //     }else{
                //         return '';
                //     }
                // }
                }
            },
            data:[{
        name:'占有率',        
        value: 0.7
        /*itemStyle: {
            normal: {
                color: '#f2c967',
                shadowBlur: 10,
                shadowColor: '#f2c967'
            }
        }*/
    }, {
        name:'70%',
        value: 0.3,
        itemStyle: {
            normal: {
              //  color: 'transparent'
              color:'#d4d0c7'
            }
        }
    }]
        }
    ];
    
}            

option = {
    title:{
        text:'嵌套环形图'
    },
    tooltip: {
        show:false,
        trigger: 'item',
    //     position: "insideTopRight",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    //    formatter:"{b} ({d})"
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        show:false,
        orient: 'vertical',
        x: 'left',
        data:['第二批次','第一批次']
    },
    series: series()
};