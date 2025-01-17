import React from 'react'
import { Navbar, Nav, NavDropdown, Dropdown, Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CartState } from '../../context/Context.js';
import RouteList from '../../routes';
import './style.scss';
import logo_img from '../../assets/img/logo_v2.png'
import { AiFillDelete } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';

const Header = () => {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    const logo = <img id="logo-img" src={logo_img} alt="logomarca" />

    return (
        <>
            <header>
                <Navbar bg="linen" expand="lg" collapseOnSelect>
                    <Navbar.Toggle />
                    <Navbar.Brand as={Link} to={"/home"}>
                        {logo} {''}
                        <span>Cosméticos</span>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to={"/home"}>HOME</Nav.Link>
                            <NavDropdown title="PRODUTOS">
                                <NavDropdown.Item as={Link} to={"/produtos/categorias/todas categorias"}>Todas as categorias</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to={"/produtos/categorias/skin care"}>Skin care</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/categorias/make up"}>Make up</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/categorias/hair care"}>Hair care</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/categorias/perfumes"}>Perfumes</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/categorias/veganos"}>Veganos</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={"/sobrenos"}>SOBRE NÓS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/*Componente Carrinho*/}
                    <Dropdown id="cart" align="end">
                        <Dropdown.Toggle variant="white">
                            <BsCart3 color="black" fontSize="35px" /> {/* cor do carrinho */}
                            <Badge style={{ fontSize: 12, borderRadius: "50%" }}>{cart.length}</Badge>
                        </Dropdown.Toggle>

                        {/* Lista de itens do carrinho */}
                        <Dropdown.Menu id="subcart" style={{ minWidth: 320 }}>

                            {/* Verifica estado do carrinho e exibe lista de produtos ou mensagem de vazio */}
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((prod) => (
                                        <span className="cartitem" key={prod.id}>
                                            <img
                                                src={prod.image}
                                                className="cartItemImg"
                                                alt={prod.title}
                                            />
                                            <div className="cartItemDetail">
                                                <span>{prod.title}</span>
                                                <span> {parseFloat(prod.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                                            </div>
                                            {/* Icone lixeira do carrinho */}
                                            <AiFillDelete
                                                fontSize="20px"
                                                style={{ cursor: "pointer" }}

                                                onClick={() => {
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod,
                                                    })
                                                }}
                                            />
                                        </span>
                                    ))}
                                    <Link to="/carrinho">
                                        <button className="btn-produtos">
                                            Ir para o carrinho
                                        </button>
                                    </Link> 
                                </>
                            ) : (
                                <span style={{ padding: 20, margin: 15, color: 'white' }}>Carrinho vazio!</span>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar>
            </header>
            <RouteList />
        </>
    )
}


export default Header;