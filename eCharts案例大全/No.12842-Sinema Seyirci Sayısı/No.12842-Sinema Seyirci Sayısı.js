option = {
    color: ['#363946'],
    title: {
        text: 'Sinema Seyirci Sayısı'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        boundaryGap: false,
        data: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
    },
    yAxis: {},
    series: [{
        type: 'line',
        areaStyle: {},
        smooth: true,
        markPoint: {
            data: [{
                    type: 'max',
                    name: 'Maksimum'
                },
                {
                    type: 'min',
                    name: 'Minimum'
                }
            ]
        },
        data: [2899103, 3289438, 2079671, 2923286, 6657156, 6795791, 10838617, 7712626, 16166153, 15220249, 17996023, 17954808, 18235611, 24963870, 30994840, 31661600, 28834409, 37904091]
    }]
};