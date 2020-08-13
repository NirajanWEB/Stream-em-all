import React from 'react';
import styled from 'styled-components';
import Footer from '../../Components/LPFooter';
import { Icon } from 'react-icons-kit';
import { checkCircleO } from 'react-icons-kit/fa/checkCircleO';
import { ic_check } from 'react-icons-kit/md/ic_check';

const PrePlanCard = () => {
  return (
    <div>
      <MainContainer>
        <Icon style={{ color: '#E44236' }} icon={checkCircleO} size={50} />
        <p>STEP 1 OF 3</p>
        <h3>Choose your plan</h3>
        <div className='points'>
          <span>
            <Icon style={{ color: '#E44236' }} icon={ic_check} size={30} /> No
            commitments, cancel anytime.
          </span>
          <br />

          <span>
            <Icon style={{ color: '#E44236' }} icon={ic_check} size={30} />{' '}
            Everything on Netflix for one low price
          </span>
          <br />

          <span>
            <Icon style={{ color: '#E44236' }} icon={ic_check} size={30} /> No
            ads and no extra fees. Ever.
          </span>
        </div>
        <button className='btn'>SEE THE PLANS</button>
      </MainContainer>
      <Footer props={'#fff'} />
    </div>
  );
};

export default PrePlanCard;

const MainContainer = styled.div`
  color: black;
  display: grid;
  justify-content: center;
  margin-top: 15rem;
  margin-left: 9rem;

  p {
    margin-left: -1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  h3 {
    margin-left: -3.2rem;
    margin-bottom: 1rem;
  }
  .points {
    margin-left: -8rem;
  }

  .points span {
    margin-bottom: 3rem;
    font-size: 1.2rem;
  }
  .btn {
    margin-top: 2rem;
    margin-left: -8rem;
    padding: 1rem 8rem;
    margin-bottom: 10rem;
    color: white;
    background: var(--main-red);
    border: none;
    cursor: pointer;
    &:hover {
      background: #e8290b;
    }
  }
`;
