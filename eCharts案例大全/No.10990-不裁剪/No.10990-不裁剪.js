 var lineData = []

    function getColor() {
        //定义字符串变量colorValue存放可以构成十六进制颜色值的值
        var colorValue = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
        //以","为分隔符，将colorValue字符串分割为字符数组["0","1",...,"f"]
        var colorArray = colorValue.split(",");
        var color = "#";//定义一个存放十六进制颜色值的字符串变量，先将#存放进去
        //使用for循环语句生成剩余的六位十六进制值
        for (var i = 0; i < 6; i++) {
            //colorArray[Math.floor(Math.random()*16)]随机取出
            // 由16个元素组成的colorArray的某一个值，然后将其加在color中，
            //字符串相加后，得出的仍是字符串
            color += colorArray[Math.floor(Math.random() * 16)];
        }
        return color;
    }

for (var i = 0; i < 20; ++i) {
   var x = Math.floor(Math.random()*600+50)
   var y = Math.floor(Math.random()*600+50)
   var xSign = Math.floor(Math.random()*2+1)
   var ySign = Math.floor(Math.random()*2+1)
   //负数
   if (xSign === 1) {
        x *= -1;    
   }
   if (ySign === 1) {
       y *= -1;
   }
  
   var obj = {
        name: "测试直线"+i+1,
        coords: [
            [0, 0],
            [x, y]
        ],
        label: {
            show:false
        },
        lineStyle: {
            normal: {
                color: getColor(),
                width: 1
            }
        }
    }
   lineData.push(obj);
}

option = {
    animation: false,
    title: {
        text: '网络拓扑图'
    },
    xAxis: {
        type:'value',
        min: -1000,
        max: 1000,
        splitLine:{
　　　　lineStyle: {
　　　　    width: 1
　　　　}
　　}
    },
    yAxis: {
        type:'value',
        min: -1000,
        max: 1000,
        splitLine:{
　　　　lineStyle: {
　　　　    width: 1
　　　　}
　　}
    },
    dataZoom: [{
            type: 'inside',
            xAxisIndex: 0,
            filterMode: 'filter'
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            filterMode: 'weakFilter'
        }
    ],
    series: [{
        type: 'lines',
        name: '网络拓扑图',
        coordinateSystem: 'cartesian2d',
        lineStyle: {
            normal: {
                color: '#F00',
                width: 1
            }
        },
        label: {
          fontSize: 15  
        },
        symbol: ['none', 'arrow'],
        // 数据
        data: lineData
    }]
};

myChart.on('click',function(params){
    // params  单击拐点的具体数据信息
   console.log('单击项',params);
   if (params.componentType === 'markPoint') {
        // 点击到了 markPoint 上
        console.log('点击到了 markPoint 上');
        if (params.seriesIndex === 5) {
            // 点击到了 index 为 5 的 series 的 markPoint 上。
        }
    }
    else if (params.componentType === 'series') {
        console.log('点击到了 series 上');
        if (params.seriesType === 'graph') {
            if (params.dataType === 'edge') {
                // 点击到了 graph 的 edge（边）上。
            }
            else {
                // 点击到了 graph 的 node（节点）上。
            }
        }
    }
})

myChart.on('mousemove',function(params){
   if (params.componentType === 'markPoint') {
        // 移动到了 markPoint 上
        console.log('移动到了 markPoint 上');
        if (params.seriesIndex === 5) {
            // 移动到了 index 为 5 的 series 的 markPoint 上。
        }
    }
    else if (params.componentType === 'series') {
        console.log('移动到了 series 上');
        if (params.seriesType === 'graph') {
            if (params.dataType === 'edge') {
                // 移动到了 graph 的 edge（边）上。
            }
            else {
                // 移动到了 graph 的 node（节点）上。
            }
        }
    }
})