var data = {
    data:[900, 345, 393, 135, 178, 286]
}
var total = function(){
    var arr = data.data
    var len = arr.length
    var num = 0
    for(var i=0; i<len; i++){
        num = num + arr[i]
        console.log( arr[i] )
        console.log( num )
    }
    return num
}()

function getPercentage(itemNum,total){
    return Math.floor((itemNum/total) * 1000) /10
}

option = {
    coror:['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data :  function (){
            var list = [];
            for (var i = 1; i <= 6; i++) {
                list.push('11月' + i + '日');
            }
            return list;
        }()
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter:function(obj){
                        return [
                            '{a|'+obj.value+'}',
                            '{b|'+getPercentage(obj.value,total)+'%}'
                        ].join('\n')
                    },
                    rich: {
                        a: {
                            fontSize:16,
                            align:'center',
                            color: '#000',
                            height: 20
                        },
                        b: {
                            fontSize:14,
                            align:'center',
                            height: 20,
                            color: '#888'
                        }
                    }
                }
                
            },
            data: data.data
        }
    ]
};
