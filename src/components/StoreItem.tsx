import React, { FC } from 'react';
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

export type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

const StoreItem: FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <Card className='h-100'>
            <Card.Img variant='top' src={imgUrl} height='200px' style={{ objectFit: 'cover' }}>

            </Card.Img>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? <Button className='w-100' onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button> :
                        <div className='d=flex align-items-center flex-column' style={{ gap: '.5rem' }}>
                            <div className='d-flex align-items-center justify-content-center' style={{ gap: '.5rem' }}>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className='fs-3 me-2'>{quantity}</span>
                                    in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button variant='danger' onClick={() => removeFromCart(id)} className='w-100 mt-2'>Remove</Button>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    );
};

export default StoreItem;