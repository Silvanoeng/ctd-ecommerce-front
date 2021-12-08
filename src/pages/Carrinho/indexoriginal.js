import React from 'react';
import './style.scss';
import { Container, Row, Col, Form, Table} from 'react-bootstrap';
import { ImBin} from 'react-icons/im';


const Carrinho2 = () => {

    return (
        <>
            <Container className="container-carrinho">
                <Row className="col-gap">
                    <Col md={7}>
                        {/* row com cada card de produto */}
                        <Row className="card-carrinho row align-items-center">
                            <Col className="col-align-items-center" sm={2} xs={12}>
                            <img
                                src="https://amarecuidar.s3.sa-east-1.amazonaws.com/hair_care/condicionador-kerastase.jpg"
                                className="img-cart"
                                alt="#"
                            />
                            </Col>
                            <Col className="col-align-items-center"  sm={2}  xs={12}>
                                <span className="subtitulo-itens">Produto</span>
                                <span>Creme Elixir</span>
                            </Col>
                            <Col className="col-align-items-center">
                                <span className="subtitulo-itens">Valor</span>
                                <span>R$ 159,00</span> 
                            </Col>
                            <Col className="col-align-items-center"  sm={2}  xs={12}>
                                <span className="subtitulo-itens">Quantidade</span>
                                <Form.Select aria-label="Default select example" style={{width: "60px"}}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Select>
                            </Col>
                            <Col className="col-align-items-center"  sm={2}  xs={12}>
                                <span className="subtitulo-itens">Total</span> 
                                <span>R$ 159,00</span> 
                            </Col>
                            <Col className="col-align-items-center" sm={2}  xs={12}>
                                <ImBin />
                            </Col>
                        </Row>
                    </Col>


                    {/* CARD DO RESUMO E FECHAMENTO DO PEDIDO */}
                    <Col md={4} >
                        <div className="carrinho p-3 mb-5">
                            <h1>Resumo do Pedido</h1>
                            <Table responsive="sm" size="sm">
                                <tbody>
                                  <tr>
                                    <td colSpan="2">Subtotal</td>
                                    <td className="col-align-items-end">R$ 00,00</td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2">Frete fixo</td>
                                    <td className="col-align-items-end">R$ 29,90 </td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2" style={{fontWeight:"bold"}}>Total</td>
                                    <td className="col-align-items-end" style={{fontWeight:"bold"}} >R$ 00,00</td>
                                  </tr>
                                </tbody>
                            </Table>
                            <button className="cart-btn">Fechar Pedido</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Carrinho2;
