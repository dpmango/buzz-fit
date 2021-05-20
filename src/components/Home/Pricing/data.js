import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@ui';

export default {
  subtitle: 'pricing',
  title: 'Cut the cord & start saving today',
  cols: [
    {
      id: 1,
      rows: [
        '',
        'Device',
        'Installation',
        'Activation',
        'Relevant content to whole Audience',
        'Passive income',
        'Ongoing cost per year',
        <>
          Total cost
          <Tooltip text="Price details based on smallest available cable service Jan 2021" />
        </>,
      ],
    },
    {
      id: 2,
      rows: [
        <>
          <img src="/img/logo-mob.svg" alt="" />
        </>,
        'refundable deposit',
        <>
          Free
          <Tooltip text="Price details based on smallest available cable service Jan 2021" />
        </>,
        'Free',
        <>
          Yes
          <Tooltip text="Price details based on smallest available cable service Jan 2021" />
        </>,
        <>
          Yes
          <Tooltip text="Price details based on smallest available cable service Jan 2021" />
        </>,
        '$0',
        <>
          <span className="pricing-title">YOU EARN PASSIVE INCOME</span>
          <Link to="#calculate">Calculate your potential savings</Link>
        </>,
      ],
    },
    {
      id: 3,
      rows: [
        <>
          <img src="/img/pricing/logo-2-min.png" alt="" />
        </>,
        '$299.00',
        '$99.00',
        '$89.00',
        'No',
        'No',
        <>
          $359.88 /per year
          <Tooltip text="Price details based on smallest available cable service Jan 2021" />
        </>,
        '$846.88',
      ],
    },
    {
      id: 4,
      rows: [
        <>
          <img src="/img/pricing/logo-3-min.png" alt="" />
        </>,
        '$Unknown',
        <>
          $49.00
          <Tooltip text="Price details based on smallest available cable service Jan 2021" />
        </>,
        <>
          $19.00
          <Tooltip text="Price details based on smallest available cable service Jan 2021" />
        </>,
        'No',
        'No',
        <>
          $839.88 /per year
          <Tooltip text="Price details based on smallest available cable service Jan 2021" />
        </>,
        '$907.88',
      ],
    },
    {
      id: 5,
      rows: [
        <>
          <img src="/img/pricing/logo-4-min.png" alt="" />
        </>,
        <>
          $10.00
          <Tooltip text="Price details based on smallest available cable service Jan 2021" />
        </>,
        'Appointment required',
        '$0.00',
        'No',
        'No',
        '$799.88 /per year',
        '$789.88',
      ],
    },
  ],
};
