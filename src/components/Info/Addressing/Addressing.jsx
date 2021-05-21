import React, { useEffect, useState, useMemo, useContext, useCallback } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { SlideDown } from 'react-slidedown';
import Slider from 'react-slick';
import cns from 'classnames';

import { UiStoreContext } from '@store/UiStore';
import { createSlickConfig } from '@helpers';
import { Modal } from '@ui';
import routes from '@config/routes';

import content from './data';

const Addressing = observer(({ ...props }) => {
  const [player, setPlayer] = useState(null);
  const [tab, setTab] = useState(1);

  const UiContext = useContext(UiStoreContext);

  const slickSettings = createSlickConfig(
    {
      arrows: true,
    },
    {
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  );

  const handleTabClick = useCallback(
    (e, id) => {
      e.preventDefault();
      setTab(id);
    },
    [setTab]
  );

  const handleVideoClick = useCallback(
    (video) => {
      UiContext.setModal('actions-video');
      player.load('#video-container', 'video', video);
    },
    [player]
  );

  useEffect(() => {
    setPlayer(new BF_Player());
  }, []);

  useEffect(() => {
    if (window.jwplayer && player && UiContext.activeModal === null) {
      try {
        player.destroy();
      } catch (e) {
        console.log('error destroying player');
      }
    }
  }, [player, UiContext.activeModal]);

  return (
    <section className="addressing">
      <div className="wrapper">
        <div className="addressing-row">
          <div className="addressing-info">
            <h2 className="section-title">{content.title}</h2>
            {content.description}
            <ul className="addressing-list">
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
          <div className="addressing-images">
            {content.sections.map((section) => (
              <SlideDown key={section.id}>
                {tab === section.id ? (
                  <Slider className="addressing-slider" {...slickSettings}>
                    {section.slides &&
                      section.slides.map((x) => {
                        const { id, background, preview, video } = x;

                        return (
                          <div className="addressing-slide" key={id}>
                            <div className="addressing-bg">
                              <img src={background} alt="" />
                            </div>
                            <div className="actions-video" onClick={() => handleVideoClick(video)}>
                              <img className="actions-video-placeholder" src={preview} alt="" />
                              <i className="hb-ico play-ico-big" />
                            </div>
                          </div>
                        );
                      })}
                  </Slider>
                ) : null}
              </SlideDown>
            ))}
          </div>
        </div>
      </div>

      <Modal name="actions-video" modifier="video">
        <div id="video-container" />
      </Modal>
    </section>
  );
});

export default Addressing;
