import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IconButton from "../template/iconButton";
import { markAsDone, markAsPeding, markAsDelete} from "./todoActions";


const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)} />

                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPeding(todo)} />

                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.markAsDelete(todo)} />
                </td>
            </tr>
        ))
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPeding, markAsDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)