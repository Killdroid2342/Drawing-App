import { useEffect, useState } from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/Footer';
import { Item } from './Shoes';
import Modal from '../components/Modal';

const electronics = [
  {
    img: 'src/assets/images/ps5.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/mouse.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£200',
  },
  {
    img: 'src/assets/images/ps5.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/mouse.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£200',
  },
];
const electronicsTwo = [
  {
    img: 'src/assets/images/airpods.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£150',
  },
  {
    img: 'src/assets/images/phone.png',
    des: 'This is Electronics',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/airpods.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£150',
  },
  {
    img: 'src/assets/images/phone.png',
    des: 'This is Electronics',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
];
const electronicsThree = [
  {
    img: 'src/assets/images/mouse2.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/steamDeck.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£200',
  },
  {
    img: 'src/assets/images/mouse2.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£500',
  },
  {
    img: 'src/assets/images/steamDeck.png',
    des: 'This is a Electronics',
    lowPrice: 'Lowest Ask',
    price: '£200',
  },
];
const Electronics = () => {
  const [modalI, setModalI] = useState(null);
  const [amount, setAmount] = useState(1);
  const [basketItems, setBasketItems] = useState<Item[]>([]);

  const openModal = (image: any) => {
    setModalI(image);
  };

  const closeModal = () => {
    setModalI(null);
  };

  const add = () => {
    setAmount(amount + 1);
  };

  const remove = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const addBasket = () => {
    if (modalI) {
      const newItem = {
        shoe: modalI,
        price: 100,
        amount: amount,
        name: 'Electronics',
      };
      setBasketItems([...basketItems, newItem]);
      closeModal();
    }
  };
  useEffect(() => {}, [basketItems]);
  return (
    <div className='flex flex-col'>
      <Nav basketItems={basketItems} />
      <div className='flex justify-center'>
        <div className='mt-40 p-16 w-8/12 bg-neutral-200'>
          <h2 className='text-4xl'>Electronics</h2>
          <p>
            Buy and Sell Electronics on StockX. Every item is
            <a className='text-green-900'> StockX Verified.</a>
          </p>
        </div>
      </div>
      <div className='flex justify-center flex-row mt-20'>
        {electronics.map((image, index) => (
          <div key={index} className='border border-neutral-400 m-10'>
            <img
              src={image.img}
              alt={`Product ${index}`}
              className='w-56 h-48 m-1 '
              onClick={() => openModal(image.img)}
            />
            <p>{image.des}</p>
            <p className='text-xs'>{image.lowPrice}</p>
            <p className='font-bold text-xl'>{image.price}</p>
          </div>
        ))}
        {modalI && (
          <Modal
            onClose={closeModal}
            image={modalI}
            amount={amount}
            add={add}
            remove={remove}
            addBasket={addBasket}
          />
        )}
      </div>
      <div className='flex justify-center flex-row '>
        {electronicsTwo.map((image, index) => (
          <div key={index} className='border border-neutral-400 m-10'>
            <img
              src={image.img}
              alt={`Product ${index}`}
              className='w-56 h-48 m-1 '
              onClick={() => openModal(image.img)}
            />
            <p>{image.des}</p>
            <p className='text-xs'>{image.lowPrice}</p>
            <p className='font-bold text-xl'>{image.price}</p>
          </div>
        ))}
        {modalI && (
          <Modal
            onClose={closeModal}
            image={modalI}
            amount={amount}
            add={add}
            remove={remove}
            addBasket={addBasket}
          />
        )}
      </div>
      <div className='flex justify-center flex-row '>
        {electronicsThree.map((image, index) => (
          <div key={index} className='border border-neutral-400 m-10'>
            <img
              src={image.img}
              alt={`Product ${index}`}
              className='w-56 h-48 m-1 '
              onClick={() => openModal(image.img)}
            />
            <p>{image.des}</p>
            <p className='text-xs'>{image.lowPrice}</p>
            <p className='font-bold text-xl'>{image.price}</p>
          </div>
        ))}
        {modalI && (
          <Modal
            onClose={closeModal}
            image={modalI}
            amount={amount}
            add={add}
            remove={remove}
            addBasket={addBasket}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Electronics;
