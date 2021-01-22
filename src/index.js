import pageHome from './pages/pageHome.js';
import { pageInitAnimation } from './pdx/util.js';
import { pageViewportFromQS } from './pdx/util.js';

$(pageHome);

pageInitAnimation();
pageViewportFromQS();
