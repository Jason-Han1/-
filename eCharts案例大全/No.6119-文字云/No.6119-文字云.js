
//首先添加脚本https://oisanjavax.github.io/echarts-wordcloud/dist/echarts-wordcloud.min.js
 let data=[
    { name: "松原东收费站1", value: 220,textStyle:{ normal:{color:'#a77af2'}} },
    { name: "松原东收费站2", value: 210 ,textStyle:{ normal:{color:'#ffbd77'}} },
    { name: "松原东收费站3", value: 200,textStyle:{ normal:{color:'#90f6f3'}}  },
    { name: "松原东收费站4", value: 190 ,textStyle:{ normal:{color:'#a77af2'}} },
    { name: "松原东收费站5", value: 180 ,textStyle:{ normal:{color:'#b4e05e'}} },
    { name: "松原东收费站6", value: 170 ,textStyle:{ normal:{color:'#a77af2'}} },
    { name: "松原东收费站7", value: 160,textStyle:{ normal:{color:'#46c263'}}  },
    { name: "宁江收费站", value: 150,textStyle:{ normal:{color:'#bd304b'}}  },
    { name: "查干湖收费站", value: 140 ,textStyle:{ normal:{color:'#fceffc'}} },
    { name: "松原南收费站", value: 130 ,textStyle:{ normal:{color:'#a77af2'}} },
    { name: "永平收费站", value: 100,textStyle:{ normal:{color:'#a148ad'}}  },
    { name: "五棵树收费站7", value: 60 ,textStyle:{ normal:{color:'#bd304b'}} },
  ];
  option={
              background: '#052560',
             tooltip:{
                 show:true,
                 textStyle:{
                     fontSize:16,
                     color:'#3c3c3c'
                 }
             },
             series:[{
                 type:"wordCloud",
                 gridSize:15,// 网格大小，各项之间间距
                 sizeRange:[30,10],// 字体大小范围
                 width:'100%',
                 height:'100%',
                 rotationRange:[0,0],// 文字旋转角度范围
                 shape:"circle",
                 autoSize:{
                     enable:true,
                     minSize:12
                 },
                 data:data
             }]
         }