option = {
    tooltip: {
        trigger: 'axis',
        formatter: function (params, ticket, callback) {
          var htmlStr = '';
          for(var i=0;i<params.length;i++){
            var param = params[i];
            var xName = param.name;//x轴的名称
            var seriesName = param.seriesName;//图例名称
            var value = param.value;//y轴值
            var color = param.color;//图例颜色
            
            if(i===0){
              htmlStr += xName + '<br/>';//x轴的名称
            }
            htmlStr +='<div>';
            
            // 具体显示的数据【字段名称：seriesName，值：value】
            // 这里判断一下name，如果是我们需要特殊处理的，就处理
            if(seriesName === '额外信息'){
                // 前面一条线，后面一条线【具体样式自己写】
                htmlStr += '<div style="border: 1px solid #FFEB3B"></div>';
                htmlStr += 'XXXXX：' + value;
                htmlStr += '<div style="border: 1px solid #FFEB3B"></div>';
            }else{
                // 正常显示的数据，走默认
                htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+color+';"></span>';
                htmlStr += seriesName + '：' + value + 'W';
            }
            
            htmlStr += '</div>';
          }
          return htmlStr;
         }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '收入',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        },{
            name: '额外信息',
            data: ['今天赚大了', '今天赚大了', '今天赚大了', '今天赚大了', '今天赚大了', '今天赚大了', '今天赚大了'],
            type: 'line'
        }
    ]
};
