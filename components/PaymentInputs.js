// import React, { useState } from 'react';
// import { usePaymentInputs } from 'react-payment-inputs';

// export default function PaymentInputs() {
//   const {
//     meta,
//     getCardNumberProps,
//     getExpiryDateProps,
//     getCVCProps,
//   } = usePaymentInputs();

//   //   const [cardNumber, setCardNumber] = useState(0);
//   //   const [expiryDate, setExpiryDate] = useState(0);
//   //   const [cvc, setCvc] = useState(0);

//   //   function handleChangeCardNumber(e) {
//   //     setCardNumber(e.target.value);
//   //     console.log(e.target.value);
//   //   }

//   //   function handleChangeExpiryDate(e) {
//   //     setExpiryDate(e.target.value);
//   //     console.log(e.target.value);
//   //   }

//   //   function handleChangeCVC(e) {
//   //     setCvc(e.target.value);
//   //     console.log(e.target.value);
//   //   }

//   return (
//     <div>
//       <span>
//         <input
//           {...getCardNumberProps()}
//           // value={cardNumber}
//         />
//       </span>
//       <span>
//         <input
//           {...getExpiryDateProps()}
//           // value={expiryDate}
//         />
//       </span>
//       <span>
//         <input {...getCVCProps()} />
//       </span>
//       {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
//     </div>
//   );
// }
