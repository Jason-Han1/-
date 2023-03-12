
option = {
    legend: {
        data: ['餐饮', '生鲜', '家政', '快递'],
        right: "0%"
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            const box = `
              <div class="tooltip-box">
                <div class="inner">
                  <div class="hd">
                    <h3 class="title">${params[0].name}</h3>
                  </div>
                  <div class="bd">
                    <p><strong class="name">${params[0].seriesName}:</strong><span class="number">${params[0].value}</span><span class="unit">人</span></p>
                    <p><strong class="name">${params[1].seriesName}:</strong><span class="number">${params[1].value}</span><span class="unit">个</span></p>
                    <p><strong class="name">${params[2].seriesName}:</strong><span class="number">${params[2].value}</span><span class="unit">个</span></p>
                  </div>
                </div>
              </div>`;
              return box;
        },
    },
    color: ['#1d95ee','#3cfefe','#ff666b', '#2070e8'],
    yAxis: {
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show:true,
            color: '#ffffff',
            fontSize: '14'
        },
        axisTick: {
            show: false
        }
    },
    xAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#999999'
            },
           fontSize: '14'
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show:true,
            color: '#ffffff',
        },
        axisTick: {
            show: false
        },
        data: ['7月', '8月', '9月', '10月', '11月', '12月']
    },
    series: [
        {
            name: '餐饮',
            type: 'line',
            symbol:'none',
            smooth: true,
            data:[25, 25, 68, 48, 74, 45]
        },
        {
            name: '生鲜',
            type: 'line',
            symbol:'none',
            smooth: true,
            data:[32,25,56,45,87,54]
        },
        {
            name: '家政',
            type: 'line',
            symbol:'none',
            smooth: true,
            data:[20, 30, 50, 60, 70, 56]
        },
        {
            name: '快递',
            type: 'line',
            symbol:'none',
            smooth: true,
            data:[10, 20, 30, 50, 80, 60]
        },
    ]
};
