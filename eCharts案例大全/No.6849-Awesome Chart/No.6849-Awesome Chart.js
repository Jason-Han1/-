option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', '', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310],
        label: {
            normal: {
                position: 'top',
                show: true,
            }
        },
        markArea: {
            data: [
                [{
                    coord: [6,240],
                    itemStyle: {
                        color: 'green'
                      }
                    
                }, {
                    coord: [2,0],
                }]
            ]
        },
        markPoint:{
            data: [{
              name: 'vv1',
              value: 220,
              coord:[0,220]
            },
            {
              name: 'vv2',
              value: 182,
              coord:[2,182]
            }],
           symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAgCAYAAACYTcH3AAACqUlEQVRYhc2XTWsTQRjH/7Op3bw2vVjdg6CGICIVQRAUTwERTwXTU66CHvwg/Q5V+nJo0yiUBAweQlu9SkpfLnooSRMlRbRpEiG7s2QzstsYJps02cRk2z8MOzs7M89vZp95mIdg4hpMIuaGEYrxU49xdWJ62inGw5DCty/PHA7hLQDJBogjWVZeXr/7+COAemMjWHNndBC/3y+JojhyEkqpxBh7A0D3EaEBZFRIo9gCoku3Qwi5arJPBFusn60W/7wIME2g/4JRlpZQDoehLC4OhWxgmNreHmg8DmgaaCKB2vb2OcEw1rYbyvKyAWY7jLq5Ce3wsKVNy+ehbmzYC8MoBV1ZOR0sSfDNz8MRCBjvyuoqmKLYB6MmEqgXi0adiCKEqSkQp/MUtFQCXV+3B4adnPQ0psbjqB8fjx5GiUZ7/gamqs3fODIYLZeDmkpZ6qtubbU5+FBh9ACnH2le9UIB1bk5aNlsa2f96C8sjAamtruL2s5OWzvxenEpFAKZnGwfs7+PWjo9fBj9yHaS7j9aJgMmy53HRaN9wYxZ6APt4KAzTLUKGoudPS6T6QvG0s6Is7NGTOlL4+MQw+G+hljaGWckYpRR67zvMy26sDBHlFJbjOp2GGM/GylKM3g1fUaWlVf6jZ0QcqXbRA6HAy6XC263u6VdVVXIsgwrC2KMFUrlymtzEvcvoyTcTZ2/sbfp04e14K3gzajP57vj8XiMz4qioFwu//n1u/hi+tHTpHnFnXgapc4/eRhwIOiS5pLku4XL9+9Np7xe721BEFCpVIr5H4WZB6GZNGeoFww4EPAwsJjeNvt8TsakYODGe0EgE9nc98jDJ8+/mlaLHkBmKAya+BNT4SevW4AwwxjqFPT6mYj3LX6VVudokaUI3AWkk+GBQADgL8BwEaVPbmZGAAAAAElFTkSuQmCC",
            symbolSize: 30,
            symbolOffset : [0,-40],
            
            label: {
              show: false
            }
          }
    },{
        type: 'line',
        data: [220, 162, 291, 334, 190, 390, 300],
        label: {
            normal: {
                position: 'top',
                show: true,
            }
        },
        markArea: {
            data: [
                [{
                    coord: [6,230],
                    itemStyle: {
                        color: 'green'
                      }
                    
                }, {
                    coord: [5,0],
                }]
            ]
        },
        markPoint:{
            data: [{
              name: 'vv3',
              value: 220,
              coord:[0,220]
            },
            {
              name: 'vv4',
              value: 190,
              coord:[4,190]
            }],
            symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAgCAYAAACYTcH3AAACqUlEQVRYhc2XTWsTQRjH/7Op3bw2vVjdg6CGICIVQRAUTwERTwXTU66CHvwg/Q5V+nJo0yiUBAweQlu9SkpfLnooSRMlRbRpEiG7s2QzstsYJps02cRk2z8MOzs7M89vZp95mIdg4hpMIuaGEYrxU49xdWJ62inGw5DCty/PHA7hLQDJBogjWVZeXr/7+COAemMjWHNndBC/3y+JojhyEkqpxBh7A0D3EaEBZFRIo9gCoku3Qwi5arJPBFusn60W/7wIME2g/4JRlpZQDoehLC4OhWxgmNreHmg8DmgaaCKB2vb2OcEw1rYbyvKyAWY7jLq5Ce3wsKVNy+ehbmzYC8MoBV1ZOR0sSfDNz8MRCBjvyuoqmKLYB6MmEqgXi0adiCKEqSkQp/MUtFQCXV+3B4adnPQ0psbjqB8fjx5GiUZ7/gamqs3fODIYLZeDmkpZ6qtubbU5+FBh9ACnH2le9UIB1bk5aNlsa2f96C8sjAamtruL2s5OWzvxenEpFAKZnGwfs7+PWjo9fBj9yHaS7j9aJgMmy53HRaN9wYxZ6APt4KAzTLUKGoudPS6T6QvG0s6Is7NGTOlL4+MQw+G+hljaGWckYpRR67zvMy26sDBHlFJbjOp2GGM/GylKM3g1fUaWlVf6jZ0QcqXbRA6HAy6XC263u6VdVVXIsgwrC2KMFUrlymtzEvcvoyTcTZ2/sbfp04e14K3gzajP57vj8XiMz4qioFwu//n1u/hi+tHTpHnFnXgapc4/eRhwIOiS5pLku4XL9+9Np7xe721BEFCpVIr5H4WZB6GZNGeoFww4EPAwsJjeNvt8TsakYODGe0EgE9nc98jDJ8+/mlaLHkBmKAya+BNT4SevW4AwwxjqFPT6mYj3LX6VVudokaUI3AWkk+GBQADgL8BwEaVPbmZGAAAAAElFTkSuQmCC",
            symbolSize: 30,
            symbolOffset : [0,-40],
            
            label: {
              show: false
            }
          },
    }]
};

myChart.on('click', function(params) {
    console.log(params)

    alert(params.data)
})