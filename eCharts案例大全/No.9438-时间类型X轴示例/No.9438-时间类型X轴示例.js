option = {
    title: {
        text: '时间类型X轴示例'
    },
    xAxis: {
        type:"time",
        axisLabel:{
            formatter:function(v){
                var dt = new Date(v)
                //注意这里的月是从0开始的
                return dt.getFullYear()+"-"+(dt.getMonth()+1)+"-"+dt.getDate()
            }
        }
    },
    tooltip:{
        formatter:function(p){
            var dt =  new Date(p.data[0]);
            return "时间：" + dt.getFullYear()+"-"+(dt.getMonth()+1)+"-"+dt.getDate()
            + "<div>值：" + p.data[1]+"</div>"
            + "<div>gid：" + p.data[2].gid+"</div>"
        }  
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[
            //注意这里的月是从0开始的
            [new Date(2019,0,01,4),22,{gid:"111"}],
            [new Date(2019,0,01,8),22,{gid:"111"}],
            [new Date(2019,0,01,12),22,{gid:"111"}],
            [new Date(2019,0,01,16),22,{gid:"111"}],
            [new Date(2019,0,01,20),22,{gid:"111"}],
            
            [new Date(2019,0,02),18,{gid:"111"}],
            [new Date(2019,0,03),19,{gid:"111"}],
            [new Date(2019,0,04),19,{gid:"111"}],
            [new Date(2019,0,05),19,{gid:"111"}],
            [new Date(2019,0,06),19,{gid:"111"}]
        ]
    }]
};