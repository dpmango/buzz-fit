import React, { useCallback, useState, useMemo } from 'react';
import { SlideDown } from 'react-slidedown';
import cns from 'classnames';

import { TermsContent, PageTop } from '@components/Static/particles';
import { each } from 'lodash';

const FAQ = ({ ...props }) => {
  const [accardeon, setAccardeon] = useState(null);

  const handleAccardeonClick = useCallback(
    (id) => {
      setAccardeon(id);
    },
    [setAccardeon]
  );

  const content = useMemo(() => {
    return {
      title: 'FAQ',
      image: 'img/pageTop/img-2-min.png',
      blocks: [
        {
          id: 1,
          title: 'What is Buzz Fit?',
          content: (
            <>
              <p>
                Yes. Buzz Fit&apos;s content is based specifically on healthcare. It is designed and created to motivate
                better health management, implement meaningful lifestyle changes, and improve patients&apos; knowledge
                of common health risks and treatments.
              </p>
            </>
          ),
        },
        {
          id: 2,
          title: 'What is Buzz Fit?',
          content: (
            <>
              <p>
                Yes. Buzz Fit&apos;s content is based specifically on healthcare. It is designed and created to motivate
                better health management, implement meaningful lifestyle changes, and improve patients&apos; knowledge
                of common health risks and treatments.
              </p>
            </>
          ),
        },
        {
          id: 3,
          title: 'What is Buzz Fit?',
          content: (
            <>
              <p>
                Yes. Buzz Fit&apos;s content is based specifically on healthcare. It is designed and created to motivate
                better health management, implement meaningful lifestyle changes, and improve patients&apos; knowledge
                of common health risks and treatments.
              </p>
            </>
          ),
        },
        {
          id: 4,
          title: 'What is Buzz Fit?',
          content: (
            <>
              <p>
                Yes. Buzz Fit&apos;s content is based specifically on healthcare. It is designed and created to motivate
                better health management, implement meaningful lifestyle changes, and improve patients&apos; knowledge
                of common health risks and treatments.
              </p>
            </>
          ),
        },
        {
          id: 5,
          title: 'What is Buzz Fit?',
          content: (
            <>
              <p>
                Yes. Buzz Fit&apos;s content is based specifically on healthcare. It is designed and created to motivate
                better health management, implement meaningful lifestyle changes, and improve patients&apos; knowledge
                of common health risks and treatments.
              </p>
            </>
          ),
        },
      ],
    };
  });

  return (
    <section className="faq">
      <PageTop title={content.title} image={content.image} />

      <div className="faq-top">
        <div className="wrapper">
          <ul className="faq-list">
            <li>
              <a href="#" className="active">
                Content
              </a>
            </li>
            <li>
              <a href="#">Calculator</a>
            </li>
            <li>
              <a href="#">Device</a>
            </li>
            <li>
              <a href="#">revenue</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="faq-content">
        <div className="wrapper">
          {content.blocks.map((x) => (
            <div key={x} className="accordeon" onClick={() => handleAccardeonClick(x.id)}>
              <div className="accordeon-top">
                <h3 className="accordeon-title">{x.title}</h3>
              </div>
              <SlideDown>{accardeon === x.id ? <div className="accordeon-block">{x.content}</div> : null}</SlideDown>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
