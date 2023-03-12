function renderItem(params, api) {
    var yValue = api.value(1);
    var start = api.coord([api.value(0), yValue]);
    var size = api.size([api.value(1) - api.value(0), yValue]);
    var style = api.style();
    console.log(params.coordSys)
    if(params.dataIndex > 0)return null;
    if(!yValue)return null;
    return {
        type: 'rect',
        shape: {
            x: start[0] - params.coordSys.width/7/2 + 1,
            y: 45,
            width: params.coordSys.width/7 * 2,
            height: params.coordSys.height
        },
        style: style
    };
}


option = {
   tooltip: {
       trigger: 'axis',
       axisPointer: {            // 坐标轴指示器，坐标轴触发有效
           type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
       }
   },
   legend: {
       data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
   },
   grid: {
       left: '0px',
       right: '4%',
       bottom: '3%',
       top: '44px',
       containLabel: true
   },
   xAxis: [
       {
           type: 'category',
           data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
           nameTextStyle:{
               width: 200
           },
           width: 200,
       }
   ],
   yAxis: [
       {
           type: 'value',
           max:3500,
       }
   ],
   series: [
       {
           name: '搜索引擎',
           type: 'bar',
           stack: '搜索引擎',
           data: [862, 1018, 964, 1026, 1679, 1600, 1570],
              markPoint:{
               symbol:'emptyDiamond',
               symbolSize:20,
               itemStyle:{
                   color:"#e97332"
               },
               data:[{xAxis:0,y:60,event:'「事件备注」',msg:"因为。。。。导致。。。"},
               {xAxis:4,y:60,event:'「事件备注」',msg:"因为gcfcgcgcgcgcgc。。。。导致2。。。"}],
               emphasis:{
                   label:{
                       position: 'right',
                       color:'#fff',
                       align:"left",
                       borderColor :"rgb(51, 51, 51)",
                       backgroundColor :"rgba(50, 50, 50, 0.7)",
                       fontSize:14,
                       borderRadius:4,
                       padding:10,
                       width:220,
                       lineHeight:20,
                       zlevel:1,
                       formatter:function(params){
                           return  params.data.event +'\n' +params.data.msg.replace(/(.{22})/g,function(i){
                               return i + '\n';
                               
                           })
                       }
                   }
               }
           },
           markArea: {
               label:{
                   color:"#000",
                   offset:[0,-10]
               },
               itemStyle:{
                   color:"#a8d5fe"
               },
               data: [ [{
                   name: '中秋',
                  //xAxis: '周一',
                  x:0
               }, {
                   x:20
                  // xAxis: '周二',
               }], [{
                   name: '春节',
                   xAxis: '周六'
               },{
                   xAxis: '周日'
               }] ]
           }
       },
       {
           name: '百度',
           type: 'bar',
           //barWidth: 5,
           stack: '搜索引擎',
           zlevel:1,
           data: [620, 732, 701, 734, 1090, 1130, 1120]
       },
       {
           name: '谷歌',
           type: 'bar',
           stack: '搜索引擎',
           zlevel:1,
           data: [120, 132, 101, 134, 290, 230, 220]
       },
       {
           name: '必应',
           type: 'bar',
           //barCategoryGap:"10%",
           //barWidth:'50%',
           stack: '搜索引擎',
           zlevel:1,
           data: [500, 0, 500, 500, 0, 0, 0]
       },
       {
        type: 'custom',
        name: "",
        renderItem: renderItem,
        label: {
            show: true,
            position: 'top',
            formatter: ()=>{
                return '春节'
            }
        },
        tooltip: {
            formatter: ()=>{
                return '春节'
            }
        },
        data: [1, 2, 0,0, 0, 0, 0]
    }
   ]
};

console.log(myChart)