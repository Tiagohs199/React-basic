import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import { getSummary } from "./dashboardActions";
import Content from "../common/templates/content";
import ContentHeader from "../common/templates/contentHeader";
import ValueBox from "../common/widght/valueBox";
import Row from "../common/layout/row";

class DashBoard extends Component {

    componentWillMount(){
        this.props.getSummary()
    }

    render(){
        
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
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

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)