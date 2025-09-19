import React from 'react';

 // ====== Common Head ======= //
 function CommonHead({ CommonHead1Title }) {
    return (
        <>
            <h2 className=" text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold font-poppins text-[#07070C] pl-4 sm:pl-6 md:pl-[23px] pt-6 sm:pt-8 md:pt-[42px] leading-snug">
            {CommonHead1Title}
            </h2>
        </>
    );
 }
 
 export default CommonHead;
