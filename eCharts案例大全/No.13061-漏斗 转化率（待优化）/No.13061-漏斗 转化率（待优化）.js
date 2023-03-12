const funnelData =[
                {value: 60, name: '访问',type:'funnel'},
                {value: 50, name: '咨询',type:'funnel'},
                {value: 20, name: '订单',type:'funnel',
                itemStyle:{
                    
                    normal:{
                        color: '#E25424'
                    }
                }},
                {value: 80, name: '点击',type:'funnel'},
                {value: 100, name: '展现',type:'funnel',
                itemStyle:{
                    
                    normal:{
                        color: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [{
        offset: 0, color: 'red' // 0% 处的颜色
    }, {
        offset: 1, color: 'blue' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}
                    }
                }
                    
                }
            ];
       
    
const cvsWidth =950;
const cvsHeight =793;
const optTop = 60;
const optBottom=60;
const maxs = 80;
const maxSize = maxs + '%';
const colorList = ['#E25424','#FCBB13','6DC0AC','#22B14C','#B5E61D'];
const rx =  (10+maxs) +'%';
const lx ='10%';
let lineData =[];
let pointData =[{
            name: '总转化率10%',
            x: '50%',
            y: 10,
            symbol:'roundRect',
            symbolSize:[110,25],
            symbolOffset:[0,5],
             itemStyle:{
                 normal:{
                    color:'#ffffff',
                    align:'right',
                 },
                 
            },
             label:{
                 normal:{
                    color:'#000000',
                    fontSize:16,
                    align:'center',

                 },
                 emphasis:{
                     color:'#007DFD'
                 }
                 
            }
        }];

//const d = (80/100)*
const funnelHeight =cvsHeight-optTop-optBottom;
const funnelItemHeight = funnelHeight/funnelData.length;
funnelData.sort((a,b)=>a.value<b.value).forEach((item,index)=>{
    // 好像是maxsize为125% ft 满屏
    const itemWidth =item.value*(maxs/125);
    const y = index*funnelItemHeight + funnelItemHeight/2+optTop;
    
    lineData.push( [
        {   
            
            name: '两个屏幕坐标之间的标线',
            x: (50+(itemWidth/2)) + '%',
            y:y
        },
        {
            x: rx,
            y: y,
            symbolSize:[1,1]

        }
    ]);
    lineData.push( [
        {   
            
            name: '两个屏幕坐标之间的标线',
            x: (50-(itemWidth/2)) + '%',
            y:y
        },
        {
            x: lx,
            y: y,
            symbolSize:[1,1]

        }
    ]);
    pointData.push({
            name: '',
            x: rx,
            y: y-10,
            symbol:'circle',
            symbolSize:[10,10],
            symbolOffset:[15,10],
            itemStyle:{
                normal:{
                    color:colorList[index]
                }
            }
        });
         pointData.push({
            name: '进入列表名称',
            x: rx,
            y: y-10,
            symbol:'circle',
            symbolSize:[0,1],
             symbolOffset:[35,0],
        
            label:{
                 normal:{
                 color:'#7D7D7D',
                  align:'left',
                  fontSize:14,
                 }
                
            }
        });
        
        pointData.push({
            name: '10000000000',
            x: rx,
            y: y-10,
            symbol:'circle',
            symbolSize:[0,1],
            symbolOffset:[35,25],
            label:{
                 normal:{
                    color:'#000000',
                    fontSize:24,
                    align:'left',
                 }
            }
        });
        
        pointData.push({
            name: '转化率',
            x: lx,
            y: y-10,
            symbol:'circle',
            symbolSize:[0,1],
             symbolOffset:[-15,0],
        
            label:{
                 normal:{
                 color:'#7D7D7D',
                  align:'right',
                  fontSize:14,
                 }
                
            }
        });
        pointData.push({
            type:'converRate',
            name: '90%',
            x: lx,
            y: y-10,
            symbol:'roundRect',
            symbolSize:[60,25],
            symbolOffset:[-35,25],
            itemStyle:{
                 normal:{
                    color:'#ffffff',
                    align:'right',
                 },
                 
            },
            label:{
                 normal:{
                    color:'#000000',
                    fontSize:24,
                    align:'right',
                    position:[55,0]
                 },
                 emphasis:{
                     color:'#007DFD'
                 }
                 
            }
        });
        
});
option = {
    tooltip: {
        trigger: 'item',
        formatter: function(tp){
            if(tp.data.type==='funnel'){
                return tp.value;
            }
            return '';
        },
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            top: optTop,
            //x2: 80,
            bottom: optBottom,
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: maxSize,
            sort: 'descending',
            markPoint:{
            
                label:{
                    normal:{
                    show:true,
                    formatter:function(pt){
                        return pt.name;
                    }
                    }
                },
                data: pointData
            },
            markLine:{
                silent:true,
                lineStyle:{
                    normal:{
                        color:'#eeeeee',
                        type:'solid'
                    }
                   
                },
                label:{
                    normal:{
                    show:false,
                    },
                    
                },
                data: lineData
            },
            gap: 2,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                     show: false,
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: funnelData,
            }
    ]
};
myChart.on('click', function (params) {
   if(params.data.type==='converRate'){
       
       console.log(params,'converRate');
   }
});

