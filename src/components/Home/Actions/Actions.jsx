import React, { useEffect, useState, useMemo, useContext, useCallback } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cns from 'classnames';

import { UiStoreContext } from '@store/UiStore';
import { createSlickConfig } from '@helpers';
import { Modal } from '@ui';
import routes from '@config/routes';

import content from './data';

const Actions = observer(({ ...props }) => {
  const [player, setPlayer] = useState(null);

  const UiContext = useContext(UiStoreContext);

  const slickSettings = createSlickConfig(
    {
      arrows: true,
    },
    {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }
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
    <section className="actions">
      <div className="wrapper">
        <div className="actions-top">
          <span className="section-subtitle">{content.title}</span>
          <h2 className="section-title">{content.subtitle}</h2>
          <p>{content.description}</p>
        </div>

        <Slider className="actions-slider" {...slickSettings}>
          {content.videos.map((x) => {
            const { id, video, preview } = x;

            return (
              <div className="actions-slide" key={id}>
                <div className="actions-video" onClick={() => handleVideoClick(video)}>
                  <img className="actions-video-placeholder" src={preview} />

                  <i className="hb-ico play-ico-big" />
                </div>
              </div>
            );
          })}
        </Slider>

        <Modal name="actions-video" modifier="video">
          <div id="video-container"></div>
        </Modal>

        <div className="actions-bottom">
          <p>More videos available on our content page</p>
          <Link to={routes.INFO.CONTENT} className="primary-btn primary-btn-blue">
            see our content
          </Link>
        </div>
      </div>
    </section>
  );
});

export default Actions;
