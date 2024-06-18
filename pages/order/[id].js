import React from "react";
import Order from "@/components/order/order";
import { useRouter } from "next/router";
import axios from 'axios';

const OrderPage = () => {

    const router = useRouter();
    const {query} = router;
    const {id} = query;
    console.log('query', id)

    return (
        <div>
            <h1>Your Orders</h1>
            <Order />
        </div>
    );
};

export default OrderPage;