var index = [{
        name: '小鱼儿',
        value: [
            ["2017-05-25", 1],
            ["2017-06-08", 1],
            ["2017-06-09", 1],
            ["2017-06-01", 1],
            ["2017-06-03", 1],
            ["2017-02-28", 1],
            ["2017-02-26", 2],
            ["2017-02-27", 1],
            ["2017-02-24", 1],
            ["2017-02-25", 1],
            ["2017-02-22", 1],
        ]
    }, {
        name: '小红红',
        value: [
            ["2017-05-25", 1],
            ["2017-06-08", 1],
            ["2017-06-09", 1],
            ["2017-01-01", 1],
            ["2017-06-03", 1],
            ["2017-02-28", 1],
            ["2017-01-26", 2],
            ["2017-02-27", 1],
            ["2017-01-24", 1],
            ["2017-02-25", 1],
            ["2017-01-22", 1],
        ]
    }, {
        name: '小佳佳',
        value: [
            ["2017-05-25", 15],
            ["2017-04-08", 13],
            ["2017-01-09", 12],
            ["2017-06-01", 13],
            ["2017-03-03", 14],
            ["2017-06-28", 1],
            ["2017-02-26", 2],
            ["2017-02-04", 1],
            ["2017-02-14", 1],
            ["2017-02-15", 1],
            ["2017-02-12", 1],
        ]
    }]
    console.log(index.length)
    var calendar = [];
    var series = [];
    //var start;
    for (var i = 0; i < index.length; i++) {
        var obj = {
            range: '2017', //['2011-01-01', '2011-12-31'],//'2011',
            cellSize: ['15',15],
            left: 70,
            right: 30,
            yearLabel: {
                show: true,
                formatter:index[i].name,
                // formatter:index[i].name,
                textStyle: {
                    color: '#000'
                }
            },
            top:60+170*i
        }
        var obj1 = {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: i,
            data: getVirtulData(2017,i),
            tooltip: {
                formatter:function(data){

                    return data.value[0]+'<br/>'+data.value[1]
                    
                },
            }
             
        }
        calendar.push(obj)
        series.push(obj1)

    }
    function getVirtulData(year,key) {
        console.log(year,key)
        year = year || '2017';
        var date = +echarts.number.parseDate(year + '-01-01');
        var end = +echarts.number.parseDate((+year + 1) + '-01-01');
        var dayTime = 3600 * 24 * 1000;
        var data=index[key].value
        //var data = inner

        return data;
    }
    option = {
        title: {
            top: 0,
            left: 'center',
            text: '个人工作饱和情况'
        },
        tooltip: {
            position: 'top'
        },
        visualMap: {
            min: 0,
            max: 20,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            top: 'top',
            show: false
        },


        calendar: calendar,
        series: series,

    };