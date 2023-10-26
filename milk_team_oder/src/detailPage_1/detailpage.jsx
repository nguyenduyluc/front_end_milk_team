import React, { useState } from "react";
import { Col, Row, Image, Button} from "antd";
import { InputNumber } from 'antd';


import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Tabs } from 'antd';

import { Checkbox } from 'antd'

const DraggableTabNode = ({ className, ...props }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props['data-node-key'],
  });
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleX: 1,
      },
    ),
    transition,
    cursor: 'move',
  };
  return React.cloneElement(props.children, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  });
};

const DetailPage = () => {
    const [items, setItems] = useState([
        {
          key: '1',
          label: 'Mô tả sản phẩm',
          children: 'Thông tin sản phẩm đang được cập nhật',
        },
        {
          key: '2',
          label: 'Hướng dẫn',
          children: 'Content of Tab Pane 2',
        },
        {
          key: '3',
          label: 'Đánh giá',
          children: 'Content of Tab Pane 3', 
          
        },
      ]);

      const sensor = useSensor(PointerSensor, {
        activationConstraint: {
          distance: 100,
        },
      });
      const onDragEnd = ({ active, over }) => {
        if (active.id !== over?.id) {
          setItems((prev) => {
            const activeIndex = prev.findIndex((i) => i.key === active.id);
            const overIndex = prev.findIndex((i) => i.key === over?.id);
            return arrayMove(prev, activeIndex, overIndex);
          });
        }
      };

      const [quantity, setQuantity] = useState(1);
      const [size, setSize] = useState('M', 'L');
      const pricePerCup = 45000; // Giá mỗi cốc trà sữa (VND)
      const [userReview, setUserReview] = useState('');
      const [reviews, setReviews] = useState([]);
    
      const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10));
      };
    
      const handleSizeChange = (e) => {
        setSize(e.target.value);
      };
    
      const handleReviewChange = (e) => {
        setUserReview(e.target.value);
      };
      
    
      const submitReview = (e) => {
        e.preventDefault();
        setReviews([...reviews, userReview]);
        setUserReview('');
      };
    
      const totalPrice = quantity * pricePerCup;
    


  return (
    <>
      <Row className="detail_img">
        <Col span={12}>
          <Image src="https://bizweb.dktcdn.net/100/477/681/themes/895448/assets/sec_category_1.jpg?1695629614469" />
        </Col>

        <Col span={12} className="detail_2">
          <div>
            <h3>TRÀ SỮA WINGGO (HỒNG TRÀ SỮA)</h3>
          </div>
          <div>
            <b>Mô tả đang cập nhật</b>
          </div>
          <div>
            <label >
              <span  
             className="span" 
             value={size} onChange={handleSizeChange}>Size :</span>

            </label>
            <span className="span1">
              <Button value="M">M</Button>
            </span>
            <span className="span2">
              <Button  value="L">L</Button>
            </span >
          </div>

          <div>
            <span className="span3">Giá : 45.000</span>
          </div>

          <div className="options">
            <span>Số lượng : </span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>

          <div className="total-price">
            Tổng thanh toán: {' '}
            {totalPrice.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })}
          </div>

          <div className="buttons">
            <button className="add-to-cart" CiShoppingCart>Thêm vào giỏ hàng</button>
            <button className="buy-now">Mua ngay</button>
          </div> 
          <p><b>Giao hàng miễn phí: </b>Áp dụng đơn hàng trên 200.000đ.</p>
          <p><b>Thanh toán tại nhà: </b> Nhanh chóng và an toàn.</p>

        </Col>
        

      <Row className="detail_tab">
      <Tabs
      items={items}
      renderTabBar={(tabBarProps, DefaultTabBar) => (
        <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
          <SortableContext items={items.map((i) => i.key)} strategy={horizontalListSortingStrategy}>
            <DefaultTabBar {...tabBarProps}>
              {(node) => (
                <DraggableTabNode {...node.props} key={node.key}>
                  {node}
                </DraggableTabNode>
              )}
            </DefaultTabBar>
          </SortableContext>
        </DndContext>
      )}

      
    />
    

      {/* <div className="description">
        <h3>Mô Tả:</h3>
        <p>Thêm mô tả về sản phẩm của bạn ở đây.</p>
      </div>
      <div className="reviews">
        <h3>Đánh Giá:</h3>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>

        <form onSubmit={submitReview}>
          <textarea
            placeholder="Viết đánh giá của bạn..."
            value={userReview}
            onChange={handleReviewChange}
          />
          <button type="submit">Gửi Đánh Giá</button>
        </form>
        </div> */}
    
      </Row>
      </Row>
    </>
  );
};

export default DetailPage;
