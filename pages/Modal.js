import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {HandleChange} from "../utility";
import PropTypes from 'prop-types';

export const AddModal = props => {
    const {that} = props;
    return (
        <Modal isOpen={that.state.modal} toggle={that.toggle}>
            <ModalHeader toggle={that.toggle}>Modal title</ModalHeader>
            <ModalBody>

                <input type="text" name='input_new' onChange={HandleChange.bind(that)}/>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={that.save}>Save</Button>{' '}
                <Button color="secondary" onClick={that.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

AddModal.propTypes = {
    harchi: PropTypes.number
};