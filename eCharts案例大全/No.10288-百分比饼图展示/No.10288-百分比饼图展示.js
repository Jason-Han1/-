 var data = [{
     "name": "型号x-1",
     "value": 50
 }, {
     "name": "型号x-2",
     "value": 45
 }, {
     "name": "型号x-3",
     "value": 25
 }, {
     "name": "型号x-4",
     "value": 20
 }, {
     "name": "型号x-5",
     "value": 25
 },  ]


 option = {

     color: ['#59d6ec',"#79d534","#dbe548","#ff4747","#6ec696","#ffc750"],
     backgroundColor: '#000',
     tooltip : {//提示
         trigger: 'item',
         formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
     legend: {
         orient: 'vertical',
         top: "middle",
         right: "5%",
         textStyle: {
             color: '#f2f2f2',
             fontSize: 25,

         },
         icon: 'roundRect',
         data: data,
     },
     series : [
          {
            name:'数据',
            type:'pie',
            radius : '60%',
            center: ['40%', '50%'],
            data:data.sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
              normal: {
                show: true,
                formatter: "{b} : {c}pc ({d}%)",
                textStyle: {
                  fontSize: 14,
                },
                position: 'outside'
              },
              emphasis: {
                show: true
              }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
          }
        ]
 };