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
        type: 'pie',
        backgroundColor: 'transparent'
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Health and Social Care'
    },
   
    tooltip: {
        pointFormat: '{series.name}: fgfgfgfgfgfgf<b>fgfgfgf{point.percentage:.1f}%</b>'
    },

    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
            name: 'Health and Social Care',
        data: [['Health Professionals',47], ['Therapy Professionals',12], ['Nursing and Midwifery Professionals',59]]
    }]

});

$('#btnEducation').click(function () {
    chart.series[0].setData([['Teaching and Educational Professionals',107]]);
    chart.series[0].setName('Education');
    chart.setTitle({text: "Education Employment"});
  //  chart.xAxis[0].update({categories: ['sdfsdf','Therapy Professionals','Nursing and Midwifery Professionals','Thersapy dfgdf','sdfsdfsdfsdfs','sdfsfsdf']}); 
    chart.redraw();
});

$('#btnHealthCare').click(function () {
    chart.series[0].setData([['Health Professionals',47], ['Therapy Professionals',12], ['Nursing and Midwifery Professionals',59]]);
    chart.series[0].setName(['Health Professionals', 'Therapy Professionals', 'Nursing and Midwifery Professionals']);
    chart.setTitle({text: "Health and Social Care"});
   // chart.xAxis[0].update({categories: ['kkkkkkkk','Therapy Professionals','lllllllll','jjjjjjjj dfgdf','jjjj']}); 

});

$('#btnScienceTechnology').click(function () {
    chart.series[0].setData([['Natural and Social Science Professionals',11], ['Engineering Professionals',11], ['Information Technology and Telecommunications Professionals',60], ['Conservation and Environment Professionals',1], ['Research and Development Managers',1]]);
     chart.setTitle({text: "Science and technology"});

});

$('#btnBusinessLawAdministration').click(function () {
    chart.series[0].setData([['Business, Research and Administrative Professionals',34], ['Legal Professionals',13], ['Architects, Town Planners and Surveyors',7], ['Welfare Professionals',9], ['Librarians and Related Professionals',2], ['Quality and Regulatory Professionals',9]]);
     chart.setTitle({text: "Business, law and administration"});

});