var res=[];
option = {
    title: {
        text: '动态数据',
        subtext: '纯属虚构'
    },


    xAxis: 
        {
            type: 'category',
            boundaryGap: true,
            min:0,
            max:50,
            data: (function (){

                var len = 50;
                while (len--) {
                    res[len] = len;
                }
                return res;
            })()
        },
    
    yAxis: 
        {
            type: 'value',
            scale: true,
            name: '价格',
            max: 2,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
    
    series: 
        {
            name: '值',
            type: 'line',
            data: (function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random()));
                    len++;
                }
                return res;
            })()
        }
};

setInterval(function (){
    var data0 = option.series.data;
    data0.push(Math.random());
    myChart.setOption(option);
}, 2100);
