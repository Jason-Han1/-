option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis',
        formatter:function(params){
            
            var strStyle= `<style>
                        .tb_table {
                            display: table;
                        }
    
                        .tb_table .tb_row {
                            display: table-row;
                        }
                
                        .tb_table .tb_row .tb_cell {
                            display: table-cell;
                            color: white;
                            border: 0;
                            padding: 5px 10px;
                        }
                        .colorCircle {
                			display:inline-block;
                			margin-right:5px;
                			border-radius:10px;
                			width:10px;
                			height:10px;
                		}
                    </style>`;
            var strTabStart = `<div class='tb_table'>`;
            var strTabEnd = `</div>`;
            var dataLen = params.length;
            var rowNum = 2;
            var lineNum = parseInt(dataLen/rowNum);
            if(dataLen % rowNum != 0)
                lineNum += 1;
            var strTabMid = params[0].axisValue;
            console.info(params);
            var tmpIndex;
            for (var i = 0; i < lineNum; i++){
                strTabMid += `<div class='tb_row'>`;
                for(var j = 0; j < rowNum; j++){
                    strTabMid += `<div class='tb_cell'>`;
                    tmpIndex = i * rowNum + j;
                    if(tmpIndex < dataLen)
                    {
                        strTabMid += `<span style='background-color:`+ params[tmpIndex].color + `' class="colorCircle"></span>`;
                        strTabMid += params[tmpIndex].seriesName;
                        strTabMid +=":";
                        strTabMid += params[tmpIndex].data;
                    }
                    strTabMid += `</div>`;
                }
                strTabMid += `</div>`;
            }
            
            return strStyle + strTabStart + strTabMid+strTabEnd;
        }
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
