import React, { Fragment, useState } from 'react';
import { Row, Container, Col, Card, ResponsiveEmbed } from 'react-bootstrap';

const Home = () => {
  const title_cards = [
    {
      title: 'The Network Episode',
      thumbnail:
        'https://live.staticflickr.com/65535/51662093048_f2562291a4_k.jpg',
      mp4: 'https://player.vimeo.com/video/642567951?h=13a26d49a3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      ref: 1
    },
    {
      title: 'The French Episode',
      thumbnail:
        'https://live.staticflickr.com/65535/51662546199_63f7f61140_k.jpg',
      mp4: 'https://player.vimeo.com/video/642568700?h=68e233578f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      ref: 2
    },
    {
      title: 'The High Art Episode',
      thumbnail:
        'https://live.staticflickr.com/65535/51661057542_06d8bb6edc_k.jpg',
      mp4: 'https://player.vimeo.com/video/642569490?h=1618dfbdea&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      ref: 3
    },
    {
      title: 'The Santa Hat Episode',
      thumbnail:
        'https://live.staticflickr.com/65535/51661057477_69be193737_k.jpg',
      mp4: 'https://player.vimeo.com/video/642570118?h=80b4f8c84e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      ref: 4
    },
    {
      title: 'The Great Baking Show Episode',
      thumbnail:
        'https://live.staticflickr.com/65535/51662694680_cc988e2b63_k.jpg"',
      mp4: 'https://player.vimeo.com/video/642815401?h=33c9c5ba30&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      ref: 5
    }
  ];

  const [mp4, setMp4] = useState('');
  const [title, setTitle] = useState('');
  const [play, setPlay] = useState(false);

  const handlePlay = (card) => {
    setTitle(card.title);
    setMp4(card.mp4);
    setPlay(true);
  };

  const Player = () => {
    return (
        <ResponsiveEmbed className='mx-auto'>
        <iframe
          src={mp4}
          frameborder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          allowfullscreen
          title={title}
        ></iframe>
      </ResponsiveEmbed>
    );
  };

  const LoadPlayer = () => {
    return (
      <ResponsiveEmbed className='mx-auto'>
        <iframe
          src='https://player.vimeo.com/video/642567951?h=13a26d49a3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          frameborder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          allowfullscreen
          title='Episode 1: The Network Episode'
        ></iframe>
      </ResponsiveEmbed>
    );
  };

  return (
    <Container fluid>
      <Fragment>
          <Row className="py-5 d-xs-block d-md-none"/>
        <Row className='justify-content-center mx-auto pt-2 pb-3'>
          <Col className='d-none d-md-block' md={2} />
          <Col md={8}>{!play ? <LoadPlayer /> : <Player />}</Col>
          <Col className='d-none d-md-block' md={2} />
        </Row>
      </Fragment>
      <Fragment>
        <Col className='mx-auto'>
          <Row className='slideshow-container d-flex flex-nowrap mx-auto mb-3'>
            {title_cards.map((card) => (
              <Col>
                <Card key={card.ref} className='slide border-0 btn px-3'>
                  <Card.Img
                    className='image-fluid card-img-top'
                    type='button'
                    src={card.thumbnail}
                    onClick={() => handlePlay(card)}
                  />
                  <Card.Body>
                    <Card.Title className='text-wrap text-left'>
                      {card.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Fragment>
    </Container>
  );
};

export default Home;
