option={
  "title": {
    "text":"",
    "subtext":""
  },
  "tooltip": {
   
            trigger: 'axis',
           "formatter":function(params,ticket,callback){
    var str="";
     for(var i=0;i<params.length;i++){
          str+=params[i].axisValue+":"+ (Math.round(params[i].value)+"0").match(/\d{2}/g)[0].replace(/0(?=\d)/g,"")+"%";
         str+="<br>"
     } 
     return str
    },
  },
   graphic: [
        
          {
                    type: 'text',
                    z: 100,
                    left: '0',
                    top: 'middle',
                    style: {
                        fill: '#000',
                        text: "分项投诉人数",
                        font: '14px Microsoft YaHei'
                    }
                },   
        
        {
            type: 'group',
            left: '70%',
            top: 'center',
            children: [
                {
                    type: 'rect',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    shape: {
                        width: 190,
                        height: 190
                    },
                    style: {
                        fill: '#146fb9',
                        stroke: '#555',
                        lineWidth: 0,
                        shadowBlur: 0,
                 
                    }
                },
                {
                    type: 'text',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    style: {
                        fill: '#fff',
                        text: "231个",
                        font: '35px Microsoft YaHei'
                    }
                },
                 {
                    type: 'text',
                    z: 100,
                    left: 'center',
                    top: '25',
                    style: {
                        fill: '#fff',
                        text: "总投诉人数",
                        font: '14px Microsoft YaHei'
                    }
                }
            ]
        }
    ],
  "legend": {
show:false,
    "data": [
      ""
    ],
    "textStyle": {
      "color":"#666"
    }
  },
  "xAxis":[ {
      show:false,
    "type":"value",
"axisLabel":{
formatter:function(val){return val+"%"}
},
    "axisLine": {
      "lineStyle": {
        "color":"#000"
      }
    },
    "splitLine": {
      "show": false
    }
  }],
  "grid": {
   "top":"8%",
    "left":"20%",
    "right":"30%",
    "bottom":"0%",

    "containLabel": true
  },
  "yAxis": [{
    "type":"category",
      
    "axisLine": {
      "show": false,
      "lineStyle": {
        "color":"#000"
      }
    },
    "axisTick": {
      "show": false
    },
    "data": [
      "大唐",
      "前台",
      "客房",
      "餐厅",
      "康乐",
    ]
  }],
  "series": [
    {
     
      "name":"",
      "type":"bar",
      barGap:1,
      barWidth:23,
label:{
     normal:{
     show:true,
     textStyle:{
color:'#000'
},
    position:"right",
formatter:function(val){return Math.round(Number(val.data))+'%'}
}
},
barCategoryGap:"0",
      "data": [
        4,
        4,
        4.5,
        4.2,
        4.5,
     
      ],
   
      "itemStyle": {
        "normal": {
            barBorderRadius:14,
         ipsosLowAvgColor:"#146fb9",
color:"#146fb9"
},
"lowAvg":{
color:"#f0f"
}
 
      }
    },
   
   
   
  
  
  ]
}