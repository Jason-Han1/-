option = {
    color:["#88a2f5","#b99ff6","#a3e5f5","#fba083","#d4d5ee","#f9a5af"],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        icon:"circle",
        orient: 'vertical',
        right: 30,
        top:'45%',
            data: ['A', 'B', 'C', 'D', 'E', 'F']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                 show:false,
                // position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: 'A', selected: true},
                {value: 679, name: 'B'},
                {value: 1548, name: 'C'},
                 {value: 548, name: 'D'},
                  {value: 648, name: 'E'},
                   {value: 748, name: 'F'},
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                show:false,
                
            },
           
            data: [
                {value: 335, name: 'A', selected: true},
                {value: 310, name: 'B'},
                {value: 234, name: 'C'},
                {value: 135, name: 'D'},
                {value: 1048, name: 'E'},
                {value: 251, name: 'F'},
              
            ]
        }
    ]
};