import "./nfts.scss";
import { IoCard, IoLocationOutline } from "react-icons/io5";
import NftCard from "../../components/NftCard/NftCard";

const Nfts = () => {
  return (
    <div className="nft__page">
      <nav>
        <ul>
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantacy City</li>
          <li>Beach</li>
          <li>Cabins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <div className="location">
          <p>location</p>
          <IoLocationOutline />
        </div>
      </nav>
      <section>
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </section>
    </div>
  );
};

export default Nfts;

// const iterate = () => {
//   let card = 5;
//   for (let i = 0; i < card; i++) {
//     return ;
//   }
// };
