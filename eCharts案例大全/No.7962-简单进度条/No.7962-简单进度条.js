 option = {
     backgroundColor: '#0e202d',

     xAxis: {

         type: 'value',
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLine: {
             show: false
         },
         axisLabel: {
             show: false
         },
         max: 100,
     },
     yAxis: {
         type: 'category',
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLine: {
             show: false
         },
         axisLabel: {
             show: false
         },
     },
     series: [{
         name: 'XXX',
         type: 'pictorialBar',
         symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAhNJREFUeNq0llsoLVEcxme27ZJEPLimXJI4yaMQxZOkePN0IukQdZIXOiFFSrnkQUnigTydDkleSOLxpJRc6qBc6uSE3G8P+P71zWns9phlX776tWdmrzXfrFlrffPXt19fNQUlglLwBTjBM6/L8R1YA4vg6aOb6DZmOeAbOAYzYBO8uLQJA8V8mL9gCFx+xiwIdIFbMMhfFaWBFvALLKiYRYNuMAB2Nc9UD4I5yv9yuDSK4khavTASjYBD0G5lpoM+voYLzXvNglNQ4c6sBvwEJ5rvNArKQKTZLATkuptUH6gHNJvNKsGk5h8dcGQhhlkeWNX8J3ljJQ6mwCNQiZJkMAfuObdtIECh3wooEKMUsKfQIRQsgySeJ3DjSwB02PSVhwuUkcUwZuxUbjIy6zu3ja0cXImPCm3jLK5H8B5KZtdMDjutWVxfBw8K/XUH5ytFofFv16yDrkCD4orUZYGcc95U1ATmQRGNphUTRwZz5OTJDV+lSiYukc9IFte8sanlCav8tKHFIwtsG2YbIAOE+8HsKwP+Xer3cpP6UrEg3wh4s9k+V1ydj4wkcfrBD6sv9RQbVXtpJEXQMOgEZ1ZmGssC46sd5oFRNssCmZI/5j+cFh0mQCYYY3KMK6REKmhkGVfrLgJ1hSK1kB9X0Q4T54zVUyyXdbxsWpYB/zwtUl33Szprw3BWv2K69ZGBWW8CDAD7MHTPqrySXgAAAABJRU5ErkJggg==',
         symbolSize: [50, 50],
         symbolOffset: [20, 0],
         z: 12,
         itemStyle: {
             normal: {
                 color: '#14b1eb'
             }
         },
         data: [{
             value: 80,
             symbolPosition: 'end'
         }]
     }, {
         type: 'bar',
         itemStyle: {
             normal: {
                 color: '#14b1eb',
                 opacity: .7
             }
         },
         showBackground: true,
         silent: true,
         barWidth: 10,
         barGap: '-100%', // Make series be overlap
         data: [80]
     }]
 };