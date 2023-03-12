
    const dataArr = {
        xAxis: ["果缤纷", "花果山", "百果园", "水果帮", "果多美", "农夫果园", "鲜丰水果", "果唯伊水果", "新隆嘉水果", "半斗米水果", "白鲜果", "旺旺水果", "安心果", "果乐乐", "养乐果", "果大大"],
        result: [
          { name:"苹果",data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
          { name:"梨子",data:[376.461, 0.489, 0.012, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
          { name:"香蕉",data:[89.876, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
          { name:"菠萝",data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        ]
    }
    
    const colors = [
        ['rgba(73,228,170,.85)','rgba(75, 194, 149,.85)'], 
        ['rgba(48,174,255,.85)', 'rgba(31,106,255,.85)'],  
        ['rgba(251,207,60,.85)', 'rgba(196, 161, 47,.85)'], 
        ['rgba(247, 77, 94,.85)',  'rgba(196, 65, 78,.85)'], 
        ['rgba(178,103,239,.85)', 'rgba(128, 66, 179,.85)'],  
        ['rgba(255, 251, 177,.85)', 'rgba(201, 197, 140,.85)'],  
        ['rgba(187, 255, 255,.85)', 'rgba(145, 196, 196,.85)'],  
        ['rgba(253, 210, 227,.85)', 'rgba(194, 163, 175,.85)'],  
   ];
   
   const topColors =  [
       'rgb(73,228,170)',
       'rgb(48,174,255)',
       'rgb(251,207,60)',
       'rgb(247, 77, 94)',
       'rgb(178,103,239)',
       'rgb(255, 251, 177)',
       'rgb(187, 255, 255)',
       'rgb(253, 210, 227)'
   ]
   
    const diamondData = dataArr.result.reduce((pre, cur, index) => {
        pre[index] = cur.data.map((el, id) => el + ( pre[index - 1] ? pre[index - 1][id] : 0))
        return pre;
    }, [])
    

    let color = [];
    colors.forEach((item) => {
        color.push(
            [{ offset: 0, color: item[0] }, { offset: 0.5, color: item[0] }, { offset: 0.5, color: item[1] }, { offset: 1, color: item[1] }]
        )
    })
    let series = dataArr.result.reduce((p, c, i, array) => {
        let barGap = '-100%';  // 堆叠
        let barCateGoryGap = '80%';
        let barWidth = 34;
       
        p.push({
            z: i + 1,
            stack: "group",
            type: 'bar',
            name: c.name,
            data: c.data,
            barWidth: barWidth,
            barGap: barGap, // 不同系列的柱间距离
            barCateGoryGap: barCateGoryGap,
            itemStyle:{ 
                color: 
                    { 
                        type: 'linear',
                        x: 0, 
                        y: 0, 
                        x2: 1,
                        y2: 0,
                        colorStops: color[i]
                    } 
            }
        },
        {
            z: i + 10,
            type: 'pictorialBar',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],  // 设置图形定位
            symbolSize: [barWidth, 10],  // 设置图形大小。宽度为柱状条同宽;高度为10;
            data: diamondData[i],   // 计算的高度值
            itemStyle: { 
                color: function(params) {
                    // 数据为0时,隐藏
                    if(c.data[params.dataIndex]  == 0){
                        return 'transparent';
                    }
                    return topColors[i];
                },
            },
            tooltip: { show: false },
            cursor:"auto",
        }
       )

        // 是否最后一个了？设置底座样式
        if (p.length  === (array.length) * 2) {
            p.push({
                z: array.length * 2,
                type: "pictorialBar",
                symbolPosition: "start",
                data: dataArr.result[0].data,
                symbol: "diamond",
                symbolOffset: ["0%", "50%"],
                symbolSize: [barWidth, 10],
                itemStyle: { 
                    color: { 
                        type: 'linear', 
                        x: 0, 
                        x2: 1, 
                        y: 0, 
                        y2: 0, 
                        colorStops: color[0]
                    } 
                },
                tooltip: { show: false },
            })
            return p
        }
        return p
      
    }, [])
    
    
option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgb(30,98,166)',
        textStyle:{
          color:'#fff',
        },
        axisPointer: {
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        show: true,
        selectedMode:false,
        orient: 'horizontal',
        icon: 'circle',
    },
    xAxis: {
        data: dataArr.xAxis,
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                //color: '#C0C1D3'
            }
        },
        splitLine: {
            show: true,
        }
    },
    series:series
};

myChart.on('click', function (params) {
    console.log('name-----',params);
});


