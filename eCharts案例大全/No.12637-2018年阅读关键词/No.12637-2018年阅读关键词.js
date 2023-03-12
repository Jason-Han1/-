var seatirtal = "/asset/get/s/data-1545113535680-dYbvzMT_X.png";

var data=[];
//alert(nodes[0].value);
for(var i=0;i<nodes.length;i++){
    if(nodes[i].category!=="书"){
        //alert(nodes[i].category+'---'+nodes[i].name+(nodes.category=="书"));
        //continue;
        data.push({name:nodes[i].name,value:nodes[i].value});
    }
    
}

var logobig = "/asset/get/s/data-1513425570601-HyoscFffz.png";

var flower = "/asset/get/s/data-1513385158705-Bk1C3JzGf.png";

var eye = "/asset/get/s/data-1513384868731-BkpooJzfM.png";

var cup = "/asset/get/s/data-1513384473173-HyZXqyGMz.png";

var logo = "/asset/get/s/data-1513362149897-By017cZfM.png";

var butterfly = "/asset/get/s/data-1513361750858-Bk1w-5-ff.png";

var ren = "/asset/get/s/data-1513360501160-rkaOnYWMG.png";
var book="/asset/get/s/data-1545110301462-AdfJwrrFV.png";
var diver="/asset/get/s/data-1545111175354-WcDEwg--R.png";
var zhangyu="/asset/get/s/data-1545111824809-5psddV5sH.png";
//var seatirtal="/asset/get/s/data-1545112196149-wAms1TOLm.png";
var w = '120%';
var h ='100%';
var minsize = 14;///w / 500 * 16;
var maxsize = 60;//w / 500 * 70;


var maskImage = new Image();
var colors = [
    "#2ec7c9",
    "#b6a2de",
    "#5ab1ef",
    "#ffb980",
    "#d87a80",
    "#8d98b3",
    "#e5cf0d",
    "#97b552",
    "#95706d",
    "#dc69aa",
    "#07a2a4",
    "#9a7fd1",
    "#588dd5",
    "#f5994e",
    "#c05050",
    "#59678c",
    "#c9ab00",
    "#7eb00a",
    "#6f5553",
    "#c14089"
];
var bgColor = '#2E2733';
bgColor={
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.7,
          colorStops: [{
              offset: 0,
              color: '#b6a2de' // 0% 处的颜色
          }, {
              offset: .4,
              color: '#9a7fd1' // 100% 处的颜色
          }, {
              offset: 1,
              color: '#59678c' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
      };
      
      //生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 
var option = {
    backgroundColor:bgColor,
    title: {
        text: "2018年阅读关键词",
        subtext:'今年迷海龟',
        textStyle: {
            fontSize: 30,
            align: 'center',
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
        },
        subtextStyle: {
            align: 'center',
            color:'#DDD',
            fontSize:18,
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
        },
    },
    series: [{
        type: 'wordCloud',
        width: w,
        height: h,
        sizeRange: [minsize, maxsize],
        //rotationRange: [0, 45, 90, -45],
        //rotationStep: 45,
        gridSize: 10,
        shape: 'pentagon',
        maskImage: maskImage,
        textStyle: {
            normal: {
                
                color: function(v) {
                    idx=randomNum(0,19);
                    return colors[idx];
                },
                textBorderColor:'#FFF',
                textBorderWidth:1,
                textShadowBlur: 5,
                textShadowColor: '#FFF',
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: data
    }],
    graphic: {
        elements: [{
            type: 'image',
            style: {
                image: logobig,
                width: '100%',
                height: '100%'
            },
            left: 'right',
            top: 'bottom'
        }]
    }
};

maskImage.onload = function() {
    option.series[0].maskImage
    //setTimeout(function(){
    //var myChart=echarts.getInstanceByDom($("#chart-panel")[0]);
    myChart.setOption(option);
    //},1000);
}

//maskImage.src = butterfly;
maskImage.src = seatirtal;