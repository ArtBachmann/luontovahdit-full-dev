import React from 'react';
import { Button, Divider, Form, Header, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
//import RadioInput from '../../../app/common/form/RadioInput';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import PlaceInput from '../../../app/common/form/PlaceInput';
import SelectInput from '../../../app/common/form/SelectInput';
import RadioInput from '../../../app/common/form/RadioInput';

const interests = [
  { key: 'drinks', text: 'Luonto', value: 'drinks' },
  { key: 'culture', text: 'Kultuuri', value: 'culture' },
  { key: 'film', text: 'Kino', value: 'film' },
  { key: 'food', text: 'Ruoka', value: 'food' },
  { key: 'music', text: 'Musiikki', value: 'music' },
  { key: 'travel', text: 'Matkustaminen', value: 'travel' }
];

const AboutPage = ({ pristine, submitting }) => {
  return (
    <Segment>
      <Header dividing size="large" content="Tietoa Minusta" />
      <p>Täydentää omaa profiilia että ystävät tuntisivat sinua paremmin.</p>
      <Form>
        <Form.Group inline>
          <label>Elämäni tilanne: </label>
          <Field name="status"
            component={RadioInput}
            type="radio"
            value="single"
            label="Yksin" />
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="relationship"
            label="Suhteessa"
          />
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="married"
            label="Avioliittossa"
          />
        </Form.Group>
        <Divider />
        <label>Kirjoita vähän itsestä</label>
        <Field name="about" component={TextArea} placeholder="Minusta" />
        <Field
          name="interests"
          component={SelectInput}
          options={interests}
          value="interests"
          multiple={true}
          placeholder="Mikä sinua kiinnosta"
        />
        <Field
          width={8}
          name="occupation"
          type="text"
          component={TextInput}
          placeholder="Ammatti"
        />
        <Field
          width={8}
          name="origin"
          options={{ types: ['(regions)'] }}
          component={PlaceInput}
          placeholder="Mistä tulet"
        />
        <Divider />
        <Button disabled={pristine || submitting} size="large" positive content="Täydentää profiilia" />
      </Form>
    </Segment>
  );
};

export default reduxForm({ form: 'userProfile', enableReinitialize: true })(AboutPage);
//export default AboutPage