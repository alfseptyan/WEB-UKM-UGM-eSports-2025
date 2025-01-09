import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/UGM ESPORTS logo-min.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Gamers Intelektual!", "#1 in Campus Gaming!","New Generation." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Unit Kegiatan Mahasiswa eSports Universitas Gadjah Mada</span>
                <h1>{`UGM eSports, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Gamers Intelektual!", "#1 in Campus Gaming!", "New Generation." ]'><span className="wrap">{text}</span></span></h1>
                  <p>UKM eSports merupakan UKM yang diprakarsai oleh dan untuk sivitas akademika UGM. Komunitas ini difungsikan secara resmi pada 5 Januari 2019 dan diresmikan menjadi UKM pada Januari 2023. UKM ini bertindak sebagai wadah awal untuk mengakomodasi mahasiswa UGM yang unggul dalam bidang eSports. Dengan tagline Gamer Intelek, UKM eSports memunculkan bibit unggul dalam bidang eSports sekaligus akademik yang siap menerapkan intelektualitasnya ke industri eSports.</p>
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
