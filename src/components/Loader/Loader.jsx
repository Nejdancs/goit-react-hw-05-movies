import { createPortal } from 'react-dom';
import { LoaderWraper, One, Three, Two } from './Loader.styled';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <LoaderWraper>
      <One></One>
      <Two></Two>
      <Three></Three>
    </LoaderWraper>,
    loaderRoot
  );
};

export default Loader;
