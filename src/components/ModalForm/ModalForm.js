// import "./ModalForm.scss";
// import React, { useState } from "react";
// import { useFormik } from "formik";
// import Label from "../../UI/Label/Label";
// import Button from "../../UI/Button/Button";
// import ContextCurrentPage from "../../ContextCurrentPage";
// import validateForms from "../../validateForm";

// const ModalForm = ({ currentRecipe, data, setShowModal, modalRecept }) => {
//   const contextData = React.useContext(ContextCurrentPage);

//   const [ingridients, setIngridients] = useState([]);
//   const [ingridientsInput, setIngridientsInput] = useState("");

//   const initialValues = modalRecept
//     ? {
//         name: "",
//         timeForDone: "",
//         description: "",
//         // ingredients: "",
//         recipe: "",
//         image: "",
//       }
//     : {
//         name: "",
//         description: "",
//         image: "",
//       };

//   const formik = useFormik({
//     initialValues: initialValues,
//     validate: validateForms,
//     onSubmit: (values) => {
//       setShowModal(false);
//       if (modalRecept) {
//         values.ingredients = [...ingridients];
//         contextData.changeData(currentRecipe, values);
//       } else {
//         values.items = [];
//         contextData.adedRecept(values);
//       }
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       {modalRecept ? (
//         <>
//           <label className="modal__label">
//             <span className="modal__label-text">
//               Write ingridients, some items
//             </span>
//             <input
//               className="modal__label-input"
//               value={ingridientsInput}
//               type="text"
//               onChange={(e) => {
//                 setIngridientsInput(e.target.value);
//               }}
//             />
//           </label>
//           <Button
//             onClick={(e) => {
//               e.preventDefault();
//               setIngridientsInput("");
//               setIngridients([...ingridients, ingridientsInput]);
//             }}
//             className="modal-recipe-btn"
//           >
//             Add Ingredients Item
//           </Button>
//         </>
//       ) : null}
//       {data.map((el, index) => (
//         <Label
//           errors={formik.errors[el.name]}
//           key={index}
//           text={el.placeholder}
//           handleChange={formik.handleChange}
//           name={el.name}
//           type={el.type}
//         />
//       ))}
//       <Button className="modal__form-btn" type="submit">
//         Submit
//       </Button>
//     </form>
//   );
// };

// export default ModalForm;
