import React from 'react';

class List extends React.Component {
    // nút Edit khi click sẽ gọi hàm này
    // Trả item lại props onEdit
    handleEdit(item) {
        this.props.onEdit(item);
    }

    handleDelete(item) {
        this.props.onDelete(item);
    }

    render() {
        return (
            <div className={"list"}>
                <ul>
                    {this.props.items.map(item => {
                        return <li key={item.key} className={"list-group-item d-flex justify-content-between mb-2"}>
                            {item.code}
                            <div>
                                <button className={"btn btn-warning"} onClick={this.handleEdit.bind(this, item)}>Edit</button>
                                <button className={"btn btn-danger"} onClick={this.handleDelete.bind(this, item.key)}>Delete</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default List;