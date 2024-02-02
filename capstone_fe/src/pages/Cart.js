import React from "react";
import { useEffect, useState } from 'react';
import Header from "../component/Header";
import "../css/Cart.css"
import item_img from '../img/item.png';
import successful_paymentImage from '../img/successful_payment.png';
import warningImage from '../img/warning.png';
import axios from 'axios';


export default function Cart(){


    const [cart, setCart] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showNewModal, setShowNewModal] = useState(false);
  
    const decreaseCart = () => {
      if (cart > 1) {
        setCart(cart - 1);
      }
    };
  
    const increaseCart = () => {
      setCart(cart + 1);
    }

    const handleCart = () => {
      setShowModal(true); // 구매하기 버튼을 누르면 모달을 나타나도록 설정
    };

    const closeModal = () => {
      setShowModal(false); // 모달을 감추는 함수
      setShowSuccessModal(false); // 결제 완료 모달도 감추는 함수
      setShowNewModal(false);
    };

    const yesCart = () => {
      // 결제 확인 처리 로직을 추가하세요.
      console.log('결제 확인 로직을 실행합니다.');
      setShowSuccessModal(true); // 결제 확인 후 결제 완료 모달을 나타나도록 설정
    };

    const noCart = () => {
      setShowModal(false);
      setShowSuccessModal(false);
      setShowNewModal(true);
    };

    const submitOrder = async () => {
      try {
        const userName = "khk"; // 실제 사용자 정보로 교체하기
  
        const productInfo = {
          productName: "추억의 도시락A",
          productPrice: 5000,
          productInven: cart,
        };
  
        // 선택한 파일을 시뮬레이션
        const selectedFile = new File(['더미 컨텐츠'], '더미.jpg', {
          type: 'image/jpeg',
        });
  
        const data = {
          productName: productInfo.productName,     // 제품 이름
          productPrice: productInfo.productPrice,   // 제품 가격
          userName: userName,                       // 구매자 이름
          productInven: productInfo.productInven,   // 제품 정보
        };
  
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append(
          'data',
          new Blob([JSON.stringify(data)], {
            type: 'application/json',
          })
        );
  
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            // 여쪽에다 세션 ID받고 가져오는 로직을 추가
          },
        };
  
        const response = await axios.post(
          'http://localhost:8080/upload', // 실제 백엔드 API URL로 교체
          formData,
          config
        );
  
    //submitOrder 함수는 주문 정보를 포함한 데이터를 서버로 전송하는 역할
    //axios.post 함수를 통해 실제로 서버로 데이터를 보내고, 응답을 받아옴
    //응답이 성공하면 setShowSuccessModal(true)를 호출하여 결제 성공 모달을 표시
    //응답이 실패하면 setShowNewModal(true)를 호출하여 결제 실패 모달을 표시
    //현재 submitOrder 함수는 더미 데이터를 사용중임 실제로는 사용자가 선택한 제품 정보, 로그인한 사용자의 정보, 이미지 파일 등을 동적으로 가져와서 사용해야 함,
    //또한 실제 백엔드 API 주소로 교체해야 함



        console.log('파일 업로드 성공!', response);
  
        // 응답이 성공을 나타내면 성공 모달을 표시함
        setShowSuccessModal(true);
      } catch (error) {
        console.error('파일 업로드 실패!', error);
  
        // 응답이 실패를 나타내면 실패 모달을 표시함
        setShowNewModal(true);
      }
    };

    return(
        <div className="cart_all">
        <div className="don_all">
           <Header/>

           <div className="cart" >
            <div className="cart_txt">장바구니</div>
            
           </div>

           <div className="cart_list">

            <div className="cart_list1" >
            <img src={item_img} alt="Item" className="item_image" />
            <div className="cart_name1">
             <div className="cart_name1_d1">추억의 도시락A</div>

             <div className="cart_controls">
                <button onClick={decreaseCart}>-</button>
                <input type="text" value={cart} readOnly />
                <button onClick={increaseCart}>+</button>
                </div>
                
             <div className="cart_name1_d2">5,000<br/></div>
           
            </div>
             

            </div> 

            <div className="cart_list2" >
            <img src={item_img} alt="Item" className="item_image" />
            <div className="cart_name2">
             <div className="cart_name2_d1">추억의 도시락B</div>

             <div className="cart_controls">
                <button onClick={decreaseCart}>-</button>
                <input type="text" value={cart} readOnly />
                <button onClick={increaseCart}>+</button>
                </div>
                
             <div className="cart_name2_d2">10,000<br/></div>
           
            </div>
             

            </div> 

            <div className="cart_list3" >
            <img src={item_img} alt="Item" className="item_image" />
            <div className="cart_name3">
             <div className="cart_name3_d1">추억의 도시락C</div>

             <div className="cart_controls">
                <button onClick={decreaseCart}>-</button>
                <input type="text" value={cart} readOnly />
                <button onClick={increaseCart}>+</button>
                </div>
                
             <div className="cart_name3_d2">100,000<br/></div>
           
            </div>
             

            </div> 

            <div className="cart_list4"> 
             <div className="cart_name4">
             <div className="cart_name4_dl">총액</div>
             <div className="cart_name4_d2"> 결제 할 금액<br/>115,000<br/></div>
             <button className="cart_name4_d3" onClick={handleCart}>구매하기</button> 
             </div>
             

             </div>

           </div>

           </div>

           {/* 모달 컴포넌트 */}
      {showModal && (
        <div className="modal">
          <div className="modal_content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>결제 확인</p>
            <div className="modal_buttons">
        <button onClick={yesCart}>확인</button>
        <button onClick={noCart}>취소</button>
      </div>
          </div>
        </div>
      )}

{/* 결제 완료 모달 컴포넌트 */}
{showSuccessModal && (
          <div className="modal">
            <div className="modal_content">
              <span className="close" onClick={closeModal}>&times;</span>
              <p>결제 성공</p>
              <img src={successful_paymentImage} alt="Successful_Payment" className="successful_payment_image" /> 
              {/* 여기에 추가적인 결제 완료 내용을 넣어도 됩니다. */}
            </div>
          </div>
        )}

{showNewModal && (
  <div className="modal">
    <div className="modal_content">
      <span className="close" onClick={() => setShowNewModal(false)}>&times;</span>
      <p>결제 취소</p>
      <img src={warningImage} alt="warning" className="warning_image" /> 
      {/* 여기에 취소에 대한 내용을 넣어도 됩니다. */}
      
    </div>
  </div>
)}

        </div>
    )
}