option = {
    xAxis : [
        {
            type : 'category',
             axisLine: {onZero: true},
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: function(v){
                    return - v;
                }
            }
        }
    ],
    series : [
        {
            name:'降水量',
            type:'bar',
            data: (function(){
                var oriData = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3 ];
                var len = oriData.length;
                while(len--) {
                    oriData[len] *= -1;
                }
                return oriData;
            })()
        }
    ]
};
                    