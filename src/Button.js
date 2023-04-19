import PropTypes from 'prop-types';
import styles from './css/button.module.scss';

function Button({ text }) {
	return <button className={styles.btn}>{text}</button>;
}
// App.js 에서 Button 을 가져올수 있도록 하기 위함이다

Button.prototype = {
	text: PropTypes.string.isRequired,
};
export default Button;
