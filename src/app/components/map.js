import dynamic from "next/dynamic";
const Map = dynamic(() => import('../../components/ui/Map'), {
    ssr: false
  });
  export default Map ;