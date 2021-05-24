import React from 'react';
// import "./AddT.css";
import axios from "axios"
import { useState } from "react"
import { useContext } from "react"
import { AccountsContext } from "../contexts/accountsContext";
import { Modal, Form, FormGroup, Input, Button } from 'reactstrap';



function AddTransaction({ handleshow }) {
    const [amount, setAmount] = useState("");
    const [text, setText] = useState("");
    const [t_type, setType] = useState("");

    const { addTransaction } = useContext(AccountsContext)
    const handleSubmit = async e => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post("https://expense-ap.herokuapp.com/api/v1/accounts", {
            id: Math.floor(Math.random() * 100000000),
            amount: t_type === "expense" ? -amount : +amount,
            note: text
        }, config)
        if (data) {
            handleshow()
        }
    }

    return (
        <Form className="p-3" onSubmit={handleSubmit}>
            <FormGroup className="m-2">
                <select className="form-control" value={t_type} onChange={e => setType(e.target.value)}>
                    <option value="">select transaction type</option>
                    <option value="expense">expense</option>
                    <option value="income">income</option>
                </select>
            </FormGroup>
            <FormGroup className="m-2">
                <Input type="type" placeholder="enter amount" value={amount} onChange={e => setAmount(e.target.value)} />
            </FormGroup>
            <FormGroup className="m-2">
                <Input type="type" placeholder="enter note" value={text} onChange={e => setText(e.target.value)} />
            </FormGroup>
            <FormGroup className="m-2">
                <Button type="submit">ADD TRANSACTION</Button>
            </FormGroup>
        </Form>
    )
}

export default AddTransaction;

