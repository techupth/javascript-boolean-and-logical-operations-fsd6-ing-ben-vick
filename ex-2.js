// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = 4001;
let isWeekday = "Friday";
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion =
  (lastMonthPaidMoreThan4000 > 4000 &&
    isWeekday == "Monday, Tuesday, Wednesday, Thursday, Friday" &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
