/**
 *
 * Asynchronously loads the component for TabsPanel
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
