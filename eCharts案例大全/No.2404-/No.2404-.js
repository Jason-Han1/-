let chartData = [
    { name: '7/1', count: (Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/2', count:(Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/3', count:(Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/4', count:(Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/5', count:(Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/6', count:(Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/7', count:(Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/8', count:(Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/9', count:(Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/10', count: (Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/11', count: (Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/12', count: (Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/13', count: (Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/14', count: (Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/15', count: (Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/16', count: (Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/17', count: (Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/18', count: (Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
    { name: '7/19', count: (Math.random() * 100).toFixed(2), price: (Math.random() * 100).toFixed(2) },
];

option = {
    backgroundColor: '#011c3a',
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params) {
            console.log(params);
              let headerName = params[0].name;
            let str = `
              <style>
 .tip-style{
    width:auto;
    height:auto;
    border:1px solid red;
    background: #00191d;
    border: 1px solid;
    padding: 0 30px 0 0 ;
    border-image: linear-gradient(0deg, #0a53e9 0%, #ffffff 100%) 1 1;
    box-shadow: 0px 2px 9px 0px rgba(0,236,36,0.34); 
  
 } 
 .tip-header{
     padding:5px 0 5px 10px;
     text-align: left;
     color:white;
     display: flex;
     background: linear-gradient(265deg,rgba(0,24,27,1) 0%,  rgba(10,83,233,0.7)  100%);
  }
  .tip-body{
     font-size: 14px;
     padding:5px 0 5px 10px;
     box-sizing: border-box;
     color:#ffffff;
     display:flex;
     flex-direction: column;
     span{
      padding:5px 0;
      display:inline-block;
      text-align: left;
     }

  }
              </style>
              <div class="tip-style">
           <div class="tip-header"><span>${headerName}</span></div>
           <div class="tip-body">`;
          
            for (let it of params) {
                if (it.seriesType == 'pictorialBar') {
                    str += `<span>${it.seriesName}：${it.value}吨</span>`;
                } else {
                    str += `<span>${it.seriesName}：${it.value}</span>`;
                }
            }
            str += `</div>
        </div>`;
            return str;
        },
    },
    grid: {
        right: '5%',
        top: '20%',
        left: '5%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: {
        data: chartData.map((it) => {
            return it.name;
        }),
        axisLine: {
            lineStyle: {
                color: '#ffffff',
            },
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14,
        },
    },
    yAxis: {
        name: '吨',
        nameTextStyle: {
            color: '#fff',
            fontSize: 16,
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff',
            },
        },
        axisLabel: {
            color: '#ffffff',
            fontSize: 16,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#ffffff',
            },
        },
    },
    series: [
        {
            name: '销售量',
            type: 'pictorialBar',
            symbol: 'triangle',

            barWidth: 18,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(48, 236, 166, 1)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 34, 66, 0.2)', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    }, //渐变颜色
                },
            },
            data: chartData.map((it) => {
                return { name: it.name, value: it.count };
            }),
        },
        {
            name: '销售价',
            type: 'line',
            symbolSize: 10,
            symbol: 'circle',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    color: 'rgba(143,0,254,1)',
                },
            },
            itemStyle: {
                normal: {
                    color: 'rgba(143,0,254,1)',
                    borderWidth: 0,
                    borderColor: '#A9F387',
                },
            },
            smooth: true,
            data: chartData.map((it) => {
                return { name: it.name, value: it.price };
            }),
        },
    ],
};
