// Exercise #2: Promotion Conditions

// Start coding here

let paid = 4001;
let member = "gold";

let lastMonthPaidMoreThan4000 = paid > 4000;
let isWeekday = true;
let hasBoughtProductFromITCategory = true;
let hasAttendedDiscountEvent = true;
let isPlatinum = member == "platinum";

let hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
