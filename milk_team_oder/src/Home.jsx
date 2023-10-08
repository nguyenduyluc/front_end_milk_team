import React, { useRef } from "react";
// import type { MenuProps } from 'antd';
import {
  Layout,
  Dropdown,
  Button,
  Space,
  Input,
  Row,
  Col,
  Image,
  Carousel,
} from "antd";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Logo from './assets/0d303b43b66ecb916b034bafebcde67a.jpg'




const { Header, Footer, Content } = Layout;

function Homepage() {
  const items = [
    {
      label: "Đăng nhập",
      key: "1",
    },
    {
      label: "Đăng ký",
      key: "2",
    },
    {
      label: "Đăng xuất",
      key: "3",
      danger: true,
    },
  ];

  const menuProps = {
    items,
  };

  const carouselRef = useRef(null);
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div>
      <Layout>
        <Header className="headerStyle">
          <Row>
            <Col span={10}>
              <Image src={Logo} className="Logo"/>
            </Col>
            <Col span={10}>
              <Input placeholder="Tìm kiếm sản phẩm"/>
            </Col>
            <Col span={2} />
            <Col span={2}>
              <Dropdown menu={menuProps}>
                <Button>
                  <Space>
                    Tài khoản
                    {/* <DownOutlined /> */}
                  </Space>
                </Button>
              </Dropdown>
            </Col>
          </Row>
        </Header>

        <Content className="contentStyle">
          <Carousel autoplay>
            <div>
              <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/slider_1.jpg?1695629614469" />
            </div>
            <div>
              <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/slider_1.jpg?1695629614469" />
            </div>
            <div>
              <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/slider_1.jpg?1695629614469" />
            </div>
            <div>
              <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/slider_1.jpg?1695629614469" />
            </div>
          </Carousel>
          <div>
            <h1 align="center">Danh sách sản phẩm </h1>
            <Carousel ref={carouselRef} slidesToShow={4} dots={false}>
              <div>
                <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/sec_category_1.jpg?1695629614469" />
                <h3 align="center">Trà đào</h3>
              </div>

              <div>
                <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/sec_category_1.jpg?1695629614469" />
                <h3 align="center">Trà đào</h3>
              </div>
              <div>
                <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/sec_category_1.jpg?1695629614469" />
                <h3 align="center">Trà đào</h3>
              </div>
              <div>
                <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/sec_category_1.jpg?1695629614469" />
                <h3 align="center">Trà đào</h3>
              </div>
              <div>
                <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/sec_category_1.jpg?1695629614469" />
                <h3 align="center">Trà đào</h3>
              </div>
            </Carousel>
            <div>
              <Row>
                <Col span={12} align="end">
                  <Button onClick={handlePrev}>
                    <LeftOutlined />
                  </Button>
                </Col>
                <Col span={1}></Col>
                <Col span={10}>
                  <Button onClick={handleNext}>
                    <RightOutlined />
                  </Button>
                </Col>
              </Row>
            </div>
            <div>
              <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/slider_1.jpg?1695629614469" />
            </div>
          </div>
        </Content>
        <Footer className="footerStyle">Footer</Footer>
      </Layout>
    </div>
  );
}
export default Homepage;
