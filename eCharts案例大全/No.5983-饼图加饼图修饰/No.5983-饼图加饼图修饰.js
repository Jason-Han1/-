option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'horizontal',
        left: 'center',
        data: ['内部', '外部'],
        bottom: '20%',
        icon: 'circle',
        itemGap: 50
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: '30%',
            center: ['50%', '50%'],
            label: {
              show: true,
              formatter: '{d}%'
            },
            data: [
                {   value: 20, 
                    name: '内部',
                     itemStyle:{
                        normal:{color:'#ffc545'},
                        emphasis:{color:'#ffc545'}
                    }
                },
                {   value: 152, 
                    name: '外部',
                    itemStyle:{
                        normal:{color:'#22cfe0'},
                        emphasis:{color:'#22cfe0'}
                    }
                }
            ]
        },
        {
                name: "大环",
                type: 'gauge',
                splitNumber: 30,
                radius: '34%',
                center: ['50%', '50%'],
                startAngle: 90,
                endAngle: -269.9999,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    length: 5,
                    lineStyle: {
                        color: '#1cbdca'
                    }
                },
                splitLine: {
                    show: false,
                    length: 3,
                },
                axisLabel: {
                    show: false
                },
                detail: {
                    show: false
                }
            },
            {
             type: 'pie',
             zlevel: 2,
             silent: true,
             radius: ['36%', '38%'],
             startAngle: 85,
             label: {
                 normal: {
                     show: false
                 },
             },
             labelLine: {
                 normal: {
                     show: false
                 }
             },
             data: _pie2()
         },
    ]
};
 function _pie2() {
     let dataArr = [];
     for (var i = 0; i < 8; i++) {
         if (i % 2 === 0) {
             dataArr.push({
                 name: (i + 1).toString(),
                 value: 18,
                 itemStyle: {
                     normal: {
                         color: "#1fbfcd",
                         borderWidth: 0,
                         borderColor: "rgba(0,0,0,0)"
                     }
                 }
             })
         } else {
             dataArr.push({
                 name: (i + 1).toString(),
                 value: 2,
                 itemStyle: {
                     normal: {
                         color: "rgba(0,0,0,0)",
                         borderWidth: 0,
                         borderColor: "rgba(0,0,0,0)"
                     }
                 }
             })
         }

     }
     return dataArr

 }