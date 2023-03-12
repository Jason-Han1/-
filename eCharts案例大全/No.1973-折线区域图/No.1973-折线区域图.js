var startTime ='90000';
var endTime='100000';
var HighYdata = [141, 150, 150, 151, 147, 151, 150, 151, 152, 151, 150, 151, 152, 147, 151, 150, 151, 152, 150, 151, 152, 152, 150, 150, 152];
var xData = ['0', '10000', '20000', '30000', '40000', '50000', '60000',
    '70000', '80000', '90000', '100000'];
var LowYdata = [83, 71, 86 ,74, 83, 71, 84, 73, 87, 72, 84, 73, 85, 73, 71, 84, 83, 77, 77, 72, 74,72, 74, 72, 84];
var standardata = [];
var standardata2 = [];
var h=135;
var l=120;
xData.map((item, index) => {
    if(item == startTime){
       standardata.push('120')
        standardata2.push('70')
    }else if(item == endTime){
        standardata.push('120')
        standardata2.push('70')
    }else{
        standardata.push('135')
        standardata2.push('85')
    }
})

var seriesArr = [{
    name: "高压",
    type: 'line',
    symbolSize: 0,
    silent: true,
    color:'#f38a8c',
    lineStyle: { //折线的颜色
        color:'#f38a8c'
    },
    smooth: false, //是否平滑处理值0-1,true相当于0.5
    data: HighYdata,
    markArea: {
        animation: true,
        itemStyle: { //全局的
            normal: {
                color: '#bdd3eb'
            }
        },
        data: [
            [{
                xAxis: startTime || "",

            }, {
                xAxis: endTime || "",
            }]
        ]
    }
},{
    name: "低压",
    type: 'line',
    symbolSize: 0,
    silent: true,
    color:'#c3ceea',
    lineStyle: { //折线的颜色
        color:'#c3ceea'
    },
    smooth: false, //是否平滑处理值0-1,true相当于0.5
    data: LowYdata,
},{
    name: '收缩压临界值',
    type: 'line',
    smooth: true,
    step: "start",
    symbol: "none",
    symbolSize: 8,
    itemStyle: {
        normal: {
            lineStyle: {
                // type: 'dashed',
                //折点的颜色
                // color: "#00a2e6"
            },
            color: "#7e9ef1", //拐点的颜色
        }
    },
    smooth: false,
    data: standardata
},{
    name: '舒张压临界值',
    type: 'line',
    smooth: true,
    step: "start",
    symbol: "none",
    itemStyle: {
        normal: {
            lineStyle: {
                // type: 'dashed',
                //折点的颜色
                // color: "#00a2e6"
            },
            color: "#f5c99a", //拐点的颜色
        }
    },
    smooth: false,
    data: standardata2
}];

  option = {
     backgroundColor:'#fff',
    tooltip: {
        trigger: 'axis',
        textStyle: {
            fontSize:18
        },
        formatter: function(params) {
            // var str = params[0].axisValue + "<br/>";
            // for (var i = 0; i <= 1; i++) {
            //     if (params[i].value) {
            //         str += '<span>' + params[i].seriesName + "</span>: <span style=font-size:16px;color:#fff;>" + params[i].value + " </span><br/>";
            //     }

            // };
            // return str;
        }
    },
    grid: {
        left: "5%",
        right: "3%",
        top: "10%",
        bottom: "10%"
    },
    legend: {
        show: true,
        itemWidth: 25,
        itemHeight: 12,
        textStyle: {
            fontSize: 16,
            color: "#333"
        },
        data: ["高压", "低压",'收缩压临界值','舒张压临界值'],
		x:'center',
        // y:'bottom',
        selectedMode:false
    },
    xAxis: [{
        name: '',
        type: 'category',
        boundaryGap: false,
        axisLine: { //设置X轴的颜色
            lineStyle: {
                color: '#333'
            }
        },
        axisTick: {
            show: false
        },
        data: xData
    }],
    yAxis: [{
        name:'血压（mmHg）',
        type: 'value',
        scale: true,
        nameLocation:'middle',
        nameRotate:90,
        nameGap:40,
        min:10,
        axisLine: { //设置y轴的颜色
            lineStyle: {
                color: '#333'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#eee'
            }
        },
    }],
    
    series: seriesArr
};