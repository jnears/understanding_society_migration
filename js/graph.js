Highcharts.chart('employment-pie', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '',
        align: 'left'
    },
    
    xAxis: {
        categories: ['Health Professionals','Therapy Professionals','Nursing and Midwifery Professionals'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Migrants (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'top',
    //     x: -40,
    //     y: 80,
    //     floating: true,
    //     borderWidth: 1,
    //     backgroundColor:
    //         Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    //     shadow: true
    // },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Migrants',
        data: [47, 12, 59]
    }]
});







var chart = Highcharts.chart('employment-pie', {
        chart: {
        type: 'bar'
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Health and Care'
    },
    series: [{
            name: 'Health and Care',
        data: [['Apple',89], ['Orange',71], ['Banana',16], ['Grapes',12], ['Others',14]]
    }]
});

$('#btnEducation').click(function () {
    chart.series[0].setData([['Tomato',127], ['Pepper',144], ['Bean',89], ['Onion',135], ['Potato',176], ['Others',54]]);
    chart.series[0].setName('Education');
    chart.setTitle({text: "Education Employment"});
});

$('#btnHealthCare').click(function () {
    chart.series[0].setData([['Apple',89], ['Orange',71], ['Banana',16], ['Grapes',12], ['Others',14]]);
    chart.series[0].setName('Health and Care');
    chart.setTitle({text: "Health and Care"});
});