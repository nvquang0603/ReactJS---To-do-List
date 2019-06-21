import React from 'react';

const DEFAULT_ITEM = {code: "", key: 0};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {...DEFAULT_ITEM}
        }
    }

    static getDerivedStateFromProps(props, preState) {
        let state = {...preState};
        let {item} = props;
        if (item.key !== preState.item.key && preState.item.key === 0) {
            state.item = {...item};
        }

        return state;
    }
    // Arrow function 
    handleChange = (event) => {
        this.setState({item: {...this.state.item, code: event.target.value}});
    };

    handleSubmit() {
        if (this.state.item.key === 0){
            this.props.onAddItem({...this.state.item, key: Date.now()});
        } else {
            this.props.onEditItem(this.state.item);
        }

        this.setState({item: {...DEFAULT_ITEM}});
    }

    render() {
        return (
            <div className={"form"}>
                <label htmlFor="new-todo">
                    What needs to be done?
                </label>
                {/* nếu phát hiện thay đổi nào ở thì cũng set state thành giá trị lấy từ input (element đã kích hoạt event) */}
                <input
                    onChange={this.handleChange}

                    value={this.state.item.code}
                />
                <button className="btn btn-success" onClick={this.handleSubmit.bind(this)}>
                    {this.state.item.key === 0 ? "Add" : "Edit"}
                </button>
            </div>
        );
    }
}

export default Form;