import React from 'react';
import {Container, Row, Col, Table, Button} from 'reactstrap';
import {AddModal} from "./Modal";

class PhoneNumber extends React.Component{

    state = {
      list: [
          {phone: '0935000003', order: 3},
          {phone: '0935000002', order: 2},
          {phone: '0935000005', order: 5},
          {phone: '0935000001', order: 1},
          {phone: '0935000004', order: 4},
      ],
      modal: false,
      input_new: ''
    };

    toggle = () => this.setState(prevState => ({modal: !prevState.modal}))

    save = () => {
        const {input_new} = this.state;
        this.setState(prevState => {
            prevState.list.push({phone: input_new, order: prevState.list.length + 1});
            return {list: prevState.list, input_new: '',modal: false}
        })
    };

    changeInArray = (index, e) => {
        const {value} = e.target;
        const list = [...this.state.list];
        list[index].order = value;
        this.setState({list});
    };

    sortList = () => {
      const list = [...this.state.list];
      list.sort((current, next) => {
          return current.order - next.order
      });
      this.setState({list})
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Button onClick={this.toggle}>Add</Button>
                    </Col>
                    <Col md={12}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Phone Number</th>
                                    <th>Order</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.list.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.phone}</td>
                                            <td><input type="number" onChange={(e) => this.changeInArray(index, e)} value={item.order}/></td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={12}>
                        <Button onClick={this.sortList}>SORT</Button>
                    </Col>
                </Row>

                <AddModal harchi={12} that={this}/>

            </Container>
        );
    }
}

export default PhoneNumber;