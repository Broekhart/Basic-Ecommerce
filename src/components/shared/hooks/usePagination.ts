import { useEffect, useState } from 'react';

const usePagination = (array: any[], listPerPage: number) => {
  const [actualPage, setActualPage] = useState(1);

  const numberOfPages = Math.ceil(array.length / listPerPage);
  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);

  const indexOfLast = actualPage * listPerPage;
  const indexOfFirst = indexOfLast - listPerPage;

  const indexes = { indexOfFirst, indexOfLast };
  const pageState = { actualPage, pages, setActualPage };

  useEffect(() => {
    setActualPage(1);
  }, [pages.length]);

  return { pageState, indexes };
};

export default usePagination;
