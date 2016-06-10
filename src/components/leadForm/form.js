import { default as React, Component, PropTypes } from 'react'
import { JoifulForm, JoifulInput } from 'joiful-react-forms'
import { default as Joi } from 'joi'
import { Flex, Box } from 'reflexbox'
import { Button } from 'rebass'

// @connect(() => ({}), { submit })

export default class LeadForm extends Component {

  static propTypes = {
    services: PropTypes.array.isRequired,
    status: PropTypes.oneOf([
      'pending',
      'success',
      'failure'
    ]),
    submit: PropTypes.func.isRequired
  };

  handleSubmit(error) {
    if (error) {
      return false
    }

    const { formValues } = this.state

    this.setState({
      submittedValues: formValues
    })

    return this.props.submit(formValues)
  }

  render () {
    return (
      <JoifulForm
        onChange={(e, formValues) =>
          this.setState({ formValues })
        }
        onSubmit={::this.handleSubmit}
        schema={{
          name: Joi.string().required(),
          email: Joi.string().email().required(),
          service: Joi.string().min(3)
        }}
      >
        <Flex
          align='center'
          style={{
            height: 101
          }}
        >
          <Box auto pr={2}>
            <JoifulInput
              hideLabel
              mb={0}
              name='name'
              placeholder='Your Name'
            />
          </Box>
          <Box auto pr={2}>
            <JoifulInput
              hideLabel
              mb={0}
              name='email'
              placeholder='Your Email'
            />
          </Box>
          <Box pr={2}>
            <JoifulInput
              is='select'
              hideLabel
              mb={0}
              name='service'
              options={[
                { children: 'Select Service' },
                ...this.props.services.map(({ title }) =>
                  ({
                    children: title
                  })
                )
              ]}
            />
          </Box>
          <Box auto>
            <Button style={{ width: '100%' }}>
              SUBMIT
            </Button>
          </Box>
        </Flex>
      </JoifulForm>
    )
  }
}
