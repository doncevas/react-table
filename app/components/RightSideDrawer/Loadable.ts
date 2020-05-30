/**
 *
 * Asynchronously loads the component for RightSideDrawer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
