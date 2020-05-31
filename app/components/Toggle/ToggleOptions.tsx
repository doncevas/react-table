/**
 *
 * ToggleOption
 *
 */

import * as React from 'react';
import { injectIntl } from 'react-intl';
import { TogglePayload } from './toggle.interface';

const ToggleOption = ({ value, message, intl }: TogglePayload) => (
  <option value={value}>{message ? intl.formatMessage(message) : value}</option>
);

export default injectIntl(ToggleOption);
