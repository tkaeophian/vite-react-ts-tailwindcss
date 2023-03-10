import '@testing-library/jest-dom/extend-expect';

import { queryClient } from '@/lib/react-query';

// general cleanup
afterEach(async () => {
  queryClient.clear();
});
