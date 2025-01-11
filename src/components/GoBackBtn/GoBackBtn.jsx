import { NavLink } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io'
import css from './GoBackBtn.module.css';

const GoBackBtn = ({ link }) => {
  return (
    <NavLink to={link} className={css.link}>
				<IoMdArrowBack></IoMdArrowBack>
				Go Back
		</NavLink>
  );
};

export default GoBackBtn;
