option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine:{
			                show:false
			            }
    },
   series: [{
          name: '总数量',
          type: 'bar',
          barWidth: '45%',
          itemStyle: {
            normal: {
              // 随机显示
              //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
              // 定制显示（按顺序）
               color: function(params) {
                 var colorList = ['#338AF6', '#78C77D', '#F4D35F', '#435184', '#8C67DE', '#6BC8CA', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
                  return colorList[params.dataIndex]
                },
              label: {
                    show: true,
                    formatter: '{c}%',
                    position: 'top'
                }
            }
          },
          data: [50, 20, 70, 48, 40, 52]
    }]
};


