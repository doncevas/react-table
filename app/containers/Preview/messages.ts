/*
 * Preview Messages
 *
 * This contains all the text for the Preview container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Preview';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Preview container!',
  },
});
