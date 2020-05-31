/**
 *
 * Form
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { useForm, FormContext } from 'react-hook-form';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { FormFieldOptions, FormFieldType } from './form.interface';
import { ErrorTypes } from '../../utils/global.interface';
import RightSideDrawer from 'components/RightSideDrawer';
import Text from './FieldComponents/text';
import Button from '@material-ui/core/Button';
import StyledCheckbox from './FieldComponents/checkbox';
import ColorPickerField from './FieldComponents/colorPicker';

export interface FormProps<T1, T2> {
  fields: T2[];
  isOpen: boolean;
  formTitle: string;
  initData?: T1;
  onSubmitted(data: T1);
  onCloseForm(status: boolean);
}

export const Form = <T1, T2 extends FormFieldOptions>({
  onSubmitted,
  fields,
  isOpen,
  onCloseForm,
  initData,
  formTitle,
}: FormProps<T1, T2>) => {
  const methods = useForm();

  const onSubmit = data => {
    onSubmitted(data);
  };

  const getFieldByType = (
    fieldProps: FormFieldOptions,
    errorType: ErrorTypes,
    initValue?: string | number | boolean,
  ) => {
    switch (fieldProps.options.type) {
      case FormFieldType.TEXT:
        return (
          <Text props={fieldProps} error={errorType} initValue={initValue} />
        );
      case FormFieldType.NUMBER:
        return (
          <Text
            props={fieldProps}
            error={errorType}
            inputType="number"
            initValue={initValue}
          />
        );
      case FormFieldType.CHECKBOX:
        return (
          <StyledCheckbox
            props={fieldProps}
            initValue={typeof initValue === 'boolean' ? initValue : false}
          />
        );
      case FormFieldType.COLOR_PICKER:
        return (
          <ColorPickerField
            props={fieldProps}
            initData={typeof initValue === 'string' ? initValue : ''}
          />
        );
      default:
        return null;
    }
  };

  return (
    <RightSideDrawer
      isOpen={isOpen}
      onClose={onCloseForm}
      formTitle={formTitle}
    >
      <FormContext {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          style={{ textAlign: 'center' }}
        >
          <List>
            {!!fields.length &&
              fields.map((item, index) => (
                <ListItem key={index.toString()}>
                  {getFieldByType(
                    item,
                    methods.errors[item.field]?.type,
                    initData ? initData[item.field] : null,
                  )}
                </ListItem>
              ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ width: '90%' }}
          >
            <FormattedMessage {...messages.submitButtonTitle} />
          </Button>
        </form>
      </FormContext>
    </RightSideDrawer>
  );
};

export default Form;
