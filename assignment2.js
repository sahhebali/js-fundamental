/* milestone-4 besic JS assignment */
// ১. [problem-1][ ফাংশন নেম দিতে হবে seerToMon]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে সের। তারপর সেটাকে মন এ কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। //
/*serTomon */

function seerToMon(seer) {

    if (seer >= 0) {

        // Multiply The Mon \\
        mon = seer / 40;

        // Returned Answer \\
        return mon;
    }

    // Error Massage \\
    else {
        return ("Please. Enter The Positive Number.");

    }

}

const monTotal = seerToMon(-4000);
console.log(monTotal);



// ২.[problem-2] [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 
// ১ টি শার্টের দাম – ১০০ টাকা
// ১ টি পেন্টের দাম – ২০০ টাকা 
// ১ টি জুতার দাম – ৫০০ টাকা 
// এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি হয় তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে। 

function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {

    // posetive hole eror massege show hobe na\\
    if (shirtQuantity >= 0 && pantQuantity >= 0 && shoesQuantity >= 0) {

        /******Sales Items Price******/
        const shirtPrice = 100;
        const pantPrice = 200;
        const shoesPrice = 500;

        /**** Sales Multiply Quantity ****/
        const shirtPriceQuantity = shirtQuantity * shirtPrice;
        const pantPriceQuantity = pantQuantity * pantPrice;
        const shoesPriceQuantity = shoesQuantity * shoesPrice;

        /***Add Total Sales Items*****/
        let salesTotalItem = shirtPriceQuantity + pantPriceQuantity + shoesPriceQuantity;

        // Returned Answer \\
        return salesTotalItem;
    }

    // Nagative Eror \\
    else {
        return ("All Numbers Must Be Positive. Please Chainge The Numbers.");
    }
}

const salesQuantity = totalSales(1, 5, 50);
console.log(salesQuantity);




// ৩.[problem-3] [ ফাংশন নেম দিতে হবে deliveryCost]: প্যারামিটার হিসাবে নিবে কয়টা টি-শার্ট ডেলিভারি করবে। 
// যদি ১০০ বা তার কম টি-শার্ট পাঠাও তাহলে প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে। 
// যদি ১০০ এর বেশি কিন্তু ২০০ এর কম টি শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। 
// যদি ২০০ এর বেশি টি-শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০১ থেকে ২০০ পর্যন্ত যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। এর ২০০ এর বেশি যতগুলা আছে সেগুলার সবগুলা প্রতিটা ৫০ টাকা করে দিতে হবে। 
// এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা ডেলিভার খরচ হবে। 
// আমার ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। /
function deliveryCost(deliverys) {

    // Delivery Charges \\
    const first100ItemDeliveryCharge = 100;
    const second200ItemDeliveryCharge = 80;
    const third201PlusItemDeliveryCharge = 50;

    //NagativePerson Error\\
    if (deliverys <= 0) {

        // Returned Error\\
        return ("Negative Number Did't Support. Please Enter Positive Number.");
    }

    // 100 Or Less \\
    else if (deliverys <= 100) {

        const total100DeliveryCharge = deliverys * first100ItemDeliveryCharge;

        // Returned The Answer \\
        return total100DeliveryCharge;
    }

    // 200 Or Less \\
    else if (deliverys <= 200) {

        const first100Multiply = 100 * first100ItemDeliveryCharge;
        const first100ItemMinus = deliverys - 100;
        const deliveryMultiply = first100ItemMinus * second200ItemDeliveryCharge;
        const totalitemDiscount = first100Multiply + deliveryMultiply;

        // Returned Answer  \\
        return totalitemDiscount;
    }

    // 300 Or More \\
    else {

        const first100Multiply = 100 * first100ItemDeliveryCharge;
        const second200Multiply = 100 * second200ItemDeliveryCharge;
        const second200ItemMinus = deliverys - 200;
        const third201PlusMultiply = second200ItemMinus * third201PlusItemDeliveryCharge;
        const discount = first100Multiply + second200Multiply + third201PlusMultiply;

        // Returned Answer \\
        return discount;
    }
}


const deliveryCharge = deliveryCost(-201);
console.log(deliveryCharge);





// [problem-4][ ফাংশন নেম দিতে হবে perfectFriend]
// All Friends\\
const friends = ['Saheb', 'Amin', 'Hamid', 'Roky', 'Raihan', 'Subel', 'Selim'];

function perfectFriend(friends) {
    /* Error Massage For Nagative Person  */
    if (typeof friends !== "object") {

        // Error Massage \\
        return "Please. Enter Valid Arry";
    }

    // Find First 5 Letter Name \\
    for (const friend of friends) {

        if (friend.length === 5) {

            // Returned Answer \\
            return friend;
        }
    }
}


const only5LetterNames = perfectFriend(friends);
console.log(only5LetterNames);