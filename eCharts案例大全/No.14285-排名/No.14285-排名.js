option = {
    title: {
        text: '排名'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter:function(par){
            console.log(par[0].data);
            var name=par[0].data[0];
            var mingCi=par[0].data[1];
            return name+"<br />第"+mingCi;
        }
    },
    xAxis: {
      type: 'category',
      data: ['石家庄', '保定', '邢台', '邯郸']
   },
   yAxis: {
      type: 'category',
       name:'名次',
      data: ['四','三','二','一']
   },
    series: [{
        type: 'bar',
        data:[
             ['石家庄','一'],
             ['保定','二'],
             ['邢台','四'],
             ['邯郸','三']
            ]
    }]
};