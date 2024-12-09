import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const DynamicPage = () => {
  const { id } = useParams();

  const [searchParams, setParams] = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.append("q", "hello");
    setParams(params);
  }, []);

  return <div>DynamicPage with param: {id}</div>;
};

export default DynamicPage;
