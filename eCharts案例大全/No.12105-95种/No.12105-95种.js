var data = [{
    value:48,
    name: '公共设施'
}, {
    value: 13,
    name: '道路交通设施'
}, {
    value: 12,
    name: '园林绿化设施'
}, {
    value: 22,
    name: '基础设施'
}];
var xdata=[];
var ydata=[];
var sundata='';
for (var i = 0; i < data.length; i++) {

    xdata.push(data[i].name);
    ydata.push(data[i].value);
}
function sum(arr) {
  return eval(arr.join("+"));
};
sundata=sum(ydata);

option = {
    title: {
        text:sundata +'种',
       
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 22
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },

    legend: {
        orient: 'horizontal',
        top: '0%',
        data:xdata
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['40%', '58%'],
        color: ['#33836b', '#4aa76d', '#69c678', '#89d979','#FCC667','#CC5962'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{c}',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 12
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }]
};