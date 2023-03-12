data=[
        ['01.xxx公司','01','2020-01-01','2020-03-10'],
        ['02.xxx公司','01','2020-01-20','2020-05-10'],
        ['03.xxx公司','02','2020-02-15','2020-03-10'],
        ['04.xxx公司','01','2020-02-05','2020-04-01'],
        ['05.xxx公司','01','2020-02-01','2020-03-14'],
        ['06.xxx公司','01','2020-02-15','2020-03-01'],
        ['07.xxx公司','01','2020-01-15','2020-04-01']
    ]
    
    optionObj={
        yAxisData:[],
        seriesData_01:[],
        seriesData_02:[],
        seriesData_03:[]
    }
    
    for(let item of data.values()){
        optionObj.yAxisData.push(item[0]);
        optionObj.seriesData_01.push(new Date(item[2]));
        data_02 = item[1] == '01' ? new Date(item[3]) : '-';
        data_03 = item[1] == '02' ? new Date(item[3]) : '-';
        optionObj.seriesData_02.push(data_02);
        optionObj.seriesData_03.push(data_03);
    }

var option = {
    backgroundColor: "#0f2e4d",
    grid: {
        containLabel: true,
        show: false,
        right: 130,
        left: 40,
        bottom: 40,
        top: 90
    },
    xAxis: {
        type: "time",
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        },
        axisTick:{
             lineStyle:{
                color:'#fff'
            }
        },
        axisLabel: {
            show: true,
            color:'#fff',
            fontSize:15,
            formatter:(value, index)=> {
                var date = new Date(value);
                var texts = [date.getFullYear(),(date.getMonth() + 1), date.getDate()];
                return texts.join('/');
            }
        },
        splitLine: {
            show: true,
            lineStyle:{
                width:1,
                color:['#fff'],
                type:'dashed'
            }
        },
    },
    yAxis: {
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        },
        axisTick:{
             lineStyle:{
                color:'#fff'
            }
        },
        axisLabel:{
            color:'#fff',
            fontSize:18,
        },
        data: optionObj.yAxisData
    },
    series: [
        {
            name: "计划检修风险(辅助)",
            type: "bar",
            stack: "风险",
            itemStyle: {
                color: "#0f2e4d"
            },
            emphasis: {
                itemStyle: {
                    color: "#0f2e4d"
                }
            },
            barWidth:20,
            zlevel: -1,
            z: 3,
            data: optionObj.seriesData_01
        },
        {
            name: "计划检修风险",
            type: "bar",
            stack: "风险",
            label: {
                show: false
            },
            itemStyle: {
                color: "skyblue",
                borderColor: "#0f2e4d",
                borderWidth: 2
            },
            emphasis: {
                itemStyle: {
                    color: "skyblue",
                    borderColor: "#0f2e4d",
                    borderWidth: 2
                }
            },
            barWidth:20,
            zlevel: -1,
            data: optionObj.seriesData_02
        },
        {
            name: "计划检修风险",
            type: "bar",
            stack: "风险",
            label: {
                show: false
            },
            itemStyle: {
                color: "#e53333",
                borderColor: "#0f2e4d",
                borderWidth: 2
            },
            emphasis: {
                itemStyle: {
                    color: "#e53333",
                    borderColor: "#0f2e4d",
                    borderWidth: 2
                }
            },
            barWidth:20,
            zlevel: -1,
            data: optionObj.seriesData_03
        }
    ]
}