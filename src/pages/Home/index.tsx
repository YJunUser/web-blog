import { Modal } from '@douyinfe/semi-ui';
import React, { useState } from 'react';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Introduction } from './components/Introduction';
import { LatestArticle } from './components/LatestArticle';
import { Life } from './components/Life';
import vxPng from '../../assets/vx.jpg';
export const Home = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <React.Fragment>
      <Introduction setModalVisible={setModalVisible}></Introduction>
      <LatestArticle></LatestArticle>
      <Life></Life>
      <Banner
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
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
        <img
          src={vxPng}
          width={'100%'}
          height={'100%'}
          alt="sorry please contact 1239923786@qq.com"
        ></img>
      </Modal>
    </React.Fragment>
  );
};
