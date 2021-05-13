import React, { useMemo } from 'react';
import cns from 'classnames';

import { TermsContent, PageTop } from '@components/Static/particles';

const Privacy = ({ ...props }) => {
  const content = useMemo(() => {
    return {
      title: 'Refund Policy',
      image: 'img/pageTop/img-3-min.png',
      rows: [
        {
          id: 1,
          title: 'Help, my Buzz Fit player is not working',
          content: (
            <>
              <p>
                We offer full support for your Buzz Fit player. If your issue is set-up related, please start by reading
                our FAQ’s.
              </p>
              <p>
                Your Buzz Fit player comes with a limited warranty. Please be sure to perform a factory reset on your
                device if it is not working correctly. A factory reset may clear the data from your Buzz Fit player. In
                the event, this occurs, please contact our technical support team.
              </p>
              <p>
                If you wish to request a refund or replacement order for your player, please read on, for full
                instructions on how to request a refund.
              </p>
            </>
          ),
        },
        {
          id: 2,
          title: 'How do I request a refund for my Buzz Fit player?',
          content: (
            <>
              <p>
                If you wish to request a refund within 28 days of receiving your Buzz Fit player, we will give you a
                full refund by way of the original payment method.
              </p>
              <p>
                If you canceled an item, and your card was debited for it, we will initiate your refund immediately
                after you submit your cancelation request. The way your refund is processed depends on your original
                payment method.
              </p>
              <p>
                Please contact our customer service team to arrange a refund, through one of the following channels:
              </p>
              <ul>
                <li>Contact us.</li>
                <li>Schedule a callback.</li>
                <li>
                  If you paid by debit or credit card, your refund will be issued to the card-issuing bank within five
                  business days of receipt of your cancellation request. For any queries regarding when the credit will
                  be posted to your account, please contact the card-issuing bank directly.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 3,
          title: 'How do I request a replacement Buzz Fit player?',
          content: (
            <>
              <p>
                Before requesting a replacement your Buzz Fit player, please be sure to perform a factory reset on your
                device. Note: A factory reset may clear your data from your Buzz Fit player.
              </p>
              <p>In the event, this happens, please contact our technical support team.</p>
              <p>
                In the event the factory reset does not fix your issue, please contact us and we will arrange a
                replacement player to be sent to you as a priority.
              </p>
              <p>Note: For all replacement orders, we will require the following:</p>
              <ul>
                <li>The serial number of the player we are replacing.</li>
                <li>Photograph of the player (if damaged in transit).</li>
                <li>Shipping details.</li>
              </ul>
            </>
          ),
        },
        {
          id: 4,
          title: 'Contact us',
          content: (
            <>
              <p>
                Contact us if you require help from our technical support team. We’ll help you fix your issue or set up
                a replacement order. Before you contact us, please have the following information ready:
              </p>
              <ul>
                <li>Your name and shipping details.</li>
                <li>Serial number of your Buzz Fit player.</li>
                <li>The credit card used to purchase your player.</li>
              </ul>
              <p>For information on where to locate the serial number on your player, please refer to our FAQ’s.</p>
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

export default Privacy;
