var data = [
     {name: '海门', value: 9},
     {name: '鄂尔多斯', value: 12},
     {name: '招远', value: 12},
     {name: '舟山', value: 12},
     {name: '齐齐哈尔', value: 14},
     {name: '盐城', value: 15},
     {name: '赤峰', value: 16},
     {name: '青岛', value: 18},
     {name: '乳山', value: 18},
     {name: '金昌', value: 19},
     {name: '泉州', value: 21},
     {name: '胶南', value: 22},
     {name: '南通', value: 23},
     {name: '拉萨', value: 24},
     {name: '云浮', value: 24},
     {name: '承德', value: 25},
     {name: '厦门', value: 26},
     {name: '丹东', value: 27},
     {name: '曲靖', value: 27},
     {name: '烟台', value: 28},
     {name: '福州', value: 29},
     {name: '即墨', value: 30},
     {name: '抚顺', value: 31},
     {name: '阳泉', value: 31},
     {name: '莱州', value: 32},
     {name: '昆山', value: 33},
     {name: '揭阳', value: 34},
     {name: '荣成', value: 34},
     {name: '连云港', value: 35},
     {name: '葫芦岛', value: 35},
     {name: '常熟', value: 36},
     {name: '江阴', value: 37},
     {name: '蓬莱', value: 37},
     {name: '韶关', value: 38},
     {name: '太原', value: 39},
     {name: '寿光', value: 40},
     {name: '盘锦', value: 40},
     {name: '长治', value: 41},
     {name: '深圳', value: 41},
     {name: '珠海', value: 42},
     {name: '宿迁', value: 43},
     {name: '海口', value: 44},
     {name: '江门', value: 45},
     {name: '章丘', value: 45},
     {name: '肇庆', value: 46},
     {name: '吴江', value: 47},
     {name: '石嘴山', value: 49},
     {name: '沈阳', value: 50},
     {name: '嘉兴', value: 51},
     {name: '银川', value: 52},
     {name: '张家港', value: 52}
];

option = {
    title: {
        text: 'Disk Usage',
        left: 'center'
    },
    
    tooltip: {
        trigger: 'item',
        showContent: true,
        formatter: 'test~{b}: {c}',
        backgroundColor:'#333'//悬浮框背景色设置
        
    },
    
    
    //-------------------------------颜色设置
    //--------------------连续的颜色
   //  visualMap: {
   //      type: 'continuous',//piecewise
   //      //splitNumber:3,
   //      min: 0,
   //      max: 60,
   //      inverse:true,
   //      text:['高','低'],
   //      realtime: false,//是否实时响应
   //      calculable : true,//是否显示拖拽用的手柄
   //      orient :'vertical',//visualMap 组件放置方式 horizontal
   //      color: ['orangered','lightskyblue'],
   //      hoverLink:true //手柄显示大概数值
   //  },
   //  
      //--------------------离散的颜色  
 //       visualMap: {
 //       type: 'piecewise',//piecewise
 //       splitNumber:5,
 //       min: 0,
 //       max: 60,
 //       inverse:true,
 //       text:['高','低'],
 //       realtime: false,//是否实时响应
 //       calculable : true,//是否显示拖拽用的手柄
 //       orient :'vertical',//visualMap 组件放置方式 horizontal
 //       color: ['orangered','lightskyblue'],
 //       hoverLink:true, //手柄显示大概数值
 //       selectedMode:'multiple'//单选，single
 //   },
    
    series: [{
        type: 'treemap',
        width: '70%',
        height: '65%',
        top: '15%',
        roam: false, //是否开启拖拽漫游（移动和缩放）
        nodeClick: false, //点击节点后的行为,false无反应
        upperLabel: true,
        breadcrumb: {  //面包屑 关闭
            show: false
        },

        label: { //描述了每个矩形中，文本标签的样式。
            normal: {
                show: true,
                position: ['10%', '10%'],
                formatter: '{b}: {c}'
            }
        },
        //--------------------树图中每个节点的样式
        itemStyle: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },
                borderWidth: 3,
                gapWidth:6,
                strokeColor:'#311b92',
                borderColor: '#f2f2f2',//grey
            },

            emphasis: {
                label: {
                    show: true,//树图中个图形和标签高亮的样式

                }
            }
        },
        data: data
    }]


}