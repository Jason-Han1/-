var xdata = function(){
    var data = []
    for(var i=0;i<1500;i++){
        data.push(i)
    }
    return data
}()
var ydata = function(){
    var data = []
    for(var j=0;j<1500;j++){
        data.push(Math.random()*1)
    }
    return data
}()
var xcol = function(){
   var color = [
                          '#eb4848','#eb6449','#eb7f49','#eb9a49','#ebb549',
                           '#ebd049','#ebeb49','#d0eb49','#b5eb49','#9aeb49',
                           '#7feb49','#64eb49','#49eb49','#49eb64','#49eb7f',

                           '#49eb9a','#49ebb5','#49ebd0','#49ebeb','#49d0eb',
                           '#49b5eb','#499aeb','#497feb','#4964eb','#4949eb',
                           '#6449eb','#7f49eb','#9a49eb','#b549eb','#d049eb',
                           '#eb49eb','#eb49d0'
                        ];
   var c = [];
   for(var x =0;x<47;x++)
   {
       for(var y =0;y<32;y++){
           c.push(color[y])
       }
   }
   console.log(c)
   return c
}()
option = {
    "title": {
        "text": "知识点光谱", 
       // "subtext": "昨天 vs 前天", 
        "x": "center"
    }, 
    "tooltip": {
        "trigger": "axis", 
        "axisPointer": {
            "type": "shadow"
        },
    }, 
    "grid": {
        "borderWidth": 0, 
        "y2": 120
    }, 
    "legend": [{
        top:0,
        left:100,
        "x": "left", 
        "data": ['高锰酸盐指数']
    },
    {
        top:30,
        left:100,
        "x": "left", 
        "data": ['1']
    }
    ], 
    "toolbox": {
        "show": true, 
        "feature": {
            "restore": { }, 
            "saveAsImage": { }
        }
    }, 
    "calculable": true, 
    "xAxis": [
        {
            "type": "category", 
            "splitLine": {
                "show": false
            }, 
            "axisTick": {
                "show": false
            }, 
            "splitArea": {
                "show": false
            },
            "data":xdata
        }
    ], 
    "yAxis": [
        {
            "type": "value", 
            "splitLine": {
                "show": false
            }, 
            "axisLine": {
                "show": true
            }, 
            "axisTick": {
                "show": false
            }, 
            "splitArea": {
                "show": false
            }
        }
    ], 
    "dataZoom": [
        {
            "show": true, 
            "height": 30, 
            "xAxisIndex": [
                0
            ], 
            bottom:40,
            "start": 0, 
            "end": 10
        }, 
        
    ], 
    "series": [
        {
            "name": "1", 
            "type": "bar", 
            "stack": "1", 
            "barMaxWidth": 50, 
            "barGap": "10%", 
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = xcol
                        return colorList[params.dataIndex]
                    },
                    
                }
            },
            "data": ydata 
        },
        //{
          //  name:'1',
        //    type:'line',
          //  data:ydata,
            
        //}
    ]
}