import React from 'react';
import { Helmet } from 'react-helmet';

import { HowItWorks, Steps } from '@components/Info';

const HowPage = () => {
  return (
    <>
      <HowItWorks />
      <Steps className="steps-green" />

      <Helmet>
        <title>Buzz Fit - How it Works</title>
      </Helmet>
    </>
  );

  const amchartsRefactor = () => {
    // <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
    // <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
    // <script src="https://cdn.amcharts.com/lib/4/themes/material.js"></script>
    // <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>

    am4core.ready(function () {
      am4core.useTheme(am4themes_animated);
      am4core.addLicense('ch-custom-attribution');

      var data = [
        {
          name: 'A',
          value: 10,
          title: 'Waiting room\npatients',
          color: am4core.color('#A4B651'),
          hint: 'Your patients desperate for a distraction while waiting for service',
        },
        {
          name: 'B',
          value: 10,
          title: 'Healthcare\ncontent',
          color: am4core.color('#D0B78E'),
          hint: 'We curate and stream the most relevant and best in class health content',
        },
        {
          name: 'C',
          value: 3,
          title: 'Patient\nengagement',
          sets: ['A', 'B'],
          color: am4core.color('#EEEEEE'),
          hint: 'Our content engages more of your patients more of the time reducing frustrations while increasing your revenues',
        },
      ];

      var chart = am4core.create('chartdiv', am4plugins_venn.VennDiagram);
      var series = chart.series.push(new am4plugins_venn.VennSeries());

      series.dataFields.category = 'name';
      series.dataFields.value = 'value';
      series.dataFields.intersections = 'sets';
      series.data = data;
      series.slices.template.propertyFields.fill = 'color';
      series.labels.template.text = '[bold]{title}[/]';
      series.labels.template.fontSize = 20;
      series.labels.template.adapter.add('fill', function (fill, target) {
        return target.dataItem.index === 2 ? '#333' : '#fff';
      });

      series.tooltip.label.wrap = true;
      series.tooltip.label.width = 300;
      series.labels.template.textAlign = 'middle';
      series.slices.template.tooltipText = '{hint}';
    });
  };
};

export default HowPage;
