/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------

// searchbar.jsx is not needed
// products.jsx is not needed
// products folder is not needed
// read app-view.jsx "comment imports" those are not needed
// blog and user folder can be deleted.
// blog.jsx and user.jsx can be deleted.
// most assests can be deleted in public file.

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
