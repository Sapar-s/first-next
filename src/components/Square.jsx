import sqrStyles from "@/app/sudoku/sudo.module.css";
// import { dec } from "@/app/sudoku/page";

export const Square = (props) => {
  return (
    <div className={sqrStyles.too}>
      <p>{props.value}</p>
    </div>
  );
};

//  onClick={()=>{}}

// {props.map((one) => {
//   return (
// <div className={sqrStyles.too}>
//   <h2>{one}</h2>
// </div>
//   );
// })}
