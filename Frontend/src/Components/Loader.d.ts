import { FC } from 'react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

declare const Loader: FC<LoaderProps>;
export default Loader;
