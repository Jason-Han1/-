let index = 0;
    var colorList = ['#FF793A', '#0093FF', '#00E1FF', '#2D49D4'];
    var data = [     { name: '500kv线路', value: '10' },
          { name: '10kv线路  ', value: '40' },
          { name: '110kv线路', value: '30' },
          { name: '220kv线路', value: '20' }]
    option = {
    title: {
    x: 'center',
    y: 'center',
    textStyle: {
        fontSize: 20
    }
    },
    tooltip: {
    trigger: 'item'
    },
    legend: {
       orient: 'vertical',
       bottom: '0%',
        itemGap: 2,
       selectedMode: true,
       icon: 'bar',
       textStyle: {
         rich: {
             a: {
                 color: '#000',
                 width: 30
             },
             b0: {
                 color: '#73DDFF',
                 fontSize: 20,
                 padding: [0, 30, 0, 40]
             },
             b1: {
                 color: '#73ACFF',
                 fontSize: 20,
                 padding: [0, 30, 0, 40]
             },
             b2: {
                 color: '#FDD56A',
                 fontSize: 20,
                 padding: [0, 30, 0, 40]
             },
             b3: {
                 color: '#FDB36A',
                 fontSize: 20,
                 padding: [0, 30, 0, 40]
             },
    
         }
     },
     formatter: function(name) {
         let title = ''
         var total = 0;
         var target;
         var index;
         for (var i = 0, l = data.length; i < l; i++) {
             if (data[i].name == name) {
                 target = data[i].value;
                 title = data[i].label
                 index = i < 4 ? i : 3
             }
         }
         return `{a| ${name}}{b${index}| ${target}}个`
     }
       
   },
    series: [{
      type: 'pie',
            radius: '50%',
            center: ['45%', '30%'],
       roseType: 'radius',
            animationType: 'scale',
            animationEasing: 'elasticOut',
    emphasis:{
        itemStyle:{
            borderColor: '#f3f3f3',
            borderWidth: 10
        }
    },
    itemStyle: {
        normal: {
            color: function(params) {
                return colorList[params.dataIndex]
            }
        }
    },
    label: {
        show: true,
        position: 'outside',
        formatter: '{a|{c}}',
        rich: {
            hr: {
                backgroundColor: 't',
                borderRadius: 1,
                width: 1,
                height: 1,
                padding: [1, 1, 0, -4]
            },
            a: {
                padding: [-15, 7, -10, 7]
            }
        }
    },
    labelLine: {
        normal: {
            length: 2,
            length2: 2,
            lineStyle: {
                width: 1
            }
        }
    },
    data: data,
    }]
    };