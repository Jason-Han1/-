option_inter = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
            legend: {
                data:['output', 'input']
            },
            dataZoom: {
                show: false,
                start: 0,
                end: 100
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data: []
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: 'KB/s',
                    //max: 30,
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                }
            ],
            series: [
                {
                    name:'output',
                    type:'line',
                    data:[]
                },
                {
                    name:'input',
                    type:'line',
                    data:[]
                }
            ]
        }

setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
    var in_data = (Math.random() * 10 + 5).toFixed(1) - 0;
    var out_data = (Math.random() * 10 + 5).toFixed(1) - 0;

    var data_inter_out = option_inter.series[0].data;
    var data_inter_in = option_inter.series[1].data;
    if(data_inter_out.length<=20){
        data_inter_out.push(out_data);
        data_inter_in.push(in_data);
        option_inter.xAxis[0].data.push(axisData); 
    }else{
        data_inter_out.shift();
        data_inter_out.push(out_data);
        data_inter_in.shift();
        data_inter_in.push(in_data);
        option_inter.xAxis[0].data.shift();
        option_inter.xAxis[0].data.push(axisData);
    }
    myChart.setOption(option_inter); 
},5000);

var data_inter_out = option_inter.series[0].data;
var data_inter_in = option_inter.series[1].data;
var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
var in_data = (Math.random() * 10 + 5).toFixed(1) - 0;
var out_data = (Math.random() * 10 + 5).toFixed(1) - 0;
data_inter_out.push(out_data);
data_inter_in.push(in_data);
option_inter.xAxis[0].data.push(axisData);
myChart.setOption(option_inter);