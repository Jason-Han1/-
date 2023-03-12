
option = {
     "backgroundColor": "#fff",
   
      tooltip: {
            trigger: 'item',
        formatter: function(params) {
            console.log(params);
          return params.name + '<br/>女性:' + params.value+"%"
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
          borderWidth: 0,
    },
    xAxis : [
        {
            type : 'category',
            data : ['当前揽收票量','本月罚款基数'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
                      splitLine: {  //分割线
                    show: false,
                    lineStyle: {
                        color: '#28316d'
                    }
                },
        }
    ],
    series : [
        {
            name:'',
              label: {
                  
                  normal: {
                         fontSize:16,
                 
                    position: "inside",
                    formatter:function(pm){
                        if(!isNaN(pm.value) && pm.value>0 ){
                            return  pm.value+"w";
                        }else{
                            return "";
                        }
                    }

                  },
                },
                     itemStyle: {
                normal: {
                     label: {
                         
    
                      show: true, //是否展示
                    },
                    color: function(params) {
                        var colorList =  ['#39f','#c3c'];
                        return colorList[params.dataIndex]
                    }
                }
            },
            type:'bar',
            barWidth: '50%',
            data:[1,  101]
        }
    ]
};
