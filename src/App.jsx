import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

function App() {

  const images = ['sneakers1.webp', 'sneakers2.webp', 'sneakers3.webp', 'sneakers4.webp']
  const [mainimg, setmainimg] = useState(images[0])
  const [secimage, setsecimage] = useState(images)
  const [show, setshow] = useState(false)
  const [count, setcount] = useState(0)
  const [count1, setcount1] = useState(1)
  const [cart, setcart] = useState([])
  

  const nexthandler = () => {
    if(count >= images.length - 1){
      setcount(images.length - 1)
      setsecimage(images[count])
    }else{
      console.log(count, "count")
      setcount(count + 1)
      setsecimage(images[count])
    }
  }

  const prevhandler = () => {
    if(count <= 0){
      setcount(0)
      setsecimage(images[count])
    }else{
      console.log(count, "count")
      setcount(count - 1)
      setsecimage(images[count])
    }
  }

  const handleaddcart = () => {
    const cartinfo = {
      id: 1,
      title: 'fall limited edition sneakers',
      desc: 'only avaliable this fall! get it while you still can!',
      price: 150,
    }

    cartinfo.total = cartinfo.price * count1
      setcart([cartinfo])

  }

  const handledelete = (id) => {
    const empty = cart.filter(el => el.id !== id)
    setcart(empty)
  }

  console.log(cart)
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <Text>fall limited edition sneakers</Text>
      <img style={{ borderRadius: '10px'}} src={`/assets/${mainimg}`} alt="" width={400} onClick={() => {setshow(true)}} />
      <Text>150$</Text>


      <div style={{ display: 'flex', gap: '10px'}}>
      {images.map(el => (
        <img onClick={() => {setmainimg(el), setsecimage(el)}} key={el} style={{ borderRadius: '10px'}} src={`/assets/${el}`} width={100} />
      ))}
      </div>

      {show && <div className="modal" style={{ display: 'flex', gap: '10px'}}>
        <X onClick={() => {setshow(false)}}><img src="/assets/X.png" width={20} alt="" /></X>
        <div>
          <Switch onClick={prevhandler}><img src="/assets/leftarrow.png" width={20} alt="" /></Switch>
      <img style={{ borderRadius: '10px'}} src={`/assets/${secimage}`} alt="" width={500} onClick={() => {setshow(true)}} />
      <Switch onClick={nexthandler}><img src="/assets/rightarrow.png" width={20} alt="" /></Switch>
      </div>
      <div style={{ display: 'flex', gap: '10px'}}>
      {images.map(el => (
        <img 
        onClick={() => {
          setsecimage(el)
        }} 
        key={el} 
        style={{ borderRadius: '10px'}} 
        src={`/assets/${el}`} width={200} />
      ))}
        </div>
        <div></div>
      </div>}
        <Amountdiv>
      <Amountbtn onClick={() => {
        if(count1 > 1){
          setcount1(count1 - 1)
        }
      }}><h2>-</h2></Amountbtn>
      {count1}
      <Amountbtn onClick={() => setcount1(count1 + 1)}><h2>+</h2></Amountbtn>
      <Addtocartbtn onClick={handleaddcart}><Cartimg src="/assets/shoppingcart.png" alt="" width={12} />add to cart</Addtocartbtn>
      </Amountdiv>

      {cart.map(el => (
        <Cart key={el.id}>
          <h2>title: {el.title}</h2>
          <h2>price: {el.price}</h2>
          <h2>total price: {el.total}</h2>
          <Deletebtn onClick={() => handledelete(el.id)}><img src="/assets/trashcan.png" alt="" width={20} /></Deletebtn>
          <Checkoutbtn>checkout</Checkoutbtn>
        </Cart>
      ))}
    </div>
  )
}


const Cartimg = styled.img`
  margin-right: 5px;
  color: white;
`

const Addtocartbtn = styled.button`
  background-color: orange;
  border: 2px solid orange;
  border-radius: 6px;
  width: 200px;
  height: 50px;
  color: white;
`

const Checkoutbtn = styled.button`
  background-color: orange;
  border: 2px solid orange;
  border-radius: 6px;
  width: 200px;
  height: 50px;
  color: white;
  margin-left: 5px;
`

const Text = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;

  @media (width > 500px){
  font-size: 30px;
}
`

const Deletebtn = styled.button`
  background-color: lightgray;
  border: 2px solid lightgray;
  border-radius: 6px;
`

const X = styled.button`
  background-color: rgba(179, 169, 169, 0);
  border: 2px solid rgba(179, 169, 169, 0);
`

const Amountbtn = styled.button`
  background-color: rgba(179, 169, 169, 0);
  border: 2px solid rgba(179, 169, 169, 0);
  color: orange;
  margin: 5px;
  padding: 5px;
`

const Switch = styled.button`
padding: 5px;
border-radius: 20px;
background-color: white;
border: 2px solid white;
`

const Cart = styled.div`
  border: 2px solid lightgray;
  width: 700px;
  border-radius: 6px;
  background-color: lightgray;
  padding: 10px;
`

const Amountdiv = styled.div`
  border: 2px solid lightgray;
  background-color: lightgray;
  border-radius: 6px;
`


export default App
