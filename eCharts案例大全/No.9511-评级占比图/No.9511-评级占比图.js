
option={
     title : {
        text: '评级占比图',
        subtext: '',
        x:'center'
    },
    tooltip:{
        
    },
     legend: {
        orient: 'horizontal',
        x: 'center',
        y:'bottom',
        data: ['risk-free', 'AAA', 'AA+','AA','无评级']
    },
     series: [{
         type: 'pie',
         radius: ['20%', '55%'],
         center: ['50%', '50%'],
         roseType: 'radius',
         color: ['#ff7632', '#E61E24', '#FF9900', '#B6B33F', '#259C25'  ],
         data: [{
             value: 10,
             name: 'risk-free'
         }, {
             value: 20,
             name: 'AAA'
         }, {
             value: 35,
             name: 'AA+'
         }, {
             value: 43,
             name: 'AA'
         }, {
             value: 53,
             name: '无评级'
         }],
         label: {
             normal: {
                 textStyle: {
                     fontSize: 14
                 },
                 formatter: function(param) {
                     return param.name + ':\n' + Math.round(param.percent) + '%';
                 }
             }
         },
         labelLine: {
             normal: {
                 smooth: true,
                 lineStyle: {
                     width: 2
                 }
             }
         },
        //  animationType: 'scale',
        //  animationEasing: 'elasticOut',
         animationDelay: function(idx) {
             return Math.random() * 200;
         }
     }]
 };