import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input } from 'antd';
import CityPicker from './src/index';

const FormItem = Form.Item;

/**
 * demo
 */
class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };
    }
    setDisabled() {
        this.setState({
            disabled: !this.state.disabled
        });
    }
    addCity(e) {
        const form = this.props.form;
        form.setFieldsValue({
            city: CityPicker.mapCityItem(['上海'])
        });
    }
    addCityCode(e) {
        const form = this.props.form;
        form.setFieldsValue({
            city: CityPicker.mapCityItem([1])
        });
    }
    showCity(e) {
        const form = this.props.form;
        console.log(form.getFieldsValue());
    }

    render() {
        const form = this.props.form;
        const getFieldProps = form.getFieldProps;
        return (
            <div>
                <div>
                    <button onClick={this.setDisabled.bind(this)}>Set Disabled</button>
                    <button onClick={this.addCity.bind(this)}>Add city</button>
                    <button onClick={this.addCityCode.bind(this)}>Add City Code</button>
                    <button onClick={this.showCity.bind(this)}>Show Value</button>
                </div>
                <Form horizontal>
                    <FormItem
                        id="control-input"
                        label="input control"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 14 }}
                        >
                        <Input id="control-input" placeholder="Please enter..." />
                    </FormItem>
                    <FormItem
                        id="control-input"
                        label="input control"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 14 }}
                        >
                        <CityPicker {...getFieldProps('city') } disabled={this.state.disabled} />
                    </FormItem>
                    <FormItem
                        id="control-input"
                        label="input control"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 14 }}
                        >
                        <Input id="control-input" placeholder="Please enter..." />
                    </FormItem>
                </Form>
            </div>
        );
    }
}


Wrapper = Form.create({
    onFieldsChange(props, fields) {
        console.log(fields);
        console.log(fields.city.value);
    }
})(Wrapper);

ReactDOM.render(<Wrapper />, document.getElementById('root'));
