import React, { Component } from 'react';
import { Segment, Form, Header, Divider, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment'
import DateInput from "../../../app/common/form/DateInput";
//import PlaceInput from "../../../app/common/form/PlaceInput";
import TextInput from "../../../app/common/form/TextInput";
import RadioInput from '../../../app/common/form/RadioInput';


class Basics extends Component {

  render() {
    const { pristine, submitting } = this.props;
    return (
      <Segment>
        <Header dividing size='large' content='Yleista' />
        <Form>
          <Field
            width={8}
            name='displayName'
            type='text'
            component={TextInput}
            placeholder='Tunnettu kuin...'
          />
          <Form.Group inline>
            <label>Suku: </label>
            <Field
              name='gender'
              type='radio'
              value='male'
              label='Mies'
              component={RadioInput}
            />
            <Field
              name='gender'
              type='radio'
              value='female'
              label='Nainen'
              component={RadioInput}
            />
          </Form.Group>
          <Field
            width={8}
            name='dateOfBirth'
            component={DateInput}
            placeholder='Syntymäaika'
            dateFormat='YYYY-MM-DD'
            showYearDropdown={true}
            showMonthDropdown={true}
            dropdownMode='select'
            maxDate={moment().subtract(18, 'years')}
          />
          {/* <Field
            name='city'
            placeholder='Kotipaikka'
            options={{ types: ['(cities)'] }}
            label='Female'
            component={PlaceInput}
            width={8}
          /> */}
          <Divider />
          <Button disabled={pristine || submitting} size='large' positive content='Muokka profiilia' />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({ form: 'userProfile' })(Basics);