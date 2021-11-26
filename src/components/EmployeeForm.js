import React, { Component } from 'react';
import {Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from '../components/common';

class EmployeeForm extends Component {
    onButtonPress(){
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'Monday' });
    }
    
    render(){
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Adonay"
                        value ={this.props.name}
                        onChangeText={value=>this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={value=>this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>
                <CardSection>
                </CardSection>
                <CardSection style={{flexDirection: 'row'}}>
                    <Text style={styles.pickerText}>Shift</Text>
                    <Picker
                        style={{flex:1, marginLeft: 25}}
                        selectedValue={this.props.shift}
                        onValueChange={value=>this.props.employeeUpdate({prop: 'shift', value})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Monday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    };
}

const styles={
    pickerText:{
        fontSize: 18,
        marginLeft: 20,
        marginTop: 12
    }
}

const mapStateToProps= (state)=>{
    const {name, phone, shift }= state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeCreate
})(EmployeeForm);