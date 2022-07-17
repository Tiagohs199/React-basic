import React, {Component} from "react";

import Content from "../common/templates/content";
import ContentHeader from "../common/templates/contentHeader";
import ValueBox from "../common/widght/valueBox";
import Row from "../common/layout/row";
import axios from "axios";

const BASE_URL = 'http://localhost:3003/api'

export default class DashBoard2 extends Component {

    constructor(props){
        super(props)
        this.state = { credit: 0, debt: 0}
    }

    componentWillMount(){
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))

    }

    render(){
        
        const { credit, debt } = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 2.0'/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de creditos'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de debitos'/>
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Valor consolidado'/>
                    </Row>
                    </Content>    
            </div>
        )
    }
}
