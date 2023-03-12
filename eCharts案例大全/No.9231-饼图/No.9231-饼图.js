
option = {
    backgroundColor: '#031845',
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
    series: [{
        type: 'pie',
        radius: ['30%', '60%'],
        center: ['50%', '50%'],
        color: ['#00F6FF', '#FF549D', '#4C67EB'],
        data: [{
                value: 27,
                name: '非空壳'
            },
            {
                value: 30,
                name: '空壳'
            },
            {
                value: 24,
                name: '疑似'
            }
           
        ],
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 50,
                
            }
        },
        label: {
            normal: {
                formatter: function(params){
                    if(params.name == '非空壳'){
                        return '{b|'+params.name+'}\n{h1|}\n{c|'+params.value+'%}'
                    }else if(params.name == '空壳'){
                        return '{b|'+params.name+'}\n{h2|}\n{c|'+params.value+'%}'
                    }else if(params.name == '疑似'){
                        return '{b|'+params.name+'}\n{h3|}\n{c|'+params.value+'%}'
                    }
                    
                },
                rich: {
                    b: {
                        fontSize: 32,
                        align: 'left',
                        padding: 4
                    },
                    h1: {
                        borderColor: '#00F6FF',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    h2: {
                        borderColor: '#FF549D',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    h3: {
                        borderColor: '#4C67EB',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    c: {
                        fontSize: 32,
                        align: 'center',
                        padding: 4,
                    }
                }
            }
        }
    }
    
    ]
};