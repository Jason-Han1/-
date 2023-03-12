var data = [];
var dataCount = 20;
var startTime = +new Date();
var categories = ['深睡', '浅睡', 'REM','清醒'];
var types = [
    {name: '深睡', color: '#764497'},
    {name: '浅睡', color: '#4CBAEB'},
    {name: 'REM', color: '#F0843E'},
    {name: '清醒', color: '#F1D31E'},
];

// Generate mock data
    var baseTime = startTime;
    const linedata = []
    let pre = null
    const indexFn = ()=>{
        const index = Math.round(Math.random()*3)
        if(index===pre)return indexFn()
        else return index
    }
    for (var i = 0; i < dataCount; i++) {
        const index = indexFn()
        pre=index
        const typeItem = types[index];
        const duration = Math.round(Math.random() * 1000*60+1000)*Math.round(Math.random()*30+50);
        data.push({
            name: typeItem.name,
            value: [
                index,
                baseTime,
                baseTime + duration,
                duration
            ],
            itemStyle: {
                normal: {
                    color:typeItem.color
                }
            }
        });
        linedata.push([baseTime,typeItem.name,index])
        linedata.push([baseTime+duration,typeItem.name,index])
        baseTime += duration;
    }

function renderItem(params, api) {
    var categoryIndex = api.value(0);
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var height = api.size([0, 1])[1] * 0.5;

    var rectShape = echarts.graphic.clipRectByRect({
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height
    }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
    });

    return rectShape && {
        type: 'rect',
        transition: ['shape'],
        shape: rectShape,
        style: api.style()
    };
}

linedata.pop();
linedata.shift();
const newData = []
linedata.forEach((it,i,)=>{
    if(i%2===0){
      newData.push([it,linedata[i+1]])
    }
})
console.log(moment(startTime).format('HH:mm'))
option = {
    tooltip: {
        formatter: function (params) {
            console.log(params)
            const h = moment.duration(params.value[3]).hours();
            const m = moment.duration(params.value[3]).minutes();
            let time= ''
            if(h>0) time = h+'小时'+m+'分钟'
            else time= m+'分钟'
            console.log(moment(params.value[1]).format('HH:mm'))
            return params.marker+moment(params.value[1]).format('HH:mm')+'-'+moment(params.value[2]).format('HH:mm')+ ' | '+ params.name + ': ' + time;
        }
    },
    title: {
        text: 'Profile',
        left: 'center'
    },
    // dataZoom: [{
    //     type: 'slider',
    //     filterMode: 'weakFilter',
    //     showDataShadow: false,
    //     top: 400,
    //     labelFormatter: ''
    // }, {
    //     type: 'inside',
    //     filterMode: 'weakFilter'
    // }],
    grid: {
        height: 200
    },
    xAxis: {
        min: startTime,
        scale: true,
        interval:600000*5,
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        splitLine:{
            show:false
        },
        axisLabel: {
            formatter: function (val) {
                return  moment(val).format('HH:mm');
            }
        }
    },
    yAxis: {
        data: categories,
        axisTick:{
            show:false
        },
        axisLine:{
            show:false
        }
    },
    series: [{
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
            opacity: 1
        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: data
    }
    ,...newData.map((item,i)=>{
        let start = types.find(it=>it.name===item[0][1]).color
        let end = types.find(it=>it.name===item[1][1]).color
        if(item[0][2]>item[1][2]){
            const temp = start;
            start = end;
            end = temp;
        }
        item[0][0] = item[0][0] -30000
        item[1][0] = item[1][0] +30000
        console.log(item,'--')
        return {
            type: 'line',
            symbol:'none',
            smooth:true,
            lineStyle:{
                width:3,
                color:{
                    type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 1, color:start   // 0% 处的颜色
                  },{
                      offset: 0.8, color:start   // 0% 处的颜色
                  }
                  , {
                      offset: 0.2, color:end  // 100% 处的颜色
                  }, {
                      offset: 0, color:end  // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
            },
            data: item
        }
    })
    ]
};