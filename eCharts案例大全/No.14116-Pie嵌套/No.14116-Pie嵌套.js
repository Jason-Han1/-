function tooltipSquare(color){
  return `<span style="display:inline-block;width:10px;height:10px;margin-right:5px;border-radius:2px;background:${color};"></span>`;
}
function tooltipFormatter(params){
  let result ='';
  if(params instanceof Array){
    result=`${params[0].axisValue}<br/>`;
    params.forEach(function(item){
      if(item.seriesName!==''){//数据的name为空不显示
        result+=`${tooltipSquare(item.color)}${item.seriesName}：${item.value}<br/>`
      }
      
    })
  }else{
    result=`${params.axisValue}<br/>${tooltipSquare(params.color)}${params.seriesName}：${params.value}`
  }
  return result;
}

var placeHolderStyle = {
  normal: {
      label: {
          show: false,
          position: "center"
      },
      labelLine: {
          show: false
      },
      color: "#fff",
  },
};
var piePostion=["40%","50%"];
var option = {
  title:{
    text:'各大区批核率',
    left:16,
    textStyle:{
      fontSize:14
    },
  },
  tooltip:{
      show:true,
      formatter:function(params){
          if(params.name==''){
            return null
          }
          return `${tooltipSquare(params.color)}${params.seriesName}<br/>${params.name}：${params.value}%`
      },
  },
  color:  ['#399FFD','#3BBBBA','#E6C335','#E17184','#9B69DF'],
  legend: {
      orient: '',
      icon: 'roundRect',
      itemWidth:10,
      itemHeight:10,
      right:32,
      top: 'center',
      data: ['东区', '西区', '南区','北区','中区']//需要数据
  },
  series: [{
      name: '东区',
      type: 'pie',
      clockWise: true, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [10,25],
      center:piePostion,
      data: [
          {
          value: 7,
          name: '批核率',
          itemStyle:{
               normal: {
                  label: {
                      show: false,
                      position: "center"
                  },
                  labelLine: {
                      show: false
                  },
                  color:'#399FFD'
              },
          },
           },
           {
          value: 3,
          name: '',
          itemStyle: placeHolderStyle
      }]
  },
  {
      name: '西区',
      type: 'pie',
      clockWise: true, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [30, 45],
      center:piePostion,
      data: [
          {
          value: 4,
          name: '批核率',
          itemStyle:{
               normal: {
                  label: {
                      show: false,
                      position: "center"
                  },
                  labelLine: {
                      show: false
                  },
                  color:'#3BBBBA'
              },
          },
           },
           {
          value: 6,
          name: '',
          itemStyle: placeHolderStyle
      }]
  },
   {
      name: '南区',
      type: 'pie',
      clockWise: true, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [50, 65],
      center:piePostion,
      data: [
          {
          value: 4,
          name: '批核率',
          itemStyle:{
               normal: {
                  label: {
                      show: false,
                      position: "center"
                  },
                  labelLine: {
                      show: false
                  },
                  color:'#E6C335'
              },
          },
           },
           {
          value: 6,
          name: '',
          itemStyle: placeHolderStyle
      }]
  },
   {
      name: '北区',
      type: 'pie',
      clockWise: true, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [70, 85],
      center:piePostion,
      data: [
          {
          value: 4,
          name: '批核率',
          itemStyle:{
               normal: {
                  label: {
                      show: false,
                      position: "center"
                  },
                  labelLine: {
                      show: false
                  },
                  color:'#E17184'
              },
          },
           },
           {
          value: 6,
          name: '',
          itemStyle: placeHolderStyle
      }]
  },
   {
      name: '中区',
      type: 'pie',
      clockWise: true, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [90, 105],
      center:piePostion,
      data: [
          {
          value: 4,
          name: '批核率',
          itemStyle:{
               normal: {
                  label: {
                      show: false,
                      position: "center"
                  },
                  labelLine: {
                      show: false
                  },
                  color:'#9B69DF'
              },
          },
           },
           {
          value: 6,
          name: '',
          itemStyle: placeHolderStyle
      }]
  },
  {
    type: 'pie',
    color: ['#399FFD','#3BBBBA','#E6C335','#E17184','#9B69DF'],
    data: [{
        value: '',
        name: '东区'
    }, {
        value: '',
        name: '西区'
    }, {
        value: '',
        name: '南区'
    },
    {
        value: '',
        name: '北区'
    },{
        value: '',
        name: '中区'
    }
    ]
},
  ]
};