var option = {


    legend: [{
             data: ['外销', '内销'],
             x: '25%',
             y: '60%'
         },
    
             {
             data: ['外销块煤', '内销块煤', '外销面煤', '内销面煤', '块煤', '面煤'],
             x: 'left',
             orient: 'vertical'
         }],
    
    
     grid: [
        {
             left: '0%',
             right: '55%',
             top: '65%',
             bottom: '5%',
             containLabel: true
         },
              {
             gridindex: 1,
             left: '48%',
             right: '3%',
             top: '65%',
             bottom: '5%',
             containLabel: true
         }
     ],
    
   
    xAxis: [{
             type: 'value',
             axisLabel: {
                 formatter: '{value} 吨'
             },
             boundaryGap: [0, 0.01]
         },
         {
             gridIndex: 1,
             type: 'category',
             boundaryGap: false,
             data: ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时']
         }],
     yAxis: [{
             type: 'category',
             data: ['块煤大块', '块煤4-8', '块煤3-6', '块煤2-4', '块煤1-3', '块煤0.5-1', '面煤', '电面煤', '电块煤', '劣质煤'],
             axisLabel: {
                 interval: 0
             }
         },
         {
             gridIndex: 1,
             type: 'value',
             axisLabel: {
                 formatter: '{value} 吨'
             }
         }
     ],
    

     series: [{
             name: '外销',
             type: 'bar',
             label: {
                 normal: {
                     show: true,
                     position: 'right'
                 }
             },
             data: [1576.28, 840.18, 997.15, 1865.25, 3026.62, 877.09, 6361.68, 0, 0, 1188.28]
         },
    
            {
             name: '内销',
             type: 'bar',
             label: {
                 normal: {
                     show: true,
                     position: 'right'
                 }
             },
             data: [44.67, 11.94, 123.67, 20.28, 62.46, 29.62, 1362.29, 10127.00, 3909.78, 1682.00]
         }],
    
    
    
}