import React from 'react'
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {commerce} from '../../lib/commerce';
import { useState, useEffect } from "react";
import './style.css'

const createMarkup = (text) => {
    return { __html: text };
};

const ProductView = () => {
    const [product, setProduct] = useState({});
    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        const { name, price, media, quantity, description } = response;
        setProduct({
            name,
            quantity,
            description,
            src: media.source,
            price: price.formatted,
        });
    };
    useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
    }, []);
}