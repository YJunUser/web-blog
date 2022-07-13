import { Modal } from '@douyinfe/semi-ui';
import React, { useEffect, useState } from 'react';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Introduction } from './components/Introduction';
import { LatestArticle } from './components/LatestArticle';
import { Life } from './components/Life';
import vxPng from '../../assets/vx.jpg';
import { WxImg } from './style';
export const Home = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [big, setBig] = useState<boolean>(true);
  const [small, setSmall] = useState<boolean>(false);

  const resizeScreen = () => {
    const width = window.innerWidth;
    if (width > 1200) setBig(true);
    else setBig(false);
    if (width < 700) setSmall(true);
    else setSmall(false);
  };

  useEffect(() => {
    resizeScreen();
    window.onresize = resizeScreen;
  }, []);
  return (
    <React.Fragment>
      <Introduction
        setModalVisible={setModalVisible}
        isSmall={small}
      ></Introduction>
      <LatestArticle></LatestArticle>
      <Life></Life>
      <Banner
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        isBig={big}
      ></Banner>
      <Footer></Footer>
      <Modal
        visible={modalVisible}
        centered={true}
        closable={false}
        hasCancel={false}
        okText="OK"
        onOk={() => {
          setModalVisible(false);
        }}
      >
        <WxImg alt="sorry please contact 1239923786@qq.com" src={vxPng}></WxImg>
      </Modal>
    </React.Fragment>
  );
};
