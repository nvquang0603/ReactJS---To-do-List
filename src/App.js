import React from 'react';
import Form from "./ChildComponent/Form";
import List from "./ChildComponent/List";

class TodoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            // Tạo một this.state.item ban đầu có key bằng 0
            item: {code: "", key: 0}
        }
    }

    onAddItem(item) {
        this.setState({items: [item, ...this.state.items]});
    }
    
    onEditItem(itemInput) {
        let {items} = this.state;
        let newItem = items.map(item => {
            if (itemInput.key === item.key){
                item.code = itemInput.code;
            }
            return item;
        });
        this.setState({item: {code: "", key: 0}, items: newItem});
    }

    // Nhận giá trị vừa được trả về từ handleDelete() trong List.js và set thành giá trị của this.state.item
    onEdit(item) {
        this.setState({
            item,
        });
    }

    onDelete(key) {
        // Lọc tất cả object có key bằng key truyền vào và trả về 1 mảng
        const prevItems = this.state.items
        const items = prevItems.filter((item) => {
            return item.key !== key
        });
        // Update giá trị của this.state.items
        this.setState({
            items
        });
    }

    render() {
        return (
            <div className={"wapper"}>
                <Form
                    item={this.state.item}
                    onAddItem={this.onAddItem.bind(this)}
                    onEditItem={this.onEditItem.bind(this)}
                />
                <List
                    onEdit={this.onEdit.bind(this)}
                    onDelete={this.onDelete.bind(this)}
                    items={this.state.items}
                />
            </div>
        );
    }
}

export default TodoAdd;