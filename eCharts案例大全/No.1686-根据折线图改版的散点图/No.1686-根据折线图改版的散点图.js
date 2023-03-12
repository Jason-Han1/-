option = {
    title: {
      text: '根据折线图改版的散点图',
      left: 'center',
      top: 10,
      textStyle: {
        color: 'white',
        fontSize: '16px',
        fontWeight: 'normal'
      }
    },
    backgroundColor: '#24242f',
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#20202B',
      borderWidth: 0,
      formatter(params) {
        let tempalte = ''
        params.map((item) => {
          if (item.data > -1) {
            tempalte += `<li style="list-style: none;"><span style="color: white">${item.marker}${item.seriesName}</span><span style="color:white;margin-left: 10px;">${item.value}</span></li>`
          }
        })
        return `<ul style="background: #20202B;box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.1);border-radius: 10px;">${tempalte}</ul>`
      }
    },
    lineStyle: {
      color: 'rgba(255,255,255,0)',
      width: 8,
      type: 'none'
    },
    color: ['#FB7364', '#009DFF', '#FF83AA'],
    legend: {
      type: 'scroll',
      right: 20,
      data: ["有害辣鸡", "可回收辣鸡", "湿辣鸡"],
      backgroundColor: '#282839',
      borderRadius: 1,
      textStyle: {
        color: '#A3A3C0'
      },
      icon: 'circle',
      itemHeight: 10,
      itemWidth: 10
    },
    grid: {
      left: 40,
      top: 40,
      right: 20,
      bottom: 30
    },
    xAxis: {
      type: 'category',
      data: ["D1", "D2", "D3", "D4", "D5", "D6"],
      lineStyle: {
        color: '#4E4E5A'
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: '#4E4E5A'
        }
      }
    },
    series: [
        {name: "有害辣鸡", type: "line",symbol: "circle",symbolSize: 10,data:[12,10,8,6,4,2]},
        {name: "可回收辣鸡", type: "line",symbol: "circle",symbolSize: 10,data:[2,4,6,8,10,12]},
        {name: "湿辣鸡", type: "line",symbol: "circle",symbolSize: 10,data:[7,7,7,7,7,7]}
    ]
};
