// heatmap
function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}


Highcharts.chart('heatmap', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1,
        backgroundColor: 'transparent'
    },
    credits: {
        enabled: true
    },

    exporting: {
    enabled: false
  },


    title: {
        text: null
    },

    xAxis: {
        categories: ['Wave 1', 'Wave 2', 'Wave 3', 'Wave 4', 'Wave 5', 'Wave 6', 'Wave 7', 'Wave 8', 'Wave 9', 'Wave 10', 'Wave 11', 'Pooled']
    },

    yAxis: {
        categories: ['<a href="https://www.understandingsociety.ac.uk/documentation/mainstage/dataset-documentation/variable/pidp">pidp</a>', 
            '<a href="https://www.understandingsociety.ac.uk/documentation/mainstage/dataset-documentation/variable/mindirect">mindirect</a>', 
            '<a href="https://www.understandingsociety.ac.uk/documentation/mainstage/dataset-documentation/variable/mreturned">mreturned</a>', 
            '<a href="https://www.understandingsociety.ac.uk/documentation/mainstage/dataset-documentation/variable/mlived">mlived</a>', 
            '<a href="https://www.understandingsociety.ac.uk/documentation/mainstage/dataset-documentation/variable/mintent">mintent</a>', 
            '<a href="https://www.understandingsociety.ac.uk/documentation/mainstage/dataset-documentation/variable/mintwhen">mintwhen</a>', 
        '<a href="https://www.understandingsociety.ac.uk/documentation/mainstage/dataset-documentation/variable/intendukc">intendukc</a>', 
        '<a href="https://www.understandingsociety.ac.uk/documentation/mainstage/dataset-documentation/variable/indeflv">indeflv</a>', 
        '<a href="https://www.understandingsociety.ac.uk/documentation/mainstage/dataset-documentation/variable/age2uk">age2uk</a>', 
        '<a href="https://www.understandingsociety.ac.uk/documentation/mainstage/dataset-documentation/variable/age2uk16">age2uk16</a>', 
        '<a href="https://www.understandingsociety.ac.uk/documentation/mainstage/dataset-documentation/variable/j1ukjob">j1ukjob</a>', 
        '<a href="https://www.understandingsociety.ac.uk/documentation/mainstage/dataset-documentation/variable/j1cojob">j1cojob</a>'],
        title: null,
        reversed: true
    },

    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var ix = point.index + 1,
                    xName = getPointCategoryName(point, 'x'),
                    yName = getPointCategoryName(point, 'y'),
                    val = point.value;
                return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
            }
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },

    legend:{ enabled:false },

    // legend: {
    //     align: 'right',
    //     layout: 'vertical',
    //     margin: 0,
    //     verticalAlign: 'top',
    //     y: 25,
    //     symbolHeight: 280
    // },

    tooltip: {
        formatter: function () {
            return '<b>' + getPointCategoryName(this.point, 'x') + '</b> <br><b>' +
                this.point.value + '</b> people migrated <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
        }
    },

    series: [{
        name: 'This chart shows where in the dataset researchers can find information from migrant sample members in the various waves of the dataset. ',
        borderWidth: 1,
       data: [[0, 0, 9744], [1, 0, 7109], [2, 0, 6184], [3, 0, 5826], [4, 0, 5572], [5, 0, 8393], [6, 0, 7172], [7, 0, 6102], [8, 0, 5148], [9, 0, 4612], [10, 0, 4053], [11, 0, 14932], 
              [0, 1, 4213], [1, 1, 0], [2, 1, 0], [3, 1, 0], [4, 1, 0], [5, 1, 2636], [6, 1, 1733], [7, 1, 0], [8, 1, 0], [9, 1, 0], [10, 1, 0], [11, 1, 9867],
              [0, 2, 4842], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 2, 0], [5, 2, 3044], [6, 2, 1190], [7, 2, 0], [8, 2, 0], [9, 2, 0], [10, 2, 0], [11, 2, 9873],
              
              [0, 3, 4843], [1, 3, 0], [2, 3, 0], [3, 3, 0], [4, 3, 0], [5, 3, 3044], [6, 3, 1190], [7, 3, 0], [8, 3, 0], [9, 3, 0], [10, 3, 0], [11, 3, 9874],
              [0, 4, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0], [5, 4, 2177], [6, 4, 1169], [7, 4, 0], [8, 4, 1786], [9, 4, 0], [10, 4, 0], [11, 4, 4395],
              [0, 5, 0], [1, 5, 0], [2, 5, 0], [3, 5, 0], [4, 5, 0], [5, 5, 238], [6, 5, 94], [7, 5, 0], [8, 5, 142], [9, 5, 0], [10, 5, 0], [11, 5, 450],
              [0, 6, 0], [1, 6, 0], [2, 6, 0], [3, 6, 0], [4, 6, 0], [5, 6, 1215], [6, 6, 0], [7, 6, 0], [8, 6, 547], [9, 6, 0], [10, 6, 0], [11, 6, 1752],
              [0, 7, 0], [1, 7, 0], [2, 7, 0], [3, 7, 0], [4, 7, 0], [5, 7, 1387], [6, 7, 0], [7, 7, 0], [8, 7, 560], [9, 7, 0], [10, 7, 0], [11, 7, 1956],
              [0, 8, 4624], [1, 8, 0], [2, 8, 0], [3, 8, 0], [4, 8, 0], [5, 8, 2945], [6, 8, 3829], [7, 8, 0], [8, 8, 2586], [9, 8, 0], [10, 8, 0], [11, 8, 10127],
              [0, 9, 4624], [1, 9, 0], [2, 9, 0], [3, 9, 0], [4, 9, 0], [5, 9, 2961], [6, 9, 3810], [7, 9, 0], [8, 9, 2571], [9, 9, 2571], [10, 9, 0], [11, 9, 10127],
              [0, 10, 0], [1, 10, 0], [2, 10, 0], [3, 10, 0], [4, 10, 0], [5, 10, 1822], [6, 10, 0], [7, 10, 0], [8, 10, 1580], [9, 10, 0], [10, 10, 0], [11, 10, 3402],
              [0, 11, 0], [1, 11, 0], [2, 11, 0], [3, 11, 0], [4, 11, 0], [5, 11, 1125], [6, 11, 0], [7, 11, 0], [8, 11, 856], [9, 11, 0], [10, 11, 0], [11, 11, 1981]
              ],
 

        dataLabels: {
            enabled: true,
            color: '#000000'
        },


    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        formatter: function () {
                            return this.value.charAt(0);
                        }
                    }
                }
            }
        }]
    }



});