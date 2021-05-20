import React, { useCallback, useState, useMemo } from 'react';
import { SlideDown } from 'react-slidedown';
import cns from 'classnames';

import { PageTop } from '@components/Static/particles';
import content from './data';

const FAQ = ({ ...props }) => {
  const [accardeon, setAccardeon] = useState(1);
  const [tab, setTab] = useState(1);

  const handleAccardeonClick = useCallback(
    (id) => {
      setAccardeon(id);
    },
    [setAccardeon]
  );

  const handleTabClick = useCallback(
    (e, id) => {
      e.preventDefault();
      setTab(id);
      setAccardeon(1);
    },
    [setTab, setAccardeon]
  );

  return (
    <section className="faq">
      <PageTop title={content.title} image={content.image} />

      <div className="faq-top">
        <div className="wrapper">
          <ul className="faq-list">
            {content.sections.map((section) => (
              <li key={section.id}>
                <a
                  href="#"
                  className={cns(tab === section.id && 'active')}
                  onClick={(e) => handleTabClick(e, section.id)}>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="faq-content">
        {content.sections.map((section) => (
          <SlideDown key={section.id}>
            {tab === section.id ? (
              <div className="wrapper">
                {section.blocks &&
                  section.blocks.map((x) => (
                    <div
                      key={x.id}
                      className={cns('accordeon', x.id === accardeon && 'accordeon-active')}
                      onClick={() => handleAccardeonClick(x.id)}>
                      <div className="accordeon-top">
                        <h3 className="accordeon-title" dangerouslySetInnerHTML={{ __html: x.title }} />
                      </div>
                      <SlideDown>
                        {accardeon === x.id ? <div className="accordeon-block">{x.content}</div> : null}
                      </SlideDown>
                    </div>
                  ))}
              </div>
            ) : null}
          </SlideDown>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
