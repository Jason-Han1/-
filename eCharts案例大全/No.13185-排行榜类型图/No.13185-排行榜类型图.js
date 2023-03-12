

app.title = '价值创造';

var grayBar = [ 1, 1, 1, 1];
var paiming = [ 4, 3, 2, 1];
var zongjine = [1209, 2309,3024, 5040];

var city = ['一月份', '三月份', '二月份', '四月份'];
const colors = ['#11D0A8', '#FF9F01', '#781414', '#03A6AB', '#E8B47B', '#F54323', '#D011C9'];
// const colors = ['red','green'];
// const colors = ['yellow'];
const richs = {};
const labels = {};

function col(ind){
    let i = colors.length;
    console.log("i:",i)
    if(ind>=i){
        let a = ind%i;
        return colors[a];
    }else{
        return colors[ind];
    }
}

let _zongjine = [];
zongjine.forEach((value,index)=>{
    _zongjine.push({
         name: city[index],
         value: value,
         itemStyle: {
             normal: {
                 color: col(index),
                 label: {
                    show: true,
                    position: 'insideRight',
                    formatter: '    ',
                    backgroundColor: '#fff',
                    distance: -0,
                    borderColor: col(index),
                    borderWidth:6,
                    borderRadius: 20,
                    shadowColor:col(index),
                    shadowBlur:6,
                    // shadowOffsetX:0
                    // color: '#fff'
                  }
             }
         }
    })
})

 city.forEach((ele, i) => {
     let a = 'a' + i
     richs[a] = {
         color: col(i),
         fontSize: 18,
     }
 })
 
 city.forEach((ele, i) => {
     let b = 'a' + i
     labels[b] = {
        show: true,
        position: 'insideRight',
        formatter: '    ',
        backgroundColor: '#fff',
        distance: 0,
        borderColor: col(i),
        borderWidth: 2,
        borderRadius: 20,
     }
 })


option = {
     tooltip:{
         trigger:'item',
        
    },
    backgroundColor:"#fff",
    color:["#559fef"],
    xAxis: [
        {
            show: false,
        },
        //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
        {
            show: false,
            max:5040
        }
    ],
    yAxis: [{
        type: 'category',
        show: false,
        data: city,
        
    }
    ],
    series: [
         //蓝条--------------------我是分割线君------------------------------//
          {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth:20, //统计条宽度
            xAxisIndex:1,
            itemStyle: {
                normal: {
                  barBorderRadius: 20, //统计条弧度
                //   label: {
                //     show: true,
                //     position: 'insideRight',
                //     formatter: '   ',
                //     backgroundColor: '#fff',
                //     distance: 0,
                //     borderColor: 'rgba(255, 234, 0,0.8)',
                //     borderWidth: 10,
                //     borderRadius: 20,
                //     // color: '#fff'
                //   }
            
                
                },
            },
           
           
            max: 1,
            labelLine: {
                show: false,
            },
            z:100,
            data: _zongjine,
            formatter:function(params){
                return params.value;
            }
        },
        //右边数据条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
  //         xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-100%',
            barWidth: 20, //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                         color: '#ecf0f4'
                },
            },
            label: {
                normal: {
                    show: true,
                    //label 的position位置可以是top bottom left,right,也可以是固定值
                    //在这里需要上下统一对齐,所以用固定值
                  position: ["80%", '-180%'],
                    rich:richs,
                    formatter: function(data) {
                        const series1 = option.series[0].data;
                        let str = ""
                        series1.forEach((ele, i) => {
                             if (ele.name === data.name) {
                                 let aa = "a" + i
                                 str += '{' + aa + '| ' +zongjine[data.dataIndex]+'}';
                             }

                         });
                         return str;
                        //富文本固定格式{colorName|这里填你想要写的内容}
                        // return '{green|'+zongjine[data.dataIndex] +' 件'+'}';
                        
                    },
                }
            },
            z:3,
            formatter:function(params){
                return '';
            },
            data: grayBar
        },
        
        //背景色--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: 20, //统计条宽度 
            itemStyle: {
                normal: {
                  barBorderRadius: 20,
                    color: '#ecf0f4'
                },
            },
              label: {
                normal: {
                    show: true,
                    position: ["60%", '-180%'],
                   
                    fontSize:18,
                    textStyle: {
                        color: '#000',
                    },
                    formatter: function(data) {
                 
                        return "已出售";
                        // return  '{num|No.'+paiming[data.dataIndex]+'}{green|  '+city[data.dataIndex]+'}';
                        
                    },
                }
            },
            data: grayBar,
            formatter:function(params){
                return "";
            }
                
        },
         //左边数据条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-100%',
            barWidth: 20, //统计条宽度
            itemStyle: {
                normal: {
                    //barBorderRadius: 20,
                    color: '#ecf0f4'
                },
            },
            label: {
                normal: {
                    show: true,
                    position: [-20, '-180%'],
                   
                    fontSize:18,
                    textStyle: {
                        color: '#000',
                    },
                    formatter: function(data) {
                        //富文本固定格式{colorName|这里填你想要写的内容}
                    //    console.log(data);
                        return "No."+paiming[data.dataIndex]+"  "+city[data.dataIndex];
                        // return  '{num|No.'+paiming[data.dataIndex]+'}{green|  '+city[data.dataIndex]+'}';
                        
                    },
                }
            },
             formatter:function(params){
                return '12';
            },
            data: grayBar
        }
      

    ]
};
