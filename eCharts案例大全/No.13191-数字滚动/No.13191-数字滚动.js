function initNum(i){
    
    return {
        type: 'group',
        left: i * 60,
        top: 0,
        width: 50,
        height: 100,
        bounding: 'raw',
        children: [
            {
                type: 'rect',
                left: 'center',
                top: 0,
                style: {
                    fill: '#165894',
                },
                shape: {
                    width: 50,
                    height: 50,
                }
            },
            {
                type: 'rect',
                left: 'center',
                top: 50,
                style: {
                    fill: '#124a7b',
                },
                shape: {
                    width: 50,
                    height: 50,
                }
            },
            {
                id: 'num-'+i,
                type: 'text',
                left: 'center',
                top: 'middle',
                style: {
                    fill: '#fff',
                    text: 0,
                    font: '70px Microsoft YaHei'
                }
            }
        ]
    }
}


function initGraphic(num){
    var str = num + '';
    
    var graphics = {
        type: 'group',
        left: 'center',
        top: 'middle',
        width: str.length * 60,
        children: []
    };
    
    // 生成数字
    for (var i = 0; i < str.length; i++) {
        graphics.children.push(initNum(i));
    }
    
    // 标题
    graphics.children.push({
        type: 'text',
        left: 'center',
        top: 120,
        style: {
            fill: '#fff',
            text: '总数',
            font: '16px Microsoft YaHei'
        }
    });
    
    return graphics;
}

// 显示的数据
var num = 88435;


option = {
    backgroundColor:'#5B5C6E',
    graphic: initGraphic(num)
};

//防止图形未渲染
setTimeout(function() {
    start();
}, 0);

function start(){

    var index = num - 200;
    index = index < 0 ? 0 : index;

    var timer = setInterval(function () {
        if( ++index == num){
            clearInterval(timer);
        }
        
        var graphics = {
            type: 'group',
            children: []
        };
        
        var str = index + '';
        for (var i = 0; i < str.length; i++) {
            graphics.children.push({
                id: 'num-'+i,
                type: "text",
                style: {
                    text: str[i]
                }
            })
        }
        
        myChart.setOption({
            graphic: graphics
        });
        
    }, 10);
}    
    
