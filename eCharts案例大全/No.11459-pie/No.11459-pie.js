option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['Human', 'Environmental', 'Animal', '-']
    },
    series: [
        {
            name:'Source',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '40%'],

            label: {
                show: false
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1236, name:'Human', selected:true},
                {value:75, name:'Environmental'},
                {value:13, name:'Animal'},
                {value:122, name:'-'}
            ]
        },
        {
            name:'Source',
            type:'pie',
            radius: ['50%', '65%'],
            label: {
                normal: {
                    formatter: '  {b|{b}：}{c}  {per|{d}%}',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:942, name:'Blood'},
                {value:249, name:'Stool'},
                {value:24, name:'Urine'},
                {value:20, name:'Others'},
                {value:89, name:'Unknown'},
                {value:75, name:'Environmental'},
                {value:13, name:'Animal'},
                {value:122, name:'-'}
            ]
        }
    ]
};