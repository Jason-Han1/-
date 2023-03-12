option = {
    title: {
        text: '动态数据',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data:['最新成交价']
    },
    toolbox: {
        // show: true,
        // feature: {
        //     dataView: {readOnly: false},
        //     restore: {},
        //     saveAsImage: {}
        // }
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLabel:{
	            formatter:function(val){
	                 return val.split(" ").join("\n");
	            }
        	},
            data: (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                    
                    res.unshift(now.toLocaleDateString().replace(/^\D*/,'')+' '+now.toLocaleTimeString().replace(/^\D*/,''));
                   // res.unshift(now.toLocaleDateString().replace(/^\D*/,'')+' '+now.getHours()+':'+now.getMinutes());
                    //res.unshift(now.getFullYear()+'.'+ (now.getMonth() + 1)+'.'+now.getDate()+' '+now.getHours()+':'+now.getMinutes());
                    now = new Date(now - 60*1000);
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '价格',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
         }
       
    ],
    series: [
        
        {
            name:'最新成交价',
            type:'line',
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
                    len++;
                }
                return res;
            })()
        }
    ]
};


setInterval(function (){
    axisData = (new Date()).toLocaleDateString()+' '+(new Date()).toLocaleTimeString().replace(/^\D*/,'');
    //axisData=(now.getFullYear()+'.'+ (now.getMonth() + 1)+'.'+now.getDate()+' '+now.getHours()+':'+now.getMinutes()).replace(/^\D*/,'');
    //axisData=(now.toLocaleDateString().replace(/^\D*/,'')+' '+now.getHours()+':'+now.getMinutes());
    var data0 = option.series[0].data;
    data0.shift();
    data0.push((Math.random() * 10 + 5).toFixed(1) - 0);

    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);

    myChart.setOption(option);
}, 60*1000);