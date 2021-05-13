import React, { useMemo } from 'react';
import cns from 'classnames';

import { TermsContent, PageTop } from '@components/Static/particles';

const Delivery = ({ ...props }) => {
  const content = useMemo(() => {
    return {
      title: 'Delivery Policy',
      image: 'img/pageTop/img-3-min.png',
      rows: [
        {
          id: 1,
          title: 'Pick dispatch and delivery options',
          content: (
            <>
              <p>
                When you order from Buzz Fit, you’ll choose a dispatch method when you check out. Your choice will
                affect how long it takes for your order to be delivered.
              </p>
            </>
          ),
        },
        {
          id: 2,
          title: 'Get free delivery',
          content: (
            <>
              <p>
                In some areas, you may be offered free delivery if you order specific quantities or your order meets a
                minimum price. Free delivery may be changed or discontinued at any time.
              </p>
            </>
          ),
        },
        {
          id: 3,
          title: 'Track your shipment',
          content: (
            <>
              <p>Learn how to track your shipment here.</p>
            </>
          ),
        },
        {
          id: 4,
          title: 'Split shipments',
          content: (
            <>
              <p>
                If you have ordered more than one device, your order may be sent in more than one shipment to ensure you
                get your items as stock is available.
              </p>
            </>
          ),
        },
        {
          id: 5,
          title: 'Understand split shipments',
          content: (
            <>
              <p>Important:</p>
              <ul>
                <li>You can’t combine shipments or split your order into more than one shipment yourself.</li>
                <li>
                  The delivery price at checkout is for your whole order. Shipments costs for each shipment are charged
                  when your orders are dispatched.
                </li>
                <li>You are only charged for the items that are dispatched.</li>
                <li>
                  If you need to change a delivery address or cancel your order, it will depend on the status of the
                  shipment at that time.
                </li>
              </ul>
              <p>Any changes you wish to make to your order must be made at on each shipment also.</p>
              <p>Note: The same shipment option is used for all shipments in your order.</p>
            </>
          ),
        },
        {
          id: 6,
          title: 'Extended holiday returns',
          content: (
            <>
              <p>
                All purchases made between 8 December 2019 and 25 December 2019 have an extended return date of 21
                January 2020. Purchases made after 25 December 2019 are subject to the Standard Return Policy for all
                states.
              </p>
            </>
          ),
        },
      ],
    };
  });

  return (
    <section className="terms">
      <PageTop title={content.title} image={content.image} />

      <TermsContent rows={content.rows} />
    </section>
  );
};

export default Delivery;
