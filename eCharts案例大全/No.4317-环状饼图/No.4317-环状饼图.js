 let data = [
    {
        name: '生产矿井',
        value: 30
    }, {
        name: '新建矿井',
        value: 10
    }, {
        name: '停产矿井',
        value: 1
    }, {
        name: '停产整改矿井',
        value: 3
    }
 ];
 let color = ['#669fef', '#f3cf2b', '#e6eaf0', '#fe8839'];
 let baseData = [];
 for (let i = 0; i < data.length; i++) {
     baseData.push({
         value: data[i].value,
         name: data[i].name,
         itemStyle: {
             normal: {
                 color: color[i],
                 borderColor: color[i],
             }
         }
     },
     {
         value: 1,
         itemStyle: {
             normal: {
                 color: 'transparent',
                 borderColor: 'transparent',

             }
         }
     }
     );
 }

 option = {
     backgroundColor: "#ffffff",
     legend: {
         data: ['生产矿井', '新建矿井', '停产矿井','停产整改矿井'],
         icon: 'vertical',
         right: 0,
         top: 'center',
         orient: 'vertical',
         itemGap: 20,
         itemWidth: 10,
         itemHeight: 10,
     },

     series: [{
             type: 'pie',
             hoverAnimation: false, 
             radius: ['55%', '56%'],
             center: ['40%', '50%'],
             tooltip: {
                 show: false
             },
             label: {
                 normal: {
                     show: false
                 }
             },
             data: baseData
         },
         {
            type: 'pie',
            color: color,
            radius: ['66%', '81%'],
            center: ['40%', '50%'],
            tooltip: {
                show: false
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    formatter:'{num|{d}} \n {name|{b}}',
                    rich: {
                        num: {
                            align: 'center',
                            fontSize: '30',
                            fontWeight: 'bold'
                        },
                        name:{
                            color:'#000000',
                            fontSize: '20',
                        }
                    }
                }
            },
             data: baseData
         },

     ]
 };