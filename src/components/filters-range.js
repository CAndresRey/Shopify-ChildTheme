import { $Q, $Qll } from "../utils/query-selector"
/**
 *
 * we control the price range filter in order to avoid that the minimum
 * value is greater than the highest value and that the highest
 * value is not less than the lowest value
 *
 */
export function rangeFilters() {
  const rangein = $Qll(".range-in input");
  const pricein = $Qll(".price-in input");
  const progress = $Q('.slider-filter .pro');
  let priceGap = 0;
  rangein.forEach(input =>{
    if (pricein[0].value){
      progress.style.left = (pricein[0].value / rangein[0].max) * 100 + "%";
      progress.style.right = 100 - (pricein[1].value / rangein[1].max) * 100 + "%";
    }
      input.addEventListener("input", e =>{
          let minVal = rangein[0].value,
          maxVal = rangein[1].value;
         if(maxVal - minVal < priceGap){
             if(e.target.className === "range-min"){
                  rangein[0].value = maxVal - priceGap;
             }else{
                  rangein[1].value = minVal + priceGap;
             }
         } else{
              pricein[0].value = parseFloat(minVal).toFixed(2);
              pricein[1].value = parseFloat(maxVal).toFixed(2);
              progress.style.left = (minVal / rangein[0].max) * 100 + "%";
              progress.style.right = 100 - (maxVal / rangein[1].max) * 100 + "%";
         }
      });
  });
}
