option = {

    color: ['#f6d54a', '#ad46f3', '#f845f1',  '#5045f6',   '#44aff0', '#45dbf7'],

    title: [{
        text: '违纪原因占比',
        left: '38%',
        top: '22%',
        textAlign: 'center'
    }],

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    grid: {
        left: '10%',
        right: '35%',
        top: '26%',
        bottom: '16%',
        containLabel: true
    },
     legend: {
        orient: 'vertical',
        x: 'left',
        left:'51%',
        top:'42%',
        data:['打架斗殴','逃学旷课','考试作弊','夜不归宿','破坏公物']
    },
    series: [
       {
            type: 'pie',
            name:'违纪原因',
            center: ['30%', '53%'],
            radius: ['20%', '30%'],
                 label: {
                     normal: {
                        textStyle: {
                             fontSize: 14
                         }
                     }
                 },
                 
            data: [{
                name: '破坏公物',
                value: 1
            },{
                name: '打架斗殴',
                value: 10
            },{
                name: '夜不归宿',
                value: 15
            },{
                name: '逃学旷课',
                value: 30
            },{
                name: '考试作弊',
                value: 45
            }],
        }
    ]
}