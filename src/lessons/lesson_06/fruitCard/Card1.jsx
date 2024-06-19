import { v4 } from "uuid";

const Card1 = ({ njam }) => {
  console.log(njam);
  console.log(v4());

  return (
    <div key={v4()} className="card">
      <h2>{njam.name}</h2>
      <p>{njam.country_of_origin}</p>
      
      <p>{njam.description}</p>
      <ol>
        {njam.vitamins.map((vitamins) => (
          <li key={v4()}>{vitamins}</li>
        ))}
      </ol>
      <img src={njam.image} alt="netu" />
    </div>
  );
};
export default Card1;